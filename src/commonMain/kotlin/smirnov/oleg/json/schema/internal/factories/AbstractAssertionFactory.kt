package smirnov.oleg.json.schema.internal.factories

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.schema.internal.AssertionFactory
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

internal abstract class AbstractAssertionFactory(
  protected val property: String,
) : AssertionFactory {
  final override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject && element.contains(property)
  }

  override fun create(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract $property property from ${element::class.simpleName}" }
    val typeElement = requireNotNull(element[property]) { "no property $property found in element $element" }
    return createFromProperty(typeElement, context.at(property))
  }

  /**
   * @param element JSON element associated with [property]
   * @param context updated context with [LoadingContext.schemaPath] matches the [element] location
   */
  protected abstract fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion
}