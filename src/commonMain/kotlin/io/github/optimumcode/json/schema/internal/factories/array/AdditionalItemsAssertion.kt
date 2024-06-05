package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class AdditionalItemsAssertion(
  private val location: JsonPointer,
  private val assertion: JsonSchemaAssertion,
  private val indexAnnotationKey: AnnotationKey<Int>,
  private val annotationKey: AnnotationKey<Boolean>,
  private val returnIfNoIndex: Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    if (element !is JsonArray) {
      return true
    }
    val lastProcessedIndex: Int =
      context.annotationCollector.annotated(indexAnnotationKey)
        ?: if (returnIfNoIndex) {
          return true // items assertion is not used so this one should be ignored
        } else {
          -1
        }

    if (lastProcessedIndex == element.lastIndex) {
      // we have nothing to process here
      return true
    }
    val valid =
      errorCollector.updateKeywordLocation(location).use {
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
        valid
      }

    if (valid) {
      context.annotationCollector.annotate(annotationKey, true)
    }

    return valid
  }
}