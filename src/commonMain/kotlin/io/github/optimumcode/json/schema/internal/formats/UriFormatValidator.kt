package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object UriFormatValidator : AbstractStringFormatValidator() {
  override fun validate(value: String): FormatValidationResult {
    return FormatValidator.Invalid()
  }
}