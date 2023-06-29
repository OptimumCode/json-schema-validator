package smirnov.oleg.json.schema.internal

import smirnov.oleg.json.pointer.JsonPointer

interface LoadingContext {
  val schemaPath: JsonPointer
}

data class DefaultLoadingContext(
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
) : LoadingContext
