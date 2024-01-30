package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.internal.dropLast
import io.github.optimumcode.json.pointer.internal.length
import io.github.optimumcode.json.pointer.startsWith

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
      findMostOuterRef(possibleDynamicRefs)
        // Try to select by base id starting from the most outer uri in path to the current location
        ?: schemaPathsStack.firstNotNullOfOrNull { (_, uri) ->
          possibleDynamicRefs.firstOrNull { it.baseId == uri }
        }
        // If no outer anchor found use the original ref
        ?: originalRef
    return resolvedDynamicRef.schemaPath to resolvedDynamicRef.assertion
  }

  fun pushSchemaPath(
    path: JsonPointer,
    baseId: Uri,
  ) {
    schemaPathsStack.addLast(path to baseId)
  }

  fun popSchemaPath() {
    schemaPathsStack.removeLast()
  }

  @Suppress("detekt:NestedBlockDepth")
  private fun findMostOuterRef(possibleRefs: List<AssertionWithPath>): AssertionWithPath? {
    // Try to find the most outer anchor to use
    // Check every schema in the current chain
    // If not matches - take the most outer by location
    for ((schemaPath, baseId) in schemaPathsStack) {
      var currPath: JsonPointer = schemaPath
      while (currPath != JsonPointer.ROOT) {
        for (dynamicRef in possibleRefs) {
          if (dynamicRef.schemaPath.startsWith(currPath) && dynamicRef.baseId == baseId) {
            return dynamicRef
          }
        }
        currPath = currPath.dropLast() ?: break
      }
    }
    return null
  }
}