package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object IpV4FormatValidator : AbstractStringFormatValidator() {
  // 0.0.0.0 the shortest IPv4
  private const val SHORTEST_IP_V4 = 7
  private const val MAX_IP_COMPONENT = 255
  private val groups: Set<String> = setOf("a", "b", "c", "d")
  private val ipRegex = Regex("(?<a>\\d{1,3})\\.(?<b>\\d{1,3})\\.(?<c>\\d{1,3})\\.(?<d>\\d{1,3})")

  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty() || value.length < SHORTEST_IP_V4) {
      return FormatValidator.Invalid()
    }
    val result = ipRegex.matchEntire(value) ?: return FormatValidator.Invalid()
    return if (validate(result)) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }

  private fun validate(result: MatchResult): Boolean {
    for (group in groups) {
      val ipPart = result.groups[group]!!.value
      if (ipPart[0] == '0' && ipPart.length > 1) {
        return false
      }
      if (ipPart.toInt() > MAX_IP_COMPONENT) {
        return false
      }
    }
    return true
  }
}