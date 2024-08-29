package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ObjectElement

internal class PropertiesNumberAssertion(
  private val path: JsonPointer,
  private val length: Int,
  private val errorMessage: String,
  private val check: (Int, Int) -> Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(path).use {
      if (element !is ObjectElement) {
        return@use true
      }
      if (check(element.size, length)) {
        return@use true
      }
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "number of properties $errorMessage $length",
        ),
      )
      false
    }
  }
}