package io.github.optimumcode.json.schema.suite.draft2019_09

import io.github.optimumcode.json.schema.SchemaType.DRAFT_2019_09
import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft2019-09",
      schemaType = DRAFT_2019_09,
      excludeSuites =
        mapOf(
          // impl does not support referencing external schemas
          "minContains" to
            setOf(
              // this is very questionable tests - the 'contains' should fail
              // if there is no match to it according to spec
              "minContains = 0 with no maxContains",
            ),
          // current version does not look in non-standard $schema values to gather vocabulary
          "vocabulary" to emptySet(),
        ),
      excludeTests =
        mapOf(
          // this is very questionable tests - the 'contains' should fail if there is no match to it according to spec
          "minContains = 0 with maxContains" to
            setOf(
              "empty data",
            ),
        ),
    )
  }
}