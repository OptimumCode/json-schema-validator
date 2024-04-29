package io.github.optimumcode.json.schema.internal.formats

internal object Validation {
  fun isAlpha(c: Char): Boolean = c in 'a'..'z' || c in 'A'..'Z'

  fun isDigit(c: Char): Boolean = c in '0'..'9'

  inline fun eachSeparatedPart(
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
}