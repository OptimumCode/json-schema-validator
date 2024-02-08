package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class UnevaluatedItemsAssertion(
  private val assertion: JsonSchemaAssertion,
  private val indexAnnotationKey: AnnotationKey<Int>,
  private val itemsAnnotationKey: AnnotationKey<Boolean>,
  private val selfAnnotationKey: AnnotationKey<Boolean>,
  private val processedIndexesKey: AnnotationKey<Set<Int>>? = null,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    if (element !is JsonArray) {
      return true
    }
    val annotationCollector: AnnotationCollector = context.annotationCollector
    val startIndex: Int = annotationCollector.aggregatedAnnotation(indexAnnotationKey) ?: -1
    if (startIndex == element.lastIndex) {
      // all items were evaluated
      return true
    }
    if (
      annotationCollector.aggregatedAnnotation(itemsAnnotationKey) == true ||
      annotationCollector.aggregatedAnnotation(selfAnnotationKey) == true
    ) {
      // all items evaluated by additional items
      return true
    }

    val processedIndexes: Set<Int> = processedIndexesKey?.let(annotationCollector::aggregatedAnnotation) ?: emptySet()

    var valid = true
    element.forEachIndexed { index, jsonElement ->
      if (index <= startIndex) {
        return@forEachIndexed
      }
      if (processedIndexes.contains(index)) {
        return@forEachIndexed
      }
      val result = assertion.validate(jsonElement, context.at(index), errorCollector)
      valid = valid and result
    }
    annotationCollector.annotate(selfAnnotationKey, true)
    return valid
  }
}