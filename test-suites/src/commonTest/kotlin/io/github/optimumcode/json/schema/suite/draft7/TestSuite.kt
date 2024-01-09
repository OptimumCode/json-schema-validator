package io.github.optimumcode.json.schema.suite.draft7

import io.github.optimumcode.json.schema.SchemaType.DRAFT_7
import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft7",
      schemaType = DRAFT_7,
      excludeSuites =
        mapOf(
          // remote refs are not supported
          "refRemote" to emptySet(),
          "definitions" to
            // we don't have support for remote ref (metaschema is a remote ref)
            hashSetOf(
              "validate definition against metaschema",
            ),
          "ref" to
            hashSetOf(
              // we don't have support for remote ref
              "remote ref, containing refs itself",
            ),
        ),
    )
  }
}