package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ArrayElement
import io.github.optimumcode.json.schema.model.lastIndex

internal class AdditionalItemsAssertion(
  private val location: JsonPointer,
  private val assertion: JsonSchemaAssertion,
  private val indexAnnotationKey: AnnotationKey<Int>,
  private val annotationKey: AnnotationKey<Boolean>,
  private val returnIfNoIndex: Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(location).use {
      if (element !is ArrayElement) {
        return@use true
      }
      val lastProcessedIndex: Int =
        context.annotationCollector.annotated(indexAnnotationKey)
          ?: if (returnIfNoIndex) {
            return@use true // items assertion is not used so this one should be ignored
          } else {
            -1
          }

      if (lastProcessedIndex == element.lastIndex) {
        // we have nothing to process here
        return@use true
      }
      var valid = true
      for ((index, el) in element.withIndex()) {
        if (index <= lastProcessedIndex) {
          continue
        }
        val ctx = context.at(index)
        val res =
          updateLocation(ctx.objectPath).use {
            assertion.validate(
              el,
              ctx,
              this,
            )
          }
        valid = valid && res
      }

      if (valid) {
        context.annotationCollector.annotate(annotationKey, true)
      }

      return@use valid
    }
  }
}