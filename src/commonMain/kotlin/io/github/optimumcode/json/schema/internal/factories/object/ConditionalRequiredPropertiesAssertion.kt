package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlin.jvm.JvmStatic

internal class ConditionalRequiredPropertiesAssertion(
  private val path: JsonPointer,
  private val property: String,
  private val dependencies: Set<String>,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    if (element !is JsonObject) {
      return true
    }
    val missingProperties =
      dependencies.asSequence()
        .filter { !element.containsKey(it) }
        .toSet()
    if (missingProperties.isEmpty()) {
      return true
    }
    errorCollector.updateKeywordLocation(path).use {
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "has '$property' property but missing required dependencies: $missingProperties",
        ),
      )
    }
    return false
  }

  companion object {
    @JvmStatic
    fun createFromArray(
      property: String,
      array: JsonArray,
      context: LoadingContext,
    ): JsonSchemaAssertion {
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
}