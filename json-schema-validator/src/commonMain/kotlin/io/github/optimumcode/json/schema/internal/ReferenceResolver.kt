package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.internal.length

internal interface ReferenceResolver {
  fun ref(refId: RefId): ReferenceHolder

  fun dynamicRef(refId: RefId): ReferenceHolder
}

internal class ReferenceHolder(
  val schemaPath: JsonPointer,
  val assertion: JsonSchemaAssertion,
  val scopeId: Uri,
) {
  operator fun component1(): JsonPointer = schemaPath

  operator fun component2(): JsonSchemaAssertion = assertion

  operator fun component3(): Uri = scopeId
}

internal class DefaultReferenceResolver(
  private val references: Map<RefId, AssertionWithPath>,
  private val schemaPathsStack: ArrayDeque<Pair<JsonPointer, Uri>> = ArrayDeque(),
) : ReferenceResolver {
  override fun ref(refId: RefId): ReferenceHolder {
    val resolvedRef = requireNotNull(references[refId]) { "$refId is not found" }
    return resolvedRef.toRefHolder()
  }

  override fun dynamicRef(refId: RefId): ReferenceHolder {
    val originalRef = requireNotNull(references[refId]) { "$refId is not found" }
    if (!originalRef.dynamic) {
      return originalRef.toRefHolder()
    }

    val fragment = refId.fragment
    val possibleDynamicRefs: MutableList<AssertionWithPath> =
      references.asSequence()
        .filter { (id, link) ->
          link.dynamic && id.fragment == fragment && id != refId
        }.map { it.value }.toMutableList()
    possibleDynamicRefs.sortBy { it.schemaPath.length }

    val resolvedDynamicRef =
      schemaPathsStack.firstNotNullOfOrNull { (_, scopeId) ->
        possibleDynamicRefs.firstOrNull { it.scopeId == scopeId }
      }
        // If no outer anchor found use the original ref
        ?: originalRef
    return resolvedDynamicRef.toRefHolder()
  }

  fun pushSchemaPath(
    path: JsonPointer,
    scopeId: Uri,
  ) {
    schemaPathsStack.addLast(path to scopeId)
  }

  fun popSchemaPath() {
    schemaPathsStack.removeLast()
  }

  private fun AssertionWithPath.toRefHolder(): ReferenceHolder =
    ReferenceHolder(
      schemaPath = schemaPath,
      assertion = assertion,
      scopeId = scopeId,
    )
}