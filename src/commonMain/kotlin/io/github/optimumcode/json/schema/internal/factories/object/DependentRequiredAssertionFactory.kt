package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object DependentRequiredAssertionFactory : AbstractAssertionFactory("dependentRequired") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonObject) { "$property must be an object" }
    if (element.isEmpty()) {
      return TrueSchemaAssertion
    }
    val assertionsByProp =
      element.mapValues { (prop, el) ->
        require(el is JsonArray) { "$prop dependency must be an array" }
        ConditionalRequiredPropertiesAssertion.createFromArray(prop, el, context.at(prop))
      }
    return DependenciesAssertion(context.schemaPath, assertionsByProp)
  }
}