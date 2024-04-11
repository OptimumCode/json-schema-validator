package io.github.optimumcode.json.schema.internal.formats

import de.cketti.codepoints.codePointAt
import de.cketti.codepoints.codePointBefore
import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import io.github.optimumcode.json.schema.internal.formats.IdnHostnameFormatValidator.BidiRule.LTR
import io.github.optimumcode.json.schema.internal.formats.IdnHostnameFormatValidator.BidiRule.NONE
import io.github.optimumcode.json.schema.internal.formats.IdnHostnameFormatValidator.BidiRule.RTL
import io.github.optimumcode.json.schema.internal.hostname.Normalizer
import io.github.optimumcode.json.schema.internal.hostname.Punycode
import io.github.optimumcode.json.schema.internal.unicode.CharacterCategory
import io.github.optimumcode.json.schema.internal.unicode.CharacterCategory.ENCLOSING_MARK
import io.github.optimumcode.json.schema.internal.unicode.CharacterCategory.NONSPACING_MARK
import io.github.optimumcode.json.schema.internal.unicode.CharacterCategory.SPACING_MARK
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.ARABIC_LETTER
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.ARABIC_NUMBER
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.BOUNDARY_NEUTRAL
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.COMMON_SEPARATOR
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.EUROPEAN_NUMBER
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.EUROPEAN_SEPARATOR
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.EUROPEAN_TERMINATOR
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.LEFT_TO_RIGHT
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.OTHER_NEUTRAL
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.RIGHT_TO_LEFT
import io.github.optimumcode.json.schema.internal.unicode.DerivedProperties
import io.github.optimumcode.json.schema.internal.util.forEachCodePointIndexed
import kotlin.math.abs
import io.github.optimumcode.json.schema.internal.unicode.CharacterDirectionality.NONSPACING_MARK as NONSPACING_MARK_DIRECTIONALITY

private const val GREEK_LOWER_NUMERAL_SIGN: Int = 0x0375
private const val HEBREW_GERESH: Int = 0x05F3
private const val HEBREW_GERSHAYIM: Int = 0x05F4
private const val KATAKANA_MIDDLE_DOT: Int = 0x30FB
private const val MIDDLE_DOT: Int = 0x00B7
private const val VIRAMA: Int = 0x94D
private const val ZERO_WIDTH_JOINER: Int = 0x200D
private const val ZERO_WIDTH_NON_JOINER: Int = 0x200C

