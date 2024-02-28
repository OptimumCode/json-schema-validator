package io.github.optimumcode.json.schema.assertions.general.format

class JsonSchemaDateTimeFormatValidationTest : AbstractFormatValidationTest(
  format = "date-time",
  validTestCases =
    listOf(
      "2024-02-29T12:42:54",
      "2023-02-28T00:00:00.000000000Z+00:00",
      "2024-01-31t12:31:13.123456789z+00:00",
      "2024-03-30T12:31:42.1",
      "2024-07-31T12:31:42.01",
      "2024-08-31T12:31:42.001",
      "2024-09-30T12:31:42.0001",
      "2024-12-31T12:31:42.00001",
      "2024-12-31T12:31:42.000001",
      "2024-12-31T12:31:42.0000001",
      "2024-12-31T12:31:42.00000001",
      "2024-12-31T12:31:42.000000001",
      "0000-12-25T23:59:59Z+23:59",
    ),
  invalidTestCases =
    listOf(
      TestCase("2024-13-28T12:59:45", "invalid date part"),
      TestCase("2024-12-28T12:61:45", "invalid time part"),
      TestCase("2024-12-28A12:61:45", "invalid delimiter"),
      TestCase("2024-12-28'T'12:61:45", "invalid delimiter location"),
      TestCase("not a date-time", "invalid format"),
    ),
)