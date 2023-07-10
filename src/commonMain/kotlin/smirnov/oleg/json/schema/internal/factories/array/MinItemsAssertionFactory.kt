package smirnov.oleg.json.schema.internal.factories.array

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.intOrNull
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object MinItemsAssertionFactory : AbstractAssertionFactory("minItems") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive && !element.isString) { "$property must be an integer" }
    val maxItemsValue = requireNotNull(element.intOrNull) { "$property must be a valid integer" }
    require(maxItemsValue >= 0) { "$property must be a non-negative integer" }
    return ArrayLengthAssertion(
      context.schemaPath,
      maxItemsValue,
      errorMessage = "must be greater or equal to",
    ) { a, b -> a >= b }
  }
}