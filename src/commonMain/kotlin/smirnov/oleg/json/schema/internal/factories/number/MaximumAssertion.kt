package smirnov.oleg.json.schema.internal.factories.number

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.util.NumberComparisonAssertion
import smirnov.oleg.json.schema.internal.factories.number.util.compareTo

@Suppress("unused")
internal object MaximumAssertionFactory : AbstractAssertionFactory("maximum") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive) { "$property must be a number" }
    val maximumValue: Number =
      requireNotNull(element.longOrNull ?: element.doubleOrNull) { "$property must be a valid number" }
    return NumberComparisonAssertion(
      context.schemaPath,
      maximumValue,
      element.content,
      errorMessage = "must be less or equal to",
      ) { a, b -> a <= b  }
  }
}
