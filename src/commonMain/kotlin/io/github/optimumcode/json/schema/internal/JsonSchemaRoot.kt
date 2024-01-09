package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ErrorCollector
import kotlinx.serialization.json.JsonElement

internal class JsonSchemaRoot(
  private val schemaPath: JsonPointer,
  private val assertions: Collection<JsonSchemaAssertion>,
  private val canBeReferencedRecursively: Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    if (canBeReferencedRecursively) {
      context.setRecursiveRootIfAbsent(this)
    } else {
      context.resetRecursiveRoot()
    }
    var result = true
    context.pushSchemaPath(schemaPath)
    assertions.forEach {
      val valid = it.validate(element, context, errorCollector)
      result = result and valid
    }
    context.popSchemaPath()
    // According to spec the annotations should not be applied if element does not match the schema
    if (result) {
      context.applyAnnotations()
    } else {
      context.resetAnnotations()
    }
    return result
  }
}