package smirnov.oleg.json.schema.internal.factories.condition

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object NotAssertionFactory : AbstractAssertionFactory("not") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val assertion = context.schemaFrom(element)
    return NotAssertion(context.schemaPath, assertion)
  }
}

private class NotAssertion(
  private val path: JsonPointer,
  private val delegate: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (!delegate.validate(element, context, ErrorCollector.EMPTY)) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "element must not be valid against child JSON schema but was",
      ),
    )
    return false
  }
}