package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaIriFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "iri",
      validTestCases =
        listOf(
          "https://example.com/test?query#fragment",
          "https://путь.рф",
          "ftp:/абсолютный_путь",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty"),
          TestCase("нет-схемы", "missing schema"),
        ),
    )
  }
}