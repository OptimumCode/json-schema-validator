package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ObjectElement

internal class DependenciesAssertion(
  private val location: JsonPointer,
  private val dependenciesAssertions: Map<String, JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(location).use {
      if (element !is ObjectElement) {
        return@use true
      }
      var valid = true
      for ((dependency, assertion) in dependenciesAssertions) {
        if (dependency !in element) {
          continue
        }
        val childContext = context.childContext()
        val res = assertion.validate(element, childContext, this)
        if (res) {
          childContext.propagateToParent()
        }
        valid = valid and res
      }
      valid
    }
  }
}