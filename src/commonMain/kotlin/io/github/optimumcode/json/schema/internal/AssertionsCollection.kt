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
    // According to spec the annotations should not be applied if element does not match the schema
    if (result) {
      context.applyAnnotations()
    } else {
      context.resetAnnotations()
    }
    return result
  }
}