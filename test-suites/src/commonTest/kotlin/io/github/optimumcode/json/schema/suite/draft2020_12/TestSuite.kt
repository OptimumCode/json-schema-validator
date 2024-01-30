package io.github.optimumcode.json.schema.suite.draft2020_12

import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft2020-12",
      excludeSuites =
        mapOf(
          "vocabulary" to emptySet(),
        ),
    )
  }
}