package io.github.optimumcode.json.schema.internal.factories.number

import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.util.NumberComparisonAssertion
import io.github.optimumcode.json.schema.internal.factories.number.util.compareTo
import io.github.optimumcode.json.schema.internal.util.number
import io.github.optimumcode.json.schema.internal.wrapper.JsonPrimitiveWrapper
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive

@Suppress("unused")
internal object MinimumAssertionFactory : AbstractAssertionFactory("minimum") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonPrimitive) { "$property must be a number" }
    val maximumValue: Number =
      requireNotNull(JsonPrimitiveWrapper(element).number) { "$property must be a valid number" }
    return NumberComparisonAssertion(
      context.schemaPath,
      maximumValue,
      element.content,
      errorMessage = "must be greater or equal to",
    ) { a, b -> a >= b }
  }
}