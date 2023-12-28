package io.github.optimumcode.json.schema.internal.factories.condition

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonElement

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
      val childContext = context.childContext()
      val res = it.validate(element, childContext, errorCollector)
      if (res) {
        childContext.propagateToParent()
      }
      valid = valid and res
    }

    return valid
  }
}