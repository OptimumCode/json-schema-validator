package smirnov.oleg.json.schema.internal.factories.condition

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.schema.ErrorCollector
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.internal.AssertionContext
import smirnov.oleg.json.schema.internal.JsonSchemaAssertion
import smirnov.oleg.json.schema.internal.LoadingContext

@Suppress("unused")
internal object AnyOfAssertionFactory : AbstractAssertionsCollectionFactory("anyOf") {
  override fun createAssertion(context: LoadingContext, assertions: List<JsonSchemaAssertion>): JsonSchemaAssertion =
    AnyOfAssertion(assertions)
}

private class AnyOfAssertion(
  private val assertions: List<JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    var valid = false
    val tempHandler = mutableListOf<ValidationError>()
    assertions.forEach {
      val res = it.validate(element, context, tempHandler::add)
      valid = valid or res
    }
    if (!valid) {
      tempHandler.forEach(errorCollector::onError)
    }
    return valid
  }
}