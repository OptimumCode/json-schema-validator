package io.github.optimumcode.json.schema.assertions.general.format

import io.github.optimumcode.json.schema.assertions.general.format.FormatValidationTestSuite.TestCase
import io.kotest.core.spec.style.FunSpec

class JsonSchemaRelativeJsonPointerFormatValidationTest : FunSpec() {
  init {
    FormatValidationTestSuite(
      format = "relative-json-pointer",
      validTestCases =
        listOf(
          "0",
          "1",
          "105",
          "0#",
          "105#",
          "0/test",
          "105/test",
          "0/0",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty RJP is not valid"),
          TestCase("01", "leading zeroes are not allowed"),
          TestCase("0##", "ref is the last character"),
          TestCase("0#/test", "ref and JSON pointer are not allowed"),
          TestCase("/test", "JSON pointer is no valid RJP"),
        ),
    ).run { testFormat() }
  }
}