package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonObject
import smirnov.oleg.json.schema.internal.factories.general.ConstAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.EnumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.TypeAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.ExclusiveMaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.ExclusiveMinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MultipleOfAssertionFactory
import smirnov.oleg.json.schema.internal.factories.string.MaxLengthAssertionFactory

private val factories: List<AssertionFactory> = listOf(
  TypeAssertionFactory,
  EnumAssertionFactory,
  ConstAssertionFactory,
  MultipleOfAssertionFactory,
  MaximumAssertionFactory,
  ExclusiveMaximumAssertionFactory,
  MinimumAssertionFactory,
  ExclusiveMinimumAssertionFactory,
  MaxLengthAssertionFactory,
)

class SchemaLoader {
  fun load(schemaDefinition: JsonObject): JsonSchemaAssertion {
    val assertions = factories.filter { it.isApplicable(schemaDefinition) }
      .map { it.create(schemaDefinition, DefaultLoadingContext()) }
    return AssertionsCollection(assertions)
  }
}