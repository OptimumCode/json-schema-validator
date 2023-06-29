package smirnov.oleg.json.schema.internal

import smirnov.oleg.json.pointer.JsonPointer

interface AssertionContext {
  val objectPath: JsonPointer
}

data class DefaultAssertionContext(
  override val objectPath: JsonPointer,
) : AssertionContext