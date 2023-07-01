package smirnov.oleg.json.schema.internal.factories.string

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.contentOrNull
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object PatternAssertionFactory : AbstractAssertionFactory("pattern") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive && element.isString) { "$property must be a string" }
    val regex = try {
      element.content.toRegex()
    } catch (ex: Throwable) { // we handle throwable because of JsError that does not extend Exception
      throw IllegalArgumentException("$property is not a valid regular expression", ex)
    }
    return PatternAssertion(context.schemaPath, regex)
  }
}

private class PatternAssertion(
  private val path: JsonPointer,
  private val regex: Regex,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonPrimitive || !element.isString) {
      return true
    }

    val content = element.contentOrNull ?: return true
    if (regex.find(content) != null) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "string does not match pattern '${regex.pattern}'",
      )
    )
    return false
  }
}