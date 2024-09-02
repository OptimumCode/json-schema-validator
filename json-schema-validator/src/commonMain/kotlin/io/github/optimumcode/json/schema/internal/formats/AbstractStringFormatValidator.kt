package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.PrimitiveElement

internal abstract class AbstractStringFormatValidator : FormatValidator {
  override fun validate(element: AbstractElement): FormatValidationResult {
    if (element !is PrimitiveElement || !element.isString) {
      return FormatValidator.Valid()
    }
    return validate(element.content)
  }

  abstract fun validate(value: String): FormatValidationResult
}