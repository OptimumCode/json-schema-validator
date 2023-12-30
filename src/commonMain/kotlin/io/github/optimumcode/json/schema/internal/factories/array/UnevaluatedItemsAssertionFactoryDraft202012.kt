package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement

internal object UnevaluatedItemsAssertionFactoryDraft202012 : AbstractAssertionFactory("unevaluatedItems") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKey.createAggregatable(property, Boolean::or)

  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val assertion = context.schemaFrom(element)
    return UnevaluatedItemsAssertion(
      assertion,
      PrefixItemsAssertionFactory.ANNOTATION,
      ItemsAssertionFactoryDraft202012.ANNOTATION,
      ANNOTATION,
    )
  }
}