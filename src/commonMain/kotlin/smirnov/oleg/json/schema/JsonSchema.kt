package smirnov.oleg.json.schema

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.internal.DefaultAssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.SchemaLoader
import kotlin.jvm.JvmStatic

class JsonSchema internal constructor(
  private val assertion: JsonSchemaAssertion,
) {
  fun validate(value: JsonElement, errorCollector: ErrorCollector): Boolean {
    return assertion.validate(value, DefaultAssertionContext(JsonPointer.ROOT), errorCollector)
  }

  companion object {
    @JvmStatic
    fun fromDescription(schema: String): JsonSchema {
      val schemaElement: JsonElement = Json.parseToJsonElement(schema)
      val schemaAssertion = SchemaLoader().load(schemaElement)
      return JsonSchema(schemaAssertion)
    }
  }
}