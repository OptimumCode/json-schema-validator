package smirnov.oleg.json.pointer

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

operator fun JsonPointer.get(index: Int): JsonPointer = JsonPointer(
  buildString {
    val pointer = this@get.toString()
    append(pointer)
    if (!pointer.endsWith(JsonPointer.SEPARATOR)) {
      append(JsonPointer.SEPARATOR)
    }
    append(index)
  }
)

operator fun JsonPointer.div(property: String): JsonPointer = JsonPointer(
  buildString {
    val pointer = this@div.toString()
    append(pointer)
    if (!pointer.endsWith(JsonPointer.SEPARATOR)) {
      append(JsonPointer.SEPARATOR)
    }
    append(property)
  }
)

fun JsonElement.at(pointer: JsonPointer): JsonElement? {
  return when (pointer) {
    is EmptyPointer -> this
    is SegmentPointer -> {
      val next = atPointer(pointer)
      next?.at(pointer.next ?: error("pointer $pointer does not has next segment and is not EmptyPointer"))
    }
  }
}

private fun JsonElement.atPointer(pointer: SegmentPointer): JsonElement? {
  return when (this) {
    is JsonObject -> get(pointer.propertyName)
    is JsonArray -> {
      require(pointer.index >= 0) { "negative index in path $pointer" }
      get(pointer.index)
    }

    is JsonPrimitive -> null
  }
}
