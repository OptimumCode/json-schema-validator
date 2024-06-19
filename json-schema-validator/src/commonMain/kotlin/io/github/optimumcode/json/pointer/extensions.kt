@file:Suppress("ktlint:standard:filename")
@file:JvmName("JsonPointerExtensions")

package io.github.optimumcode.json.pointer

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
public operator fun JsonPointer.get(index: Int): JsonPointer = atIndex(index)

/**
 * Creates a new [JsonPointer] that points to a [property] passed as a parameter.
 *
 * Example:
 *
 * ```kotlin
 * val pointer = JsonPointer.ROOT / "prop1" / "prop2"  // "/prop1/prop2"
 * ```
 */
public operator fun JsonPointer.div(property: String): JsonPointer = atProperty(property)

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
  return this.insertLast(otherPointer as SegmentPointer)
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
  if (this !is SegmentPointer) {
    return other
  }
  require(other is SegmentPointer) { "empty pointer is not relative to any" }
  var currentValue: JsonPointer = this
  var otherValue: JsonPointer = other
  while (currentValue is SegmentPointer && otherValue is SegmentPointer) {
    if (currentValue.propertyName != otherValue.propertyName) {
      return other
    }
    currentValue = currentValue.next
    otherValue = otherValue.next
  }
  return if (currentValue is EmptyPointer) {
    otherValue
  } else {
    other
  }
}

/**
 * Checks whether the current [JsonPointer] starts with [other].
 * Returns `true` if it is so, otherwise returns `false`.
 *
 * **Every [JsonPointer] starts with [JsonPointer.ROOT].**
 *
 * **[JsonPointer.ROOT] starts only with [JsonPointer.ROOT].**
 *
 * Example:
 * ```kotlin
 * JsonPointer.ROOT.startsWith(JsonPointer("/path")) // false
 * JsonPointer.ROOT.startsWith(JsonPointer.ROOT) // true
 * JsonPointer("/path").startsWith(JsonPointer.ROOT) // true
 * JsonPointer("/path/to/node").startsWith(JsonPointer("/path")) // true
 * ```
 */
public fun JsonPointer.startsWith(other: JsonPointer): Boolean {
  var primary: JsonPointer? = this
  var secondary: JsonPointer? = other
  while (primary != null && secondary != null) {
    if (secondary is EmptyPointer) {
      // secondary has finished. Means primary starts with secondary
      return true
    }
    if (primary is EmptyPointer) {
      // primary has finished but secondary is not
      // means primary does not start with secondary
      return false
    }
    primary as SegmentPointer
    secondary as SegmentPointer
    if (primary.propertyName != secondary.propertyName) {
      return false
    }
    primary = primary.next
    secondary = secondary.next
  }
  return secondary == null
}

/**
 * Checks whether the [JsonPointer] contains specified [pathSegment]
 *
 * **[JsonPointer.ROOT] does not contain any path segments**
 *
 * Example:
 *
 * ```kotlin
 * JsonPointer.ROOT.contains("path") // false
 * JsonPointer("/test/path/to/node").contains("path") // true
 * JsonPointer("/test/path/to/node").contains("anotherPath") // false
 * ```
 */
public operator fun JsonPointer.contains(pathSegment: String): Boolean {
  var segment: JsonPointer? = this
  while (segment != null) {
    if (segment is SegmentPointer && segment.propertyName == pathSegment) {
      return true
    }
    segment = segment.next
  }
  return false
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
      next?.at(pointer.next)
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