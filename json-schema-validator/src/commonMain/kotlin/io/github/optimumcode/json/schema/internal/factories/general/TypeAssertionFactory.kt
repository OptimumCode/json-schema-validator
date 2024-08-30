package io.github.optimumcode.json.schema.internal.factories.general

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.util.parseNumberParts
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ArrayElement
import io.github.optimumcode.json.schema.model.ObjectElement
import io.github.optimumcode.json.schema.model.PrimitiveElement
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive

internal object TypeAssertionFactory : AbstractAssertionFactory("type") {
  private val typeValidations: Map<String, Validation> =
    linkedMapOf<String, (AbstractElement) -> Boolean>(
      "null" to { it is PrimitiveElement && it.isNull },
      "string" to { it is PrimitiveElement && it.isString },
      "boolean" to { it is PrimitiveElement && it.isBoolean },
      "number" to { it is PrimitiveElement && it.isNumber },
      "integer" to { it is PrimitiveElement && it.isNumber && parseNumberParts(it)?.fractional == 0L },
      "array" to { it is ArrayElement },
      "object" to { it is ObjectElement },
    ).mapValues { Validation(it.key, it.value) }

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    return when (element) {
      is JsonPrimitive -> createFromPrimitive(element, context)
      is JsonArray -> createFromArray(element, context)
      else -> throw IllegalArgumentException("$property must be either array or a string")
    }
  }

  private fun createFromArray(
    typeElement: JsonArray,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(typeElement.isNotEmpty()) { "$property must be a non empty array if it is not a string" }
    require(typeElement.all { it is JsonPrimitive && it.isString }) {
      "each $property element must be a string"
    }
    val types: List<String> = typeElement.map { (it as JsonPrimitive).content }
    require(types.toSet().size == types.size) { "array must consist of unique values" }
    val unknown = types.filter { it !in typeValidations.keys }
    require(unknown.isEmpty()) { "unknown types $unknown (known: ${typeValidations.keys})" }
    return TypeAssertion(context.schemaPath, types.map { requireNotNull(typeValidations[it]) { "unknown type $it" } })
  }

  private fun createFromPrimitive(
    typeElement: JsonPrimitive,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(typeElement.isString) { "$property must be a string if it is not an array" }
    val type = typeElement.content
    val validation: Validation =
      requireNotNull(typeValidations[type]) { "unknown type '$type' (known: ${typeValidations.keys})" }
    return TypeAssertion(context.schemaPath, listOf(validation))
  }
}

private class Validation(
  val name: String,
  val check: (AbstractElement) -> Boolean,
)

private class TypeAssertion(
  private val path: JsonPointer,
  private val validations: List<Validation>,
) : JsonSchemaAssertion {
  init {
    require(validations.isNotEmpty()) { "empty validations" }
  }

  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(path).use {
      val match = validations.any { it.check(element) }
      if (!match) {
        onError(
          ValidationError(
            schemaPath = path,
            objectPath = context.objectPath,
            message =
              when (validations.size) {
                1 -> "element is not a ${validations.first().name}"
                else -> "element is none of ${validations.joinToString(prefix = "[", postfix = "]") { it.name }}"
              },
          ),
        )
      }
      match
    }
  }
}