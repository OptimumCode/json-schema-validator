package com.github.optimumcode.json.schema.internal.factories.condition

import com.github.optimumcode.json.schema.ErrorCollector
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.internal.AssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
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
      val res = it.validate(element, context, tempHandler::add)
      valid = valid or res
    }
    if (!valid) {
      tempHandler.forEach(errorCollector::onError)
    }
    return valid
  }
}