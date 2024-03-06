package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaIpV4FormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "ipv4",
      validTestCases =
        listOf(
          "0.0.0.0",
          "127.0.0.1",
          "255.255.255.255",
          "100.100.100.100",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty ip is not valid"),
          TestCase("0.0.0", "too short ip"),
          TestCase("0.0.0.0.1", "too long ip"),
          TestCase("256.256.256.256", "invalid component value"),
          TestCase("087.0.1.35", "invalid leading zero"),
        ),
    )
  }
}