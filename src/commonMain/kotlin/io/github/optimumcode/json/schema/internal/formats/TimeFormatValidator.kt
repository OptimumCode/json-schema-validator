package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.internal.FormatValidationResult
import io.github.optimumcode.json.schema.internal.FormatValidator
import kotlin.text.RegexOption.IGNORE_CASE

internal object TimeFormatValidator : AbstractStringFormatValidator() {
  //language=RegExp
  private const val REQUIRED_TIME_PART = "(?<hours>\\d{2}):(?<minutes>\\d{2}):(?<seconds>\\d{2})"

  //language=RegExp
  private const val OFFSET_PART = "(Z[+-](?<offsetHours>\\d{2}):(?<offsetMinutes>\\d{2}))?"
  private val timeRegex = Regex("$REQUIRED_TIME_PART(\\.\\d{1,9})?$OFFSET_PART", IGNORE_CASE)

  override fun validate(value: String): FormatValidationResult {
    val result = timeRegex.matchEntire(value) ?: return FormatValidator.Invalid()
    val hours = result.groups["hours"]!!.value.toInt()
    val minutes = result.groups["minutes"]!!.value.toInt()
    val seconds = result.groups["seconds"]!!.value.toInt()

    val offsetHours = result.groups["offsetHours"]?.value?.toInt() ?: 0
    val offsetMinutes = result.groups["offsetMinutes"]?.value?.toInt() ?: 0

    return if (
      hours in 0..23 &&
      minutes in 0..59 &&
      seconds in 0..59 &&
      offsetHours in 0..23 &&
      offsetMinutes in 0..59
    ) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }
}