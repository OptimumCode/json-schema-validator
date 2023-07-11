package com.github.optimumcode.json.schema.internal

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.pointer.div
import com.github.optimumcode.json.pointer.get
import com.github.optimumcode.json.schema.JsonSchema
import com.github.optimumcode.json.schema.internal.ReferenceValidator.ReferenceLocation
import com.github.optimumcode.json.schema.internal.factories.array.ContainsAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.array.MaxItemsAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.array.MinItemsAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.array.UniqueItemsAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.condition.AllOfAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.condition.AnyOfAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.condition.IfThenElseAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.condition.NotAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.condition.OneOfAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.general.ConstAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.general.EnumAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.general.TypeAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.number.ExclusiveMaximumAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.number.ExclusiveMinimumAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.number.MaximumAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.number.MinimumAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.number.MultipleOfAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.`object`.DependenciesAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.`object`.MaxPropertiesAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.`object`.MinPropertiesAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.`object`.PropertiesAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.`object`.PropertyNamesAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.`object`.RequiredAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.string.MaxLengthAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.string.MinLengthAssertionFactory
import com.github.optimumcode.json.schema.internal.factories.string.PatternAssertionFactory
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.booleanOrNull

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
  OneOfAssertionFactory,
  NotAssertionFactory,
)

private const val DEFINITIONS_PROPERTY: String = "definitions"
private const val ID_PROPERTY: String = "\$id"
private const val REF_PROPERTY: String = "\$ref"

internal const val ROOT_REFERENCE = '#'

internal class SchemaLoader {
  fun load(schemaDefinition: JsonElement): JsonSchema {
    val baseId = extractBaseID(schemaDefinition)
    val context = defaultLoadingContext(baseId)
    loadDefinitions(schemaDefinition, context)
    val schemaAssertion = loadSchema(schemaDefinition, context)
    ReferenceValidator.validateReferences(context.references.keys, context.usedRef)
    return JsonSchema(schemaAssertion, context.references)
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
    }.trimEnd(ROOT_REFERENCE)
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

    is JsonObject -> {
      if (schemaDefinition.containsKey(REF_PROPERTY)) {
        loadRefAssertion(schemaDefinition, context)
      } else {
        factories.filter { it.isApplicable(schemaDefinition) }
          .map {
            it.create(schemaDefinition, context)
          }.let(::AssertionsCollection)
      }
    }
    // should never happen
    else -> throw IllegalArgumentException("schema must be either a valid JSON object or boolean")
  }.apply(context::register)
}

private fun loadRefAssertion(definition: JsonObject, context: DefaultLoadingContext): JsonSchemaAssertion {
  val refElement = requireNotNull(definition[REF_PROPERTY]) { "$REF_PROPERTY is not set" }
  require(refElement is JsonPrimitive && refElement.isString) { "$REF_PROPERTY must be a string" }
  val refValue = refElement.content
  val refId: RefId = context.ref(refValue)
  return RefSchemaAssertion(context.schemaPath / REF_PROPERTY, refId)
}

private data class DefaultLoadingContext(
  private val baseId: String,
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
  val references: MutableMap<RefId, JsonSchemaAssertion> = hashMapOf(),
  val usedRef: MutableSet<ReferenceLocation> = hashSetOf(),
) : LoadingContext {
  override fun at(property: String): DefaultLoadingContext {
    return copy(schemaPath = schemaPath / property)
  }

  override fun at(index: Int): DefaultLoadingContext {
    return copy(schemaPath = schemaPath[index])
  }

  override fun schemaFrom(element: JsonElement): JsonSchemaAssertion = loadSchema(element, this)
  override fun isJsonSchema(element: JsonElement): Boolean = (
    element is JsonObject ||
      (element is JsonPrimitive && element.booleanOrNull != null)
    )

  fun register(assertion: JsonSchemaAssertion) {
    val referenceId = buildRefId("$ROOT_REFERENCE$schemaPath")
    references.put(referenceId, assertion)?.apply {
      throw IllegalStateException("duplicated definition $referenceId")
    }
  }

  fun ref(refId: String): RefId {
    return buildRefId(refId).also { usedRef += ReferenceLocation(schemaPath, it) }
  }

  private fun buildRefId(path: String): RefId = RefId("$baseId$path")
}

private fun defaultLoadingContext(baseId: String): DefaultLoadingContext = DefaultLoadingContext(baseId)