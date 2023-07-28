package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Builder
import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get
import io.github.optimumcode.json.pointer.relative
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.internal.ReferenceValidator.ReferenceLocation
import io.github.optimumcode.json.schema.internal.factories.FactoryGroup
import io.github.optimumcode.json.schema.internal.factories.array.ContainsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.MaxItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.MinItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.UniqueItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.condition.AllOfAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.condition.AnyOfAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.condition.ElseAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.condition.IfAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.condition.NotAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.condition.OneOfAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.condition.ThenAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.general.ConstAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.general.EnumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.general.TypeAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.ExclusiveMaximumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.ExclusiveMinimumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.MaximumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.MinimumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.MultipleOfAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.DependenciesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.MaxPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.MinPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.PropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.PropertyNamesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.RequiredAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.MaxLengthAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.MinLengthAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.PatternAssertionFactory
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
  FactoryGroup(
    IfAssertionFactory,
    ThenAssertionFactory,
    ElseAssertionFactory,
  ),
  AllOfAssertionFactory,
  AnyOfAssertionFactory,
  OneOfAssertionFactory,
  NotAssertionFactory,
)

private const val DEFINITIONS_PROPERTY: String = "definitions"
private const val ID_PROPERTY: String = "\$id"
private const val REF_PROPERTY: String = "\$ref"
private const val SCHEMA_PROPERTY: String = "\$schema"

internal class SchemaLoader {
  fun load(schemaDefinition: JsonElement): JsonSchema {
    extractSchemaType(schemaDefinition)
    val baseId: Uri = extractID(schemaDefinition) ?: Uri.EMPTY
    val context = defaultLoadingContext(baseId)
    val schemaAssertion = loadSchema(schemaDefinition, context)
    ReferenceValidator.validateReferences(
      context.references.mapValues { it.value.schemaPath },
      context.usedRef,
    )
    val usedRefs = context.usedRef.map { it.refId }.toSet()
    // pre-filter references to get rid of unused references
    val usedReferencesWithPath: Map<RefId, AssertionWithPath> = context.references.asSequence()
      .filter { it.key in usedRefs }
      .associate { it.key to it.value }
    return JsonSchema(schemaAssertion, usedReferencesWithPath)
  }

  private fun extractSchemaType(schemaDefinition: JsonElement): SchemaType {
    return if (schemaDefinition is JsonObject) {
      schemaDefinition[SCHEMA_PROPERTY]?.let {
        require(it is JsonPrimitive && it.isString) { "$SCHEMA_PROPERTY must be a string" }
        SchemaType.find(it.content) ?: throw IllegalArgumentException("unsupported schema type ${it.content}")
      } ?: SchemaType.values().last()
    } else {
      SchemaType.values().last()
    }
  }
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

private fun extractID(schemaDefinition: JsonElement): Uri? =
  when (schemaDefinition) {
    is JsonObject -> {
      schemaDefinition[ID_PROPERTY]?.let {
        require(it is JsonPrimitive && it.isString) { "$ID_PROPERTY must be a string" }
        requireNotNull(Uri.parseOrNull(it.content)) { "invalid $ID_PROPERTY: ${it.content}" }
      }
    }

    else -> null
  }

private fun loadSchema(
  schemaDefinition: JsonElement,
  context: DefaultLoadingContext,
): JsonSchemaAssertion {
  require(context.isJsonSchema(schemaDefinition)) {
    "schema must be either a valid JSON object or boolean"
  }
  val additionalId: Uri? = extractID(schemaDefinition)
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
            it.create(
              schemaDefinition,
              // we register id to be used for future schema registration
              additionalId?.let(context::addId) ?: context,
            )
          }.let(::AssertionsCollection)
      }
    }
    // should never happen
    else -> throw IllegalArgumentException("schema must be either a valid JSON object or boolean")
  }.apply {
    loadDefinitions(schemaDefinition, additionalId?.let(context::addId) ?: context)
    context.register(additionalId, this)
  }
}

private fun loadRefAssertion(definition: JsonObject, context: DefaultLoadingContext): JsonSchemaAssertion {
  val refElement = requireNotNull(definition[REF_PROPERTY]) { "$REF_PROPERTY is not set" }
  require(refElement is JsonPrimitive && refElement.isString) { "$REF_PROPERTY must be a string" }
  val refValue = refElement.content
  val refId: RefId = context.ref(refValue)
  return RefSchemaAssertion(context.schemaPath / REF_PROPERTY, refId)
}

/**
 * Used to identify the [location] where this [id] was defined
 */
