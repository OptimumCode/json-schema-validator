package io.github.optimumcode.json.schema.internal.factories.string

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.util.codePointCount
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.PrimitiveElement
import io.github.optimumcode.json.schema.model.contentOrNull

internal class LengthAssertion(
  private val path: JsonPointer,
  private val lengthValue: Int,
  private val errorMessage: String,
  private val check: (Int, Int) -> Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(path).use {
      if (element !is PrimitiveElement || !element.isString) {
        return@use true
      }
      val content = element.contentOrNull ?: return true
      val codePointCount = content.codePointCount()
      if (check(codePointCount, lengthValue)) {
        return@use true
      }
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "string length ($codePointCount) $errorMessage $lengthValue",
        ),
      )
      false
    }
  }
}