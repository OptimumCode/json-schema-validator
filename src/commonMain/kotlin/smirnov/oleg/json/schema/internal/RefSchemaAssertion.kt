package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.plus
import smirnov.oleg.json.pointer.relative
import smirnov.oleg.json.schema.ErrorCollector

internal class RefSchemaAssertion(
  private val basePath: JsonPointer,
  private val refId: RefId,
) : JsonSchemaAssertion {
  private val refIdPath: JsonPointer = JsonPointer(refId.fragment)
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