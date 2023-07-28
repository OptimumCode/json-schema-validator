package io.github.optimumcode.json.schema.suite.draft7

import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft7",
      excludeSuites = mapOf(
        "refRemote" to emptySet(), // remote refs are not supported
        "definitions" to hashSetOf(
          "validate definition against metaschema", // we don't have support for remote ref (metaschema is a remote ref)
        ),
        "ref" to hashSetOf(
          "remote ref, containing refs itself", // we don't have support for remote ref
        ),
      ),
    )
  }
}