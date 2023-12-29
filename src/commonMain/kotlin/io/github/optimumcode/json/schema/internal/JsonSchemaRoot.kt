package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.schema.ErrorCollector
import kotlinx.serialization.json.JsonElement

internal class JsonSchemaRoot(
  private val assertions: Collection<JsonSchemaAssertion>,
  private val canBeReferencedRecursively: Boolean,
) : JsonSchemaAssertion {

  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (canBeReferencedRecursively) {
      context.setRecursiveRootIfAbsent(this)
    } else {
      context.resetRecursiveRoot()
    }
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