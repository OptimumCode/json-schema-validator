package io.github.optimumcode.json.schema.internal.util

import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.double

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

/**
 * This function should be used only if you are certain that the [element] is a number
 */
internal fun numberParts(element: JsonPrimitive): NumberParts {
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

internal val JsonPrimitive.integerOrNull: Int?
  get() = parseNumberParts(this)?.takeIf {
    it.fractional == 0L && it.integer <= Int.MAX_VALUE
  }?.integer?.toInt()