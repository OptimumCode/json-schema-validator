package io.github.optimumcode.json.schema

import io.github.optimumcode.json.schema.SchemaType.DRAFT_2019_09
import io.github.optimumcode.json.schema.SchemaType.DRAFT_2020_12
import io.github.optimumcode.json.schema.SchemaType.DRAFT_7
import io.github.optimumcode.json.schema.extension.ExternalAssertionFactory
import io.github.optimumcode.json.schema.internal.SchemaLoader
import io.github.optimumcode.json.schema.internal.wellknown.Draft201909
import io.github.optimumcode.json.schema.internal.wellknown.Draft202012
import io.github.optimumcode.json.schema.internal.wellknown.Draft7
import kotlinx.serialization.json.JsonElement
import kotlin.jvm.JvmStatic

public interface JsonSchemaLoader {
  public fun registerWellKnown(draft: SchemaType): JsonSchemaLoader =
    apply {
      when (draft) {
        DRAFT_7 -> Draft7.entries.forEach { register(it.content) }
        DRAFT_2019_09 -> Draft201909.entries.forEach { register(it.content) }
        DRAFT_2020_12 -> Draft202012.entries.forEach { register(it.content) }
      }
    }

  public fun register(schema: JsonElement): JsonSchemaLoader = register(schema, null)

  public fun register(
    schema: JsonElement,
    draft: SchemaType?,
  ): JsonSchemaLoader

  public fun register(schema: String): JsonSchemaLoader = register(schema, null)

  public fun register(
    schema: String,
    draft: SchemaType?,
  ): JsonSchemaLoader

  public fun register(
    schema: JsonElement,
    remoteUri: String,
  ): JsonSchemaLoader = register(schema, remoteUri, null)

  public fun register(
    schema: JsonElement,
    remoteUri: String,
    draft: SchemaType?,
  ): JsonSchemaLoader

  public fun withExtensions(
    externalFactory: ExternalAssertionFactory,
    vararg otherExternalFactories: ExternalAssertionFactory,
  ): JsonSchemaLoader

  public fun withExtensions(externalFactories: Iterable<ExternalAssertionFactory>): JsonSchemaLoader

  public fun fromDefinition(schema: String): JsonSchema = fromDefinition(schema, null)

  public fun fromDefinition(
    schema: String,
    draft: SchemaType?,
  ): JsonSchema

  public fun fromJsonElement(schemaElement: JsonElement): JsonSchema = fromJsonElement(schemaElement, null)

  public fun fromJsonElement(
    schemaElement: JsonElement,
    draft: SchemaType?,
  ): JsonSchema

  public companion object {
    @JvmStatic
    public fun create(): JsonSchemaLoader = SchemaLoader()
  }
}