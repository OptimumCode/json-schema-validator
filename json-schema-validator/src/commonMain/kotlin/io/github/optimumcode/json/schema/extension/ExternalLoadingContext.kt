package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ExperimentalApi

@ExperimentalApi
public interface ExternalLoadingContext {
  /**
   * A JSON pointer to the current position in schema associated with currently processing element
   */
  public val schemaPath: JsonPointer
}