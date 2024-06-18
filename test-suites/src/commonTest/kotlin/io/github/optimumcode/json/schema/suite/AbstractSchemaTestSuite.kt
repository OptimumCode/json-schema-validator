package io.github.optimumcode.json.schema.suite

import com.eygraber.uri.Uri
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.FormatBehavior
import io.github.optimumcode.json.schema.FormatBehavior.ANNOTATION_AND_ASSERTION
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.SchemaOption
import io.github.optimumcode.json.schema.SchemaType
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.mpp.env
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.okio.decodeFromBufferedSource
import okio.FileSystem
import okio.Path
import okio.Path.Companion.toPath
import okio.buffer
import okio.use

internal class TestFilter(
  /**
   * The test suites that should be excluded from the run.
   * The file name is an identifier for a test suites.
   * The test suite description is identifier for single set of tests
   */
  val excludeSuites: Map<String, Set<String>> = emptyMap(),
  /**
   * The tests that should be excluded from a test suite.
   * The **description** property is a test identifier
   */
  val excludeTests: Map<String, Set<String>> = emptyMap(),
)

internal val COMMON_FORMAT_FILTER = TestFilter()

/**
 * This class is a base for creating a test suite run from https://github.com/json-schema-org/JSON-Schema-Test-Suite.
 * That repository contains test-suites for all drafts to verify the validator.
 *
 * The test suites are located in _schema-test-suite/tests/<draft_name>/_
 */
internal fun FunSpec.runTestSuites(
  /**
   * This will be used to pick the directory with test suites
   */
  draftName: String,
  /**
   * Explicit type to use when loading schema
   */
  schemaType: SchemaType? = null,
  /**
   * Filter for main tests
   */
  filter: TestFilter = TestFilter(),
  /**
   * Filter for tests in optional folder.
   * If `null` not tests from that folder will be executed
   */
  optionalFilter: TestFilter? = null,
  /**
   * Filter for tests in format folder.
   * If `null` not tests from that folder will be executed
   */
  formatFilter: TestFilter? = null,
) {
  require(draftName.isNotBlank()) { "draftName is blank" }
  val fs = fileSystem()
  val testSuiteDir =
    when {
      fs.exists(TEST_SUITES_DIR) -> TEST_SUITES_DIR
      fs.exists(TEST_SUITES_DIR_FROM_ROOT) -> TEST_SUITES_DIR_FROM_ROOT
      else -> env(TEST_SUITES_DIR_ENV_VAR)?.toPath()
    }?.resolve(draftName)
      ?: error(
        "neither $TEST_SUITES_DIR or $TEST_SUITES_DIR_FROM_ROOT exist " +
          "(current dir: ${fs.canonicalize(".".toPath())}, env: ${env(TEST_SUITES_DIR_ENV_VAR)})",
      )
  val remoteSchemasDefinitions =
    env(REMOTE_SCHEMAS_JSON_ENV_VAR)?.toPath()
      ?: error("cannot resolve file with remote schemas from $REMOTE_SCHEMAS_JSON_ENV_VAR env variable")

  require(fs.exists(remoteSchemasDefinitions)) { "file $remoteSchemasDefinitions with remote schemas does not exist" }

  val remoteSchemas: Map<Uri, JsonElement> = loadRemoteSchemas(fs, remoteSchemasDefinitions)

  require(fs.exists(testSuiteDir)) { "folder $testSuiteDir does not exist" }

  executeFromDirectory(fs, testSuiteDir, filter.excludeSuites, filter.excludeTests, schemaType, remoteSchemas)

  val optionalTestSuites = testSuiteDir / "optional"
  optionalFilter?.also {
    if (fs.exists(optionalTestSuites)) {
      executeFromDirectory(
        fs,
        optionalTestSuites,
        it.excludeSuites,
        it.excludeTests,
        schemaType,
      )
    }
  }

  val formatTestSuites = optionalTestSuites / "format"
  formatFilter?.also {
    if (fs.exists(formatTestSuites)) {
      executeFromDirectory(
        fs,
        formatTestSuites,
        it.excludeSuites,
        it.excludeTests,
        schemaType,
        formatBehavior = ANNOTATION_AND_ASSERTION,
      )
    }
  }
}

@OptIn(ExperimentalSerializationApi::class)
private fun loadRemoteSchemas(
  fs: FileSystem,
  remoteSchemasDefinitions: Path,
): Map<Uri, JsonElement> =
  fs.openReadOnly(remoteSchemasDefinitions).use { fh ->
    fh.source().use {
      Json.decodeFromBufferedSource(
        MapSerializer(UriSerializer, JsonElement.serializer()),
        it.buffer(),
      )
    }
  }

