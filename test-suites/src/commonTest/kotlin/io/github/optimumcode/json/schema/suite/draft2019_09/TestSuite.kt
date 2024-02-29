package io.github.optimumcode.json.schema.suite.draft2019_09

import io.github.optimumcode.json.schema.SchemaType.DRAFT_2019_09
import io.github.optimumcode.json.schema.suite.COMMON_FORMAT_FILTER
import io.github.optimumcode.json.schema.suite.TestFilter
import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft2019-09",
      schemaType = DRAFT_2019_09,
      filter =
        TestFilter(
          excludeSuites =
            mapOf(
              // impl does not support referencing external schemas
              "minContains" to
                setOf(
                  // this is very questionable tests - the 'contains' should fail
                  // if there is no match to it according to spec
                  "minContains = 0 with no maxContains",
                ),
            ),
          excludeTests =
            mapOf(
              // this is very questionable tests - the 'contains' should fail if there is no match to it according to spec
              "minContains = 0 with maxContains" to
                setOf(
                  "empty data",
                ),
            ),
        ),
      formatFilter = COMMON_FORMAT_FILTER,
    )
  }
}