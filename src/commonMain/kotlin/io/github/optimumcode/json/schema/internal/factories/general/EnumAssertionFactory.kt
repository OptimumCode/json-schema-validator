package io.github.optimumcode.json.schema.internal.factories.general

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.util.areEqual
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal object EnumAssertionFactory : AbstractAssertionFactory("enum") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonArray) { "$property must be an array" }
    require(element.isNotEmpty()) { "$property must have at least one element" }
    val uniqueElements = element.toSet()
    require(uniqueElements.size == element.size) { "$property must consist of unique elements" }
    return EnumAssertion(context.schemaPath, uniqueElements)
  }
}

private class EnumAssertion(
  private val path: JsonPointer,
  private val possibleElements: Set<JsonElement>,
) : JsonSchemaAssertion {
  init {
    require(possibleElements.isNotEmpty()) { "at least one element must be set" }
  }

  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    errorCollector.updateKeywordLocation(path).use {
      if (possibleElements.any { areEqual(it, element) }) {
        return true
      }

      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "element is not in enum",
        ),
      )
    }
    return false
  }
}