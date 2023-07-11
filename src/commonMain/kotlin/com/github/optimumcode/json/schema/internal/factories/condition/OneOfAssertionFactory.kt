package com.github.optimumcode.json.schema.internal.factories.condition

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.ErrorCollector
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.internal.AssertionContext
import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonElement

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