package smirnov.oleg.json.schema.internal.factories.array

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object ContainsAssertionFactory : AbstractAssertionFactory("contains") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val containsAssertion = context.schemaFrom(element)
    return ContainsAssertion(context.schemaPath, containsAssertion)
  }
}

private class ContainsAssertion(
  private val path: JsonPointer,
  private val containsAssertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonArray) {
      return true
    }
    val contains = element.any {
      containsAssertion.validate(it, context, ErrorCollector.EMPTY)
    }
    if (contains) {
      return true
    }

    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "array does not contain expected element",
      )
    )

    return false
  }
}