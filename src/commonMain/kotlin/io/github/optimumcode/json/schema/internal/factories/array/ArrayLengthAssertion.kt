package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class ArrayLengthAssertion(
  private val path: JsonPointer,
  private val length: Int,
  private val errorMessage: String,
  private val check: (Int, Int) -> Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    if (element !is JsonArray) {
      return true
    }
    if (check(element.size, length)) {
      return true
    }
    errorCollector.updateKeywordLocation(path).use {
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "array length $errorMessage $length",
        ),
      )
    }
    return false
  }
}