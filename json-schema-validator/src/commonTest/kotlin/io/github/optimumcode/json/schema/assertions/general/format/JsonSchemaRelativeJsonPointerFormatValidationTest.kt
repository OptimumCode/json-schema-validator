package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaRelativeJsonPointerFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
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
          TestCase("/test", "JSON pointer is not a valid RJP"),
          TestCase("test", "invalid Json Pointer"),
        ),
    )
  }
}