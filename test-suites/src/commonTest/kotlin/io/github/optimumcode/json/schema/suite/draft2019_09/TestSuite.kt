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
          // remote refs are not supported
          "refRemote" to emptySet(),
          // impl does not support referencing external schemas
          "anchor" to setOf("invalid anchors"),
          // impl does not support referencing external schemas
          "defs" to setOf("validate definition against metaschema"),
          "id" to
            setOf(
              "Invalid use of fragments in location-independent \$id",
              "Valid use of empty fragments in location-independent \$id",
              "Unnormalized \$ids are allowed but discouraged",
            ),
          // impl does not support referencing external schemas
          "minContains" to
            setOf(
              // this is very questionable tests - the 'contains' should fail
              // if there is no match to it according to spec
              "minContains = 0 with no maxContains",
            ),
          "ref" to
            setOf(
              "remote ref, containing refs itself",
              "URN base URI with f-component",
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