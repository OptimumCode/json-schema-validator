package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaIriReferenceFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "iri-reference",
      validTestCases =
        listOf(
          "",
          "/localhost?query=5#fragment",
          "/относительный_референс?квери#фрагмент",
        ),
      invalidTestCases =
        listOf(
          TestCase("schema:", "schema"),
          TestCase("?квер[и", "invalid query"),
          TestCase("#фрагме[нт", "invalid fragment"),
        ),
    )
  }
}