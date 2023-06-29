package smirnov.oleg.json.schema.internal

import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.div
import smirnov.oleg.json.pointer.get

interface LoadingContext {
  val schemaPath: JsonPointer

  fun at(property: String): LoadingContext
  fun at(index: Int): LoadingContext
}

data class DefaultLoadingContext(
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
) : LoadingContext {
  override fun at(property: String): LoadingContext {
    return copy(schemaPath = schemaPath / property)
  }

  override fun at(index: Int): LoadingContext {
    return copy(schemaPath = schemaPath[index])
  }

}
