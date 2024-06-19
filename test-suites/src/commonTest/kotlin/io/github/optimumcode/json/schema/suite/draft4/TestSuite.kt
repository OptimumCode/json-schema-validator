package io.github.optimumcode.json.schema.suite.draft4

import io.github.optimumcode.json.schema.SchemaType.DRAFT_4
import io.github.optimumcode.json.schema.suite.COMMON_FORMAT_FILTER
import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft4",
      schemaType = DRAFT_4,
      formatFilter = COMMON_FORMAT_FILTER,
    )
  }
}