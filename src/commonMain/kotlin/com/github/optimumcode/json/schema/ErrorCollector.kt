package com.github.optimumcode.json.schema

import kotlin.jvm.JvmField

/**
 * Listener for validations error
 */
public fun interface ErrorCollector {
  /**
   * Method is invoked on error during validation
   * @param error validation error
   */
  public fun onError(error: ValidationError)

  public companion object {
    @JvmField
    public val EMPTY: ErrorCollector = ErrorCollector { }
  }
}