package io.github.optimumcode.json.schema.internal.factories.condition

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement

@Suppress("unused")
internal object NotAssertionFactory : AbstractAssertionFactory("not") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val assertion = context.schemaFrom(element)
    return NotAssertion(context.schemaPath, assertion)
  }
}

private class NotAssertion(
  private val path: JsonPointer,
  private val delegate: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    val childContext = context.childContext()
    if (!delegate.validate(element, childContext, OutputCollector.Empty)) {
      childContext.propagateToParent()
      return true
    }
    errorCollector.updateKeywordLocation(path).use {
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "element must not be valid against child JSON schema but was",
        ),
      )
    }
    return false
  }
}