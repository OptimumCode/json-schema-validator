package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object RelativeJsonPointerFormatValidator : AbstractStringFormatValidator() {
  private const val ZERO_CODE: Int = '0'.code
  private const val NINE_CODE: Int = '9'.code
  private const val REF_SYMBOL = '#'

  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Invalid()
    }
    val isFirstZero = value[0].code == ZERO_CODE
    for ((index, symbol) in value.withIndex()) {
      val code = symbol.code
      val isDigit = code in ZERO_CODE..NINE_CODE
      val isRef = symbol == REF_SYMBOL
      if (!isDigit) {
        return when {
          // we must have a digit at the beginning
          index == 0 -> FormatValidator.Invalid()
          isRef && index > 0 ->
            if (index == value.lastIndex) {
              FormatValidator.Valid()
            } else {
              // # must be the last character
              FormatValidator.Invalid()
            }
          else -> JsonPointerFormatValidator.validate(value.substring(index))
        }
      }
      if (code > ZERO_CODE && isFirstZero) {
        // leading zeros are not allowed
        return FormatValidator.Invalid()
      }
    }
    return FormatValidator.Valid()
  }
}