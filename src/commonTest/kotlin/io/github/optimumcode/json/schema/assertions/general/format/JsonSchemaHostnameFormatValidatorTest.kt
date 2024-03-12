package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaHostnameFormatValidatorTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "hostname",
      validTestCases =
        listOf(
          "www.example.com",
          "xn--4gbwdl.xn--wgbh1c",
          "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijk.com",
          "hostname",
          "host-name",
          "host1name",
          "HOSTNAME",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty value"),
          TestCase(".hostname", "starts with dot"),
          TestCase("hostname.", "ends with dot"),
          TestCase(".hostname.", "starts and ends with dot"),
          TestCase("www.example..com", "two dots together"),
          TestCase("-hostname", "starts with hyphen"),
          TestCase("hostname-", "ends with hyphen"),
          TestCase("-hostname-", "start and ends with hyphen"),
          TestCase("_hostname", "start with underscore"),
          TestCase("hostname_", "ends with underscore"),
          TestCase("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl.com", "too long label"),
          TestCase("host>name", "char before A"),
          TestCase("host]name", "char between Z and a"),
          TestCase("host}name", "char after z"),
        ),
    )
  }
}