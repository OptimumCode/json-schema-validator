package smirnov.oleg.json.schema.internal.factories.condition

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

@Suppress("unused")
internal object AllOfAssertionFactory : AbstractAssertionsCollectionFactory("allOf") {
  override fun createAssertion(context: LoadingContext, assertions: List<JsonSchemaAssertion>): JsonSchemaAssertion =
    AllOfAssertion(assertions)
}

private class AllOfAssertion(
  private val assertions: List<JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    var valid = true

    assertions.forEach {
      val res = it.validate(element, context, errorCollector)
      valid = valid and res
    }

    return valid
  }
}