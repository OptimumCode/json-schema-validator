package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaUuidFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "uuid",
      validTestCases =
        listOf(
          "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
          "F81D4FAE-7DEC-11D0-A765-00A0C91E6BF6",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty value"),
          TestCase("f81d4fae-7dec-11d0-a765-00a0c91e6bf", "too short"),
          TestCase("f81d4fae-7dec-11d0-a765-00a0c91e6bf64", "too long"),
          TestCase("f81d4fae-7dec-11d0-a7865-00a0c91e6bf64", "wrong block length"),
          TestCase("f81d4fae-7dec-11d0-g765-00a0c91e6bf6", "invalid character"),
        ),
    )
  }
}