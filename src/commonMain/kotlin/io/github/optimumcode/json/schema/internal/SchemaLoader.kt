package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Builder
import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get
import io.github.optimumcode.json.pointer.relative
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.internal.ReferenceFactory.RefHolder
import io.github.optimumcode.json.schema.internal.ReferenceValidator.ReferenceLocation
import io.github.optimumcode.json.schema.internal.util.getString
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.booleanOrNull

private const val SCHEMA_PROPERTY: String = "\$schema"

internal class SchemaLoader {
  fun load(schemaDefinition: JsonElement): JsonSchema {
    val schemaType = extractSchemaType(schemaDefinition)
    val baseId: Uri = extractID(schemaDefinition, schemaType.config) ?: Uri.EMPTY
    val context = defaultLoadingContext(baseId, schemaType.config)
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
  val definitionsProperty: String = context.config.keywordResolver.run {
    resolve(KeyWord.DEFINITIONS) ?: resolve(KeyWord.COMPATIBILITY_DEFINITIONS)
  } ?: return
  val definitionsElement = schemaDefinition[definitionsProperty] ?: return
  require(definitionsElement is JsonObject) { "$definitionsProperty must be an object" }
  val definitionsContext = context.at(definitionsProperty)
  for ((name, element) in definitionsElement) {
    loadSchema(element, definitionsContext.at(name))
  }
}

private fun extractID(schemaDefinition: JsonElement, config: SchemaLoaderConfig): Uri? =
  when (schemaDefinition) {
    is JsonObject -> {
      val idProperty = config.keywordResolver.resolve(KeyWord.ID)
      idProperty
        ?.let(schemaDefinition::getString)
        ?.let {
          requireNotNull(Uri.parseOrNull(it)) { "invalid $idProperty: $it" }
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
  val additionalId: Uri? = extractID(schemaDefinition, context.config)
  return when (schemaDefinition) {
    is JsonPrimitive -> if (schemaDefinition.boolean) {
      TrueSchemaAssertion
    } else {
      FalseSchemaAssertion(path = context.schemaPath)
    }

    is JsonObject -> {
      val extractedRef: RefHolder? = context.config.referenceFactory.extractRef(schemaDefinition, context)
      if (extractedRef != null) {
        loadRefAssertion(extractedRef, context)
      } else {
        context.config.factories.filter { it.isApplicable(schemaDefinition) }
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
    val anchorProperty: String? = context.config.keywordResolver.resolve(KeyWord.ANCHOR)
    if (anchorProperty != null && schemaDefinition is JsonObject) {
      schemaDefinition.getString(anchorProperty)?.also {
        context.registerByAnchor(it, this)
      }
    }
  }
}

private fun loadRefAssertion(refHolder: RefHolder, context: DefaultLoadingContext): JsonSchemaAssertion {
  return RefSchemaAssertion(context.schemaPath / refHolder.property, refHolder.refId)
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
  override val baseId: Uri,
  override val recursiveResolution: Boolean = false,
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
  val additionalIDs: Set<IdWithLocation> = linkedSetOf(IdWithLocation(baseId, schemaPath)),
  val references: MutableMap<RefId, AssertionWithPath> = linkedMapOf(),
  val usedRef: MutableSet<ReferenceLocation> = linkedSetOf(),
  val config: SchemaLoaderConfig,
) : LoadingContext, SchemaLoaderContext {
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

  /**
   * [anchor] is a plain text that will be transformed into a URI fragment
   * It must match [ANCHOR_REGEX] otherwise [IllegalArgumentException] will be thrown
   */
  fun registerByAnchor(anchor: String, assertion: JsonSchemaAssertion) {
    require(ANCHOR_REGEX.matches(anchor)) { "$anchor must match the format ${ANCHOR_REGEX.pattern}" }
    val refId = additionalIDs.last().id.buildUpon().fragment(anchor).buildRefId()
    register(refId, assertion)
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

  override fun ref(refId: String): RefId {
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

private val ANCHOR_REGEX: Regex = "^[A-Za-z][A-Za-z0-9-_:.]*$".toRegex()

private fun Uri.buildRefId(): RefId = RefId(this)

private fun Builder.buildRefId(): RefId = build().buildRefId()

private fun defaultLoadingContext(baseId: Uri, config: SchemaLoaderConfig): DefaultLoadingContext =
  DefaultLoadingContext(baseId, config = config)