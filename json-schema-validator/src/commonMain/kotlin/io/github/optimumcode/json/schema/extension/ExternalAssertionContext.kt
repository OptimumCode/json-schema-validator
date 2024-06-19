package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.pointer.JsonPointer

public interface ExternalAssertionContext {
  /**
   * A JSON pointer to the currently validating element in the object that is being validated
   */
  public val objectPath: JsonPointer

  /**
   * The [ExternalAnnotationCollector] associated with currently validating element
   */
  public val annotationCollector: ExternalAnnotationCollector
}