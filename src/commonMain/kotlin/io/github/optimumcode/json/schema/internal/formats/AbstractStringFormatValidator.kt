package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.internal.FormatValidationResult
import io.github.optimumcode.json.schema.internal.FormatValidator
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive

internal abstract class AbstractStringFormatValidator : FormatValidator {
  override fun validate(element: JsonElement): FormatValidationResult {
    if (element !is JsonPrimitive || !element.isString) {
      return FormatValidator.Valid()
    }
    return validate(element.content)
  }

  abstract fun validate(value: String): FormatValidationResult
}