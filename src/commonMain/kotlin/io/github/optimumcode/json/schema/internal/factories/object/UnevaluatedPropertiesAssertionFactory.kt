package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object UnevaluatedPropertiesAssertionFactory : AbstractAssertionFactory("unevaluatedProperties") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKey.createAggregatable(property, Boolean::or)

  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    return UnevaluatedPropertiesAssertion(context.schemaFrom(element))
  }
}

private class UnevaluatedPropertiesAssertion(
  private val assertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
    }
    if (context.aggregatedAnnotation(AdditionalPropertiesAssertionFactory.ANNOTATION) == true) {
      // all properties are evaluated
      return true
    }
    if (context.aggregatedAnnotation(UnevaluatedPropertiesAssertionFactory.ANNOTATION) == true) {
      // all properties are evaluated by another unevaluatedProperties assertion
      return true
    }
    val evaluatedByProperties: Set<String>? =
      context.aggregatedAnnotation(PropertiesAssertionFactory.ANNOTATION)
    val evaluatedByPatternProps: Set<String>? =
      context.aggregatedAnnotation(PatternPropertiesAssertionFactory.ANNOTATION)
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
      context.annotate(UnevaluatedPropertiesAssertionFactory.ANNOTATION, true)
    }
    return valid
  }
}