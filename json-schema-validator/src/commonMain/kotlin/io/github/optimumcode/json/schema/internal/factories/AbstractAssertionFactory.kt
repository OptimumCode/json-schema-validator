package io.github.optimumcode.json.schema.internal.factories

import io.github.optimumcode.json.schema.internal.AssertionFactory
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal abstract class AbstractAssertionFactory(
  /**
   * JSON property name that will be used to extract element for assertion from JSON schema definition
   */
  override val property: String,
) : AssertionFactory {
  final override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject && element.contains(property)
  }

  override fun create(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract $property property from ${element::class.simpleName}" }
    val typeElement = requireNotNull(element[property]) { "no property $property found in element $element" }
    return createFromProperty(typeElement, context.at(property))
  }

  /**
   * @param element JSON element associated with [property]
   * @param context updated context with [LoadingContext.schemaPath] matches the [element] location
   */
  protected abstract fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion
}