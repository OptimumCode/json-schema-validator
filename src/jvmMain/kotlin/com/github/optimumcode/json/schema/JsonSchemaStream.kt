@file:JvmName("JsonSchemaStream")

package com.github.optimumcode.json.schema

import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.decodeFromStream
import java.io.InputStream

/**
 * Loads JSON schema from provided [input]
 */
@ExperimentalSerializationApi
public fun JsonSchema.Companion.fromStream(input: InputStream): JsonSchema {
  // we do not close the IS. It is caller responsibility
  val schemaElement = Json.decodeFromStream(JsonElement.serializer(), input)
  return fromJsonElement(schemaElement)
}