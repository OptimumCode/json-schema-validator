package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get

internal interface AssertionContext {
  val objectPath: JsonPointer

  fun at(index: Int): AssertionContext
  fun at(property: String): AssertionContext
  fun resolveRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion>
}

internal data class DefaultAssertionContext(
  private val baseId: Uri,
  override val objectPath: JsonPointer,
  private val references: Map<RefId, JsonSchemaAssertion>,
) : AssertionContext {
  override fun at(index: Int): AssertionContext = copy(objectPath = objectPath[index])

  override fun at(property: String): AssertionContext {
    return copy(objectPath = objectPath / property)
  }

  override fun resolveRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion> {
    val resolvedRef = requireNotNull(references[refId]) { "$refId is not found" }
    val definitionPointer = references.entries.find { (ref, assertion) ->
      assertion === resolvedRef &&
        ref.uri.schemeSpecificPart == baseId.schemeSpecificPart
    }?.key?.fragment?.let(::JsonPointer)
    requireNotNull(definitionPointer) { "cannot resolve definition pointer for $refId" }
    return definitionPointer to resolvedRef
  }
}