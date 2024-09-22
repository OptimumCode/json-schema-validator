package io.github.optimumcode.json.schema.suite.draft2020_12

import io.github.optimumcode.json.schema.suite.TestFilter
import io.github.optimumcode.json.schema.suite.runTestSuites
import io.kotest.core.spec.style.FunSpec

@Suppress("unused")
internal class TestSuite : FunSpec() {
  init {
    runTestSuites(
      draftName = "draft2020-12",
      formatFilter =
        TestFilter(
          excludeSuites =
            mapOf(
              // Kotlin regex is not ECMA script
              "ecmascript-regex" to setOf(),
            ),
        ),
    )
  }
}