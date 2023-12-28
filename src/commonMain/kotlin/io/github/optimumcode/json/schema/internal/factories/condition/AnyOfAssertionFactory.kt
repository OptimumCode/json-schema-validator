package io.github.optimumcode.json.schema.internal.factories.condition

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonElement

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
      val childContext = context.childContext()
      val res = it.validate(element, childContext, tempHandler::add)
      if (res) {
        childContext.propagateToParent()
      }
      valid = valid or res
    }
    if (!valid) {
      tempHandler.forEach(errorCollector::onError)
    }
    return valid
  }
}