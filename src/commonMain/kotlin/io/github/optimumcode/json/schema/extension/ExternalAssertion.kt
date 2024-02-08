package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.schema.ErrorCollector
import kotlinx.serialization.json.JsonElement

/**
 * This interface allows you to implement your own schema assertion.
 * This interface **does not** allow implementing custom applicators.
 * Only simple assertions (like: _format_, _type_) can be implemented.
 */
public interface ExternalAssertion {
  /**
   * Validates passes [element].
   * If [element] does not pass the assertion returns `false`
   * and calls [ErrorCollector.onError] on passed [errorCollector].
   * Otherwise, returns `true`
   *
   * @param element JSON element to validate
   * @param context [ExternalAssertionContext] associated with the [element]
   * @param errorCollector handler for [io.github.optimumcode.json.schema.ValidationError] produced by assertion
   * @return `true` if element is valid against assertion. Otherwise, returns `false`
   */
  public fun validate(
    element: JsonElement,
    context: ExternalAssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean
}