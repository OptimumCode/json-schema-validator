package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import kotlin.text.RegexOption.IGNORE_CASE

internal object TimeFormatValidator : AbstractStringFormatValidator() {
  //language=RegExp
  private const val REQUIRED_TIME_PART = "(?<hours>\\d{2}):(?<minutes>\\d{2}):(?<seconds>\\d{2})"

  //language=RegExp
  private const val OFFSET_PART = "((Z)|((?<offsetSign>[+-])(?<offsetHours>\\d{2}):(?<offsetMinutes>\\d{2})))"
  private val timeRegex = Regex("$REQUIRED_TIME_PART(\\.\\d{1,9})?$OFFSET_PART", IGNORE_CASE)

  override fun validate(value: String): FormatValidationResult {
    val result = timeRegex.matchEntire(value) ?: return FormatValidator.Invalid()
    val validTimeFormat = isValidFormat(result)

    return if (validTimeFormat) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }

  @Suppress("detekt:MagicNumber")
  private fun isValidFormat(result: MatchResult): Boolean {
    val hours = result.groups["hours"]!!.value.toInt()
    val minutes = result.groups["minutes"]!!.value.toInt()
    val seconds = result.groups["seconds"]!!.value.toInt()

    val offsetSign = result.groups["offsetSign"]?.value?.let { if (it == "+") 1 else -1 } ?: 0
    val offsetHours = result.groups["offsetHours"]?.value?.toInt() ?: 0
    val offsetMinutes = result.groups["offsetMinutes"]?.value?.toInt() ?: 0

    fun normalTime(): Boolean = hours in 0..23 && minutes in 0..59 && seconds in 0..59

    val substituteOffset = offsetSign > 0 && (offsetHours != 0 || offsetMinutes != 0)

    fun leapSecondTime(): Boolean =
      (if (substituteOffset) hours - offsetHours == 0 else hours + offsetHours == 23) &&
        (if (substituteOffset) minutes - offsetMinutes == -1 else minutes + offsetMinutes == 59) &&
        seconds == 60

    val validTime = normalTime() || leapSecondTime()

    val validOffset = offsetHours in 0..23 && offsetMinutes in 0..59
    return validTime && validOffset
  }
}