package io.github.optimumcode.json.schema.internal.util

import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

internal fun JsonObject.getString(property: String): String? {
  val element = get(property) ?: return null
  require(element is JsonPrimitive && element.isString) { "$property must be a string" }
  return element.content
}

internal fun JsonObject.getStringRequired(property: String): String =
  requireNotNull(getString(property)) { "$property must be set" }