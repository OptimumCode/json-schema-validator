package com.github.optimumcode.json.schema

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.internal.DefaultAssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.RefId
import com.github.optimumcode.json.schema.internal.SchemaLoader
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlin.jvm.JvmStatic

public class JsonSchema internal constructor(
  private val assertion: JsonSchemaAssertion,
  private val references: Map<RefId, JsonSchemaAssertion>,
) {
  public fun validate(value: JsonElement, errorCollector: ErrorCollector): Boolean {
    val context = DefaultAssertionContext(JsonPointer.ROOT, references)
    return assertion.validate(value, context, errorCollector)
  }

  public companion object {
    @JvmStatic
    public fun fromDescription(schema: String): JsonSchema {
      val schemaElement: JsonElement = Json.parseToJsonElement(schema)
      return SchemaLoader().load(schemaElement)
    }
  }
}