package smirnov.oleg.json.schema.internal.factories.condition

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object AllOfAssertionFactory : AbstractAssertionFactory("allOf") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonArray) { "$property must be an array" }
    require(element.isNotEmpty()) { "$property must have at least one element" }
    require(element.all(context::isJsonSchema)) { "each element in $property must be a valid JSON schema" }

    val assertions: List<JsonSchemaAssertion> = element.mapIndexed { index, item ->
      context.at(index).schemaFrom(item)
    }

    return AllOfAssertion(assertions)
  }
}

private class AllOfAssertion(
  private val assertions: List<JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    var valid = true

    assertions.forEach {
      val res = it.validate(element, context, errorCollector)
      valid = valid and res
    }

    return valid
  }
}