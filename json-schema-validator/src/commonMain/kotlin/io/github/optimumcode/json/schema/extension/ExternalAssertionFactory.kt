package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.schema.ExperimentalApi
import kotlinx.serialization.json.JsonElement

@ExperimentalApi
public interface ExternalAssertionFactory {
  /**
   * A keyword that is associated with the [ExternalAssertion] created by this factory.
   * This keyword **must not** overlap with any existing keywords for existing drafts.
   * If keyword overlaps with any keyword for any existing draft and [IllegalStateException] will be thrown
   * when this factory is registered in [io.github.optimumcode.json.schema.JsonSchemaLoader].
   *
   * NOTE: currently the library does not have **format** assertion implemented. But it will have.
   * If you decide to implement it as an [ExternalAssertion] please be aware
   * that one day this will cause an [IllegalStateException] as it was added to the library itself
   */
  public val keywordName: String

  /**
   * Creates corresponding [ExternalAssertion] form the passed [element].
   * The [element] matches the element specified in the schema under the [keywordName] provided by the factory
   *
   * @param context the [ExternalLoadingContext] associated with the [element].
   *
   * @return [ExternalAssertion] that correspond to the passed [element]
   * @throws IllegalArgumentException if [element] does not match the requirements for this [ExternalAssertion]
   */
  public fun create(
    element: JsonElement,
    context: ExternalLoadingContext,
  ): ExternalAssertion
}