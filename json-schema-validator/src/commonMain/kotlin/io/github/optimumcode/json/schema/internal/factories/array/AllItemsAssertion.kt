package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class AllItemsAssertion(
  private val location: JsonPointer,
  private val itemAssertion: JsonSchemaAssertion,
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
      element.forEachIndexed { index, item ->
        val ctx = context.at(index)
        val result =
          updateLocation(ctx.objectPath).use {
            itemAssertion.validate(
              item,
              ctx,
              this,
            )
          }
        valid = valid && result
      }
      if (valid) {
        context.annotationCollector.annotate(annotationKey, element.lastIndex)
      }
      return@use valid
    }
  }
}