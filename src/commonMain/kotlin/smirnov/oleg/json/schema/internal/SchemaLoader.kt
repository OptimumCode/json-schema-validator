package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.schema.internal.factories.EnumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.TypeAssertionFactory

private val factories: List<AssertionFactory> = listOf(
  TypeAssertionFactory,
  EnumAssertionFactory,
)

class SchemaLoader {
  fun load(schemaDefinition: JsonObject): JsonSchemaAssertion {
    val assertions = factories.filter { it.isApplicable(schemaDefinition) }
      .map { it.create(schemaDefinition, DefaultLoadingContext()) }
    return AssertionsCollection(assertions)
  }
}