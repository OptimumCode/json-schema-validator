package smirnov.oleg.json.schema

import kotlin.jvm.JvmField

/**
 * Listener for validations error
 */
fun interface ErrorCollector {
  /**
   * Method is invoked on error during validation
   * @param error validation error
   */
  fun onError(error: ValidationError)

  companion object {
    @JvmField
    val EMPTY: ErrorCollector = ErrorCollector { }
  }
}