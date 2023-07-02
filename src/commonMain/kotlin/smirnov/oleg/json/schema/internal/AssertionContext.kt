package smirnov.oleg.json.schema.internal

import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.div
import smirnov.oleg.json.pointer.get

interface AssertionContext {
  val objectPath: JsonPointer

  fun at(index: Int): AssertionContext
  fun at(property: String): AssertionContext
}

data class DefaultAssertionContext(
  override val objectPath: JsonPointer,
) : AssertionContext {
  override fun at(index: Int): AssertionContext = copy(objectPath = objectPath[index])

  override fun at(property: String): AssertionContext {
    return copy(objectPath = objectPath / property)
  }
}