package io.github.optimumcode.json.schema.assertions.general.format

import io.github.optimumcode.json.schema.assertions.general.format.FormatValidationTestSuite.TestCase
import io.kotest.core.spec.style.FunSpec

class JsonSchemaDateFormatValidationTest : FunSpec() {
  init {
    FormatValidationTestSuite(
      format = "date",
      validTestCases =
        listOf(
          "2024-02-29",
          "2023-02-28",
          "2024-01-31",
          "2024-03-30",
          "2024-07-31",
          "2024-08-31",
          "2024-09-30",
          "2024-12-31",
          "0000-12-25",
          "2023-01-01",
        ),
      invalidTestCases =
        listOf(
          TestCase("2024-13-28", "invalid month"),
          TestCase("2024-00-28", "zero month"),
          TestCase("2024-12-00", "zero day"),
          TestCase("2024-12-85", "invalid day"),
          TestCase("2024-11-31", "invalid day to month"),
          TestCase("2023-02-29", "invalid day for not leap year"),
          TestCase("2023/02/28", "invalid delimiter"),
          TestCase("not a date", "invalid format"),
        ),
    ).run { testFormat() }
  }
}