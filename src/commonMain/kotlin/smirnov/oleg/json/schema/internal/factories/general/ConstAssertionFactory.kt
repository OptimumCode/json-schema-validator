package smirnov.oleg.json.schema.internal.factories.general

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext
import smirnov.oleg.json.schema.internal.factories.AbstractAssertionFactory

@Suppress("unused")
internal object ConstAssertionFactory : AbstractAssertionFactory("const") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    return ConstAssertion(context.schemaPath, element)
  }
}

private class ConstAssertion(
  private val path: JsonPointer,
  private val constValue: JsonElement,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element == constValue) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "element does not match constant definition",
      ),
    )
    return false
  }
}