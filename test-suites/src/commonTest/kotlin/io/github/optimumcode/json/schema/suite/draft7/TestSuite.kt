package io.github.optimumcode.json.schema.suite.draft7

import io.github.optimumcode.json.schema.SchemaType.DRAFT_7
import io.github.optimumcode.json.schema.suite.COMMON_FORMAT_FILTER
import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft7",
      schemaType = DRAFT_7,
      formatFilter = COMMON_FORMAT_FILTER,
    )
  }
}