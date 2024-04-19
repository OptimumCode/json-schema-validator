package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaUriFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "uri",
      validTestCases =
        listOf(
          "https://example.com:443/",
          "https://[v6.fe80::a_(en1)]",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty"),
          TestCase("https://example.com:44a/", "invalid port"),
        ),
    )
  }
}