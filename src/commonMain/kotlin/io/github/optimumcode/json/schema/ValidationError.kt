package io.github.optimumcode.json.schema

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer

/**
 * [ValidationError] contains information about the assertion that failed during the validation
 */
public data class ValidationError(
  /**
   * Path to the assertion definition in schema
   */
  val schemaPath: JsonPointer,
  /**
   * Path in the object that failed validation against the schema in [schemaPath]
   */
  val objectPath: JsonPointer,
  /**
   * Validation error message
   */
  val message: String,
  /**
   * Additional details about error
   */
  val details: Map<String, String> = emptyMap(),
  /**
   * The absolute path to triggered assertion if the $ref was used
   */
  val absoluteLocation: Uri? = null,
)