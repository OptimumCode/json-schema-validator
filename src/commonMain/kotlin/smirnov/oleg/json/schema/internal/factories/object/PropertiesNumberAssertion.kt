package smirnov.oleg.json.schema.internal.factories.`object`

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion

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