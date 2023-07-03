package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.booleanOrNull
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.div
import smirnov.oleg.json.pointer.get
import smirnov.oleg.json.schema.internal.factories.array.ContainsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.array.ItemsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.array.MaxItemsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.array.MinItemsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.array.UniqueItemsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.ConstAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.EnumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.TypeAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.ExclusiveMaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.ExclusiveMinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MultipleOfAssertionFactory
import smirnov.oleg.json.schema.internal.factories.`object`.MaxPropertiesAssertionFactory
import smirnov.oleg.json.schema.internal.factories.`object`.MinPropertiesAssertionFactory
import smirnov.oleg.json.schema.internal.factories.`object`.RequiredAssertionFactory
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
  ItemsAssertionFactory,
  MaxItemsAssertionFactory,
  MinItemsAssertionFactory,
  UniqueItemsAssertionFactory,
  ContainsAssertionFactory,
  MaxPropertiesAssertionFactory,
  MinPropertiesAssertionFactory,
  RequiredAssertionFactory,
)

class SchemaLoader {
  fun load(schemaDefinition: JsonElement): JsonSchemaAssertion {
    return loadSchema(schemaDefinition)
  }
}

private fun loadSchema(
  schemaDefinition: JsonElement,
  context: LoadingContext = defaultLoadingContext()
): JsonSchemaAssertion {
  require(context.isJsonSchema(schemaDefinition)) {
    "schema must be either a valid JSON object or boolean"
  }
  if (schemaDefinition is JsonPrimitive) {
    return if (schemaDefinition.boolean) {
      TrueSchemaAssertion
    } else {
      FalseSchemaAssertion(path = context.schemaPath)
    }
  }
  val assertions = factories.filter { it.isApplicable(schemaDefinition) }
    .map {
      it.create(schemaDefinition, context)
    }
  return AssertionsCollection(assertions)
}

private data class DefaultLoadingContext(
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
) : LoadingContext {
  override fun at(property: String): LoadingContext {
    return copy(schemaPath = schemaPath / property)
  }

  override fun at(index: Int): LoadingContext {
    return copy(schemaPath = schemaPath[index])
  }

  override fun schemaFrom(element: JsonElement): JsonSchemaAssertion = loadSchema(element, this)
  override fun isJsonSchema(element: JsonElement): Boolean = (element is JsonObject
      || (element is JsonPrimitive && element.booleanOrNull != null))
}

private fun defaultLoadingContext(): DefaultLoadingContext = DefaultLoadingContext()