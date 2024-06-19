package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.plus
import io.github.optimumcode.json.pointer.relative
import io.github.optimumcode.json.schema.AbsoluteLocation
import io.github.optimumcode.json.schema.OutputCollector
import kotlinx.serialization.json.JsonElement

internal class RefSchemaAssertion(
  private val basePath: JsonPointer,
  private val refId: RefId,
) : JsonSchemaAssertion {
  private lateinit var refIdPath: JsonPointer
  private lateinit var refAssertion: JsonSchemaAssertion
  private lateinit var refAbsolutePath: Uri

  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    if (!::refAssertion.isInitialized) {
      val resolved = context.referenceResolver.ref(refId)
      refIdPath = resolved.schemaPath
      refAssertion = resolved.assertion
      refAbsolutePath = resolved.scopeId
    }
    return errorCollector.updateKeywordLocation(
      basePath,
      AbsoluteLocation(refAbsolutePath, refIdPath),
    ).withErrorTransformer {
      it.copy(
        schemaPath = basePath + refIdPath.relative(it.schemaPath),
        absoluteLocation =
          it.absoluteLocation ?: AbsoluteLocation(refAbsolutePath, it.schemaPath),
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