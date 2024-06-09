package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AnnotationCollector
import io.github.optimumcode.json.schema.internal.AnnotationKeyFactory
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object AdditionalPropertiesAssertionFactory : AbstractAssertionFactory("additionalProperties") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKeyFactory.createAggregatable(property, Boolean::or)

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val schemaAssertion = context.schemaFrom(element)
    return AdditionalPropertiesAssertion(context.schemaPath, schemaAssertion)
  }
}

private class AdditionalPropertiesAssertion(
  private val location: JsonPointer,
  private val assertion: JsonSchemaAssertion,
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
      val annotationCollector: AnnotationCollector = context.annotationCollector
      val propertiesAnnotation: Set<String>? = annotationCollector.annotated(PropertiesAssertionFactory.ANNOTATION)
      val patternAnnotation: Set<String>? = annotationCollector.annotated(PatternPropertiesAssertionFactory.ANNOTATION)
      var result = true
      for ((prop, value) in element) {
        if (propertiesAnnotation?.contains(prop) == true) {
          continue
        }
        if (patternAnnotation?.contains(prop) == true) {
          continue
        }
        val ctx = context.at(prop)
        val valid =
          updateLocation(ctx.objectPath).use {
            assertion.validate(
              value,
              ctx,
              this,
            )
          }
        result = result && valid
      }
      if (result) {
        annotationCollector.annotate(AdditionalPropertiesAssertionFactory.ANNOTATION, true)
      }
      result
    }
  }
}