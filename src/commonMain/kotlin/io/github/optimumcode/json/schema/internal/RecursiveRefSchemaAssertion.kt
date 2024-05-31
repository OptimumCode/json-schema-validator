package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.plus
import io.github.optimumcode.json.pointer.relative
import io.github.optimumcode.json.schema.ErrorCollector
import kotlinx.serialization.json.JsonElement

internal class RecursiveRefSchemaAssertion(
  private val basePath: JsonPointer,
  private val refId: RefId,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    return context.getRecursiveRoot()?.validate(element, context, errorCollector) ?: run {
      val (refIdPath, refAssertion, _) = context.referenceResolver.dynamicRef(refId)
      refAssertion.validate(element, context) {
        errorCollector.onError(
          it.copy(
            schemaPath = basePath + refIdPath.relative(it.schemaPath),
            absoluteLocation = it.absoluteLocation ?: it.schemaPath,
          ),
        )
      }
    }
  }
}