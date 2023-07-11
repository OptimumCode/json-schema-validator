package com.github.optimumcode.json.schema

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.internal.DefaultAssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.RefId
import com.github.optimumcode.json.schema.internal.SchemaLoader
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlin.jvm.JvmStatic

/**
 * JSON schema implementation. It allows you to validate the [JsonElement] against this schema
 * and collect errors using [ErrorCollector]
 */
public class JsonSchema internal constructor(
  private val assertion: JsonSchemaAssertion,
  private val references: Map<RefId, JsonSchemaAssertion>,
) {
  /**
   * Validates [value] against this [JsonSchema].
   * If the [value] is valid against the schema the function returns `true`.
   * Otherwise, it returns `false`.
   *
   * All reported errors will be reported to [ErrorCollector.onError]
   */
  public fun validate(value: JsonElement, errorCollector: ErrorCollector): Boolean {
    val context = DefaultAssertionContext(JsonPointer.ROOT, references)
    return assertion.validate(value, context, errorCollector)
  }

  public companion object {
    /**
     * Loads JSON schema from the [schema] definition
     */
    @JvmStatic
    public fun fromDescription(schema: String): JsonSchema {
      val schemaElement: JsonElement = Json.parseToJsonElement(schema)
      return SchemaLoader().load(schemaElement)
    }
  }
}