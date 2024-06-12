package io.github.optimumcode.json.schema.internal.factories.number.util

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull

internal val JsonPrimitive.number: Number?
  get() = longOrNull ?: doubleOrNull

internal operator fun Number.compareTo(maxValue: Number): Int {
  return when (this) {
    is Double ->
      when (maxValue) {
        is Double -> compareTo(maxValue)
        is Long -> compareTo(maxValue)
        is Int -> compareTo(maxValue)
        else -> error("unexpected other value type: ${maxValue::class.simpleName}")
      }

    is Long ->
      when (maxValue) {
        is Double -> compareTo(maxValue)
        is Long -> compareTo(maxValue)
        is Int -> compareTo(maxValue)
        else -> error("unexpected other value type: ${maxValue::class.simpleName}")
      }
    is Int ->
      when (maxValue) {
        is Double -> compareTo(maxValue)
        is Long -> compareTo(maxValue)
        is Int -> compareTo(maxValue)
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
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(path).use {
      if (element !is JsonPrimitive || element.isString) {
        return@use true
      }
      val value: Number = element.number ?: return true
      if (check(value, boundary)) {
        return@use true
      }

      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "${element.content} $errorMessage $boundaryContent",
        ),
      )
      false
    }
  }
}