package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object DateTimeFormatValidator : AbstractStringFormatValidator() {
  private const val DATE_TIME_SEPARATOR = 'T'
  private const val EXPECTED_INDEX = 10

  override fun validate(value: String): FormatValidationResult {
    val separatorIndex = value.indexOf(DATE_TIME_SEPARATOR, ignoreCase = true)
    if (separatorIndex != EXPECTED_INDEX) {
      return FormatValidator.Invalid()
    }
    val date = value.substring(0, separatorIndex)
    val time = value.substring(separatorIndex + 1, value.length)
    if (!DateFormatValidator.validate(date).isValid()) {
      return FormatValidator.Invalid()
    }
    if (!TimeFormatValidator.validate(time).isValid()) {
      return FormatValidator.Invalid()
    }
    return FormatValidator.Valid()
  }
}