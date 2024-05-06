package io.github.optimumcode.json.schema.internal.formats

import de.cketti.codepoints.CodePoints
import de.cketti.codepoints.codePointAt
import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object RegexFormatValidator : AbstractStringFormatValidator() {
  private const val OPENING_CURLY_BRACKET = '{'.code
  private const val CLOSING_CURLY_BRACKET = '}'.code
  private const val OPENING_SQUARE_BRACKET = '['.code
  private const val CLOSING_SQUARE_BRACKET = ']'.code
  private const val OPENING_BRACKET = '('.code
  private const val CLOSING_BRACKET = ')'.code
  private const val ESCAPE = '\''.code

  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Valid()
    }
    return if (isValidEcma262Regex(value)) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }

  private fun isValidEcma262Regex(value: String): Boolean {
    val brackets = ArrayDeque<Int>()
    var escaped = false
    var index = 0
    while (index < value.length) {
      val codePoint = value.codePointAt(index)
      index += CodePoints.charCount(codePoint)

      if (!escaped) {
        // check brackets
        when (codePoint) {
          OPENING_CURLY_BRACKET,
          OPENING_SQUARE_BRACKET,
          OPENING_BRACKET,
          -> brackets.add(codePoint)

          CLOSING_CURLY_BRACKET,
          CLOSING_SQUARE_BRACKET,
          CLOSING_BRACKET,
          -> {
            val prev = brackets.removeLastOrNull() ?: return false
            if (prev != oppositeBracket(codePoint)) {
              return false
            }
          }
        }
      }

      if (codePoint == ESCAPE) {
        escaped = true
        continue
      }

      val updatedIndex = checkGroupStart(index, value, codePoint, escaped)
      if (updatedIndex > 0) {
        index = updatedIndex
      } else {
        val nextIndex = checkValidPattern(index, value, codePoint, escaped)
        if (nextIndex < 0) {
          // invalid pattern
          return false
        }
        index = nextIndex
      }

      escaped = false
    }
    return brackets.isEmpty() && !escaped
  }

  private fun checkValidPattern(
    index: Int,
    value: String,
    codePoint: Int,
    escaped: Boolean,
  ): Int {
    return if (escaped) {
      when (codePoint) {
        'x'.code -> checkHexEscape(value, index)
        'u'.code -> checkUnicodeEscape(value, index)
        'c'.code -> checkControlLetter(value, index)
        // control escape
        'f'.code, 'n'.code, 'r'.code, 't'.code, 'v'.code -> index
        // character class escape
        'd'.code, 'D'.code, 's'.code, 'S'.code, 'w'.code, 'W'.code -> index
        // assertion
        'b'.code, 'B'.code -> index
        else -> checkDecimalEscape(value, index)
      }
    } else {
      index
    }
  }

  private fun checkDecimalEscape(
    value: String,
    index: Int,
  ): Int {
    if (!Validation.isDigit(value[index])) {
      return -1
    }
    if (value[index] == '0') {
      return if (index + 1 >= value.length || !Validation.isDigit(value[index + 1])) {
        index
      } else {
        -1
      }
    }
    var lastDigitIndex = index
    for (i in index..<value.length) {
      if (!Validation.isDigit(value[i])) {
        break
      }
      lastDigitIndex = i
    }
    return lastDigitIndex
  }

  private fun checkControlLetter(
    value: String,
    index: Int,
  ): Int {
    return if (Validation.isAlpha(value[index])) {
      index
    } else {
      -1
    }
  }

  private fun checkUnicodeEscape(
    value: String,
    index: Int,
  ): Int {
    val lastIndex = index + 3
    if (lastIndex >= value.length) {
      return -1
    }
    for (i in index..lastIndex) {
      if (!Validation.isHexDigit(value[i])) {
        return -1
      }
    }
    return lastIndex
  }

  private fun checkHexEscape(
    value: String,
    index: Int,
  ): Int {
    val lastIndex = index + 1
    if (lastIndex >= value.length) {
      return -1
    }
    return if (Validation.isHexDigit(value[index]) && Validation.isHexDigit(value[lastIndex])) {
      lastIndex
    } else {
      -1
    }
  }

  private fun checkGroupStart(
    nextIndex: Int,
    value: String,
    codePoint: Int,
    escaped: Boolean,
  ): Int {
    return if (!escaped && codePoint == OPENING_BRACKET) {
      if (
        value.regionMatches(nextIndex, "?=", 0, 2) ||
        value.regionMatches(nextIndex, "?!", 0, 2) ||
        value.regionMatches(nextIndex, "?:", 0, 2)
      ) {
        nextIndex + 1
      } else {
        nextIndex
      }
    } else {
      -1
    }
  }

  private fun oppositeBracket(bracket: Int): Int {
    return when (bracket) {
      CLOSING_BRACKET -> OPENING_BRACKET
      CLOSING_CURLY_BRACKET -> OPENING_CURLY_BRACKET
      CLOSING_SQUARE_BRACKET -> OPENING_SQUARE_BRACKET
      else -> error("no pair for bracket with code ${bracket.toString(16)}")
    }
  }
}