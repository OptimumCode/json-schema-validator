package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.plus
import io.github.optimumcode.json.pointer.relative
import io.github.optimumcode.json.schema.ErrorCollector
import kotlinx.serialization.json.JsonElement

internal class RefSchemaAssertion(
  private val basePath: JsonPointer,
  private val refId: RefId,
) : JsonSchemaAssertion {
  private lateinit var refIdPath: JsonPointer
  private lateinit var refAssertion: JsonSchemaAssertion

  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    if (!::refAssertion.isInitialized) {
      val resolved = context.referenceResolver.ref(refId)
      refIdPath = resolved.schemaPath
      refAssertion = resolved.assertion
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