package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactory.Result
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

@Suppress("unused")
internal object ItemsAssertionFactory : AbstractAssertionFactory("items") {
  sealed class Result {
    object All : Result()
    class Index(val value: Int) : Result()
  }

  val ANNOTATION: AnnotationKey<Result> = AnnotationKey.create(property)

  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    val itemsAssertions: List<JsonSchemaAssertion> = if (element is JsonArray) {
      require(element.isNotEmpty()) { "$property must have at least one element" }
      require(element.all(context::isJsonSchema)) {
        "all elements in $property must be a valid JSON schema"
      }
      element.mapIndexed { index, item -> context.at(index).schemaFrom(item) }
    } else {
      require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
      listOf(context.schemaFrom(element))
    }
    return ItemsAssertion(itemsAssertions, element !is JsonArray)
  }
}

private class ItemsAssertion(
  private val items: List<JsonSchemaAssertion>,
  private val allElements: Boolean,
) : JsonSchemaAssertion {
  init {
    if (allElements) {
      require(items.size == 1) { "allElements should be set only if items as 1 element" }
    }
  }
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonArray) {
      return true
    }
    return if (allElements) {
      validateEachItem(element, context, errorCollector)
    } else {
      validateElementsAtIndexes(element, context, errorCollector)
    }
  }

  private fun validateElementsAtIndexes(
    element: JsonArray,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    var valid = true
    var lastProcessedIndex = -1
    for ((index, item) in element.withIndex()) {
      if (index < items.size) {
        val result: Boolean = items[index].validate(
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
      context.annotate(ItemsAssertionFactory.ANNOTATION, Result.Index(lastProcessedIndex))
    }
    return valid
  }

  private fun validateEachItem(
    element: JsonArray,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    val itemAssertion = items.single()
    var valid = true
    element.forEachIndexed { index, item ->
      val result = itemAssertion.validate(
        item,
        context.at(index),
        errorCollector,
      )
      valid = valid && result
    }
    if (valid) {
      context.annotate(ItemsAssertionFactory.ANNOTATION, Result.All)
    }
    return valid
  }
}