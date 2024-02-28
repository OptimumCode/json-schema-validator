package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.internal.FormatValidationResult
import io.github.optimumcode.json.schema.internal.FormatValidator
import kotlin.text.RegexOption.IGNORE_CASE

internal object DurationFormatValidator : AbstractStringFormatValidator() {
  //language=RegExp
  private const val DURATION_WEEK_PATTERN = "\\d+W"

  //language=RegExp
  private const val DURATION_TIME_PATTERN = "T(\\d+H(\\d+M(\\d+S)?)?|\\d+M(\\d+S)?|\\d+S)"

  //language=RegExp
  private const val DURATION_DATE_PATTERN = "(\\d+Y(\\d+M(\\d+D))?|\\d+M(\\d+D)?|\\d+D)($DURATION_TIME_PATTERN)?"

  private val durationRegex =
    Regex("P($DURATION_DATE_PATTERN|$DURATION_WEEK_PATTERN|$DURATION_TIME_PATTERN)", IGNORE_CASE)

  override fun validate(value: String): FormatValidationResult {
    return if (durationRegex.matches(value)) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }
}