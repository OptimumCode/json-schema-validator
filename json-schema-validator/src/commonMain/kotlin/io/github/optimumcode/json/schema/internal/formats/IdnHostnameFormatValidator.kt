package io.github.optimumcode.json.schema.internal.formats

import de.cketti.codepoints.codePointAt
import de.cketti.codepoints.codePointBefore
import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import io.github.optimumcode.json.schema.internal.formats.IdnHostnameFormatValidator.BidiLabelType.LTR
import io.github.optimumcode.json.schema.internal.formats.IdnHostnameFormatValidator.BidiLabelType.NONE
import io.github.optimumcode.json.schema.internal.formats.IdnHostnameFormatValidator.BidiLabelType.RTL
import io.github.optimumcode.json.schema.internal.hostname.Punycode
import io.github.optimumcode.json.schema.internal.hostname.isNormalized
import io.github.optimumcode.json.schema.internal.util.forEachCodePointIndexed
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.ARABIC_LETTER
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.ARABIC_NUMBER
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.BOUNDARY_NEUTRAL
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.COMMON_SEPARATOR
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.EUROPEAN_NUMBER
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.EUROPEAN_SEPARATOR
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.EUROPEAN_TERMINATOR
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.LEFT_TO_RIGHT
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.OTHER_NEUTRAL
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.RIGHT_TO_LEFT
import io.github.optimumcode.karacteristics.CodepointCategory.ENCLOSING_MARK
import io.github.optimumcode.karacteristics.CodepointCategory.NONSPACING_MARK
import io.github.optimumcode.karacteristics.CodepointCategory.SPACING_MARK
import io.github.optimumcode.karacteristics.CodepointDerivedProperty
import io.github.optimumcode.karacteristics.CodepointJoiningType
import io.github.optimumcode.karacteristics.bidirectionalClass
import io.github.optimumcode.karacteristics.category
import io.github.optimumcode.karacteristics.contains
import kotlin.math.abs
import io.github.optimumcode.karacteristics.CodepointBidirectionalClass.NONSPACING_MARK as NONSPACING_MARK_DIRECTIONALITY

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
      return FormatValidator.Invalid()
    }

    // https://datatracker.ietf.org/doc/html/rfc5893#section-1.4
    // Bidi rule is applied only to bidi domain names
    var isBidiDomainName = false
    value.forEachLabel {
      it.forEachCodePointIndexed { _, codePoint ->
        isBidiDomainName = isBidiDomainName ||
          when (codePoint.bidirectionalClass) {
            RIGHT_TO_LEFT,
            ARABIC_LETTER,
            ARABIC_NUMBER,
            -> true

            else -> false
          }
      }
    }

    value.forEachLabel {
      if (!isValidLabel(it, isBidiDomainName)) {
        return FormatValidator.Invalid()
      }
    }
    return FormatValidator.Valid()
  }

  private inline fun String.forEachLabel(action: (String) -> Unit) {
    var pointer = 0
    while (pointer < length) {
      val dot = findDot(this, pointer)
      val label = substring(pointer, dot)
      action(label)
      pointer = dot + 1
    }
  }

  /**
   * NOTE: many thanks to authors of
   * [com.networknt:json-schema-validator](https://github.com/networknt/json-schema-validator) library.
   * I used his [com.networknt.schema.utils.RFC5892] class as a reference when implementing these checks
   */
  @Suppress("detekt:ReturnCount")
  private fun isValidLabel(
    label: String,
    isBidiDomainName: Boolean,
  ): Boolean {
    val isAce = isACE(label)
    val unicode =
      if (isAce) {
        // fast check for length
        if (label.length > MAX_LABEL_LENGTH) {
          return false
        }
        Punycode.decode(label) ?: return false
      } else {
        label
      }

    if (!isNormalized(unicode)) {
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

    val bidiLabelType: BidiLabelType =
      if (isBidiDomainName) {
        when (firstCodePoint.bidirectionalClass) {
          LEFT_TO_RIGHT,
          -> LTR

          RIGHT_TO_LEFT,
          ARABIC_LETTER,
          -> RTL

          // Point 1 https://datatracker.ietf.org/doc/html/rfc5893#section-2
          else -> return false
        }
      } else {
        NONE
      }

    if (!matchIdnRules(unicode, bidiLabelType)) {
      return false
    }

    return isAce ||
      Punycode.encode(unicode)?.run { length <= MAX_LABEL_LENGTH } ?: false
  }

  private fun matchIdnRules(
    unicode: String,
    bidiLabelType: BidiLabelType,
  ): Boolean {
    var arabicDigitStatus: Byte = 0
    unicode.forEachCodePointIndexed { index, codePoint ->
      //region Arabic Digits and european numbers
      val currentArabicDigitStatus: Byte =
        when {
          isArabicIndicDigit(codePoint) -> 1
          // Check mixed arabic indic digits
          // https://datatracker.ietf.org/doc/html/rfc5892#appendix-A.9
          // Extended Arabic-Indic digits are in EUROPEAN_NUMBER category
          // but let's keep this check separated to show what rule it checks.
          //
          // Check absents of opposite directionality
          // Point 4 https://datatracker.ietf.org/doc/html/rfc5893#section-2
          isExtendedArabicIndicDigit(codePoint) || codePoint in EUROPEAN_NUMBER -> -1
          else -> 0
        }
      if (abs(currentArabicDigitStatus - arabicDigitStatus) > 1) {
        // Mixed arabic indic digits and extended arabic indict digits
        return false
      }
      arabicDigitStatus = currentArabicDigitStatus
      //endregion

      if (failsCodepointRules(codePoint, bidiLabelType, index, unicode)) {
        return false
      }
    }
    return !failsBidiRuleEnding(bidiLabelType, unicode)
  }

  @Suppress("detekt:ReturnCount")
  private fun failsCodepointRules(
    codePoint: Int,
    bidiLabelType: BidiLabelType,
    index: Int,
    unicode: String,
  ): Boolean {
    if (disallowedCodePoint(codePoint)) {
      return true
    }

    if (failsBidiRule(bidiLabelType, codePoint)) {
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
    if (failsZeroWidthNonJoinerRule(index, unicode, codePoint)) {
      return true
    }
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
        codePoint in CodepointDerivedProperty.DISALLOWED ||
          codePoint in CodepointDerivedProperty.UNASSIGNED ||
          codePoint in CodepointDerivedProperty.CONTEXTJ ||
          codePoint in CodepointDerivedProperty.CONTEXTO
    }
  }

  private fun failsBidiRule(
    bidiLabelType: BidiLabelType,
    codePoint: Int,
  ): Boolean {
    if (bidiLabelType == NONE) {
      return false
    }
    return when (val directionality = codePoint.bidirectionalClass) {
      EUROPEAN_NUMBER,
      EUROPEAN_SEPARATOR,
      COMMON_SEPARATOR,
      EUROPEAN_TERMINATOR,
      OTHER_NEUTRAL,
      BOUNDARY_NEUTRAL,
      NONSPACING_MARK_DIRECTIONALITY,
      -> false

      else ->
        when (bidiLabelType) {
          // Not possible but we need to keep when exhaustive
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

  private fun failsBidiRuleEnding(
    bidiLabelType: BidiLabelType,
    unicode: String,
  ): Boolean {
    if (bidiLabelType == NONE) {
      return false
    }
    var index = unicode.length
    // Zero or more characters with Bidi property NSM are allowed in the end
    while (index > 0 && unicode.codePointBefore(index).bidirectionalClass == NONSPACING_MARK_DIRECTIONALITY) {
      index--
    }
    val lastCodepointDirectionality = unicode.codePointBefore(index).bidirectionalClass
    return when (bidiLabelType) {
      NONE -> false
      RTL ->
        when (lastCodepointDirectionality) {
          RIGHT_TO_LEFT,
          ARABIC_LETTER,
          ARABIC_NUMBER,
          EUROPEAN_NUMBER,
          -> false

          else -> true
        }

      LTR ->
        when (lastCodepointDirectionality) {
          LEFT_TO_RIGHT,
          EUROPEAN_NUMBER,
          -> false

          else -> true
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

  @Suppress("detekt:ReturnCount")
  private fun failsZeroWidthNonJoinerRule(
    index: Int,
    unicode: String,
    codePoint: Int,
  ): Boolean {
    if (codePoint != ZERO_WIDTH_NON_JOINER) {
      return false
    }
    // https://datatracker.ietf.org/doc/html/rfc5892#appendix-A.1
    // If Canonical_Combining_Class(Before(cp)) .eq.  Virama Then True;
    //
    // If RegExpMatch((Joining_Type:{L,D})(Joining_Type:T)*\u200C(Joining_Type:T)*(Joining_Type:{R,D})) Then True;
    if (index == 0) {
      // no preceding characters
      return true
    }
    val preceding = unicode.codePointBefore(index)
    if (preceding == VIRAMA) {
      // matches first part of condition
      return false
    }
    var j = index
    while (0 < j && unicode.codePointBefore(j) in CodepointJoiningType.TRANSPARENT) {
      j -= 1
    }
    if (j == 0) {
      // Must be joining type L or D before last T type
      return true
    }
    val beforeFirstTransparent = unicode.codePointBefore(j)
    if (
      beforeFirstTransparent !in CodepointJoiningType.LEFT_JOINING &&
      beforeFirstTransparent !in CodepointJoiningType.DUAL_JOINING
    ) {
      return true
    }
    j = index + 1
    val len = unicode.length
    if (j == len) {
      // Must have joining type T after
      return true
    }
    while (j < len && unicode.codePointAt(j) in CodepointJoiningType.TRANSPARENT) {
      j += 1
    }
    if (j == len) {
      // Must have joining type R or D after last T type
      return true
    }
    val afterLastTransparent = unicode.codePointAt(j)
    return afterLastTransparent !in CodepointJoiningType.RIGHT_JOINING &&
      afterLastTransparent !in CodepointJoiningType.DUAL_JOINING
  }

  private fun isLeadingCombiningMark(codePoint: Int): Boolean =
    when (codePoint.category) {
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

  /**
   * Returns `true` if the [c] is a dot
   * according to [RFC3490 Section 3.1](https://datatracker.ietf.org/doc/html/rfc3490#section-3.1).
   * Otherwise, returns `false`
   */
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

  @Suppress("detekt:MagicNumber")
  private fun isArabicIndicDigit(code: Int): Boolean = code in 0x0660..0x0669

  @Suppress("detekt:MagicNumber")
  private fun isExtendedArabicIndicDigit(code: Int): Boolean = code in 0x06F0..0x06F9

  private enum class BidiLabelType { LTR, RTL, NONE }
}