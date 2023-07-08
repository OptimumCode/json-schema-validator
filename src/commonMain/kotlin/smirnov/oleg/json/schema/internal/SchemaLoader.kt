package smirnov.oleg.json.schema.internal

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.booleanOrNull
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.div
import smirnov.oleg.json.pointer.get
import smirnov.oleg.json.schema.JsonSchema
import smirnov.oleg.json.schema.internal.factories.array.ContainsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.array.ItemsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.array.MaxItemsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.array.MinItemsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.array.UniqueItemsAssertionFactory
import smirnov.oleg.json.schema.internal.factories.condition.AllOfAssertionFactory
import smirnov.oleg.json.schema.internal.factories.condition.AnyOfAssertionFactory
import smirnov.oleg.json.schema.internal.factories.condition.IfThenElseAssertionFactory
import smirnov.oleg.json.schema.internal.factories.condition.NotAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.ConstAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.EnumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.general.TypeAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.ExclusiveMaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.ExclusiveMinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MaximumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MinimumAssertionFactory
import smirnov.oleg.json.schema.internal.factories.number.MultipleOfAssertionFactory
import smirnov.oleg.json.schema.internal.factories.`object`.DependenciesAssertionFactory
import smirnov.oleg.json.schema.internal.factories.`object`.MaxPropertiesAssertionFactory
import smirnov.oleg.json.schema.internal.factories.`object`.MinPropertiesAssertionFactory
import smirnov.oleg.json.schema.internal.factories.`object`.PropertiesAssertionFactory
import smirnov.oleg.json.schema.internal.factories.`object`.PropertyNamesAssertionFactory
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
  PropertiesAssertionFactory,
  PropertyNamesAssertionFactory,
  DependenciesAssertionFactory,
  IfThenElseAssertionFactory,
  AllOfAssertionFactory,
  AnyOfAssertionFactory,
  NotAssertionFactory,
)

private const val DEFINITIONS_PROPERTY: String = "definitions"
private const val ID_PROPERTY: String = "\$id"

private const val rootReference = '#'

class SchemaLoader {
  fun load(schemaDefinition: JsonElement): JsonSchema {
    val baseId = extractBaseID(schemaDefinition)
    val context = defaultLoadingContext(baseId)
    loadDefinitions(schemaDefinition, context)
    val schemaAssertion = loadSchema(schemaDefinition, context)
    return JsonSchema(baseId, schemaAssertion, context.references)
  }

  private fun loadDefinitions(schemaDefinition: JsonElement, context: DefaultLoadingContext) {
    if (schemaDefinition !is JsonObject) {
      return
    }
    val definitionsElement = schemaDefinition[DEFINITIONS_PROPERTY] ?: return
    require(definitionsElement is JsonObject) { "$DEFINITIONS_PROPERTY must be an object" }
    val definitionsContext = context.at(DEFINITIONS_PROPERTY)
    for ((name, element) in definitionsElement) {
      loadSchema(element, definitionsContext.at(name))
    }
  }

  private fun extractBaseID(schemaDefinition: JsonElement): String =
    when (schemaDefinition) {
      is JsonObject -> {
        schemaDefinition[ID_PROPERTY]?.let {
          require(it is JsonPrimitive && it.isString) { "$ID_PROPERTY must be a string" }
          it.content
        } ?: ""
      }

      else -> ""
    }.trimEnd(rootReference)
}

private fun loadSchema(
  schemaDefinition: JsonElement,
  context: DefaultLoadingContext,
): JsonSchemaAssertion {
  require(context.isJsonSchema(schemaDefinition)) {
    "schema must be either a valid JSON object or boolean"
  }
  return when (schemaDefinition) {
    is JsonPrimitive -> if (schemaDefinition.boolean) {
      TrueSchemaAssertion
    } else {
      FalseSchemaAssertion(path = context.schemaPath)
    }

    else -> factories.filter { it.isApplicable(schemaDefinition) }
      .map {
        it.create(schemaDefinition, context)
      }.let(::AssertionsCollection)
  }.apply(context::register)
}

private data class DefaultLoadingContext(
  private val baseId: String,
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
  val references: MutableMap<String, JsonSchemaAssertion> = hashMapOf(),
) : LoadingContext {
  override fun at(property: String): DefaultLoadingContext {
    return copy(schemaPath = schemaPath / property)
  }

  override fun at(index: Int): DefaultLoadingContext {
    return copy(schemaPath = schemaPath[index])
  }

  override fun schemaFrom(element: JsonElement): JsonSchemaAssertion = loadSchema(element, this)
  override fun isJsonSchema(element: JsonElement): Boolean = (element is JsonObject
      || (element is JsonPrimitive && element.booleanOrNull != null))

  fun register(assertion: JsonSchemaAssertion) {
    val referenceId = "$baseId$rootReference$schemaPath"
    references.put(referenceId, assertion)?.apply {
      throw IllegalStateException("duplicated definition $referenceId")
    }
  }
}

private fun defaultLoadingContext(baseId: String): DefaultLoadingContext = DefaultLoadingContext(baseId)