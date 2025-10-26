package io.github.optimumcode.json.schema.suite.draft6

import io.github.optimumcode.json.schema.SchemaType.DRAFT_6
import io.github.optimumcode.json.schema.suite.COMMON_FORMAT_FILTER
import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class Draft6TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft6",
      schemaType = DRAFT_6,
      formatFilter = COMMON_FORMAT_FILTER,
    )
  }
}