package io.github.optimumcode.json.schema.suite

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.SchemaType
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.mpp.env
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.okio.decodeFromBufferedSource
import okio.FileSystem
import okio.Path
import okio.Path.Companion.toPath
import okio.buffer
import okio.use

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
   * Defines whether the optional suites should be included into the run
   */
  includeOptional: Boolean = false,
  /**
   * The test suites that should be excluded from the run.
   * The file name is an identifier for a test suites.
   * The test suite description is identifier for single set of tests
   */
  excludeSuites: Map<String, Set<String>> = emptyMap(),
  /**
   * The tests that should be excluded from a test suite.
   * The **description** property is a test identifier
   */
  excludeTests: Map<String, Set<String>> = emptyMap(),
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

  val remoteSchemas: Map<String, JsonElement> = loadRemoteSchemas(fs, remoteSchemasDefinitions)

  require(fs.exists(testSuiteDir)) { "folder $testSuiteDir does not exist" }

  executeFromDirectory(fs, testSuiteDir, excludeSuites, excludeTests, schemaType, remoteSchemas)

  if (includeOptional) {
    val optionalTestSuites = testSuiteDir / "optional"
    if (fs.exists(optionalTestSuites)) {
      executeFromDirectory(fs, optionalTestSuites, excludeSuites, excludeTests, schemaType)
    }
  }
}

@OptIn(ExperimentalSerializationApi::class)
private fun loadRemoteSchemas(
  fs: FileSystem,
  remoteSchemasDefinitions: Path,
): Map<String, JsonElement> =
  fs.openReadOnly(remoteSchemasDefinitions).use {
    Json.decodeFromBufferedSource(
      MapSerializer(String.serializer(), JsonElement.serializer()),
      it.source().buffer(),
    )
  }

@OptIn(ExperimentalSerializationApi::class)
private fun FunSpec.executeFromDirectory(
  fs: FileSystem,
  testSuiteDir: Path,
  excludeSuites: Map<String, Set<String>>,
  excludeTests: Map<String, Set<String>>,
  schemaType: SchemaType?,
  remoteSchemas: Map<String, JsonElement> = emptyMap(),
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
      fs.openReadOnly(testSuiteFile).use {
        Json.decodeFromBufferedSource(ListSerializer(TestSuite.serializer()), it.source().buffer())
      }
    val schemaLoader =
      JsonSchemaLoader.create()
        .apply {
          SchemaType.entries.forEach(::registerWellKnown)
          for ((uri, schema) in remoteSchemas.entries.reversed()) {
            if (uri.contains("draft4", ignoreCase = true)) {
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
)

@Serializable
private class SchemaTest(
  val description: String,
  val data: JsonElement,
  val valid: Boolean,
  val comment: String? = null,
)

private val TEST_SUITES_DIR: Path = "schema-test-suite/tests".toPath()
private val TEST_SUITES_DIR_FROM_ROOT: Path = "test-suites".toPath() / TEST_SUITES_DIR
private const val TEST_SUITES_DIR_ENV_VAR: String = "TEST_SUITES_DIR"
private const val REMOTE_SCHEMAS_JSON_ENV_VAR: String = "REMOTES_SCHEMAS_JSON"

expect fun fileSystem(): FileSystem