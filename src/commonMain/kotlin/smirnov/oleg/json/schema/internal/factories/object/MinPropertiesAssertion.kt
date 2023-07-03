package smirnov.oleg.json.schema.internal.factories.`object`

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.intOrNull
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object MinPropertiesAssertionFactory : AbstractAssertionFactory("minProperties") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive && !element.isString) { "$property must be an integer" }
    val minPropertiesValue = requireNotNull(element.intOrNull) { "$property must be a valid integer" }
    require(minPropertiesValue >= 0) { "$property must be a non-negative integer" }
    return PropertiesNumberAssertion(
      context.schemaPath,
      minPropertiesValue,
      errorMessage = "must be greater or equal to",
    ) { a, b -> a >= b }
  }
}