private const val LAST_PROHIBIT_HYPHEN_POSITION = 4
private const val MAX_LABEL_LENGTH = 63

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

  @Suppress("detekt:ReturnCount")
  private fun isValidLabel(label: String): Boolean {
    val unicode =
      if (isACE(label)) {
        if (label.length > MAX_LABEL_LENGTH) {
          return false
        }
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

    if (unicode.length >= LAST_PROHIBIT_HYPHEN_POSITION && hasTwoConsecutiveHyphens(unicode)) {
      // cannot have to consecutive hyphens at 3 and 4 char position
      return false
    }

    val firstCodePoint = unicode.codePointAt(0)
    // https://datatracker.ietf.org/doc/html/rfc5891#section-4.2.3.2
    if (isLeadingCombiningMark(firstCodePoint)) {
      return false
    }

    val bidiRule: BidiRule =
      when (getDirectionality(firstCodePoint)) {
        LEFT_TO_RIGHT,
        -> LTR

        RIGHT_TO_LEFT,
        ARABIC_LETTER,
        -> RTL

        EUROPEAN_NUMBER,
        OTHER_NEUTRAL,
        -> NONE

        else -> return false
      }

    var arabicDigitStatus: Byte = 0
    unicode.forEachCodePointIndexed { index, codePoint ->
      //region Arabic Digits
      val currentArabicDigitStatus: Byte =
        when {
          isArabicIndicDigit(codePoint) -> 1
          isExtendedArabicIndicDigit(codePoint) -> -1
          else -> 0
        }
      if (abs(currentArabicDigitStatus - arabicDigitStatus) > 1) {
        // Mixed arabic indic digits and extended arabic indict digits
        return false
      }
      arabicDigitStatus = currentArabicDigitStatus
      //endregion

      if (failsCodepointRules(codePoint, bidiRule, index, unicode)) {
        return false
      }
    }

    // TODO: encode using Punycode and check length

    return true
  }

  @Suppress("detekt:ReturnCount")
  private fun failsCodepointRules(
    codePoint: Int,
    bidiRule: BidiRule,
    index: Int,
    unicode: String,
  ): Boolean {
    if (disallowedCodePoint(codePoint)) {
      return true
    }

    if (failsBidiRule(codePoint, bidiRule)) {
      return true
    }

    if (failsGreekLowerNumeralSignRule(index, unicode, codePoint)) {
      return true
    }
    if (failsHebrewPunctuationRule(index, unicode, codePoint)) {
      return true
    }
    if (failsMiddleDotRule(index, unicode, codePoint)) {
      return true
    }
    if (failsKatakanaMiddleDotRule(index, unicode, codePoint)) {
      return true
    }
    if (failsZeroWidthJoiner(index, unicode, codePoint)) {
      return true
    }
    // TODO: add ZeroWidthNonJoiner rule
    return false
  }

  private fun disallowedCodePoint(codePoint: Int): Boolean {
    if (isArabicIndicDigit(codePoint) || isExtendedArabicIndicDigit(codePoint)) {
      return false
    }
    return when (codePoint) {
      ZERO_WIDTH_JOINER,
      ZERO_WIDTH_NON_JOINER,
      GREEK_LOWER_NUMERAL_SIGN,
      HEBREW_GERESH,
      HEBREW_GERSHAYIM,
      KATAKANA_MIDDLE_DOT,
      MIDDLE_DOT,
      -> false

      else ->
        DerivedProperties.DISALLOWED.contains(codePoint) ||
          DerivedProperties.UNASSIGNED.contains(codePoint) ||
          DerivedProperties.CONTEXTJ.contains(codePoint) ||
          DerivedProperties.CONTEXTO.contains(codePoint)
    }
  }

  private fun failsBidiRule(
    codePoint: Int,
    bidiRule: BidiRule,
  ): Boolean {
    if (bidiRule == NONE) {
      return false
    }
    return when (val directionality = getDirectionality(codePoint)) {
      EUROPEAN_NUMBER,
      EUROPEAN_SEPARATOR,
      COMMON_SEPARATOR,
      EUROPEAN_TERMINATOR,
      OTHER_NEUTRAL,
      BOUNDARY_NEUTRAL,
      NONSPACING_MARK_DIRECTIONALITY,
      -> false

      else ->
        when (bidiRule) {
          NONE -> false
          LTR ->
            when (directionality) {
              LEFT_TO_RIGHT,
              -> false

              else -> true
            }

          RTL ->
            when (directionality) {
              RIGHT_TO_LEFT,
              ARABIC_LETTER,
              ARABIC_NUMBER,
              -> false

              else -> true
            }
        }
    }
  }

  private fun failsGreekLowerNumeralSignRule(
    index: Int,
    unicode: String,
    codePoint: Int,
  ): Boolean {
    if (codePoint != GREEK_LOWER_NUMERAL_SIGN) {
      return false
    }
    if (index + 1 >= unicode.length) {
      // must be a Greek character after this symbol
      return true
    }
    val followingCodePoint = unicode.codePointAt(index + 1)

    @Suppress("detekt:MagicNumber")
    val isGreek = followingCodePoint.let { it in 0x0370..0x0400 || it in 0x1F00..0x2000 }
    return !isGreek
  }

  private fun failsHebrewPunctuationRule(
    index: Int,
    unicode: String,
    codePoint: Int,
  ): Boolean {
    if (codePoint != HEBREW_GERESH && codePoint != HEBREW_GERSHAYIM) {
      return false
    }
    if (index == 0) {
      // no preceding character
      return true
    }
    val preceding = unicode.codePointBefore(index)
    @Suppress("detekt:MagicNumber")
    return preceding !in 0x0590..0x0600
  }

  private fun failsMiddleDotRule(
    index: Int,
    unicode: String,
    codePoint: Int,
  ): Boolean {
    if (codePoint != MIDDLE_DOT) {
      return false
    }
    if (index == 0 || index + 1 >= unicode.length) {
      // no preceding or following character
      return true
    }
    val preceding = unicode.codePointBefore(index)
    val following = unicode.codePointAt(index + 1)
    @Suppress("detekt:MagicNumber")
    return following != 0x006C || preceding != 0x006C
  }

  private fun failsKatakanaMiddleDotRule(
    index: Int,
    unicode: String,
    codePoint: Int,
  ): Boolean {
    if (codePoint != KATAKANA_MIDDLE_DOT) {
      return false
    }
    if (index + 1 >= unicode.length) {
      // no following character
      return true
    }
    val followingCodePoint = unicode.codePointAt(index + 1)
    @Suppress("detekt:MagicNumber")
    return when (followingCodePoint) {
      in 0x2E80..0x2F00,
      in 0x2F00..0x2FE0,
      in 0x3000..0x3040,
      in 0x3040..0x30A0,
      in 0x30A0..0x3100,
      in 0x3400..0x4DC0,
      in 0x4E00..0xA000,
      in 0xF900..0xFB00,
      in 0x16FE0..0x17000,
      in 0x20000..0x2A6E0,
      in 0x2A700..0x2B740,
      in 0x2B740..0x2B820,
      in 0x2B820..0x2CEB0,
      in 0x2CEB0..0x2EBF0,
      in 0x2F800..0x2FA20,
      in 0x30000..0x31350,
      in 0x31350..0x323B0,
      -> false

      else -> true
    }
  }

  private fun failsZeroWidthJoiner(
    index: Int,
    unicode: String,
    codePoint: Int,
  ): Boolean {
    if (codePoint != ZERO_WIDTH_JOINER) {
      return false
    }
    if (index == 0) {
      // no preceding character
      return true
    }
    val preceding = unicode.codePointBefore(index)
    return preceding != VIRAMA
  }

  private fun isLeadingCombiningMark(codePoint: Int): Boolean =
    when (getCategory(codePoint)) {
      NONSPACING_MARK,
      SPACING_MARK,
      ENCLOSING_MARK,
      -> true

      else -> false
    }

  private fun hasTwoConsecutiveHyphens(value: String): Boolean =
    value.codePointAt(LAST_PROHIBIT_HYPHEN_POSITION - 2) == '-'.code &&
      value.codePointAt(LAST_PROHIBIT_HYPHEN_POSITION - 1) == '-'.code

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

  private fun getCategory(codePoint: Int): CharacterCategory {
    return CharacterCategory.entries.first {
      it.characterData.contains(codePoint)
    }
  }

  private fun getDirectionality(codePoint: Int): CharacterDirectionality {
    return CharacterDirectionality.entries.first {
      it.characterData.contains(codePoint)
    }
  }

  @Suppress("detekt:MagicNumber")
  private fun isArabicIndicDigit(code: Int): Boolean = code in 0x0660..0x0669

  @Suppress("detekt:MagicNumber")
  private fun isExtendedArabicIndicDigit(code: Int): Boolean = code in 0x06F0..0x06F9

  private enum class BidiRule { LTR, RTL, NONE }
}