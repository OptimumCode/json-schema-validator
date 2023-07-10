package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.div
import smirnov.oleg.json.pointer.get

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