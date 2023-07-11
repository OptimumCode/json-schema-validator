package com.github.optimumcode.json.schema.internal.factories.condition

import com.github.optimumcode.json.schema.ErrorCollector
import com.github.optimumcode.json.schema.internal.AssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
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
      val res = it.validate(element, context, errorCollector)
      valid = valid and res
    }

    return valid
  }
}