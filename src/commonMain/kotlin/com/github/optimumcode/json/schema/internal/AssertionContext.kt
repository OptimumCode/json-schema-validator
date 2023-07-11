package com.github.optimumcode.json.schema.internal

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.pointer.div
import com.github.optimumcode.json.pointer.get

internal interface AssertionContext {
  val objectPath: JsonPointer

  fun at(index: Int): AssertionContext
  fun at(property: String): AssertionContext
  fun resolveRef(refId: RefId): JsonSchemaAssertion
}

internal data class DefaultAssertionContext(
  override val objectPath: JsonPointer,
  private val references: Map<RefId, JsonSchemaAssertion>,
) : AssertionContext {
  override fun at(index: Int): AssertionContext = copy(objectPath = objectPath[index])

  override fun at(property: String): AssertionContext {
    return copy(objectPath = objectPath / property)
  }

  override fun resolveRef(refId: RefId): JsonSchemaAssertion {
    return requireNotNull(references[refId]) { "$refId is not found" }
  }
}