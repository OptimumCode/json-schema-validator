package io.github.optimumcode.json.schema.assertions.general.format

class JsonSchemaDurationFormatValidationTest : AbstractFormatValidationTest(
  format = "duration",
  validTestCases =
    listOf(
      "PT1S",
      "PT1M",
      "PT1H",
      "PT67S",
      "PT1M10S",
      "PT61M0S",
      "PT2H10M10S",
      "PT42H10M10S",
      "PT42H0M0S",
      "P1D",
      "P1W",
      "P1M",
      "P1Y",
      "P1DT42H10M10S",
      "P1MT42H10M10S",
      "P1YT42H10M10S",
      "P1M1D",
      "P1M1DT42H10M10S",
      "P1Y1M1D",
      "P1Y1M1DT42H10M10S",
      "p1y1m1dt42h10m10s",
    ),
  invalidTestCases =
    listOf(
      TestCase("1S", "invalid time format with seconds"),
      TestCase("PT1H1S", "missing minutes block"),
      TestCase("PT1HM1S", "missing minutes digits"),
      TestCase("P1S", "missing T part of time"),
      TestCase("P1Y1W", "week block with another block"),
      TestCase("P1Y1D", "missing month block"),
      TestCase("P1Y1M1DT1H1S", "missing minutes block in full duration"),
    ),
)