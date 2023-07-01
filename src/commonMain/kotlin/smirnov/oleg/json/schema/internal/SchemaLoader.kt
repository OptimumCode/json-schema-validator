package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.booleanOrNull
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.internal.factories.general.ConstAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.EnumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.TypeAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.ExclusiveMaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.ExclusiveMinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MultipleOfAssertionFactory
import smirnov.oleg.json.schema.internal.factories.string.MaxLengthAssertionFactory
import smirnov.oleg.json.schema.internal.factories.string.MinLengthAssertionFactory
import smirnov.oleg.json.schema.internal.factories.string.PatternAssertionFactory

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
  MinLengthAssertionFactory,
  PatternAssertionFactory,
)

class SchemaLoader {
  fun load(schemaDefinition: JsonElement): JsonSchemaAssertion {
    return loadSchema(schemaDefinition)
  }

  private fun loadSchema(
    schemaDefinition: JsonElement,
    context: LoadingContext = defaultLoadingContext()
  ): JsonSchemaAssertion {
    require(
      schemaDefinition is JsonObject
          || (schemaDefinition is JsonPrimitive && schemaDefinition.booleanOrNull != null)
    ) {
      "schema must be either a valid JSON object or boolean"
    }
    if (schemaDefinition is JsonPrimitive) {
      return if (schemaDefinition.boolean) {
        TrueSchemaAssertion
      } else {
        FalseSchemaAssertion(path = JsonPointer.ROOT)
      }
    }
    val assertions = factories.filter { it.isApplicable(schemaDefinition) }
      .map {
        it.create(schemaDefinition, context)
      }
    return AssertionsCollection(assertions)
  }

  private fun defaultLoadingContext(): DefaultLoadingContext = DefaultLoadingContext { el, context ->
    loadSchema(el, context)
  }
}