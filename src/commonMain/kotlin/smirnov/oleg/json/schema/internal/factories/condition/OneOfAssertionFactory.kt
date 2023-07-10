package smirnov.oleg.json.schema.internal.factories.condition

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

internal object OneOfAssertionFactory : AbstractAssertionsCollectionFactory("oneOf") {
  override fun createAssertion(context: LoadingContext, assertions: List<JsonSchemaAssertion>): JsonSchemaAssertion =
    OneOfAssertion(context.schemaPath, assertions)
}

private class OneOfAssertion(
  private val path: JsonPointer,
  private val assertions: List<JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    val suppressedErrors = mutableListOf<ValidationError>()
    val matched: MutableList<Int> = ArrayList(1)
    for ((index, assertion) in assertions.withIndex()) {
      val res = assertion.validate(element, context, suppressedErrors::add)
      if (res) {
        matched += index
      }
    }

    when {
      matched.size > 1 -> errorCollector.onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "element matches more than one JSON schema at indexes: $matched",
        ),
      )
      matched.size == 0 -> suppressedErrors.forEach(errorCollector::onError)
    }

    return matched.size == 1
  }
}