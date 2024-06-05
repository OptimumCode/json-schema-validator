package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.internal.AnnotationKeyFactory
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlin.math.max

internal object PrefixItemsAssertionFactory : AbstractAssertionFactory("prefixItems") {
  val ANNOTATION: AnnotationKey<Int> = AnnotationKeyFactory.createAggregatable(property) { a, b -> max(a, b) }

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonArray) { "$property must be an array" }
    require(element.isNotEmpty()) { "$property must have at least one element" }
    require(element.all(context::isJsonSchema)) {
      "all elements in $property must be a valid JSON schema"
    }
    val assertions = element.mapIndexed { index, item -> context.at(index).schemaFrom(item) }
    return PrefixItemsAssertion(context.schemaPath, assertions, ANNOTATION)
  }
}