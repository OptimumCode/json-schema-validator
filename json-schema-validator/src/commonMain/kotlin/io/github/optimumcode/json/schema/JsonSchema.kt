package io.github.optimumcode.json.schema

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector.DelegateOutputCollector
import io.github.optimumcode.json.schema.internal.DefaultAssertionContext
import io.github.optimumcode.json.schema.internal.DefaultReferenceResolverProvider
import io.github.optimumcode.json.schema.internal.IsolatedLoader
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.wrapper.wrap
import io.github.optimumcode.json.schema.model.AbstractElement
import kotlinx.serialization.json.JsonElement
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic

/**
 * JSON schema implementation. It allows you to validate the [JsonElement] against this schema
 * and collect errors using [ErrorCollector]
 */
public class JsonSchema internal constructor(
  private val assertion: JsonSchemaAssertion,
  private val referenceResolverProvider: DefaultReferenceResolverProvider,
) {
  /**
   * Validates [value] against this [JsonSchema].
   * If the [value] is valid against the schema the function returns `true`.
   * Otherwise, it returns `false`.
   *
   * All reported errors will be reported to [ErrorCollector.onError]
   */
  public fun validate(
    value: JsonElement,
    errorCollector: ErrorCollector,
  ): Boolean = validate(value.wrap(), errorCollector)

  /**
   * Validates [value] against this [JsonSchema].
   * The provided [outputCollectorProvider] will be used to create [OutputCollector]
   * which collects the validation result.
   *
   * @return validation result depending on [outputCollectorProvider]
   */
  public fun <T> validate(
    value: JsonElement,
    outputCollectorProvider: OutputCollector.Provider<T>,
  ): T = validate(value.wrap(), outputCollectorProvider)

  /**
   * Validates [value] against this [JsonSchema].
   * If the [value] is valid against the schema the function returns `true`.
   * Otherwise, it returns `false`.
   *
   * All reported errors will be reported to [ErrorCollector.onError]
   */
  @ExperimentalApi
  public fun validate(
    value: AbstractElement,
    errorCollector: ErrorCollector,
  ): Boolean {
    val context = DefaultAssertionContext(JsonPointer.ROOT, referenceResolverProvider.createResolver())
    return DelegateOutputCollector(errorCollector).use {
      assertion.validate(value, context, this)
    }
  }

  /**
   * Validates [value] against this [JsonSchema].
   * The provided [outputCollectorProvider] will be used to create [OutputCollector]
   * which collects the validation result.
   *
   * @return validation result depending on [outputCollectorProvider]
   */
  @ExperimentalApi
  public fun <T> validate(
    value: AbstractElement,
    outputCollectorProvider: OutputCollector.Provider<T>,
  ): T {
    val context = DefaultAssertionContext(JsonPointer.ROOT, referenceResolverProvider.createResolver())
    val collector = outputCollectorProvider.get()
    collector.use {
      assertion.validate(value, context, this)
    }
    return collector.output
  }

  public companion object {
    /**
     * Loads JSON schema from the [schema] definition
     * @param defaultType expected schema draft to use when loading schema.
     *             If `null` draft will be defined by schema definition
     *             or the latest supported draft will be used
     */
    @JvmStatic
    @JvmOverloads
    public fun fromDefinition(
      schema: String,
      defaultType: SchemaType? = null,
    ): JsonSchema = IsolatedLoader.fromDefinition(schema, defaultType)

    /**
     * Loads JSON schema from the [schemaElement] JSON element
     * @param defaultType expected schema draft to use when loading schema.
     *             If `null` draft will be defined by schema definition
     *             or the latest supported draft will be used
     */
    @JvmStatic
    @JvmOverloads
    public fun fromJsonElement(
      schemaElement: JsonElement,
      defaultType: SchemaType? = null,
    ): JsonSchema = IsolatedLoader.fromJsonElement(schemaElement, defaultType)
  }
}