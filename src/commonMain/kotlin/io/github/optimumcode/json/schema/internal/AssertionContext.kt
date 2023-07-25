package io.github.optimumcode.json.schema.internal

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
  override val objectPath: JsonPointer,
  private val references: Map<RefId, AssertionWithPath>,
) : AssertionContext {
  override fun at(index: Int): AssertionContext = copy(objectPath = objectPath[index])

  override fun at(property: String): AssertionContext {
    return copy(objectPath = objectPath / property)
  }

  override fun resolveRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion> {
    val resolvedRef = requireNotNull(references[refId]) { "$refId is not found" }
    return resolvedRef.schemaPath to resolvedRef.assertion
  }
}