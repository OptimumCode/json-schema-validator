package com.github.optimumcode.json.schema.internal.factories.array

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.ErrorCollector
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.internal.AssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
import com.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import com.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull

@Suppress("unused")
internal object UniqueItemsAssertionFactory : AbstractAssertionFactory("uniqueItems") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
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
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonArray) {
      return true
    }
    if (element.size < 2) {
      return true
    }
    val uniqueItems = element.mapTo(linkedSetOf()) { it }
    val uniqueItemsCount = uniqueItems.size
    if (uniqueItemsCount == element.size) {
      return true
    }
    uniqueItems.clear()
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "array contains duplicate values: ${element.asSequence().filter(uniqueItems::add).joinToString(
          prefix = "[",
          postfix = "]",
          separator = ",",
        )}",
      ),
    )
    return false
  }
}