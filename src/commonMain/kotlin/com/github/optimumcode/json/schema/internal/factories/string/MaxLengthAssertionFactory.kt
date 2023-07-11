package com.github.optimumcode.json.schema.internal.factories.string

import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
import com.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.intOrNull

@Suppress("unused")
internal object MaxLengthAssertionFactory : AbstractAssertionFactory("maxLength") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive && !element.isString) { "$property must be an integer" }
    val maxLength = requireNotNull(element.intOrNull) { "$property must be a valid integer" }
    require(maxLength >= 0) { "$property must be a non-negative integer" }
    return LengthAssertion(context.schemaPath, maxLength, "must be less or equal to") { a, b -> a <= b }
  }
}