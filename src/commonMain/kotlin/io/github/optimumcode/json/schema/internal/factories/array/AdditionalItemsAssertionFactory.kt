package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement

internal object AdditionalItemsAssertionFactory : AbstractAssertionFactory("additionalItems") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKey.createAggregatable(property, Boolean::or)

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val assertion = context.schemaFrom(element)
    return AdditionalItemsAssertion(assertion, ItemsAssertionFactory.ANNOTATION, ANNOTATION, returnIfNoIndex = true)
  }
}