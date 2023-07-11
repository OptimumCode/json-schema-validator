package com.github.optimumcode.json.schema.internal.factories.general

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.ErrorCollector
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.internal.AssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
import com.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement

@Suppress("unused")
internal object ConstAssertionFactory : AbstractAssertionFactory("const") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    return ConstAssertion(context.schemaPath, element)
  }
}

private class ConstAssertion(
  private val path: JsonPointer,
  private val constValue: JsonElement,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element == constValue) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "element does not match constant definition",
      ),
    )
    return false
  }
}