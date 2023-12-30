package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class PrefixItemsAssertion(
  private val prefixAssertions: List<JsonSchemaAssertion>,
  private val annotationKey: AnnotationKey<Int>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonArray) {
      return true
    }
    var valid = true
    var lastProcessedIndex = -1
    for ((index, item) in element.withIndex()) {
      if (index < prefixAssertions.size) {
        val result: Boolean = prefixAssertions[index].validate(
          item,
          context.at(index),
          errorCollector,
        )
        valid = valid && result
        lastProcessedIndex = index
      } else {
        break
      }
    }
    if (valid) {
      context.annotate(annotationKey, lastProcessedIndex)
    }
    return valid
  }
}