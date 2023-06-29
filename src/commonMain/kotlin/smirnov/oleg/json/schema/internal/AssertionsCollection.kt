package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.schema.ErrorCollector

class AssertionsCollection(
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