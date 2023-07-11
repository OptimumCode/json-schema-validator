package com.github.optimumcode.json.schema.internal.factories.string

import com.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import com.github.optimumcode.json.schema.internal.LoadingContext
import com.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.intOrNull

@Suppress("unused")
internal object MinLengthAssertionFactory : AbstractAssertionFactory("minLength") {
  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(element is JsonPrimitive && !element.isString) { "$property must be an integer" }
    val minLength = requireNotNull(element.intOrNull) { "$property must be a valid integer" }
    require(minLength >= 0) { "$property must be a non-negative integer" }
    return LengthAssertion(context.schemaPath, minLength, "must be greater or equal to") { a, b -> a >= b }
  }
}