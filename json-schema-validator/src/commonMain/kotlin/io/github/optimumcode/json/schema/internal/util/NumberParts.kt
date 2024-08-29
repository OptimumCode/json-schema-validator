package io.github.optimumcode.json.schema.internal.util

import io.github.optimumcode.json.schema.model.PrimitiveElement
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.double
import kotlin.math.absoluteValue

internal data class NumberParts(
  val integer: Long,
  val fractional: Long,
  val precision: Int,
)

internal fun parseNumberParts(element: PrimitiveElement): NumberParts? {
  return if (element.isString || element.isNull || element.booleanOrNull != null) {
    null
  } else {
    numberParts(element)
  }
}

private const val E_SMALL_CHAR: Char = 'e'
private const val E_BIG_CHAR: Char = 'E'
private const val TEN: Double = 10.0

/**
 * This function should be used only if you are certain that the [element] is a number
 */
internal fun numberParts(element: PrimitiveElement): NumberParts {
  if (element.content.run { contains(E_SMALL_CHAR) || contains(E_BIG_CHAR) }) {
    return element.double.run {
      var precision = 0
      var fractionalPart = rem(1.0).absoluteValue
      while (fractionalPart % 1.0 > 0) {
        fractionalPart *= TEN
        precision += 1
      }
      NumberParts(toLong(), fractionalPart.toLong(), precision)
    }
  }
  val integerPart = element.content.substringBefore('.')
  return if (integerPart == element.content) {
    NumberParts(
      integerPart.toLong(),
      0L,
      0,
    )
  } else {
    val fractionalPart = element.content.substring(integerPart.length + 1)
    var lastNotZero = fractionalPart.length - 1
    for (i in (fractionalPart.length - 1) downTo 0) {
      if (fractionalPart[i] != '0') {
        break
      }
      lastNotZero -= 1
    }
    val fractionalSize = lastNotZero + 1
    NumberParts(
      integerPart.toLong(),
      fractionalPart.substring(startIndex = 0, endIndex = fractionalSize)
        .takeIf { it.isNotEmpty() }
        ?.toLong() ?: 0L,
      fractionalSize,
    )
  }
}

internal val PrimitiveElement.integerOrNull: Int?
  get() =
    parseNumberParts(this)?.takeIf {
      it.fractional == 0L && it.integer <= Int.MAX_VALUE
    }?.integer?.toInt()