package io.github.optimumcode.json.schema.assertions.general.format

import io.kotest.core.spec.style.FunSpec

class JsonSchemaUriFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "uri",
      validTestCases =
        listOf(
          "https://example.com:443/",
          "https://example.com:443",
          "https://example.com",
          "https://[v6.fe80::a_(en1)]",
          "ftp:/absolute/schema",
          "https://locahost/%20%4d%2F",
          "https://locahost:",
          "https://locahost:/",
          "https://localhost?",
          "https://localhost#",
          "h://localhost",
          "https://locahost#frag?ment",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty"),
          TestCase("https:///", "empty hostname"),
          TestCase("2http://localhost", "invalid schema"),
          TestCase("https://example.com:44a/", "invalid port"),
          TestCase("https:", "only schema"),
          TestCase("https://example.com?invalid=[", "invalid query"),
          TestCase("https://example.com#invalid[Fragment", "invalid fragment"),
          TestCase("https://te[st@localhost", "invalid username"),
          TestCase("https://%2G@localhost", "invalid pct encoded in userinfo"),
          TestCase("https://%2locahost", "invalid pct encoded in host"),
          TestCase("https://locahost/test%2", "invalid pct encoded in last segment"),
          TestCase("https://locahost/test%2/t", "invalid pct encoded in segment"),
          TestCase("https://[v6.fe80::a_(en1)", "invalid ip feature hostname"),
          TestCase("https://[6.fe80::a_(en1)]", "invalid start for ip feature hostname"),
          TestCase("https://[v6fe80::a_(en1)]", "no dot for ip feature hostname"),
          TestCase("https://[vG.fe80::a_(en1)]", "invalid first part for ip feature hostname"),
          TestCase("https://[v6.fe80::a[(en1)]", "invalid second part for ip feature hostname"),
          TestCase("https://[v.]", "empty parts in ip feature hostname"),
          TestCase("https://[v1.]", "empty first part in ip feature hostname"),
          TestCase("https://[v.a]", "empty second part in ip feature hostname"),
          TestCase("https://[]", "empty ip feature hostname"),
        ),
    )
  }
}