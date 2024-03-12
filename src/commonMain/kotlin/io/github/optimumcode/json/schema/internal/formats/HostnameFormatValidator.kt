package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object HostnameFormatValidator : AbstractStringFormatValidator() {
  private const val MAX_LABEL_LENGTH = 63
  private const val DOT = '.'

  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Invalid()
    }
    if (value.startsWith(DOT) || value.endsWith(DOT)) {
      return FormatValidator.Invalid()
    }
    return if (isValid(value)) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }

  @Suppress("detekt:ReturnCount")
  private fun isValid(hostname: String): Boolean {
    val lastIndex = hostname.lastIndex
    var lastDotIndex = -1
    for ((index, symbol) in hostname.withIndex()) {
      val isDot = symbol == DOT
      if (!isDot && !isValidChar(symbol)) {
        return false
      }

      if (isDot) {
        if (index - lastDotIndex <= 1) {
          // to dots together
          return false
        }
      }

      val checkSegment = isDot || index == lastIndex

      if (checkSegment) {
        val segmentEnd = if (isDot) index else index + 1
        val value = hostname.substring(lastDotIndex + 1, segmentEnd)

        if (value.startsWith("-") || value.endsWith("-")) {
          return false
        }

        if (value.length > MAX_LABEL_LENGTH) {
          return false
        }
      }

      if (isDot) {
        lastDotIndex = index
      }
    }

    return true
  }

  private fun isValidChar(c: Char): Boolean {
    return isNumber(c) || isLetter(c) || isDash(c)
  }

  private fun isNumber(c: Char): Boolean {
    return c in '0'..'9'
  }

  private fun isLetter(c: Char): Boolean {
    return (c in 'a'..'z') || (c in 'A'..'Z')
  }

  private fun isDash(c: Char): Boolean {
    return c == '-'
  }
}