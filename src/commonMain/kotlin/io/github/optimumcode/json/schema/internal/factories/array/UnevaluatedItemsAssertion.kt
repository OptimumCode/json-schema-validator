package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class UnevaluatedItemsAssertion(
  private val assertion: JsonSchemaAssertion,
  private val indexAnnotationKey: AnnotationKey<Int>,
  private val itemsAnnotationKey: AnnotationKey<Boolean>,
  private val selfAnnotationKey: AnnotationKey<Boolean>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonArray) {
      return true
    }
    val startIndex: Int = context.aggregatedAnnotation(indexAnnotationKey) ?: -1
    if (startIndex == element.lastIndex) {
      // all items were evaluated
      return true
    }
    if (
      context.aggregatedAnnotation(itemsAnnotationKey) == true ||
      context.aggregatedAnnotation(selfAnnotationKey) == true
    ) {
      // all items evaluated by additional items
      return true
    }

    var valid = true
    element.forEachIndexed { index, jsonElement ->
      if (index <= startIndex) {
        return@forEachIndexed
      }
      val result = assertion.validate(jsonElement, context.at(index), errorCollector)
      valid = valid and result
    }
    context.annotate(selfAnnotationKey, true)
    return valid
  }
}