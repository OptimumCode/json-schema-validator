package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaRegexFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "regex",
      validTestCases =
        listOf(
          "",
          "(?=test\\s)",
        ),
      invalidTestCases =
        listOf(
          TestCase("(test", "missing brackets"),
        ),
    )
  }
}