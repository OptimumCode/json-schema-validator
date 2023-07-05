package smirnov.oleg.json.schema.internal.factories.condition

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ErrorCollector.Companion
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.AssertionFactory
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

internal object IfThenElseAssertionFactory : AssertionFactory {
  private const val ifProperty: String = "if"
  private const val thenProperty: String = "then"
  private const val elseProperty: String = "else"

  override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject && element.run {
      // there is not point to extract the assertion when only `if` is present
      containsKey(ifProperty) && (containsKey(thenProperty) || containsKey(elseProperty))
    }
  }

  override fun create(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract properties from ${element::class.simpleName}" }
    val ifElement = requireNotNull(element[ifProperty]) { "no property $ifProperty found in element $element" }
    require(context.isJsonSchema(ifElement)) { "$ifProperty must be a valid JSON schema" }
    val ifAssertion: JsonSchemaAssertion = context.at(ifProperty).schemaFrom(ifElement)

    val thenAssertion: JsonSchemaAssertion? = loadOptionalAssertion(element, thenProperty, context)
    val elseAssertion: JsonSchemaAssertion? = loadOptionalAssertion(element, elseProperty, context)

    require(thenAssertion != null || elseAssertion != null) {
      "either $thenProperty or $elseProperty must be specified"
    }
    return IfThenElseAssertion(ifAssertion, thenAssertion, elseAssertion)
  }

  private fun loadOptionalAssertion(
    jsonObject: JsonObject,
    property: String,
    context: LoadingContext
  ): JsonSchemaAssertion? {
    val element = jsonObject[property] ?: return null
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    return context.at(property).schemaFrom(element)
  }
}

private class IfThenElseAssertion(
  private val ifAssertion: JsonSchemaAssertion,
  private val thenAssertion: JsonSchemaAssertion?,
  private val elseAssertion: JsonSchemaAssertion?,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    return if (ifAssertion.validate(element, context, ErrorCollector.EMPTY)) {
      thenAssertion?.validate(element, context, errorCollector) ?: true
    } else {
      elseAssertion?.validate(element, context, errorCollector) ?: true
    }
  }
}