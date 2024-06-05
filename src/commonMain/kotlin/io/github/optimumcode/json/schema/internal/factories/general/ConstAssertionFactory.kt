package io.github.optimumcode.json.schema.internal.factories.general

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.util.areEqual
import kotlinx.serialization.json.JsonElement

@Suppress("unused")
internal object ConstAssertionFactory : AbstractAssertionFactory("const") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    return ConstAssertion(context.schemaPath, element)
  }
}

private class ConstAssertion(
  private val path: JsonPointer,
  private val constValue: JsonElement,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    if (areEqual(element, constValue)) {
      return true
    }
    errorCollector.updateKeywordLocation(path).use {
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "element does not match constant definition",
        ),
      )
    }
    return false
  }
}