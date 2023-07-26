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
      ),
    )
  }
}