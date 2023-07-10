package smirnov.oleg.json.schema.internal.factories.condition

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

internal abstract class AbstractAssertionsCollectionFactory(property: String) : AbstractAssertionFactory(property) {
  final override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonArray) { "$property must be an array" }
    require(element.isNotEmpty()) { "$property must have at least one element" }
    require(element.all(context::isJsonSchema)) { "each element in $property must be a valid JSON schema" }

    val assertions: List<JsonSchemaAssertion> = element.mapIndexed { index, item ->
      context.at(index).schemaFrom(item)
    }

    return createAssertion(context, assertions)
  }

  protected abstract fun createAssertion(
    context: LoadingContext,
    assertions: List<JsonSchemaAssertion>,
  ): JsonSchemaAssertion
}