package com.github.optimumcode.json.schema.internal.factories.`object`

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.ErrorCollector
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.internal.AssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal class PropertiesNumberAssertion(
  private val path: JsonPointer,
  private val length: Int,
  private val errorMessage: String,
  private val check: (Int, Int) -> Boolean,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
    }
    if (check(element.size, length)) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "number of properties $errorMessage $length",
      ),
    )
    return false
  }
}