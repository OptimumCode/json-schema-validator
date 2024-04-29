package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaIdnEmailFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "idn-email",
      validTestCases =
        listOf(
          "실례@실례.테스트",
          "\"실a\\~례\"@실례.테스트",
        ),
      invalidTestCases =
        listOf(
          TestCase("실\u007F례@실례.테스트", "invalid codepoint in local part"),
          TestCase("\"실\u007F례\"@실례.테스트", "invalid codepoint in quoted local part"),
        ),
    )
  }
}