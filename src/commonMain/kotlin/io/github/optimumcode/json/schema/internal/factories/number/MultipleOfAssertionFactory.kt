package io.github.optimumcode.json.schema.internal.factories.number

import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.util.NumberComparisonAssertion
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull
import kotlin.math.floor
import kotlin.math.log10
import kotlin.math.max
import kotlin.math.pow

@Suppress("unused")
internal object MultipleOfAssertionFactory : AbstractAssertionFactory("multipleOf") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonPrimitive) { "$property must be a number" }
    val multipleOfValue: Number =
      requireNotNull(element.longOrNull ?: element.doubleOrNull) { "$property must be a valid number" }
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
    is Double -> a isMultipleOf b
    is Long -> a isMultipleOf b
    else -> false
  }

private infix fun Double.isMultipleOf(number: Number): Boolean =
  when (number) {
    is Double -> isZero(rem(this, number))
    is Long -> isZero((this % number))
    else -> false
  }

private infix fun Long.isMultipleOf(number: Number): Boolean =
  when (number) {
    is Long -> this % number == 0L
    is Double -> isZero(rem(this, number))
    else -> false
  }

private fun isZero(first: Double): Boolean {
  return first == -0.0 || first == 0.0
}

private tailrec fun rem(
  first: Double,
  second: Double,
): Double {
  return if (second < 1 && second > -1) {
    val degree = floor(log10(second))
    if (first < 1 && first > -1) {
      val newDegree = max(floor(log10(second)), degree)
      val newPow = 10.0.pow(-newDegree)
      rem((first * newPow), (second * newPow))
    } else {
      val pow = 10.0.pow(-degree)
      (first * pow) % (second * pow)
    }
  } else {
    first % second
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