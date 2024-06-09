package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AnnotationKeyFactory
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object PropertiesAssertionFactory : AbstractAssertionFactory("properties") {
  val ANNOTATION: AnnotationKey<Set<String>> = AnnotationKeyFactory.createAggregatable(property) { a, b -> a + b }

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonObject) { "$property must be an object" }
    val propAssertions: Map<String, JsonSchemaAssertion> =
      element.mapValues { (prop, element) ->
        require(context.isJsonSchema(element)) { "$prop must be a valid JSON schema" }
        context.at(prop).schemaFrom(element)
      }
    return PropertiesAssertion(context.schemaPath, propAssertions)
  }
}

private class PropertiesAssertion(
  private val location: JsonPointer,
  private val assertionsByProperty: Map<String, JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(location).use {
      if (assertionsByProperty.isEmpty()) {
        return@use true
      }
      if (element !is JsonObject) {
        return@use true
      }

      var result = true
      for ((prop, value) in element) {
        val propAssertion = assertionsByProperty[prop] ?: continue
        val ctx = context.at(prop)
        val valid =
          updateLocation(ctx.objectPath).use {
            propAssertion.validate(
              value,
              ctx,
              this,
            )
          }
        result = result && valid
      }

      context.annotationCollector.annotate(PropertiesAssertionFactory.ANNOTATION, assertionsByProperty.keys)

      result
    }
  }
}