private object UriSerializer : KSerializer<Uri> {
  override val descriptor: SerialDescriptor
    get() =
      PrimitiveSerialDescriptor(
        "com.eygraber.uri.Uri",
        kind = PrimitiveKind.STRING,
      )

  override fun deserialize(decoder: Decoder): Uri = Uri.parse(decoder.decodeString())

  override fun serialize(
    encoder: Encoder,
    value: Uri,
  ) {
    encoder.encodeString(value.toString())
  }
}

@OptIn(ExperimentalSerializationApi::class)
private fun FunSpec.executeFromDirectory(
  fs: FileSystem,
  testSuiteDir: Path,
  excludeSuites: Map<String, Set<String>>,
  excludeTests: Map<String, Set<String>>,
  schemaType: SchemaType?,
  remoteSchemas: Map<Uri, JsonElement> = emptyMap(),
  formatBehavior: FormatBehavior? = null,
) {
  fs.list(testSuiteDir).forEach { testSuiteFile ->
    if (fs.metadata(testSuiteFile).isDirectory) {
      // skip if not a file
      return@forEach
    }
    val testSuiteID = testSuiteFile.name.substringBeforeLast(".")
    val excludeTestSuitesWithDescription: Set<String>? = excludeSuites[testSuiteID]
    if (excludeTestSuitesWithDescription?.isEmpty() == true) {
      // exclude all test cases
      return@forEach
    }

    val testSuites: List<TestSuite> =
      fs.openReadOnly(testSuiteFile).use { fh ->
        fh.source().use {
          Json.decodeFromBufferedSource(ListSerializer(TestSuite.serializer()), it.buffer())
        }
      }
    val schemaLoader =
      JsonSchemaLoader
        .create()
        .apply {
          formatBehavior?.also {
            withSchemaOption(SchemaOption.FORMAT_BEHAVIOR_OPTION, it)
          }
          SchemaType.entries.forEach(::registerWellKnown)
          for ((uri, schema) in remoteSchemas) {
            if (uri.toString().contains("draft4", ignoreCase = true)) {
              // skip draft4 schemas
              continue
            }
            if (schema is JsonObject &&
              schema["\$schema"]?.jsonPrimitive?.content.let { it != null && SchemaType.find(it) == null }
            ) {
              continue
            }
            try {
              register(schema, uri)
            } catch (ex: Exception) {
              throw IllegalStateException("cannot load schema with uri '$uri'", ex)
            }
          }
        }
    var testSuiteIndex = -1
    for (testSuite in testSuites) {
      testSuiteIndex += 1
      if (excludeTestSuitesWithDescription != null && testSuite.description in excludeTestSuitesWithDescription) {
        continue
      }
      val excludeTestWithDescription: Set<String>? = excludeTests[testSuite.description]
      var testIndex = -1
      for (test in testSuite.tests) {
        testIndex += 1
        if (excludeTestWithDescription != null && test.description in excludeTestWithDescription) {
          continue
        }
        test("$testSuiteID at index $testSuiteIndex test $testIndex") {
          withClue(listOf(testSuite.description, testSuite.schema, test.description, test.data)) {
            val schema: JsonSchema =
              shouldNotThrowAny {
                schemaLoader.fromJsonElement(testSuite.schema, schemaType)
              }
            shouldNotThrowAny {
              schema.validate(test.data, ErrorCollector.EMPTY)
            } shouldBe test.valid
          }
        }
      }
    }
  }
}

@Serializable
private class TestSuite(
  val description: String,
  val schema: JsonElement,
  val tests: List<SchemaTest>,
  val comment: String? = null,
  val specification: JsonArray = EMPTY_JSON_ARRAY,
)

@Serializable
private class SchemaTest(
  val description: String,
  val data: JsonElement,
  val valid: Boolean,
  val comment: String? = null,
)

private val EMPTY_JSON_ARRAY: JsonArray = JsonArray(emptyList())
private val TEST_SUITES_DIR: Path = "schema-test-suite/tests".toPath()
private val TEST_SUITES_DIR_FROM_ROOT: Path = "test-suites".toPath() / TEST_SUITES_DIR
private const val TEST_SUITES_DIR_ENV_VAR: String = "TEST_SUITES_DIR"
private const val REMOTE_SCHEMAS_JSON_ENV_VAR: String = "REMOTES_SCHEMAS_JSON"

expect fun fileSystem(): FileSystem