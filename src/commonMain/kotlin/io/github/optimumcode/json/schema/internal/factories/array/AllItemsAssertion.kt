package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal class AllItemsAssertion(
  private val itemAssertion: JsonSchemaAssertion,
  private val annotationKey: AnnotationKey<Int>,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    if (element !is JsonArray) {
      return true
    }
    var valid = true
    element.forEachIndexed { index, item ->
      val result =
        itemAssertion.validate(
          item,
          context.at(index),
          errorCollector,
        )
      valid = valid && result
    }
    if (valid) {
      context.annotationCollector.annotate(annotationKey, element.lastIndex)
    }
    return valid
  }
}