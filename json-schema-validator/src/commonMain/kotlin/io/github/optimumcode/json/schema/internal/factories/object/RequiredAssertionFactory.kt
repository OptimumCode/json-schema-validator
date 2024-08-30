package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.TrueSchemaAssertion
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ObjectElement
import io.github.optimumcode.json.schema.model.isEmpty
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlin.math.max

@Suppress("unused")
internal object RequiredAssertionFactory : AbstractAssertionFactory("required") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonArray) { "$property must be an array" }
    require(element.all { it is JsonPrimitive && it.isString }) { "$property must contain only strings" }
    val uniqueRequiredProperties = element.mapTo(linkedSetOf()) { (it as JsonPrimitive).content }
    require(uniqueRequiredProperties.size == element.size) { "$property must consist of unique elements" }
    return if (uniqueRequiredProperties.isEmpty()) {
      TrueSchemaAssertion
    } else {
      RequiredAssertion(context.schemaPath, uniqueRequiredProperties)
    }
  }
}

private class RequiredAssertion(
  private val path: JsonPointer,
  private val requiredProperties: Set<String>,
) : JsonSchemaAssertion {
  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(path).use {
      if (element !is ObjectElement) {
        return@use true
      }
      val missingProperties =
        if (element.isEmpty()) {
          requiredProperties
        } else {
          val keys = element.keys
          requiredProperties
            .filterNotTo(HashSet(max(requiredProperties.size / 2, 1))) { it in keys }
        }
      if (missingProperties.isEmpty()) {
        return@use true
      }
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "missing required properties: $missingProperties",
        ),
      )
      false
    }
  }
}