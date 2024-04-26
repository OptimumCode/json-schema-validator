package io.github.optimumcode.json.schema.internal.formats

import de.cketti.codepoints.CodePoints
import de.cketti.codepoints.codePointAt
import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object UriTemplateFormatValidator : AbstractStringFormatValidator() {
  private const val EXPRESSION_START = '{'.code
  private const val EXPRESSION_END = '}'.code
  private const val PCT_ENCODING_START = '%'.code
  private const val EXPLODE_MODIFIER = '*'
  private const val PREFIX_MODIFIER = ':'
  private const val MAX_LENGTH_UPPER_LIMIT = 10_000

  @Suppress("detekt:ReturnCount")
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Valid()
    }
    var index = 0
    var expressionStartIndex = -1
    var inExpression = false
    while (index < value.length) {
      val code = value.codePointAt(index)
      when {
        code == EXPRESSION_START -> {
          if (inExpression) {
            return FormatValidator.Invalid()
          }
          inExpression = true
          expressionStartIndex = index
        }
        code == EXPRESSION_END -> {
          if (!inExpression) {
            return FormatValidator.Invalid()
          }
          inExpression = false
          if (!isValidExpression(value.substring(expressionStartIndex + 1, index))) {
            return FormatValidator.Invalid()
          }
        }
        !inExpression ->
          if (!isValidLiteral(code, value, index)) {
            return FormatValidator.Invalid()
          }
      }
      index += CodePoints.charCount(code)
    }
    return if (inExpression) {
      FormatValidator.Invalid()
    } else {
      FormatValidator.Valid()
    }
  }

  private fun isValidLiteral(
    code: Int,
    value: String,
    index: Int,
  ): Boolean {
    if (isSimpleChar(code)) {
      return true
    }
    if (code == PCT_ENCODING_START && UriSpec.isPctEncoded(index, value)) {
      return true
    }
    return isUcsChar(code) || isIPrivate(code)
  }

  @Suppress("detekt:MagicNumber")
  private fun isSimpleChar(code: Int) =
    code == 0x21 || code in 0x23..0x24 || code in 0x26..0x3B ||
      code == 0x3D || code in 0x3F..0x5B || code == 0x5D || code == 0x5F ||
      code in 0x61..0x7A || code == 0x7E

  private fun isIPrivate(code: Int): Boolean =
    @Suppress("detekt:MagicNumber")
    when (code) {
      in 0xE000..0xF8FF,
      in 0xF0000..0xFFFFD,
      in 0x100000..0x10FFFD,
      -> true
      else -> false
    }

  private fun isUcsChar(code: Int): Boolean =
    @Suppress("detekt:MagicNumber")
    when (code) {
      in 0xA0..0xD7FF,
      in 0xF900..0xFDCF,
      in 0xFDF0..0xFFEF,
      in 0x10000..0x1FFFD,
      in 0x20000..0x2FFFD,
      in 0x30000..0x3FFFD,
      in 0x40000..0x4FFFD,
      in 0x50000..0x5FFFD,
      in 0x60000..0x6FFFD,
      in 0x70000..0x7FFFD,
      in 0x80000..0x8FFFD,
      in 0x90000..0x9FFFD,
      in 0xA0000..0xAFFFD,
      in 0xB0000..0xBFFFD,
      in 0xC0000..0xCFFFD,
      in 0xD0000..0xDFFFD,
      in 0xE1000..0xEFFFD,
      -> true
      else -> false
    }

  private fun isValidExpression(expression: String): Boolean {
    if (expression.isEmpty()) {
      return false
    }
    val varList =
      if (isOperator(expression[0])) {
        expression.substring(1)
      } else {
        expression
      }
    return eachSeparatedPart(varList, separator = ',', ::isValidVarSpec)
  }

  private inline fun eachSeparatedPart(
    value: String,
    separator: Char,
    isValid: (String) -> Boolean,
  ): Boolean {
    var lastSeparator = -1
    do {
      val separatorIndex = value.indexOf(separator, startIndex = lastSeparator + 1)
      val part =
        if (separatorIndex < 0) {
          value.substring(lastSeparator + 1)
        } else {
          value.substring(lastSeparator + 1, separatorIndex)
        }
      if (!isValid(part)) {
        return false
      }
      lastSeparator = separatorIndex
    } while (separatorIndex > 0)
    return true
  }

  private fun isValidVarSpec(varSpec: String): Boolean {
    if (varSpec.isEmpty()) {
      return false
    }

    val prefixModifierIndex = varSpec.indexOf(PREFIX_MODIFIER)
    val varName: String =
      when {
        prefixModifierIndex >= 0 ->
          varSpec.substring(0, prefixModifierIndex)
        varSpec.endsWith(EXPLODE_MODIFIER) ->
          varSpec.substring(0, varSpec.length - 1)
        else ->
          varSpec
      }

    if (varName.isEmpty()) {
      return false
    }

    if (prefixModifierIndex > 0) {
      if (prefixModifierIndex == varSpec.lastIndex || !isValidMaxLength(varSpec.substring(prefixModifierIndex + 1))) {
        return false
      }
    }

    return eachSeparatedPart(varName, separator = '.') { part ->
      UriSpec.hasValidCharsOrPctEncoded(part) {
        UriSpec.isAlpha(it) || UriSpec.isDigit(it) || it == '_'
      }
    }
  }

  private fun isValidMaxLength(maxLength: String): Boolean {
    val maxLengthValue = maxLength.toIntOrNull() ?: return false
    return maxLengthValue in 0..<MAX_LENGTH_UPPER_LIMIT
  }

  private fun isOperator(char: Char): Boolean =
    when (char) {
      // op-level2
      '+', '#',
      // op-level3
      '.', '/', ';', '?', '&',
      // op-reserve
      '=', ',', '!', '@', '|',
      -> true
      else -> false
    }
}