package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.schema.ErrorCollector

internal interface JsonSchemaAssertion {
  /**
   * Validates passes [element].
   * If [element] does not pass the assertion returns `false`
   * and calls [ErrorCollector.onError] on passed [errorCollector].
   * Otherwise, returns `true`
   *
   * @param element JSON element to validate
   * @param context context associated with the [element]
   * @param errorCollector handler for [smirnov.oleg.json.schema.ValidationError] produced by assertion
   * @return `true` if element is valid against assertion. Otherwise, returns `false`
   */
  fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean
}