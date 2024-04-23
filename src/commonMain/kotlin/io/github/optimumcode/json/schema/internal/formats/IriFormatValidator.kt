package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult

internal object IriFormatValidator : AbstractStringFormatValidator() {
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return UriFormatValidator.validate(value)
    }
    val uri = IriSpec.covertToUri(value)
    return UriFormatValidator.validate(uri)
  }
}