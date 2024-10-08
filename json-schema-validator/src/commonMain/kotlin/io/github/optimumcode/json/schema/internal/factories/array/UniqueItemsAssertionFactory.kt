package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.util.areEqual
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ArrayElement
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull

@Suppress("unused")
internal object UniqueItemsAssertionFactory : AbstractAssertionFactory("uniqueItems") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonPrimitive && !element.isString) { "$property must be a boolean" }
    val uniqueItemsValue = requireNotNull(element.booleanOrNull) { "$property must be a boolean" }
    return if (uniqueItemsValue) {
      UniqueItemsAssertion(context.schemaPath)
    } else {
      TrueSchemaAssertion
    }
  }
}

private class UniqueItemsAssertion(
  private val path: JsonPointer,
) : JsonSchemaAssertion {
  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(path).use {
      if (element !is ArrayElement) {
        return@use true
      }
      if (element.size < 2) {
        return@use true
      }
      var duplicates: MutableList<AbstractElement>? = null
      val uniqueItems =
        buildList {
          element.forEach { el ->
            if (none { areEqual(it, el) }) {
              add(el)
            } else {
              if (duplicates == null) {
                duplicates = mutableListOf()
              }
              duplicates.add(el)
            }
          }
        }
      val uniqueItemsCount = uniqueItems.size
      if (uniqueItemsCount == element.size) {
        return@use true
      }
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "array contains duplicate values: ${
            duplicates?.joinToString(
              prefix = "[",
              postfix = "]",
              separator = ",",
            )
          }",
        ),
      )
      false
    }
  }
}