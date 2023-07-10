package smirnov.oleg.json.schema.internal.factories.`object`

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object PropertyNamesAssertionFactory : AbstractAssertionFactory("propertyNames") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val propertyNamesAssertion = context.schemaFrom(element)
    return PropertyNamesAssertion(propertyNamesAssertion)
  }
}

private class PropertyNamesAssertion(
  private val namesAssertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
    }
    var valid = true
    element.keys.forEach { property ->
      val res = namesAssertion.validate(
        JsonPrimitive(property),
        context.at(property),
      ) {
        errorCollector.onError(it.copy(message = "property $property: ${it.message}"))
      }
      valid = valid and res
    }
    return valid
  }
}