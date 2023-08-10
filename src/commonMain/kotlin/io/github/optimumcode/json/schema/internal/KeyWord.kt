package io.github.optimumcode.json.schema.internal

/**
 * Schema keywords that can be used during schema parsing.
 * Depending on the schema version the corresponding JSON property will be extracted from Schema definition.
 */
internal enum class KeyWord {

  /**
   * Keyword that indicates the schema ID
   */
  ID,

  /**
   * Keyword that is used to define location-independent identifier
   */
  ANCHOR,

  /**
   * Keyword for definitions in current JSON schema
   */
  DEFINITIONS,

  /**
   * Keyword for old definitions property if current draft still supports that
   */
  COMPATIBILITY_DEFINITIONS,
}