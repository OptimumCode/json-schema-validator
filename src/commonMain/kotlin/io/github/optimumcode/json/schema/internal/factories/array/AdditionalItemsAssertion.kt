package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class AdditionalItemsAssertion(
  private val assertion: JsonSchemaAssertion,
  private val indexAnnotationKey: AnnotationKey<Int>,
  private val annotationKey: AnnotationKey<Boolean>,
  private val returnIfNoIndex: Boolean,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonArray) {
      return true
    }
    val lastProcessedIndex: Int = context.annotationCollector.annotated(indexAnnotationKey)
      ?: if (returnIfNoIndex) {
        return true // items assertion is not used so this one should be ignored
      } else {
        -1
      }

    if (lastProcessedIndex == element.lastIndex) {
      // we have nothing to process here
      return true
    }
    var valid = true
    for ((index, el) in element.withIndex()) {
      if (index <= lastProcessedIndex) {
        continue
      }
      val res = assertion.validate(
        el,
        context.at(index),
        errorCollector,
      )
      valid = valid && res
    }

    if (valid) {
      context.annotationCollector.annotate(annotationKey, true)
    }

    return valid
  }
}