package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationCollector
import io.github.optimumcode.json.schema.internal.AnnotationKeyFactory
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object UnevaluatedPropertiesAssertionFactory : AbstractAssertionFactory("unevaluatedProperties") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKeyFactory.createAggregatable(property, Boolean::or)

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    return UnevaluatedPropertiesAssertion(context.schemaFrom(element))
  }
}

private class UnevaluatedPropertiesAssertion(
  private val assertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    if (element !is JsonObject) {
      return true
    }
    val annotationCollector: AnnotationCollector = context.annotationCollector
    if (annotationCollector.aggregatedAnnotation(AdditionalPropertiesAssertionFactory.ANNOTATION) == true) {
      // all properties are evaluated
      return true
    }
    if (annotationCollector.aggregatedAnnotation(UnevaluatedPropertiesAssertionFactory.ANNOTATION) == true) {
      // all properties are evaluated by another unevaluatedProperties assertion
      return true
    }
    val evaluatedByProperties: Set<String>? =
      annotationCollector.aggregatedAnnotation(PropertiesAssertionFactory.ANNOTATION)
    val evaluatedByPatternProps: Set<String>? =
      annotationCollector.aggregatedAnnotation(PatternPropertiesAssertionFactory.ANNOTATION)
    var valid = true
    for ((prop, el) in element) {
      if (evaluatedByProperties?.contains(prop) == true) {
        continue
      }
      if (evaluatedByPatternProps?.contains(prop) == true) {
        continue
      }
      val result = assertion.validate(el, context.at(prop), errorCollector)
      valid = valid and result
    }
    if (valid) {
      annotationCollector.annotate(UnevaluatedPropertiesAssertionFactory.ANNOTATION, true)
    }
    return valid
  }
}