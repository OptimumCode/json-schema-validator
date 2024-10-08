package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.util.integerOrNull
import io.github.optimumcode.json.schema.internal.wrapper.JsonPrimitiveWrapper
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive

@Suppress("unused")
internal object MaxItemsAssertionFactory : AbstractAssertionFactory("maxItems") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonPrimitive && !element.isString) { "$property must be an integer" }
    val maxItemsValue =
      requireNotNull(JsonPrimitiveWrapper(element).integerOrNull) { "$property must be a valid integer" }
    require(maxItemsValue >= 0) { "$property must be a non-negative integer" }
    return ArrayLengthAssertion(
      context.schemaPath,
      maxItemsValue,
      errorMessage = "must be less or equal to",
    ) { a, b -> a <= b }
  }
}