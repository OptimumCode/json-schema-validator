package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.AssertionFactory
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

@Suppress("unused")
internal object ItemsAssertionFactory : AssertionFactory {
  private const val itemsProperty: String = "items"
  private const val additionalItemsProperty: String = "additionalItems"

  override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject &&
      element.run { contains(itemsProperty) }
  }

  override fun create(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract properties from ${element::class.simpleName}" }
    val itemsElement: JsonElement = requireNotNull(element[itemsProperty]) {
      "cannot extract $itemsProperty property from element"
    }
    val itemsContext = context.at(itemsProperty)
    val itemsAssertions: List<JsonSchemaAssertion> = if (itemsElement is JsonArray) {
      require(itemsElement.isNotEmpty()) { "$itemsProperty must have at least one element" }
      require(itemsElement.all(context::isJsonSchema)) {
        "all elements in $itemsProperty must be a valid JSON schema"
      }
      itemsElement.mapIndexed { index, item -> itemsContext.at(index).schemaFrom(item) }
    } else {
      require(context.isJsonSchema(itemsElement)) { "$itemsProperty must be a valid JSON schema" }
      listOf(itemsContext.schemaFrom(itemsElement))
    }

    val additionalItemsAssertion: JsonSchemaAssertion? = element[additionalItemsProperty]?.let {
      require(context.isJsonSchema(it)) { "$additionalItemsProperty must be a valid JSON schema" }
      context.at(additionalItemsProperty).schemaFrom(it)
    }
    return ElementsAssertion(itemsAssertions, itemsElement !is JsonArray, additionalItemsAssertion)
  }
}

private class ElementsAssertion(
  private val items: List<JsonSchemaAssertion>,
  private val allElements: Boolean,
  private val additionalItems: JsonSchemaAssertion?,
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
      validateWithAdditionalItems(element, context, errorCollector)
    }
  }

  private fun validateWithAdditionalItems(
    element: JsonArray,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    var valid = true
    element.forEachIndexed { index, item ->
      val result: Boolean
      if (index < items.size) {
        result = items[index].validate(
          item,
          context.at(index),
          errorCollector,
        )
      } else {
        if (additionalItems == null) {
          return valid
        }
        result = additionalItems.validate(
          item,
          context.at(index),
          errorCollector,
        )
      }
      valid = valid && result
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
    return valid
  }
}