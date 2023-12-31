package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object AdditionalPropertiesAssertionFactory : AbstractAssertionFactory("additionalProperties") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKey.createAggregatable(property, Boolean::or)
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val schemaAssertion = context.schemaFrom(element)
    return AdditionalPropertiesAssertion(schemaAssertion)
  }
}

private class AdditionalPropertiesAssertion(
  private val assertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
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
      val valid = assertion.validate(
        value,
        context.at(prop),
        errorCollector,
      )
      result = result && valid
    }
    if (result) {
      annotationCollector.annotate(AdditionalPropertiesAssertionFactory.ANNOTATION, true)
    }
    return result
  }
}