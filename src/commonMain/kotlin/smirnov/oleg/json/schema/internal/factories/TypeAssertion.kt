package smirnov.oleg.json.schema.internal.factories

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.div
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.AssertionFactory
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

internal object TypeAssertionFactory : AssertionFactory {
  private const val typeProperty: String = "type"

  private val typeValidations: Map<String, Validation> = mapOf<String, (JsonElement) -> Boolean>(
    "null" to { it is JsonNull },
    "string" to { it is JsonPrimitive && it.isString },
    "boolean" to { it is JsonPrimitive && !it.isString && it.booleanOrNull != null },
    "number" to { it is JsonPrimitive && !it.isString && (it.doubleOrNull != null || it.longOrNull != null) },
    "integer" to { it is JsonPrimitive && !it.isString && it.longOrNull != null },
    "array" to { it is JsonArray },
    "object" to { it is JsonObject },
  ).mapValues { Validation(it.key, it.value) }

  override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject && element.contains(typeProperty)
  }

  override fun create(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract $typeProperty property from ${element::class.simpleName}" }
    val typeElement = requireNotNull(element[typeProperty]) { "no property $typeProperty found in element $element" }
    return when (typeElement) {
      is JsonPrimitive -> createFromPrimitive(typeElement, context)
      is JsonArray -> createFromArray(typeElement, context)
      else -> throw IllegalArgumentException("$typeProperty must be either array or a primitive")
    }
  }

  private fun createFromArray(typeElement: JsonArray, context: LoadingContext): JsonSchemaAssertion {
    require(typeElement.isNotEmpty()) { "$typeProperty must be a non empty array if it is not a string" }
    require(typeElement.all { it is JsonPrimitive && it.isString }) {
      "each element must be a string"
    }
    val types: List<String> = typeElement.map { (it as JsonPrimitive).content }
    require(types.toSet().size == types.size) { "array must consist of unique values" }
    val unknown = types.filter { it !in typeValidations.keys }
    require(unknown.isEmpty()) { "unknown types: $unknown (known: ${typeValidations.keys})" }
    return TypeAssertion(context.schemaPath / typeProperty, types.map { requireNotNull(typeValidations[it]) { "unknown type $it" } })
  }

  private fun createFromPrimitive(typeElement: JsonPrimitive, context: LoadingContext): JsonSchemaAssertion {
    require(typeElement.isString) { "$typeProperty must be a string if it is not an array" }
    val type = typeElement.content
    val validation: Validation =
      requireNotNull(typeValidations[type]) { "unknown type $type (known: ${typeValidations.keys})" }
    return TypeAssertion(context.schemaPath / typeProperty, listOf(validation))
  }
}

private class Validation(
  val name: String,
  val check: (JsonElement) -> Boolean,
)

private class TypeAssertion(
  private val path: JsonPointer,
  private val validations: List<Validation>,
) : JsonSchemaAssertion {
  init {
    require(validations.isNotEmpty()) { "empty validations" }
  }

  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    val match = validations.any { it.check(element) }
    if (!match) {
      errorCollector.onError(ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = when (validations.size) {
          1 -> "element is not a ${validations.first().name}"
          else -> "element is none of ${validations.joinToString(prefix = "[", postfix = "]") { it.name }}"
        },
      ))
    }
    return match
  }
}