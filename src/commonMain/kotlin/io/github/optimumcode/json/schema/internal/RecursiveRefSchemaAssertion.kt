package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.plus
import io.github.optimumcode.json.pointer.relative
import io.github.optimumcode.json.schema.AbsoluteLocation
import io.github.optimumcode.json.schema.OutputCollector
import kotlinx.serialization.json.JsonElement

internal class RecursiveRefSchemaAssertion(
  private val basePath: JsonPointer,
  private val refId: RefId,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return context.getRecursiveRoot()?.validate(element, context, errorCollector) ?: run {
      val (refIdPath, refAssertion, absoluteLocation) = context.referenceResolver.dynamicRef(refId)
      errorCollector.updateKeywordLocation(
        basePath,
        AbsoluteLocation(absoluteLocation, refIdPath),
      ).withErrorTransformer {
        val relativePath = refIdPath.relative(it.schemaPath)
        it.copy(
          schemaPath = basePath + relativePath,
          absoluteLocation =
            it.absoluteLocation ?: AbsoluteLocation(absoluteLocation, it.schemaPath),
        )
      }.use {
        refAssertion.validate(
          element,
          context,
          this,
        )
      }
    }
  }
}