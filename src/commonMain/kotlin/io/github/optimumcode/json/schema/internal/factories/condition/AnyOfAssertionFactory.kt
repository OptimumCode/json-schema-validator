package io.github.optimumcode.json.schema.internal.factories.condition

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonElement

@Suppress("unused")
internal object AnyOfAssertionFactory : AbstractAssertionsCollectionFactory("anyOf") {
  override fun createAssertion(
    context: LoadingContext,
    assertions: List<JsonSchemaAssertion>,
  ): JsonSchemaAssertion = AnyOfAssertion(context.schemaPath, assertions)
}

private class AnyOfAssertion(
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
        val tempHandler = mutableListOf<OutputCollector<*>>()
        var valid = false
        assertions.forEach {
          val childContext = context.childContext()
          val collector = childCollector()
          tempHandler += collector
          val res = it.validate(element, childContext, collector)
          if (res) {
            childContext.propagateToParent()
          }
          valid = valid or res
        }
        if (!valid) {
          tempHandler.forEach(OutputCollector<*>::reportErrors)
        }
        valid
      }
    return valid
  }
}