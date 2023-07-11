package com.github.optimumcode.json.schema.internal

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.pointer.plus
import com.github.optimumcode.json.pointer.relative
import com.github.optimumcode.json.schema.ErrorCollector
import kotlinx.serialization.json.JsonElement

internal class RefSchemaAssertion(
  private val basePath: JsonPointer,
  private val refId: RefId,
) : JsonSchemaAssertion {
  private val refIdPath: JsonPointer =
    JsonPointer(refId.fragment)
  private lateinit var refAssertion: JsonSchemaAssertion

  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (!::refAssertion.isInitialized) {
      refAssertion = context.resolveRef(refId)
    }
    return refAssertion.validate(element, context) {
      errorCollector.onError(
        it.copy(
          schemaPath = basePath + refIdPath.relative(it.schemaPath),
          absoluteLocation = it.absoluteLocation ?: it.schemaPath,
        ),
      )
    }
  }
}