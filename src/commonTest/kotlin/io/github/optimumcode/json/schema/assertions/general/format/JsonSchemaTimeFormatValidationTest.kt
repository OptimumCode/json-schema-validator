package io.github.optimumcode.json.schema.assertions.general.format

import io.github.optimumcode.json.schema.assertions.general.format.FormatValidationTestSuite.TestCase
import io.kotest.core.spec.style.FunSpec

class JsonSchemaTimeFormatValidationTest : FunSpec() {
  init {
    FormatValidationTestSuite(
      format = "time",
      validTestCases =
        listOf(
          "11:42:59",
          "00:00:00",
          "23:59:59",
          "12:42:45.1",
          "12:42:45.01",
          "12:42:45.001",
          "12:42:45.0001",
          "12:42:45.00001",
          "12:42:45.000001",
          "12:42:45.0000001",
          "12:42:45.00000001",
          "12:42:45.000000001",
          "12:42:45Z+04:00",
          "12:42:45z+04:00",
          "12:42:45Z+23:59",
          "12:42:45.000000001Z+02:42",
        ),
      invalidTestCases =
        listOf(
          TestCase("24:00:00", "invalid hours"),
          TestCase("12:60:00", "invalid minutes"),
          TestCase("12:59:61", "invalid seconds"),
          TestCase("12:59:42.", "no digits in fraction part"),
          TestCase("12:59:42.9999999999", "invalid number of digits in fraction part"),
          TestCase("12:59:42A+02:42", "invalid offset delimiter"),
          TestCase("12:59:42Z+24:42", "invalid offset hours"),
          TestCase("12:59:42Z+02:60", "invalid offset minutes"),
          TestCase("12h46m59s", "invalid time delimiter"),
          TestCase("not a time", "invalid format"),
        ),
    ).run { testFormat() }
  }
}