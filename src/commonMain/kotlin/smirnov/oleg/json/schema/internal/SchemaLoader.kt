package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.schema.internal.factories.ConstAssertionFactory
import smirnov.oleg.json.schema.internal.factories.EnumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.ExclusiveMaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.MaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.MinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.MultipleOfAssertionFactory
import smirnov.oleg.json.schema.internal.factories.TypeAssertionFactory

private val factories: List<AssertionFactory> = listOf(
  TypeAssertionFactory,
  EnumAssertionFactory,
  ConstAssertionFactory,
  MultipleOfAssertionFactory,
  MaximumAssertionFactory,
  ExclusiveMaximumAssertionFactory,
  MinimumAssertionFactory,
)

class SchemaLoader {
  fun load(schemaDefinition: JsonObject): JsonSchemaAssertion {
    val assertions = factories.filter { it.isApplicable(schemaDefinition) }
      .map { it.create(schemaDefinition, DefaultLoadingContext()) }
    return AssertionsCollection(assertions)
  }
}