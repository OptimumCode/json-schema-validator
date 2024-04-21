package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaUriReferenceFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "uri-reference",
      validTestCases =
        listOf(
          "",
          "/localhost?query=5#fragment",
          "//user@localhost?query=3#fragment",
          "//user@localhost:42/?query=3#fragment",
          "?query=3#fragment",
          "?que/?ry@=(4:2)",
          "#fr@/?gment",
          "noschem@/test%20",
          "te(t",
          "?",
          "#",
        ),
      invalidTestCases =
        listOf(
          TestCase("schema:", "schema"),
          TestCase("?quer[ry", "invalid query"),
          TestCase("#fragme[t", "invalid fragment"),
        ),
    )
  }
}