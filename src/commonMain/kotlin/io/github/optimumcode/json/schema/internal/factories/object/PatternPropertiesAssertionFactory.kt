package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object PatternPropertiesAssertionFactory : AbstractAssertionFactory("patternProperties") {
  val ANNOTATION: AnnotationKey<Set<String>> = AnnotationKey.create(property)

  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "$property must be an object" }
    val propAssertions: Map<Regex, JsonSchemaAssertion> = element.asSequence().associate { (prop, element) ->
      require(context.isJsonSchema(element)) { "$prop must be a valid JSON schema" }
      val regex = try {
        prop.toRegex()
      } catch (exOrJsError: Throwable) { // because of JsError
        throw IllegalArgumentException("$prop must be a valid regular expression", exOrJsError)
      }
      regex to context.at(prop).schemaFrom(element)
    }
    return PatternAssertion(propAssertions)
  }
}

private class PatternAssertion(
  private val assertionsByRegex: Map<Regex, JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
    }

    if (assertionsByRegex.isEmpty()) {
      return true
    }

    var result = true
    var checkedProps: MutableSet<String>? = null
    for ((prop, value) in element) {
      val matchedRegex = assertionsByRegex.filter { (regex) ->
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
      for ((_, assertion) in matchedRegex) {
        val valid = assertion.validate(
          value,
          propContext,
          errorCollector,
        )
        result = result && valid
      }
    }

    if (checkedProps != null) {
      context.annotate(PatternPropertiesAssertionFactory.ANNOTATION, checkedProps)
    }

    return result
  }
}