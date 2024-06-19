package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import kotlinx.serialization.json.JsonElement

internal class FalseSchemaAssertion(
  private val path: JsonPointer,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    errorCollector.updateKeywordLocation(path).use {
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "all values fail against the false schema",
        ),
      )
    }
    return false
  }
}

internal object TrueSchemaAssertion : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return true
  }
}