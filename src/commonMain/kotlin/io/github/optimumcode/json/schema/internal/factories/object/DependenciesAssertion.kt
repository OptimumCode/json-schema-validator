package io.github.optimumcode.json.schema.internal.factories.`object`

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal class DependenciesAssertion(
  private val dependenciesAssertions: Map<String, JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonObject) {
      return true
    }
    var valid = true
    for ((dependency, assertion) in dependenciesAssertions) {
      if (dependency !in element) {
        continue
      }
      val res = assertion.validate(element, context, errorCollector)
      valid = valid and res
    }
    return valid
  }
}