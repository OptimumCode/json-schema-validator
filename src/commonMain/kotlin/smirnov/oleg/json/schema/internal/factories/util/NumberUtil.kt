package smirnov.oleg.json.schema.internal.factories.util

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion

internal operator fun Number.compareTo(maxValue: Number): Int {
  return when (this) {
    is Double -> when (maxValue) {
      is Double -> compareTo(maxValue)
      is Long -> compareTo(maxValue)
      else -> error("unexpected other value type: ${maxValue::class.simpleName}")
    }

    is Long -> when (maxValue) {
      is Double -> compareTo(maxValue)
      is Long -> compareTo(maxValue)
      else -> error("unexpected other value type: ${maxValue::class.simpleName}")
    }
    else -> error("unexpected value type: ${this::class.simpleName}")
  }
}

internal class NumberComparisonAssertion(
  private val path: JsonPointer,
  private val boundary: Number,
  private val boundaryContent: String,
  private val errorMessage: String,
  private val check: (Number, Number) -> Boolean,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonPrimitive || element.isString) {
      return true
    }
    val value: Number = element.longOrNull ?: element.doubleOrNull ?: return true
    if (check(value, boundary)) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "${element.content} $errorMessage $boundaryContent",
      )
    )
    return false
  }
}