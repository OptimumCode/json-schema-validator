package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.ExperimentalApi
import io.github.optimumcode.json.schema.model.AbstractElement
import kotlinx.serialization.json.JsonElement

/**
 * This interface allows you to implement your own schema assertion.
 * This interface **does not** allow implementing custom applicators.
 * Only simple assertions (like: _format_, _type_) can be implemented.
 *
 * If you create an implementation of [ExternalAssertion] that will be shared with others
 * please make sure that it will be state-less since it might be invoked from different threads.
 */
@Suppress("detekt:ForbiddenComment")
@ExperimentalApi
public interface ExternalAssertion {
  /**
   * Validates passes [element].
   * If [element] does not pass the assertion returns `false`
   * and calls [ErrorCollector.onError] on passed [errorCollector].
   * Otherwise, returns `true`
   *
   * You should follow the rules from JSON specification.
   * E.g. element passes assertion if it has a different type from that the assertion expects.
   * This would mean for 'format' assertion if the [element] is not a primitive the assertion must pass
   *
   * @param element JSON element to validate
   * @param context [ExternalAssertionContext] associated with the [element]
   * @param errorCollector handler for [io.github.optimumcode.json.schema.ValidationError] produced by assertion
   * @return `true` if element is valid against assertion. Otherwise, returns `false`
   */
  public fun validate(
    element: AbstractElement,
    context: ExternalAssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean = throw NotImplementedError("please override the method in your implementation")

  @Deprecated(
    message = "override validate(AbstractElement, ExternalAssertionContext, ErrorCollector) instead",
    level = DeprecationLevel.ERROR,
  )
  public fun validate(
    element: JsonElement,
    context: ExternalAssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean = throw UnsupportedOperationException("please use validate method with AbstractElement parameter")
}