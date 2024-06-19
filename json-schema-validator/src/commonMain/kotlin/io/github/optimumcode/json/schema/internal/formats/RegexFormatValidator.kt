package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

/**
 * [RegexFormatValidator] might not follow [ECMA-262](https://262.ecma-international.org/5.1/#sec-15.10) rules.
 * This will depend on the underlying platform.
 * Maybe one day there will be ECMA-262 regex library for KMM
 */
internal object RegexFormatValidator : AbstractStringFormatValidator() {
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Valid()
    }
    return try {
      Regex(value)
      FormatValidator.Valid()
    } catch (_: Throwable) {
      // throwable is handled because JS exception when regex is compiled does not extend Exception
      FormatValidator.Invalid()
    }
  }
}