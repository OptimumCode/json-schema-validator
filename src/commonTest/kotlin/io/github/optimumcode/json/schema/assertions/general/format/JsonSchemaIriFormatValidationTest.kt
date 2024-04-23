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
          "https://exceed\u0080maxbyte",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty"),
          TestCase("нет-схемы", "missing schema"),
          TestCase("https://\u0000zero", "zero byte is not pct encoded and invalid"),
          TestCase("https://\u007f127", "127 byte is not pct encoded and invalid"),
        ),
    )
  }
}