package com.github.optimumcode.json.schema.internal.factories.string

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.ErrorCollector
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.internal.AssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.contentOrNull

internal class LengthAssertion(
  private val path: JsonPointer,
  private val lengthValue: Int,
  private val errorMessage: String,
  private val check: (Int, Int) -> Boolean,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonPrimitive || !element.isString) {
      return true
    }
    val content = element.contentOrNull ?: return true
    if (check(content.length, lengthValue)) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "string length (${content.length}) $errorMessage $lengthValue",
      ),
    )
    return false
  }
}