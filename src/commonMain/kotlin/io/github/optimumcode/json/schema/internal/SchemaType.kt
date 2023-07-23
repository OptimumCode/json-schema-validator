package io.github.optimumcode.json.schema.internal

import kotlin.jvm.JvmStatic

internal enum class SchemaType(
  private val schemaId: String,
) {
  DRAFT_7("json-schema.org/draft-07/schema"),
  ;

  companion object {
    @JvmStatic
    fun find(schemaId: String): SchemaType? {
      val id = schemaId.substringAfter("://")
        .substringBeforeLast(ROOT_REFERENCE)
      return values().find { it.schemaId == id }
    }
  }
}