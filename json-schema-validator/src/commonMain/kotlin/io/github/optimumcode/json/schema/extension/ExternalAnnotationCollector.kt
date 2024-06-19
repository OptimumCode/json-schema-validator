package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.schema.AnnotationKey

public interface ExternalAnnotationCollector {
  /**
   * Adds annotation with provided [key]
   */
  public fun <T : Any> annotate(
    key: AnnotationKey<T>,
    value: T,
  )

  /**
   * Checks if there is an annotation with provided [key] and returns it if exists
   */
  public fun <T : Any> annotated(key: AnnotationKey<T>): T?
}