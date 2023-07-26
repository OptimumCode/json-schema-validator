package io.github.optimumcode.json.schema.suite

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchema
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
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
  val testSuiteDir = TEST_SUITES_DIR / draftName
  val fs = fileSystem()
  require(fs.exists(testSuiteDir)) { "folder $testSuiteDir does not exist" }

  executeFromDirectory(fs, testSuiteDir, excludeSuites, excludeTests)

  if (includeOptional) {
    val optionalTestSuites = testSuiteDir / "optional"
    if (fs.exists(optionalTestSuites)) {
      executeFromDirectory(fs, optionalTestSuites, excludeSuites, excludeTests)
    }
  }
}

@OptIn(ExperimentalSerializationApi::class)
private fun FunSpec.executeFromDirectory(
  fs: FileSystem,
  testSuiteDir: Path,
  excludeSuites: Map<String, Set<String>>,
  excludeTests: Map<String, Set<String>>,
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

    val testSuites: List<TestSuite> = fs.openReadOnly(testSuiteFile).use {
      Json.decodeFromBufferedSource(ListSerializer(TestSuite.serializer()), it.source().buffer())
    }
    for (testSuite in testSuites) {
      if (excludeTestSuitesWithDescription != null && testSuite.description in excludeTestSuitesWithDescription) {
        continue
      }
      val excludeTestWithDescription: Set<String>? = excludeTests[testSuite.description]
      for (test in testSuite.tests) {
        if (excludeTestWithDescription != null && test.description in excludeTestWithDescription) {
          continue
        }
        test("$testSuiteID > ${testSuite.description} > ${test.description}") {
          withClue(listOf(testSuite.schema, test.description, test.data)) {
            val schema: JsonSchema = shouldNotThrowAny {
              JsonSchema.fromJsonElement(testSuite.schema)
            }
            schema.validate(test.data, ErrorCollector.EMPTY) shouldBe test.valid
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
)

private val TEST_SUITES_DIR: Path = "schema-test-suite/tests".toPath()

expect fun fileSystem(): FileSystem