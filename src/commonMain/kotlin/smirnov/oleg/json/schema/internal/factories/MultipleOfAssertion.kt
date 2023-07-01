package smirnov.oleg.json.schema.internal.factories

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

@Suppress("unused")
internal object MultipleOfAssertionFactory : AbstractAssertionFactory("multipleOf") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive) { "$property must be a number" }
    val multipleOfValue: Number =
      requireNotNull(element.longOrNull ?: element.doubleOrNull) { "$property must be a valid number" }
    require(when (multipleOfValue) {
      is Double -> multipleOfValue > 0.0
      is Long -> multipleOfValue > 0
      else -> error("unexpected value type ${multipleOfValue::class.simpleName}")
    }) { "$property value ${element.content} must be greater than zero" }
    return MultipleOfAssertion(context.schemaPath, multipleOfValue)
  }
}

private class MultipleOfAssertion(
  private val path: JsonPointer,
  private val multipleOfValue: Number,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonPrimitive || element.isString) {
      return true
    }
    val isMultipleOf = when (val number = element.longOrNull ?: element.doubleOrNull) {
      is Double -> number isMultipleOf multipleOfValue
      is Long -> number isMultipleOf multipleOfValue
      null -> true
      else -> false
    }
    if (isMultipleOf) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "${element.content} is not a multiple of $multipleOfValue"
      )
    )
    return false
  }
}

private infix fun Double.isMultipleOf(number: Number): Boolean = when (number) {
  is Double -> (this % number).let { it == 0.0 && it == -0.0 }
  is Long -> (this % number).let { it == 0.0 && it == -0.0 }
  else -> false
}

private infix fun Long.isMultipleOf(number: Number): Boolean = when (number) {
  is Long -> this % number == 0L
  is Double -> (this % number).let { it == 0.0 && it == -0.0 }
  else -> false
}
