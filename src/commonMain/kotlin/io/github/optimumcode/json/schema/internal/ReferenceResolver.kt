package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.internal.length

internal interface ReferenceResolver {
  fun ref(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion>

  fun dynamicRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion>
}

internal class DefaultReferenceResolver(
  private val references: Map<RefId, AssertionWithPath>,
  private val schemaPathsStack: ArrayDeque<Pair<JsonPointer, Uri>> = ArrayDeque(),
) : ReferenceResolver {
  override fun ref(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion> {
    val resolvedRef = requireNotNull(references[refId]) { "$refId is not found" }
    return resolvedRef.schemaPath to resolvedRef.assertion
  }

  override fun dynamicRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion> {
    val originalRef = requireNotNull(references[refId]) { "$refId is not found" }
    if (!originalRef.dynamic) {
      return originalRef.schemaPath to originalRef.assertion
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
    return resolvedDynamicRef.schemaPath to resolvedDynamicRef.assertion
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
}