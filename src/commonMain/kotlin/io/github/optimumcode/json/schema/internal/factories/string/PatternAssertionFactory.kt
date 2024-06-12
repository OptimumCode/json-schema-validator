package io.github.optimumcode.json.schema.internal.factories.string

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.contentOrNull

@Suppress("unused")
internal object PatternAssertionFactory : AbstractAssertionFactory("pattern") {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonPrimitive && element.isString) { "$property must be a string" }
    val regex =
      try {
        element.content.toRegex()
      } catch (exOrJsError: Throwable) {
        // we handle throwable because of JsError that does not extend Exception
        throw IllegalArgumentException("$property is not a valid regular expression", exOrJsError)
      }
    return PatternAssertion(context.schemaPath, regex)
  }
}

private class PatternAssertion(
  private val path: JsonPointer,
  private val regex: Regex,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(path).use {
      if (element !is JsonPrimitive || !element.isString) {
        return@use true
      }

      val content = element.contentOrNull ?: return true
      if (regex.find(content) != null) {
        return@use true
      }
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "string does not match pattern '${regex.pattern}'",
        ),
      )
      false
    }
  }
}