internal data class IdWithLocation(
  val id: Uri,
  val location: JsonPointer,
)

/**
 * Used to map JSON schema [assertion] with its [schemaPath]
 */
internal data class AssertionWithPath(
  val assertion: JsonSchemaAssertion,
  val schemaPath: JsonPointer,
)

private data class DefaultLoadingContext(
  private val baseId: Uri,
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
  val additionalIDs: Set<IdWithLocation> = linkedSetOf(IdWithLocation(baseId, schemaPath)),
  val references: MutableMap<RefId, AssertionWithPath> = linkedMapOf(),
  val usedRef: MutableSet<ReferenceLocation> = linkedSetOf(),
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

  fun register(id: Uri?, assertion: JsonSchemaAssertion) {
    if (id != null) {
      registerById(id, assertion)
    }
    for ((baseId, location) in additionalIDs) {
      val relativePointer = location.relative(schemaPath)
      val referenceId: RefId = baseId.buildUpon()
        .encodedFragment(relativePointer.toString())
        .buildRefId()
      if (referenceId.uri == id) {
        // this happens when the root schema has ID,
        // and we register it using Empty pointer
        continue
      }
      register(referenceId, assertion)
    }
  }

  fun addId(additionalId: Uri): DefaultLoadingContext {
    return when {
      additionalId.isAbsolute -> copy(additionalIDs = additionalIDs + IdWithLocation(additionalId, schemaPath))
      additionalId.isRelative && !additionalId.path.isNullOrBlank() ->
        copy(
          additionalIDs = additionalIDs.run {
            this + IdWithLocation(
              additionalIDs.resolvePath(additionalId.path),
              schemaPath,
            )
          },
        )

      else -> this
    }
  }

  fun ref(refId: String): RefId {
    // library parsed fragment as empty if # is in the URI
    // But when we build URI for definition we use [Uri.Builder]
    // That builder does not set the fragment if it is empty
    // Because of that inconsistency we use builder here as well
    val refUri = Uri.parse(refId).buildUpon().build()
    return when {
      refUri.isAbsolute -> refUri.buildRefId()
      // the ref is absolute and should be resolved from current base URI host:port part
      refId.startsWith('/') -> additionalIDs.last().id.buildUpon().encodedPath(refUri.path).buildRefId()
      // in this case the ref must be resolved from the current base ID
      !refUri.path.isNullOrBlank() -> additionalIDs.resolvePath(refUri.path).buildRefId()
      refUri.fragment != null -> additionalIDs.last().id.buildUpon().encodedFragment(refUri.fragment).buildRefId()
      else -> throw IllegalArgumentException("invalid reference $refId")
    }.also { usedRef += ReferenceLocation(schemaPath, it) }
  }

  private fun registerById(
    id: Uri,
    assertion: JsonSchemaAssertion,
  ) {
    when {
      id.isAbsolute -> register(id.buildRefId(), assertion) // register JSON schema by absolute URI
      id.isRelative ->
        when {
          !id.path.isNullOrBlank() -> register(
            // register JSON schema by related path
            additionalIDs.resolvePath(id.path).buildRefId(),
            assertion,
          )

          !id.fragment.isNullOrBlank() -> register(
            // register JSON schema by fragment
            additionalIDs.last().id.buildUpon().encodedFragment(id.fragment).buildRefId(),
            assertion,
          )
        }
    }
  }

  private fun register(
    referenceId: RefId,
    assertion: JsonSchemaAssertion,
  ) {
    references.put(referenceId, AssertionWithPath(assertion, schemaPath))?.apply {
      throw IllegalStateException("duplicated definition $referenceId")
    }
  }
}

private fun Set<IdWithLocation>.resolvePath(path: String?): Uri {
  return last().id.appendPathToParent(requireNotNull(path) { "path is null" })
}
private fun Uri.appendPathToParent(path: String): Uri {
  val hasLastEmptySegment = toString().endsWith('/')
  return if (hasLastEmptySegment) {
    buildUpon() // don't need to drop anything. just add the path because / in the end means empty segment
  } else {
    buildUpon()
      .path(null) // reset path in builder
      .apply {
        pathSegments.asSequence()
          .take(pathSegments.size - 1) // drop last path segment
          .forEach(this::appendPath)
      }
  }.appendEncodedPath(path)
    .build()
}
private fun Uri.buildRefId(): RefId = RefId(this)

private fun Builder.buildRefId(): RefId = build().buildRefId()

private fun defaultLoadingContext(baseId: Uri): DefaultLoadingContext = DefaultLoadingContext(baseId)