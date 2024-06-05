package io.github.optimumcode.json.schema.internal.factories.condition

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement

internal object ElseAssertionFactory : AbstractAssertionFactory("else") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val elseAssertion = context.schemaFrom(element)
    return ElseAssertion(context.schemaPath, elseAssertion)
  }
}

private class ElseAssertion(
  private val location: JsonPointer,
  private val assertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return if (context.annotationCollector.annotated(IfAssertionFactory.ANNOTATION) == false) {
      errorCollector.updateKeywordLocation(location).use {
        assertion.validate(element, context, this)
      }
    } else {
      true
    }
  }
}