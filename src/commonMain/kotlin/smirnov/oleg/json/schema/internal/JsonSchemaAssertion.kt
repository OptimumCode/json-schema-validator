package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import smirnov.oleg.json.schema.ErrorCollector

interface JsonSchemaAssertion {
  fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean
}
