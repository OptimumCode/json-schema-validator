package io.github.optimumcode.json.schema.suite.draft2020_12

import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft2020-12",
      excludeSuites = mapOf(
        "refRemote" to emptySet(), // remote refs are not supported
        "anchor" to setOf("invalid anchors"), // impl does not support referencing external schemas
        "defs" to setOf("validate definition against metaschema"), // impl does not support referencing external schemas
        "id" to setOf(
          "Invalid use of fragments in location-independent \$id",
          "Valid use of empty fragments in location-independent \$id",
          "Unnormalized \$ids are allowed but discouraged",
        ), // impl does not support referencing external schemas
        "ref" to setOf(
          "remote ref, containing refs itself",
          "URN base URI with f-component",
        ),
        "vocabulary" to emptySet(), // current version does not look in non-standard $schema values to gather vocabulary
      ),
    )
  }
}