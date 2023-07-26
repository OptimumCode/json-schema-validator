package io.github.optimumcode.json.schema.internal.util

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.double
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive

internal fun areEqual(first: JsonElement, second: JsonElement): Boolean {
  if (first::class != second::class) {
    return false
  }
  return when (first) {
    is JsonObject -> areEqualObjects(first, second.jsonObject)
    is JsonArray -> areEqualArrays(first, second.jsonArray)
    is JsonPrimitive -> areEqualPrimitives(first, second.jsonPrimitive)
  }
}

internal fun areEqualPrimitives(first: JsonPrimitive, second: JsonPrimitive): Boolean {
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

private fun compareAsNumbers(first: JsonPrimitive, second: JsonPrimitive): Boolean {
  val (firstInteger, firstFractional) = numberParts(first)
  val (secondInteger, secondFractional) = numberParts(second)
  return firstInteger == secondInteger && firstFractional == secondFractional
}

internal data class NumberParts(
  val integer: Long,
  val fractional: Long,
)

internal fun parseNumberParts(element: JsonPrimitive): NumberParts? {
  return if (element.isString || element is JsonNull || element.booleanOrNull != null) {
    null
  } else {
    numberParts(element)
  }
}

private const val E_SMALL_CHAR: Char = 'e'
private const val E_BIG_CHAR: Char = 'E'
private fun numberParts(element: JsonPrimitive): NumberParts {
  if (element.content.run { contains(E_SMALL_CHAR) || contains(E_BIG_CHAR) }) {
    return element.double.run {
      NumberParts(toLong(), rem(1.0).toLong())
    }
  }
  val integerPart = element.content.substringBefore('.')
  return if (integerPart == element.content) {
    NumberParts(
      integerPart.toLong(),
      0L,
    )
  } else {
    NumberParts(
      integerPart.toLong(),
      element.content.substring(integerPart.length + 1).toLong(),
    )
  }
}

internal fun areEqualArrays(first: JsonArray, second: JsonArray): Boolean {
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

internal fun areEqualObjects(first: JsonObject, second: JsonObject): Boolean {
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