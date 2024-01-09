package io.github.optimumcode.json.schema.internal.factories.condition

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement

internal object IfAssertionFactory : AbstractAssertionFactory("if") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKey.create(property)

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val ifAssertion = context.schemaFrom(element)
    return IfAssertion(ifAssertion)
  }
}

private class IfAssertion(
  private val condition: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    context.annotationCollector.annotate(
      IfAssertionFactory.ANNOTATION,
      condition.validate(element, context, ErrorCollector.EMPTY),
    )
    return true
  }
}