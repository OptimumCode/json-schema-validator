package com.github.optimumcode.json.schema.internal.factories.number

import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
import com.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.number.util.NumberComparisonAssertion
import com.github.optimumcode.json.schema.internal.factories.number.util.compareTo
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull

@Suppress("unused")
internal object ExclusiveMaximumAssertionFactory : AbstractAssertionFactory("exclusiveMaximum") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive) { "$property must be a number" }
    val maximumValue: Number =
      requireNotNull(element.longOrNull ?: element.doubleOrNull) { "$property must be a valid number" }
    return NumberComparisonAssertion(
      context.schemaPath,
      maximumValue,
      element.content,
      errorMessage = "must be less than",
    ) { a, b -> a < b }
  }
}