package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.pointer.JsonPointer

public interface ExternalLoadingContext {
  /**
   * A JSON pointer to the current position in schema associated with currently processing element
   */
  public val schemaPath: JsonPointer
}