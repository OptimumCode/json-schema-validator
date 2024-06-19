package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

@Suppress("unused")
internal object DependenciesAssertionFactory : AbstractAssertionFactory("dependencies") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonObject) { "$property must be an object" }
    if (element.isEmpty()) {
      return TrueSchemaAssertion
    }
    val assertions = loadAssertions(element, context)
    return DependenciesAssertion(context.schemaPath, assertions)
  }

  private fun loadAssertions(
    jsonObject: JsonObject,
    context: LoadingContext,
  ): Map<String, JsonSchemaAssertion> {
    return jsonObject.mapValues { (prop, element) ->
      val propContext = context.at(prop)
      when {
        context.isJsonSchema(element) -> propContext.schemaFrom(element)
        element is JsonArray -> ConditionalRequiredPropertiesAssertion.createFromArray(prop, element, propContext)
        else -> throw IllegalArgumentException("$prop dependency must be either array of strings or valid JSON schema")
      }
    }
  }
}