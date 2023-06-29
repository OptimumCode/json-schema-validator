package smirnov.oleg.json.schema.internal.factories

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

internal object EnumAssertionFactory : AbstractAssertionFactory("enum") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
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

  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (possibleElements.contains(element)) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "element is not in enum",
      )
    )
    return false
  }
}