package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object JsonPointerFormatValidator : AbstractStringFormatValidator() {
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Valid()
    }
    if (!value.startsWith(JsonPointer.SEPARATOR)) {
      return FormatValidator.Invalid()
    }
    var escape = false
    for (symbol in value) {
      if (escape && symbol != JsonPointer.QUOTATION_ESCAPE && symbol != JsonPointer.SEPARATOR_ESCAPE) {
        return FormatValidator.Invalid()
      }
      escape = symbol == JsonPointer.QUOTATION
    }
    return if (escape) {
      // escape character '~' in the end of the segment
      FormatValidator.Invalid()
    } else {
      FormatValidator.Valid()
    }
  }
}