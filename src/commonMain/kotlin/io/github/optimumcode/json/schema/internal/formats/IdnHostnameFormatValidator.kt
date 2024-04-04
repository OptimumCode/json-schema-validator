package io.github.optimumcode.json.schema.internal.formats

import de.cketti.codepoints.codePointAt
import de.cketti.codepoints.codePointBefore
import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import io.github.optimumcode.json.schema.internal.hostname.Normalizer
import io.github.optimumcode.json.schema.internal.hostname.Punycode
import kotlin.text.CharCategory.COMBINING_SPACING_MARK
import kotlin.text.CharCategory.ENCLOSING_MARK
import kotlin.text.CharCategory.NON_SPACING_MARK

internal object IdnHostnameFormatValidator : AbstractStringFormatValidator() {
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Invalid()
    }
    if (value.length == 1 && isLabelSeparator(value[0])) {
      return FormatValidator.Valid()
    }
    var pointer = 0
    while (pointer < value.length) {
      val dot = findDot(value, pointer)
      val label = value.substring(pointer, dot)
      if (!isValidLabel(label)) {
        return FormatValidator.Invalid()
      }
      pointer = dot + 1
    }
    return FormatValidator.Valid()
  }

  private fun isValidLabel(label: String): Boolean {
    val unicode =
      if (isACE(label)) {
        Punycode.decode(label) ?: return false
      } else {
        label
      }

    if (!Normalizer.isNormalized(unicode)) {
      return false
    }

    // https://datatracker.ietf.org/doc/html/rfc5891#section-4.2.3.1
    if (unicode[0] == '-' || unicode.codePointBefore(unicode.length) == '-'.code) {
      // cannot start or end with hyphen
      return false
    }

    if (unicode.length >= 4 && hasTwoConsecutiveHyphens(unicode)) {
      // cannot have to consecutive hyphens at 3 and 4 char position
      return false
    }

    val firstCodePoint = unicode.codePointAt(0)
    // https://datatracker.ietf.org/doc/html/rfc5891#section-4.2.3.2
    if (isLeadingCombiningMark(firstCodePoint)) {
      return false
    }

    // TODO: check common rules and specific depending on char direction
    // TODO: encode using Punycode and check length

    return true
  }

  private fun isLeadingCombiningMark(codePoint: Int): Boolean =
    // I am not sure if this is correct
    // code point might be converted to the char incorrectly
    // need to have more tests on this
    // TODO: add tests with code points greater than Char.MAX_VALUE
    when (codePoint.toChar().category) {
      NON_SPACING_MARK,
      COMBINING_SPACING_MARK,
      ENCLOSING_MARK,
      -> true

      else -> false
    }

  private fun hasTwoConsecutiveHyphens(value: String): Boolean =
    value.codePointAt(2) == '-'.code && value.codePointAt(3) == '-'.code

  private fun isACE(label: String): Boolean =
    label.length > Punycode.PREFIX_SIZE && label.startsWith(Punycode.PREFIX_STRING)

  private fun isLabelSeparator(c: Char): Boolean = c == '.' || c == '\u3002' || c == '\uFF0E' || c == '\uFF61'

  private fun findDot(
    value: String,
    startIndex: Int,
  ): Int {
    for (i in startIndex until value.length) {
      if (isLabelSeparator(value[i])) {
        return i
      }
    }
    return value.length
  }
}