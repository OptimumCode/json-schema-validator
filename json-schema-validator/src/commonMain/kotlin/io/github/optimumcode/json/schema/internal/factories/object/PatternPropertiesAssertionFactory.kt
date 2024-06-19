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

internal object PatternPropertiesAssertionFactory : AbstractAssertionFactory("patternProperties") {
  val ANNOTATION: AnnotationKey<Set<String>> = AnnotationKeyFactory.createAggregatable(property) { a, b -> a + b }

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonObject) { "$property must be an object" }
    val propAssertions: Map<Regex, JsonSchemaAssertion> =
      element.asSequence().associate { (prop, element) ->
        require(context.isJsonSchema(element)) { "$prop must be a valid JSON schema" }
        val regex =
          try {
            prop.toRegex()
          } catch (exOrJsError: Throwable) {
            // because of JsError
            throw IllegalArgumentException("$prop must be a valid regular expression", exOrJsError)
          }
        regex to context.at(prop).schemaFrom(element)
      }
    return PatternAssertion(context.schemaPath, propAssertions)
  }
}

private class PatternAssertion(
  private val location: JsonPointer,
  private val assertionsByRegex: Map<Regex, JsonSchemaAssertion>,
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

      if (assertionsByRegex.isEmpty()) {
        return@use true
      }

      var result = true
      var checkedProps: MutableSet<String>? = null
      for ((prop, value) in element) {
        val matchedRegex =
          assertionsByRegex.filter { (regex) ->
            regex.find(prop) != null
          }
        if (matchedRegex.isEmpty()) {
          continue
        }
        if (checkedProps == null) {
          // initialize props
          checkedProps = hashSetOf()
        }
        checkedProps.add(prop)
        val propContext = context.at(prop)
        updateLocation(propContext.objectPath).use {
          for ((_, assertion) in matchedRegex) {
            val valid =
              assertion.validate(
                value,
                propContext,
                this,
              )
            result = result && valid
          }
        }
      }

      checkedProps?.also {
        context.annotationCollector.annotate(PatternPropertiesAssertionFactory.ANNOTATION, it)
      }

      result
    }
  }
}