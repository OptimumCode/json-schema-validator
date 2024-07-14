package io.github.optimumcode.json.schema.internal.util

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull

internal fun areEqual(
  first: JsonElement,
  second: JsonElement,
): Boolean {
  if (first::class != second::class) {
    return false
  }
  return when (first) {
    is JsonObject -> areEqualObjects(first, second as JsonObject)
    is JsonArray -> areEqualArrays(first, second as JsonArray)
    is JsonPrimitive -> areEqualPrimitives(first, second as JsonPrimitive)
  }
}

internal fun areEqualPrimitives(
  first: JsonPrimitive,
  second: JsonPrimitive,
): Boolean {
  if (first is JsonNull && second is JsonNull) {
    return true
  }
  if (first.isString != second.isString) {
    return false
  }
  return if (first.isString) {
    first.content == second.content
  } else {
    when {
      first.booleanOrNull != null || second.booleanOrNull != null -> first.content == second.content
      else -> compareAsNumbers(first, second)
    }
  }
}

private fun compareAsNumbers(
  first: JsonPrimitive,
  second: JsonPrimitive,
): Boolean {
  return numberParts(first) == numberParts(second)
}

internal fun areEqualArrays(
  first: JsonArray,
  second: JsonArray,
): Boolean {
  if (first.size != second.size) {
    return false
  }
  for (i in 0 until first.size) {
    if (!areEqual(first[i], second[i])) {
      return false
    }
  }
  return true
}

internal fun areEqualObjects(
  first: JsonObject,
  second: JsonObject,
): Boolean {
  if (first.size != second.size) {
    return false
  }
  if (first.keys != second.keys) {
    return false
  }
  for (key in first.keys) {
    if (!areEqual(first.getValue(key), second.getValue(key))) {
      return false
    }
  }
  return true
}