package io.github.optimumcode.json.schema.internal.factories.number

import io.github.optimumcode.json.schema.internal.AssertionFactory
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.number.util.NumberComparisonAssertion
import io.github.optimumcode.json.schema.internal.factories.number.util.compareTo
import io.github.optimumcode.json.schema.internal.factories.number.util.number
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull

@Suppress("unused")
internal object Draft4MaximumAssertionFactory : AssertionFactory {
  private const val EXCLUSIVE_MAXIMUM_PROPERTY = "exclusiveMaximum"

  override val property: String
    get() = "maximum"

  override fun isApplicable(element: JsonElement): Boolean = element is JsonObject && element.contains(property)

  override fun create(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract $property property from ${element::class.simpleName}" }
    val typeElement = requireNotNull(element[property]) { "no property $property found in element $element" }
    val exclusive: Boolean =
      element[EXCLUSIVE_MAXIMUM_PROPERTY]?.let {
        require(it is JsonPrimitive) { "$EXCLUSIVE_MAXIMUM_PROPERTY must be a boolean" }
        requireNotNull(it.booleanOrNull) { "$EXCLUSIVE_MAXIMUM_PROPERTY must be a valid boolean" }
      } ?: false
    return createFromProperty(typeElement, context.at(property), exclusive)
  }

  private fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
    exclusive: Boolean,
  ): JsonSchemaAssertion {
    require(element is JsonPrimitive) { "$property must be a number" }
    val maximumValue: Number =
      requireNotNull(element.number) { "$property must be a valid number" }
    return NumberComparisonAssertion(
      context.schemaPath,
      maximumValue,
      element.content,
      errorMessage = if (exclusive) "must be less" else "must be less or equal to",
      if (exclusive) {
        { a, b -> a < b }
      } else {
        { a, b -> a <= b }
      },
    )
  }
}