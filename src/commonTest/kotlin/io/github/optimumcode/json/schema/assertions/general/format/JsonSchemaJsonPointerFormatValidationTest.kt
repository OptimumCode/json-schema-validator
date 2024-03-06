package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaJsonPointerFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "json-pointer",
      validTestCases =
        listOf(
          "",
          "/",
          "/test//a",
          "/test/",
          "/tes~0",
          "/test~1",
        ),
      invalidTestCases =
        listOf(
          TestCase("test", "does not start from separator"),
          TestCase("/test~2", "invalid quotation"),
          TestCase("/test~", "trailing quotation"),
        ),
    )
  }
}