package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.schema.SchemaOption
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlin.reflect.cast

internal interface SchemaLoaderConfig {
  val allFactories: List<AssertionFactory>

  val defaultVocabulary: Vocabulary

  fun createVocabulary(schemaDefinition: JsonElement): Vocabulary?

  fun factories(
    schemaDefinition: JsonElement,
    vocabulary: Vocabulary,
    options: Options,
  ): List<AssertionFactory>

  val keywordResolver: KeyWordResolver
  val referenceFactory: ReferenceFactory

  class Vocabulary(
    private val vocabularies: Map<String, Boolean> = emptyMap(),
  ) {
    fun enabled(vocabulary: String): Boolean = vocabularies[vocabulary] ?: false
  }

  class Options(
    private val options: Map<SchemaOption<*>, Any>,
  ) {
    operator fun <T : Any> get(option: SchemaOption<T>): T? = options[option]?.let(option.type::cast)
  }
}

/**
 * Factory to create assertion from reference
 */
internal interface ReferenceFactory {
  /**
   * Tries to extract a reference from [schemaDefinition].
   *
   * @return [RefHolder] if [schemaDefinition] has reference. Otherwise, returns `null`
   */
  fun extractRef(
    schemaDefinition: JsonObject,
    context: SchemaLoaderContext,
  ): RefHolder?

  /**
   * Defines whether the other schema properties should be loaded when reference is present
   */
  val allowOverriding: Boolean

  /**
   * Defines whether the $id should be processed before resolving any references.
   * Depending on that the canonical URI might change.
   * Please, see
   * https://json-schema.org/draft-07/json-schema-core#rfc.section.8
   * https://json-schema.org/draft/2019-09/json-schema-core#rfc.section.8.2
   */
  val resolveRefPriorId: Boolean

  fun recursiveResolutionEnabled(schemaDefinition: JsonObject): Boolean

  sealed class RefHolder {
    data class Simple(
      val property: String,
      val refId: RefId,
    ) : RefHolder()

    data class Recursive(
      val property: String,
      val refId: RefId,
    ) : RefHolder()
  }
}

/**
 * Resolver for schema draft key words
 */
internal interface KeyWordResolver {
  /**
   * Returns the property name that is associated with [keyword] for current schema draft
   */
  fun resolve(keyword: KeyWord): String?
}