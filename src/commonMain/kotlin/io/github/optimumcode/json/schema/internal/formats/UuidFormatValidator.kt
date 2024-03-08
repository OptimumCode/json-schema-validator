package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object UuidFormatValidator : AbstractStringFormatValidator() {
  private const val UUID_LENGTH = 36
  private const val HEX = "[0-9a-fA-F]"
  private val UUID_REGEX = Regex("$HEX{8}-$HEX{4}-$HEX{4}-$HEX{4}-$HEX{12}")

  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty() || value.length != UUID_LENGTH) {
      return FormatValidator.Invalid()
    }
    return if (UUID_REGEX.matches(value)) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }
}