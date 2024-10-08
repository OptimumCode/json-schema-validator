package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.model.AbstractElement

internal interface JsonSchemaAssertion {
  /**
   * Validates passes [element].
   * If [element] does not pass the assertion returns `false`
   * and calls [OutputCollector.onError] on passed [errorCollector].
   * Otherwise, returns `true`.
   * Each [JsonSchemaAssertion] implementation MUST call [OutputCollector.updateKeywordLocation] to provide information
   * about assertion location.
   * If [JsonSchemaAssertion] implementation updates [AssertionContext.objectPath] it also must call
   * [OutputCollector.updateLocation] to update current instance location.
   *
   * @param element JSON element to validate
   * @param context context associated with the [element]
   * @param errorCollector handler for [io.github.optimumcode.json.schema.ValidationError] produced by assertion
   * @return `true` if element is valid against assertion. Otherwise, returns `false`
   */
  fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean
}