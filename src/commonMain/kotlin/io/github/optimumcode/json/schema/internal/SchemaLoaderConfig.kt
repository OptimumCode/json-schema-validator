package io.github.optimumcode.json.schema.internal

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal interface SchemaLoaderConfig {
  fun factories(schemaDefinition: JsonElement): List<AssertionFactory>
  val keywordResolver: KeyWordResolver
  val referenceFactory: ReferenceFactory
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
  fun extractRef(schemaDefinition: JsonObject, context: SchemaLoaderContext): RefHolder?

  /**
   * Defines whether the other schema properties should be loaded when reference is present
   */
  val allowOverriding: Boolean

  data class RefHolder(
    val property: String,
    val refId: RefId,
  )
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