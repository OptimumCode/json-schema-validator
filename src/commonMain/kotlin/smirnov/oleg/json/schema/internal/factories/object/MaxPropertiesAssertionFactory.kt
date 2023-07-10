package smirnov.oleg.json.schema.internal.factories.`object`

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.intOrNull
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object MaxPropertiesAssertionFactory : AbstractAssertionFactory("maxProperties") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive && !element.isString) { "$property must be an integer" }
    val maxPropertiesValue = requireNotNull(element.intOrNull) { "$property must be a valid integer" }
    require(maxPropertiesValue >= 0) { "$property must be a non-negative integer" }
    return PropertiesNumberAssertion(
      context.schemaPath,
      maxPropertiesValue,
      errorMessage = "must be less or equal to",
    ) { a, b -> a <= b }
  }
}