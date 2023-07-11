package com.github.optimumcode.json.schema.internal

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.ErrorCollector
import com.github.optimumcode.json.schema.ValidationError
import kotlinx.serialization.json.JsonElement

internal class FalseSchemaAssertion(
  private val path: JsonPointer,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "all values fail against the false schema",
      ),
    )
    return false
  }
}

internal object TrueSchemaAssertion : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    return true
  }
}