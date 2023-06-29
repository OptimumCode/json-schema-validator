package smirnov.oleg.json.schema.internal.factories

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.div
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.AssertionFactory
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

internal object EnumAssertionFactory : AssertionFactory {
  private const val enumProperty: String = "enum"

  override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject && element.contains(enumProperty)
  }

  override fun create(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract $enumProperty property from ${element::class.simpleName}" }
    val enumElement = requireNotNull(element[enumProperty]) { "no property $enumProperty found in element $element" }
    require(enumElement is JsonArray) { "$enumProperty must be an array" }
    require(enumElement.isNotEmpty()) { "$enumProperty must have at least one element" }
    val uniqueElements = enumElement.toSet()
    require(uniqueElements.size == enumElement.size) { "$enumProperty must consist of unique elements" }
    return EnumAssertion(context.schemaPath / enumProperty, uniqueElements)
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