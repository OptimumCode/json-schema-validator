package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaEmailFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "email",
      validTestCases =
        listOf(
          "a2!#$%&'*+-/=?^_`{}~|@domain.com",
          "\"\\\"\\ \\@\\!\\#\\[\\]\\~\"@example.com",
          "\" !#[]~a2\"@example.com",
          "test@[127.0.0.1]",
          "test@[IPv6:FF01::101]",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty email"),
          TestCase("@example.com", "empty local part"),
          TestCase("test@", "empty domain part"),
          TestCase("\"\"@example.com", "empty quoted string"),
          TestCase("\"test@example.com", "only start quote"),
          TestCase("test\"@example.com", "only end quote"),
          TestCase("\"test\\\"@example.com", "quoted last quote"),
          TestCase("\"te\\\nst\"@example.com", "invalid quoted character < space"),
          TestCase("\"te\\\u007fst\"@example.com", "invalid quoted character > ~"),
          TestCase("\"te\"st\"@example.com", "invalid character in quoted string"),
          TestCase("test@[127.0.0.300]", "invalid IPv4 in domain part"),
          TestCase("test@[IPv6:1:2:3:4:5:6:7:8:9]", "invalid IPv6 in domain part"),
          TestCase("test@[FF01::101]", "valid IPv6 in domain part without prefix"),
          TestCase("test@hostname.", "valid hostname in domain part"),
          TestCase("te\nst@hostname", "invalid character < space"),
          TestCase("te\u007fst@hostname", "invalid character > ~"),
          TestCase("\"te\nst\"@hostname", "invalid character in quoted local part < space"),
          TestCase("\"te\u007fst\"@hostname", "invalid character in quoted local part > ~"),
        ),
    )
  }
}