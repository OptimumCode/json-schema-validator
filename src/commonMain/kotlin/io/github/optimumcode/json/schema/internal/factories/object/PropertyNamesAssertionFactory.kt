package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

@Suppress("unused")
internal object PropertyNamesAssertionFactory : AbstractAssertionFactory("propertyNames") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val propertyNamesAssertion = context.schemaFrom(element)
    return PropertyNamesAssertion(context.schemaPath, propertyNamesAssertion)
  }
}

private class PropertyNamesAssertion(
  private val location: JsonPointer,
  private val namesAssertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(location).use {
      if (element !is JsonObject) {
        return@use true
      }
      var valid = true
      element.keys.forEach { property ->
        val ctx = context.at(property)
        val res =
          updateLocation(ctx.objectPath).withErrorTransformer {
            it.copy(message = "property $property: ${it.message}")
          }.use {
            namesAssertion.validate(
              JsonPrimitive(property),
              ctx,
              this,
            )
          }
        valid = valid and res
      }
      valid
    }
  }
}