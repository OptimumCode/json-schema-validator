package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class PrefixItemsAssertion(
  private val location: JsonPointer,
  private val prefixAssertions: List<JsonSchemaAssertion>,
  private val annotationKey: AnnotationKey<Int>,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(location).use {
      if (element !is JsonArray) {
        return@use true
      }
      var valid = true
      var lastProcessedIndex = -1
      for ((index, item) in element.withIndex()) {
        if (index < prefixAssertions.size) {
          val ctx = context.at(index)
          val result: Boolean =
            updateLocation(ctx.objectPath).use {
              prefixAssertions[index].validate(
                item,
                ctx,
                this,
              )
            }
          valid = valid && result
          lastProcessedIndex = index
        } else {
          break
        }
      }
      if (valid) {
        context.annotationCollector.annotate(annotationKey, lastProcessedIndex)
      }
      valid
    }
  }
}