package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object DependentSchemasAssertionFactory : AbstractAssertionFactory("dependentSchemas") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonObject) { "$property must be an object" }
    if (element.isEmpty()) {
      return TrueSchemaAssertion
    }
    val dependentSchemas =
      element.mapValues { (prop, el) ->
        require(context.isJsonSchema(el)) { "$prop dependency must be a valid JSON schema" }
        context.at(prop).schemaFrom(el)
      }
    return DependenciesAssertion(context.schemaPath, dependentSchemas)
  }
}