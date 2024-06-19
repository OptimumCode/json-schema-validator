package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import io.github.optimumcode.json.schema.internal.formats.UriSpec.FRAGMENT_DELIMITER
import io.github.optimumcode.json.schema.internal.formats.UriSpec.QUERY_DELIMITER
import io.github.optimumcode.json.schema.internal.formats.UriSpec.SCHEMA_DELIMITER

internal object UriFormatValidator : AbstractStringFormatValidator() {
  @Suppress("detekt:ReturnCount")
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Invalid()
    }

    val schemaEndIndex = value.indexOf(SCHEMA_DELIMITER)
    if (schemaEndIndex < 0 || schemaEndIndex == value.lastIndex) {
      return FormatValidator.Invalid()
    }

    val schema = value.substring(0, schemaEndIndex)
    if (!UriSpec.isValidSchema(schema)) {
      return FormatValidator.Invalid()
    }

    val fragmentDelimiterIndex = value.indexOf(FRAGMENT_DELIMITER)
    val queryDelimiterIndex =
      value.indexOf(QUERY_DELIMITER)
        .takeUnless { fragmentDelimiterIndex in 0..<it }
        ?: -1
    val hierPart =
      when {
        queryDelimiterIndex > 0 ->
          value.substring(schemaEndIndex + 1, queryDelimiterIndex)
        fragmentDelimiterIndex > 0 ->
          value.substring(schemaEndIndex + 1, fragmentDelimiterIndex)
        else ->
          value.substring(schemaEndIndex + 1)
      }
    if (!UriSpec.isValidHierPart(hierPart)) {
      return FormatValidator.Invalid()
    }

    if (queryDelimiterIndex > 0 && queryDelimiterIndex < value.lastIndex) {
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

    if (fragmentDelimiterIndex > 0 && fragmentDelimiterIndex < value.lastIndex) {
      val fragment = value.substring(fragmentDelimiterIndex + 1)
      if (!UriSpec.isValidFragment(fragment)) {
        return FormatValidator.Invalid()
      }
    }

    return FormatValidator.Valid()
  }
}