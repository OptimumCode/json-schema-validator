package io.github.optimumcode.json.schema.internal.factories.condition

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonElement

@Suppress("unused")
internal object AllOfAssertionFactory : AbstractAssertionsCollectionFactory("allOf") {
  override fun createAssertion(
    context: LoadingContext,
    assertions: List<JsonSchemaAssertion>,
  ): JsonSchemaAssertion = AllOfAssertion(context.schemaPath, assertions)
}

private class AllOfAssertion(
  private val location: JsonPointer,
  private val assertions: List<JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    val valid =
      errorCollector.updateKeywordLocation(location, canCollapse = false).use {
        var valid = true
        assertions.forEach {
          val childContext = context.childContext()
          val res = it.validate(element, childContext, this)
          if (res) {
            childContext.propagateToParent()
          }
          valid = valid and res
        }
        valid
      }

    return valid
  }
}