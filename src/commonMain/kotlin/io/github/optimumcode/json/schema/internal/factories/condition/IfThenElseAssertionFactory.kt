package io.github.optimumcode.json.schema.internal.factories.condition

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.AssertionFactory
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object IfThenElseAssertionFactory : AssertionFactory {
  private const val IF_PROPERTY: String = "if"
  private const val THEN_PROPERTY: String = "then"
  private const val ELSE_PROPERTY: String = "else"

  override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject && element.run {
      // we need to load all definitions because they can be referenced
      containsKey(IF_PROPERTY) || containsKey(THEN_PROPERTY) || containsKey(ELSE_PROPERTY)
    }
  }

  override fun create(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract properties from ${element::class.simpleName}" }
    val ifElement: JsonElement? = element[IF_PROPERTY]?.apply {
      require(context.isJsonSchema(this)) { "$IF_PROPERTY must be a valid JSON schema" }
    }
    val ifAssertion: JsonSchemaAssertion? = ifElement?.let(context.at(IF_PROPERTY)::schemaFrom)

    val thenAssertion: JsonSchemaAssertion? = loadOptionalAssertion(element, THEN_PROPERTY, context)
    val elseAssertion: JsonSchemaAssertion? = loadOptionalAssertion(element, ELSE_PROPERTY, context)

    return when {
      ifAssertion == null -> TrueSchemaAssertion // no if -> no effect
      thenAssertion == null && elseAssertion == null -> TrueSchemaAssertion // only if - no effect
      else -> IfThenElseAssertion(ifAssertion, thenAssertion, elseAssertion)
    }
  }

  private fun loadOptionalAssertion(
    jsonObject: JsonObject,
    property: String,
    context: LoadingContext,
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