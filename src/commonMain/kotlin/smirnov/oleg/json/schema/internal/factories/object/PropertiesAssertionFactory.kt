package smirnov.oleg.json.schema.internal.factories.`object`

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.AssertionFactory
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

@Suppress("unused")
internal object PropertiesAssertionFactory : AssertionFactory {
  private const val propertiesProperty: String = "properties"
  private const val patternPropertiesProperty: String = "patternProperties"
  private const val additionalPropertiesProperty: String = "additionalProperties"

  override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject && element.run {
      containsKey(propertiesProperty) ||
        containsKey(patternPropertiesProperty) ||
        containsKey(additionalPropertiesProperty)
    }
  }

  override fun create(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract properties from ${element::class.simpleName}" }
    val propertiesAssertions: Map<String, JsonSchemaAssertion> = extractPropertiesAssertions(element, context)
    val patternAssertions: Map<Regex, JsonSchemaAssertion> = extractPatternAssertions(element, context)
    val additionalProperties: JsonSchemaAssertion? = extractAdditionalProperties(element, context)
    return PropertiesAssertion(
      propertiesAssertions,
      patternAssertions,
      additionalProperties,
    )
  }

  private fun extractAdditionalProperties(jsonObject: JsonObject, context: LoadingContext): JsonSchemaAssertion? {
    if (jsonObject.isEmpty()) {
      return null
    }
    val additionalElement = jsonObject[additionalPropertiesProperty] ?: return null
    require(context.isJsonSchema(additionalElement)) { "$additionalPropertiesProperty must be a valid JSON schema" }
    return context.at(additionalPropertiesProperty).schemaFrom(additionalElement)
  }

  private fun extractPatternAssertions(
    jsonObject: JsonObject,
    context: LoadingContext,
  ): Map<Regex, JsonSchemaAssertion> {
    if (jsonObject.isEmpty()) {
      return emptyMap()
    }
    val propertiesElement = jsonObject[patternPropertiesProperty] ?: return emptyMap()
    require(propertiesElement is JsonObject) { "$patternPropertiesProperty must be an object" }
    if (propertiesElement.isEmpty()) {
      return emptyMap()
    }
    val propContext = context.at(patternPropertiesProperty)
    return propertiesElement.map { (pattern, element) ->
      require(propContext.isJsonSchema(element)) { "$pattern must be a valid JSON schema" }
      val regex = try {
        pattern.toRegex()
      } catch (exOrJsError: Throwable) { // because of JsError
        throw IllegalArgumentException("$pattern must be a valid regular expression", exOrJsError)
      }
      regex to propContext.at(pattern).schemaFrom(element)
    }.toMap()
  }

  private fun extractPropertiesAssertions(
    jsonObject: JsonObject,
    context: LoadingContext,
  ): Map<String, JsonSchemaAssertion> {
    if (jsonObject.isEmpty()) {
      return emptyMap()
    }
    val propertiesElement = jsonObject[propertiesProperty] ?: return emptyMap()
    require(propertiesElement is JsonObject) { "$propertiesProperty must be an object" }
    if (propertiesElement.isEmpty()) {
      return emptyMap()
    }
    val propertiesContext = context.at(propertiesProperty)
    return propertiesElement.mapValues { (prop, element) ->
      require(propertiesContext.isJsonSchema(element)) { "$prop must be a valid JSON schema" }
      propertiesContext.at(prop).schemaFrom(element)
    }
  }
}

private class PropertiesAssertion(
  private val propertiesAssertions: Map<String, JsonSchemaAssertion>,
  private val patternAssertions: Map<Regex, JsonSchemaAssertion>,
  private val additionalProperties: JsonSchemaAssertion?,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
    }
    var valid = true
    for ((prop, value) in element) {
      val propContext = context.at(prop)
      var triggered = false
      var res = propertiesAssertions[prop]?.run {
        triggered = true
        validate(
          value,
          propContext,
          errorCollector,
        )
      } ?: true
      valid = valid and res

      for ((pattern, assertion) in patternAssertions) {
        if (pattern.find(prop) != null) {
          triggered = true
          res = assertion.validate(
            value,
            propContext,
            errorCollector,
          )
          valid = valid and res
        }
      }
      if (triggered) {
        continue
      }
      res = additionalProperties?.validate(value, propContext, errorCollector) ?: true
      valid = valid and res
    }
    return valid
  }
}