package io.github.optimumcode.json.schema.internal

import kotlinx.serialization.json.JsonElement

internal interface AssertionFactory {
  /**
   * Property that should contain element to create an [JsonSchemaAssertion]
   */
  val property: String

  /**
   * Checks whether the factory can create an assertion from the [element].
   *
   * @return `true` if factory can create an assertion from [element].
   *          Otherwise, returns `false`
   */
  fun isApplicable(element: JsonElement): Boolean

  /**
   * Creates corresponding [JsonSchemaAssertion] form the passed [element].
   * If [isApplicable] method returned `false` this method will throw [IllegalArgumentException]
   *
   * @return [JsonSchemaAssertion] that correspond to the passed [element]
   * @throws IllegalArgumentException if [isApplicable] method call returns `false` for the [element]
   */
  fun create(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion
}