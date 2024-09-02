package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.model.AbstractElement

internal class JsonSchemaRoot(
  private val scopeId: Uri,
  private val schemaPath: JsonPointer,
  private val assertions: Collection<JsonSchemaAssertion>,
  private val canBeReferencedRecursively: Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    if (canBeReferencedRecursively) {
      context.setRecursiveRootIfAbsent(this)
    } else {
      context.resetRecursiveRoot()
    }
    var result = true
    context.pushSchemaPath(schemaPath, scopeId)
    errorCollector.updateKeywordLocation(schemaPath).use {
      val failFast = isFailFast
      assertions.forEach {
        val valid = it.validate(element, context, this)
        result = result and valid
        if (!result && failFast) {
          return@use
        }
      }
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