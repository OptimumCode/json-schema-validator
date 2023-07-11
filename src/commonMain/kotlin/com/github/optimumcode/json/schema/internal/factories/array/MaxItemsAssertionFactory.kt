package com.github.optimumcode.json.schema.internal.factories.array

import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
import com.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.intOrNull

@Suppress("unused")
internal object MaxItemsAssertionFactory : AbstractAssertionFactory("maxItems") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive && !element.isString) { "$property must be an integer" }
    val maxItemsValue = requireNotNull(element.intOrNull) { "$property must be a valid integer" }
    require(maxItemsValue >= 0) { "$property must be a non-negative integer" }
    return ArrayLengthAssertion(
      context.schemaPath,
      maxItemsValue,
      errorMessage = "must be less or equal to",
    ) { a, b -> a <= b }
  }
}