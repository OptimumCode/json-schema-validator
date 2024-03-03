package io.github.optimumcode.json.schema.assertions.general.format

import io.github.optimumcode.json.schema.assertions.general.format.FormatValidationTestSuite.TestCase
import io.kotest.core.spec.style.FunSpec

class JsonSchemaTimeFormatValidationTest : FunSpec() {
  init {
    FormatValidationTestSuite(
      format = "time",
      validTestCases =
        listOf(
          "11:42:59Z",
          "00:00:00+02:00",
          "23:59:59z",
          "12:42:45.1-08:00",
          "12:42:45.01Z",
          "12:42:45.001Z",
          "12:42:45.0001Z",
          "12:42:45.00001Z",
          "12:42:45.000001Z",
          "12:42:45.0000001Z",
          "12:42:45.00000001Z",
          "12:42:45.000000001Z",
          "12:42:45+04:00",
          "12:42:45+23:59",
          "12:42:45.000000001+02:42",
        ),
      invalidTestCases =
        listOf(
          TestCase("24:00:00", "invalid hours"),
          TestCase("12:60:00", "invalid minutes"),
          TestCase("12:59:61", "invalid seconds"),
          TestCase("12:59:42.", "no digits in fraction part"),
          TestCase("12:59:42.9999999999", "invalid number of digits in fraction part"),
          TestCase("12:59:42A", "invalid zone identifier"),
          TestCase("12:59:42+24:42", "invalid offset hours"),
          TestCase("12:59:42Z+23:42", "zone and offset together"),
          TestCase("12:59:42+02:60", "invalid offset minutes"),
          TestCase("12h46m59s", "invalid time delimiter"),
          TestCase("not a time", "invalid format"),
        ),
    ).run { testFormat() }
  }
}