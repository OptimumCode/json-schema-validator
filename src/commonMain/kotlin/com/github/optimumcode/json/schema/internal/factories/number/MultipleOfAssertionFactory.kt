package com.github.optimumcode.json.schema.internal.factories.number

import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
import com.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.number.util.NumberComparisonAssertion
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull

@Suppress("unused")
internal object MultipleOfAssertionFactory : AbstractAssertionFactory("multipleOf") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
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

private fun isMultipleOf(a: Number, b: Number): Boolean = when (a) {
  is Double -> a isMultipleOf b
  is Long -> a isMultipleOf b
  else -> false
}

private infix fun Double.isMultipleOf(number: Number): Boolean = when (number) {
  is Double -> (this % number).let { it == 0.0 && it == -0.0 }
  is Long -> (this % number).let { it == 0.0 && it == -0.0 }
  else -> false
}

private infix fun Long.isMultipleOf(number: Number): Boolean = when (number) {
  is Long -> this % number == 0L
  is Double -> (this % number).let { it == 0.0 && it == -0.0 }
  else -> false
}