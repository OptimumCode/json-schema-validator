package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object DateFormatValidator : AbstractStringFormatValidator() {
  private const val MAX_MONTHS = 12
  private const val FEB_MONTH = 2
  private const val AUG_MONTH = 8

  private val dateRegex = Regex("(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})")

  override fun validate(value: String): FormatValidationResult {
    val result = dateRegex.matchEntire(value) ?: return FormatValidator.Invalid()
    val year: Int = result.groups["year"]!!.value.toInt()
    val month: Int = result.groups["month"]!!.value.toInt()
    val day: Int = result.groups["day"]!!.value.toInt()
    val leapYear = isLeapYear(year)
    val daysInMonth = daysInMonth(month, leapYear)
    return if (month in 1..MAX_MONTHS && day in 1..daysInMonth) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }

  @Suppress("detekt:MagicNumber")
  private fun isLeapYear(year: Int): Boolean = year % 4 == 0 && (year % 100 != 0 || year % 400 != 0)

  @Suppress("detekt:MagicNumber")
  private fun daysInMonth(
    month: Int,
    leapYear: Boolean,
  ): Int =
    when {
      month == FEB_MONTH -> if (leapYear) 29 else 28
      month < AUG_MONTH -> if (month % 2 == 0) 30 else 31
      month <= MAX_MONTHS -> if (month % 2 == 0) 31 else 30
      else -> -1
    }
}