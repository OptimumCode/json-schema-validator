package io.github.optimumcode.json.schema.internal.factories.number

import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.util.NumberComparisonAssertion
import io.github.optimumcode.json.schema.internal.factories.number.util.compareTo
import io.github.optimumcode.json.schema.internal.factories.number.util.number
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive

@Suppress("unused")
internal object ExclusiveMaximumAssertionFactory : AbstractAssertionFactory("exclusiveMaximum") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonPrimitive) { "$property must be a number" }
    val maximumValue: Number =
      requireNotNull(element.number) { "$property must be a valid number" }
    return NumberComparisonAssertion(
      context.schemaPath,
      maximumValue,
      element.content,
      errorMessage = "must be less than",
    ) { a, b -> a < b }
  }
}