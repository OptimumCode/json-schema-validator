package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult

internal object IriReferenceFormatValidator : AbstractStringFormatValidator() {
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return UriReferenceFormatValidator.validate(value)
    }
    val uri = IriSpec.covertToUri(value)
    return UriReferenceFormatValidator.validate(uri)
  }
}