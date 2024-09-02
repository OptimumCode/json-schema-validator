package io.github.optimumcode.json.schema.internal.factories.number

import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.util.NumberComparisonAssertion
import io.github.optimumcode.json.schema.internal.wrapper.JsonPrimitiveWrapper
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlin.math.abs
import kotlin.math.floor
import kotlin.math.log10
import kotlin.math.max
import kotlin.math.pow
import kotlin.math.round

@Suppress("unused")
internal object MultipleOfAssertionFactory : AbstractAssertionFactory("multipleOf") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonPrimitive) { "$property must be a number" }
    val multipleOfValue: Number =
      requireNotNull(JsonPrimitiveWrapper(element).number) { "$property must be a valid number" }
    require(
      when (multipleOfValue) {
        is Double -> multipleOfValue > 0.0
        is Long -> multipleOfValue > 0
        else -> error("unexpected value type ${multipleOfValue::class.simpleName}")
      },
    ) { "$property value ${element.content} must be greater than zero" }
    return NumberComparisonAssertion(
      context.schemaPath,
      multipleOfValue,
      element.content,
      errorMessage = "is not a multiple of",
      check = ::isMultipleOf,
    )
  }
}

private fun isMultipleOf(
  a: Number,
  b: Number,
): Boolean =
  when (a) {
    is Double -> a.isFinite() && a isMultipleOf b
    is Long -> a isMultipleOf b
    else -> false
  }

private infix fun Double.isMultipleOf(number: Number): Boolean =
  when (number) {
    is Double -> number.isFinite() && isZero(rem(this, number))
    is Long -> isZero((this % number))
    else -> false
  }

private infix fun Long.isMultipleOf(number: Number): Boolean =
  when (number) {
    is Long -> this % number == 0L
    is Double -> number.isFinite() && isZero(rem(this, number))
    else -> false
  }

private fun isZero(first: Double): Boolean {
  return first == -0.0 || first == 0.0
}

private const val ROUND_THRESHOLD = 0.000000001

private tailrec fun rem(
  first: Double,
  second: Double,
): Double {
  return if (second < 1 && second > -1) {
    val degree = floor(log10(second))
    if (first < 1 && first > -1) {
      val newDegree = max(floor(log10(second)), degree)
      val newPow = 10.0.pow(-newDegree)
      rem(safeRound(first * newPow), safeRound(second * newPow))
    } else {
      val pow = 10.0.pow(-degree)
      val newFirst = safeRound(first * pow)
      val newSecond = safeRound(second * pow)

      newFirst % newSecond
    }
  } else {
    first % second
  }
}

/**
 * Rounds the [value] if an abs delta between original value and result of rounding
 * is less than [ROUND_THRESHOLD].
 * Otherwise, the original value is return.
 *
 * This method tries to solve the issue with double operation when not a precise result is returned.
 * E.g. `19.99 * 100 = 1998.9999999999998` instead of `1999.0`
 */
private fun safeRound(value: Double): Double {
  val rounded = round(value)
  return if (abs(rounded - value) < ROUND_THRESHOLD) {
    rounded
  } else {
    // we return the original value because the result was precise,
    // and we don't need rounding to fix issue with double operations
    value
  }
}

private fun rem(
  first: Long,
  second: Double,
): Double {
  return if (second < 1 && second > -1) {
    val degree = floor(log10(second))
    first % (second * 10.0.pow(-degree))
  } else {
    first % second
  }
}