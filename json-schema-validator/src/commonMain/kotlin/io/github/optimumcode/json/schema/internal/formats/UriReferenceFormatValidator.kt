package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import io.github.optimumcode.json.schema.internal.formats.UriSpec.FRAGMENT_DELIMITER
import io.github.optimumcode.json.schema.internal.formats.UriSpec.QUERY_DELIMITER

internal object UriReferenceFormatValidator : AbstractStringFormatValidator() {
  @Suppress("detekt:ReturnCount")
  override fun validate(value: String): FormatValidationResult {
    if (UriFormatValidator.validate(value).isValid()) {
      return FormatValidator.Valid()
    }

    val fragmentDelimiterIndex = value.indexOf(FRAGMENT_DELIMITER)
    val queryDelimiterIndex =
      value.indexOf(QUERY_DELIMITER)
        .takeUnless { fragmentDelimiterIndex in 0..<it }
        ?: -1
    val relativePart =
      when {
        queryDelimiterIndex >= 0 ->
          value.substring(0, queryDelimiterIndex)
        fragmentDelimiterIndex >= 0 ->
          value.substring(0, fragmentDelimiterIndex)
        else -> value
      }
    if (!UriSpec.isValidRelativePart(relativePart)) {
      return FormatValidator.Invalid()
    }

    if (queryDelimiterIndex >= 0 && queryDelimiterIndex < value.lastIndex) {
      val query =
        if (fragmentDelimiterIndex > 0) {
          value.substring(queryDelimiterIndex + 1, fragmentDelimiterIndex)
        } else {
          value.substring(queryDelimiterIndex + 1)
        }
      if (!UriSpec.isValidQuery(query)) {
        return FormatValidator.Invalid()
      }
    }

    if (fragmentDelimiterIndex >= 0 && fragmentDelimiterIndex < value.lastIndex) {
      val fragment = value.substring(fragmentDelimiterIndex + 1)
      if (!UriSpec.isValidFragment(fragment)) {
        return FormatValidator.Invalid()
      }
    }

    return FormatValidator.Valid()
  }
}