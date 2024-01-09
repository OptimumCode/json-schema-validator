package io.github.optimumcode.json.schema.internal.factories.string

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.factories.string.util.codePointCount
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.contentOrNull

internal class LengthAssertion(
  private val path: JsonPointer,
  private val lengthValue: Int,
  private val errorMessage: String,
  private val check: (Int, Int) -> Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    if (element !is JsonPrimitive || !element.isString) {
      return true
    }
    val content = element.contentOrNull ?: return true
    val codePointCount = content.codePointCount()
    if (check(codePointCount, lengthValue)) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "string length ($codePointCount) $errorMessage $lengthValue",
      ),
    )
    return false
  }
}