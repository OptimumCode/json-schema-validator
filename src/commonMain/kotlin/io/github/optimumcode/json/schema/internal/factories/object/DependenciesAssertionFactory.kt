package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

@Suppress("unused")
internal object DependenciesAssertionFactory : AbstractAssertionFactory("dependencies") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "$property must be an object" }
    if (element.isEmpty()) {
      return TrueSchemaAssertion
    }
    val assertions = loadAssertions(element, context)
    return DependenciesAssertion(assertions)
  }

  private fun loadAssertions(jsonObject: JsonObject, context: LoadingContext): Map<String, JsonSchemaAssertion> {
    return jsonObject.mapValues { (prop, element) ->
      val propContext = context.at(prop)
      when {
        context.isJsonSchema(element) -> propContext.schemaFrom(element)
        element is JsonArray -> createFromArray(prop, element, propContext)
        else -> throw IllegalArgumentException("$prop dependency must be either array of strings or valid JSON schema")
      }
    }
  }

  private fun createFromArray(property: String, array: JsonArray, context: LoadingContext): JsonSchemaAssertion {
    require(array.all { it is JsonPrimitive && it.isString }) { "$property must contain only strings" }
    val uniqueRequiredProperties = array.mapTo(linkedSetOf()) { (it as JsonPrimitive).content }
    require(uniqueRequiredProperties.size == array.size) { "$property must consist of unique elements" }
    return if (uniqueRequiredProperties.isEmpty()) {
      TrueSchemaAssertion
    } else {
      ConditionalRequiredPropertiesAssertion(context.schemaPath, property, uniqueRequiredProperties)
    }
  }
}

private class DependenciesAssertion(
  private val dependenciesAssertions: Map<String, JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
    }
    var valid = true
    for ((dependency, assertion) in dependenciesAssertions) {
      if (dependency !in element) {
        continue
      }
      val res = assertion.validate(element, context, errorCollector)
      valid = valid and res
    }
    return valid
  }
}

private class ConditionalRequiredPropertiesAssertion(
  private val path: JsonPointer,
  private val property: String,
  private val dependencies: Set<String>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
    }
    val missingProperties = dependencies.asSequence()
      .filter { !element.containsKey(it) }
      .toSet()
    if (missingProperties.isEmpty()) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "has '$property' property but missing required dependencies: $missingProperties",
      ),
    )
    return false
  }
}