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

operator fun JsonPointer.plus(otherPointer: JsonPointer): JsonPointer {
  if (this is EmptyPointer) {
    return otherPointer
  }
  if (otherPointer is EmptyPointer) {
    return this
  }
  return JsonPointer(
    buildString {
      val pointer = this@plus.toString()
      append(pointer)
      if (pointer.endsWith(JsonPointer.SEPARATOR)) {
        setLength(length - 1)
      }
      val other = otherPointer.toString()
      append(other)
    }
  )
}

fun JsonPointer.relative(other: JsonPointer): JsonPointer {
  if (this is EmptyPointer) {
    return other
  }
  require(other !is EmptyPointer) { "empty pointer is not relative to any" }
  val currentValue = this.toString()
  val otherValue = other.toString()
  return JsonPointer(otherValue.substringAfter(currentValue))
}

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
