package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.schema.ErrorCollector
import kotlinx.serialization.json.JsonElement

internal class AssertionsCollection(
  private val assertions: Collection<JsonSchemaAssertion>,
) : JsonSchemaAssertion {

  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    var result = true
    assertions.forEach {
      val valid = it.validate(element, context, errorCollector)
      result = result and valid
    }
    return result
  }
}