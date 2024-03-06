package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaIpV6FormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "ipv6",
      validTestCases =
        listOf(
          "::",
          "::1",
          "1::",
          "ABCD:EF01:2345:6789:ABCD:EF01:2345:6789",
          "abcd:ef01:2345:6789:abcd:ef01:2345:6787",
          "2001:DB8:0:0:8:800:200C:417A",
          "FF01:0:0:0:0:0:0:101",
          "0:0:0:0:0:0:0:0",
          "2001:DB8::8:800:200C:417A",
          "FF01::101",
          "0:0:0:0:0:0:13.1.68.3",
          "::13.1.68.3",
          "::FFFF:129.144.52.38",
          "::0.0.0.0",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty address is not valid"),
          TestCase(":", "single delimiter is not valid"),
          TestCase("ABCD", "single octet"),
          TestCase(":1:2:3:4:5:6:7", "missing start octet"),
          TestCase("0:1:2:3:4:5:6:", "missing end octet"),
          TestCase("0:1:2:3:4:5:6", "incorrect number of octets"),
          TestCase("0:1:2:3:4:5", "octets as it would be ipv6 + ipv4 but not ipv4"),
          TestCase("1:2:3:4:5:6:7:8:9", "too many octets"),
          TestCase("1:2:3:45678:5:6:7", "too long block length"),
          TestCase("12345:2:3:4:5:6:7", "too long first block length"),
          TestCase("1:2:3:4:5:6:7:78901", "too long last block length"),
          TestCase("1:2:3:4.6:5:6:7:8", "dot in the block"),
          TestCase("1:2:3:4/:5:6:7:8", "invalid char before 0"),
          TestCase("1:2:3:4;:5:6:7:8", "invalid char after 9 before"),
          TestCase("1:2:3:4;:5:6:7:8", "invalid char after Z before a"),
          TestCase("1:2:3:4[:5:6:7:8", "invalid char after Z before a"),
          TestCase("1:2:3:4{:5:6:7:8", "invalid char after a"),
          TestCase("1::bd::8", "duplicate compression form"),
          TestCase("1:2:3:4:5:6:75", "number of octets between max and max for ipv4"),
        ),
    )
  }
}