package io.github.optimumcode.json.schema

import com.eygraber.uri.Uri
import io.github.optimumcode.json.schema.SchemaType.DRAFT_2019_09
import io.github.optimumcode.json.schema.SchemaType.DRAFT_2020_12
import io.github.optimumcode.json.schema.SchemaType.DRAFT_4
import io.github.optimumcode.json.schema.SchemaType.DRAFT_6
import io.github.optimumcode.json.schema.SchemaType.DRAFT_7
import io.github.optimumcode.json.schema.extension.ExternalAssertionFactory
import io.github.optimumcode.json.schema.internal.SchemaLoader
import io.github.optimumcode.json.schema.internal.wellknown.Draft201909
import io.github.optimumcode.json.schema.internal.wellknown.Draft202012
import io.github.optimumcode.json.schema.internal.wellknown.Draft4
import io.github.optimumcode.json.schema.internal.wellknown.Draft6
import io.github.optimumcode.json.schema.internal.wellknown.Draft7
import kotlinx.serialization.json.JsonElement
import kotlin.jvm.JvmStatic

/**
 * By default, implementations of [JsonSchemaLoader] are NOT thread-safe
 */
@Suppress("detekt:TooManyFunctions")
public interface JsonSchemaLoader {
  public fun registerWellKnown(draft: SchemaType): JsonSchemaLoader =
    apply {
      when (draft) {
        DRAFT_4 -> Draft4.entries.forEach { register(it.content) }
        DRAFT_6 -> Draft6.entries.forEach { register(it.content) }
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

  @Deprecated(
    message = "This method will be removed in a future release. Please use the alternative that accepts Uri type",
    level = DeprecationLevel.WARNING,
    replaceWith =
      ReplaceWith(
        imports = ["com.eygraber.uri.Uri"],
        expression = "register(schema, Uri.parse(remoteUri))",
      ),
  )
  public fun register(
    schema: JsonElement,
    remoteUri: String,
  ): JsonSchemaLoader = register(schema, Uri.parse(remoteUri), null)

  public fun register(
    schema: JsonElement,
    remoteUri: Uri,
  ): JsonSchemaLoader = register(schema, remoteUri, null)

  @Deprecated(
    message = "This method will be removed in a future release. Please use the alternative that accepts Uri type",
    level = DeprecationLevel.WARNING,
    replaceWith =
      ReplaceWith(
        imports = ["com.eygraber.uri.Uri"],
        expression = "register(schema, Uri.parse(remoteUri), draft)",
      ),
  )
  public fun register(
    schema: JsonElement,
    remoteUri: String,
    draft: SchemaType?,
  ): JsonSchemaLoader = register(schema, Uri.parse(remoteUri), draft)

  public fun register(
    schema: JsonElement,
    remoteUri: Uri,
    draft: SchemaType?,
  ): JsonSchemaLoader

  public fun withExtensions(
    externalFactory: ExternalAssertionFactory,
    vararg otherExternalFactories: ExternalAssertionFactory,
  ): JsonSchemaLoader

  public fun withExtensions(externalFactories: Iterable<ExternalAssertionFactory>): JsonSchemaLoader

  @ExperimentalApi
  public fun withCustomFormat(
    format: String,
    formatValidator: FormatValidator,
  ): JsonSchemaLoader

  @ExperimentalApi
  public fun withCustomFormats(formats: Map<String, FormatValidator>): JsonSchemaLoader

  public fun <T : Any> withSchemaOption(
    option: SchemaOption<T>,
    value: T,
  ): JsonSchemaLoader

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
    /**
     * Creates an instance of [JsonSchemaLoader].
     *
     * @return implementation of [JsonSchemaLoader]. The implementation is **NOT thread-safe**.
     */
    @JvmStatic
    public fun create(): JsonSchemaLoader = SchemaLoader()
  }
}