package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactory.Result
import io.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactory.Result.All
import io.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactory.Result.Index
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal object AdditionalItemsAssertionFactory : AbstractAssertionFactory("additionalItems") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKey.createAggregatable("additionalItems", Boolean::or)
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val assertion = context.schemaFrom(element)
    return AdditionalItemsAssertion(assertion)
  }
}

private class AdditionalItemsAssertion(
  private val assertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonArray) {
      return true
    }
    val lastProcessedIndex: Int = when (val result: Result? = context.annotated(ItemsAssertionFactory.ANNOTATION)) {
      All -> element.size
      is Index -> result.value
      null -> return true // items assertion is not used so this one should be ignored
    }
    if (lastProcessedIndex == element.size) {
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
      context.annotate(AdditionalItemsAssertionFactory.ANNOTATION, true)
    }

    return valid
  }
}