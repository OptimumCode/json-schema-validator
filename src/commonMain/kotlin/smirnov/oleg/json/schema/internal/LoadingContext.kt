package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.div
import smirnov.oleg.json.pointer.get

interface LoadingContext {
  val schemaPath: JsonPointer

  fun at(property: String): LoadingContext
  fun at(index: Int): LoadingContext

  fun schemaFrom(element: JsonElement): JsonSchemaAssertion
}

data class DefaultLoadingContext(
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
  private val schemaSupplier: (JsonElement, LoadingContext) -> JsonSchemaAssertion,
) : LoadingContext {
  override fun at(property: String): LoadingContext {
    return copy(schemaPath = schemaPath / property)
  }

  override fun at(index: Int): LoadingContext {
    return copy(schemaPath = schemaPath[index])
  }

  override fun schemaFrom(element: JsonElement): JsonSchemaAssertion = schemaSupplier(element, this)

}
