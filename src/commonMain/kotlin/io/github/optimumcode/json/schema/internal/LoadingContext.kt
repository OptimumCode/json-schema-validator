package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get
import kotlinx.serialization.json.JsonElement

internal interface LoadingContext {
  val schemaPath: JsonPointer

  fun at(property: String): LoadingContext
  fun at(index: Int): LoadingContext

  /**
   * Returns [JsonSchemaAssertion] generated from [element] JSON schema.
   * @throws IllegalArgumentException [element] is not a valid schema
   */
  fun schemaFrom(element: JsonElement): JsonSchemaAssertion

  /**
   * Returns `true` if JSON schema can be created from passed [element].
   * Otherwise, returns `false`
   */
  fun isJsonSchema(element: JsonElement): Boolean
}