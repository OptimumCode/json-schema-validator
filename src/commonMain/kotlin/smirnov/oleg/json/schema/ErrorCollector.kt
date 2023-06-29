package smirnov.oleg.json.schema

/**
 * Listener for validations error
 */
fun interface ErrorCollector {
  /**
   * Method is invoked on error during validation
   * @param error validation error
   */
  fun onError(error: ValidationError)
}