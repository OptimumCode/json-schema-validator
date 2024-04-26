package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaUriTemplateFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "uri-template",
      validTestCases =
        listOf(
          "",
          "https://example.com/{test}",
          "https://example.com/{test:1}",
          "https://test{?query*,number:9999}",
          "https://simple.uri",
          "https://test%20uri.com",
          "https://testname/{first%20name}",
          "https://testname/{first.name}",
          "https://\u00a0\ud7ff\uf900\ufdcf\ufdf0\uffef\uf8ff",
        ),
      invalidTestCases =
        listOf(
          TestCase("https://example.com/{}", "empty expression"),
          TestCase("https://example.com/{,}", "empty expression with var delimiter"),
          TestCase("https://example.com/{test.}", "empty expression with name delimiter"),
          TestCase("https://example.com/}", "end expression without start"),
          TestCase("https://example.com/{t{e}st}", "expression inside expression"),
          TestCase("https://example.com/{test:0}", "leading zero"),
          TestCase("https://example.com/{test:10000}", "out of limit max length"),
          TestCase("https://example.com/{test:-999}", "negative max length"),
          TestCase("https://example.com/{:-999}", "no var before max length"),
          TestCase("https://\udfffexample.com", "invalid literal"),
          TestCase("https://exa%2Gmple.com", "invalid pct encoded literal"),
          TestCase("https://example.com/{te%2Gst}", "invalid pct encoded var name"),
          TestCase("https://example.com/{test:}", "empty max length in the end"),
          TestCase("https://example.com/{test:,another}", "empty max length in the middle"),
        ),
    )
  }
}