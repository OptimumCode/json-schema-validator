@file:Suppress("ktlint:standard:filename")
@file:JvmName("JsonPointerExtensions")

package com.github.optimumcode.json.pointer

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlin.jvm.JvmName

/**
 * Creates a new [JsonPointer] that points to an [index] in the array.
 *
 * Example:
 * ```kotlin
 * val pointer = JsonPointer("/test")
 * val index = pointer[0] // "/test/0"
 * ```
 */
public operator fun JsonPointer.get(index: Int): JsonPointer =
  JsonPointer(
    buildString {
      val pointer = this@get.toString()
      append(pointer)
      if (!pointer.endsWith(JsonPointer.SEPARATOR)) {
        append(JsonPointer.SEPARATOR)
      }
      append(index)
    },
  )

/**
 * Creates a new [JsonPointer] that points to a [property] passed as a parameter.
 *
 * Example:
 *
 * ```kotlin
 * val pointer = JsonPointer.ROOT / "prop1" / "prop2"  // "/prop1/prop2"
 * ```
 */
public operator fun JsonPointer.div(property: String): JsonPointer =
  JsonPointer(
    buildString {
      val pointer = this@div.toString()
      append(pointer)
      if (!pointer.endsWith(JsonPointer.SEPARATOR)) {
        append(JsonPointer.SEPARATOR)
      }
      append(property)
    },
  )

/**
 * Appends [otherPointer] to the current [JsonPointer].
 * If current or [otherPointer] JSON pointer is an empty JSON pointer. The first not-empty pointer will be returned.
 * (or an empty pointer if both pointers are empty).
 *
 * If both are not-empty pointers the resulting JSON pointer will start from the current one
 * and [otherPointer] appended at the end.
 *
 * Example:
 * ```kotlin
 * val pointer = JsonPointer.ROOT + JsonPointer.ROOT // ""
 *
 * val pointer = JsonPointer.ROOT + JsonPointer("/test") // "/test"
 *
 * val pointer = JsonPointer("/prop") + JsonPointer("/test") // "/prop/test"
 * ```
 */
public operator fun JsonPointer.plus(otherPointer: JsonPointer): JsonPointer {
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
    },
  )
}

/**
 * Returns a [JsonPointer] that is a relative pointer from current pointer to [other] pointer.
 * If current pointer is an empty pointer the [other] pointer will be returned.
 *
 * If the [other] pointer is not starts from the current pointer the [other] pointer will be returned.
 *
 * Example:
 * ```kotlin
 * val pointer = JsonPointer("/test").relative(JsonPointer("/test/0/data") // "/0/data"
 * ```
 *
 * @throws IllegalArgumentException when [other] is an empty pointer
 */
public fun JsonPointer.relative(other: JsonPointer): JsonPointer {
  if (this is EmptyPointer) {
    return other
  }
  require(other !is EmptyPointer) { "empty pointer is not relative to any" }
  val currentValue = this.toString()
  val otherValue = other.toString()
  val relative = otherValue.substringAfter(currentValue)
  return if (relative == otherValue) {
    other
  } else {
    JsonPointer(relative)
  }
}

/**
 * Extracts [JsonElement] from the current JSON element that corresponds to the specified [JsonPointer].
 *
 * If [pointer] path does not exist in the current [JsonElement] the `null` will be returned.
 */
public tailrec fun JsonElement.at(pointer: JsonPointer): JsonElement? {
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