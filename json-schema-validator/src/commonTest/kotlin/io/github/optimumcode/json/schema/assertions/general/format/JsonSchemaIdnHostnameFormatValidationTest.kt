package io.github.optimumcode.json.schema.assertions.general.format

import de.cketti.codepoints.CodePoints
import io.kotest.core.spec.style.FunSpec

class JsonSchemaIdnHostnameFormatValidationTest : FunSpec() {
  init {
    formatValidationTestSuite(
      format = "idn-hostname",
      validTestCases =
        listOf(
          "a",
          "hostname",
          // 63
          "xn--80aakdqneodaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaai5g1b9b1qjjyf",
          // 62
          "xn--80aakdqneodaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaai3g0b8b9p5ivf",
          // normalized and valid idn hostname
          "\u4E3D",
          // valid with arabic indic digit
          "\u0628\u0669",
          // valid with extended arabic indic digit
          "\u0628\u06F9",
          // Valid RTL label
          "\u06281\u0300",
          // Valid LTR label
          "\u0628.a1\u0300",
        ),
      invalidTestCases =
        listOf(
          TestCase("", "empty value"),
          TestCase(".", "single separator"),
          TestCase("\u3002", "single separator U+3002"),
          TestCase("\uFF0E", "single separator U+FF0E"),
          TestCase("\uFF61", "single separator U+FF61"),
          TestCase("xn--80aakdqneodaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaai7g2bxc6qoj1f", "too long punycode"),
          TestCase("оооооооооооооооооооооооооооооооооооченьдлиннаястрока", "too long unicode"),
          // Not normalized \u4E3D. Example from https://unicode.org/Public/UNIDATA/NormalizationTest.txt
          TestCase(CodePoints.toChars(0x2F800).joinToString(separator = ""), "not normalized"),
          TestCase("\u0628\u0669\u06F9", "mixed arabic indic digits and extended arabic indict digits"),
          TestCase("\u0660\u06f0", "invalid first character for RTL"),
          TestCase("\u0628\u0061", "invalid characters for RTL label"),
          TestCase("\u0628.\u06F9", "invalid first character for bidi domain names"),
          TestCase("\u0061\u0628", "invalid characters for LTR label"),
          TestCase("\u0628\u002D\u0300", "invalid ending for RTL label"),
          TestCase("\u0628.a\u002D\u0300", "invalid ending for LTR label"),
          TestCase("\u0628\u06695", "mixed arabic numbers and european numbers"),
          TestCase("a\u200C", "zero with non joiner rule does not match"),
        ),
    )
  }
}