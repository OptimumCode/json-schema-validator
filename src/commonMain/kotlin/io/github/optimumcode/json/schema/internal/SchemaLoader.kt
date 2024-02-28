package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Builder
import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get
import io.github.optimumcode.json.pointer.relative
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.SchemaType
import io.github.optimumcode.json.schema.extension.ExternalAssertionFactory
import io.github.optimumcode.json.schema.findSchemaType
import io.github.optimumcode.json.schema.internal.ReferenceFactory.RefHolder
import io.github.optimumcode.json.schema.internal.ReferenceFactory.RefHolder.Recursive
import io.github.optimumcode.json.schema.internal.ReferenceFactory.RefHolder.Simple
import io.github.optimumcode.json.schema.internal.ReferenceValidator.PointerWithBaseId
import io.github.optimumcode.json.schema.internal.ReferenceValidator.ReferenceLocation
import io.github.optimumcode.json.schema.internal.SchemaLoaderConfig.Vocabulary
import io.github.optimumcode.json.schema.internal.factories.ExternalAssertionFactoryAdapter
import io.github.optimumcode.json.schema.internal.util.getString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.booleanOrNull

private const val SCHEMA_PROPERTY: String = "\$schema"

internal class SchemaLoader : JsonSchemaLoader {
  private val references: MutableMap<RefId, AssertionWithPath> = linkedMapOf()
  private val usedRefs: MutableSet<ReferenceLocation> = linkedSetOf()
  private val extensionFactories: MutableMap<String, AssertionFactory> = linkedMapOf()
  private val customMetaSchemas: MutableMap<Uri, Pair<SchemaType, Vocabulary>> = linkedMapOf()
  private val customFormats: MutableMap<String, FormatValidator> = linkedMapOf()

  override fun register(
    schema: JsonElement,
    draft: SchemaType?,
  ): JsonSchemaLoader =
    apply {
      loadSchemaData(schema, createParameters(draft))
    }

  override fun register(
    schema: String,
    draft: SchemaType?,
  ): JsonSchemaLoader =
    run {
      val schemaElement: JsonElement = Json.parseToJsonElement(schema)
      register(schemaElement, draft)
    }

  override fun register(
    schema: JsonElement,
    remoteUri: String,
    draft: SchemaType?,
  ): JsonSchemaLoader =
    apply {
      loadSchemaData(
        schema,
        createParameters(draft),
        Uri.parse(remoteUri),
      )
    }

  override fun withExtensions(
    externalFactory: ExternalAssertionFactory,
    vararg otherExternalFactories: ExternalAssertionFactory,
  ): JsonSchemaLoader =
    apply {
      addExtensionFactory(externalFactory)
      for (extFactory in otherExternalFactories) {
        addExtensionFactory(extFactory)
      }
    }

  override fun withExtensions(externalFactories: Iterable<ExternalAssertionFactory>): JsonSchemaLoader =
    apply {
      for (extFactory in externalFactories) {
        addExtensionFactory(extFactory)
      }
    }

  override fun withCustomFormat(
    format: String,
    formatValidator: FormatValidator,
  ): JsonSchemaLoader =
    apply {
      val key = format.lowercase()
      require(customFormats.put(key, formatValidator) == null) {
        "format $key already registered"
      }
    }

  override fun withCustomFormats(formats: Map<String, FormatValidator>): JsonSchemaLoader =
    apply {
      for ((format, validator) in formats) {
        withCustomFormat(format, validator)
      }
    }

  override fun fromDefinition(
    schema: String,
    draft: SchemaType?,
  ): JsonSchema {
    val schemaElement: JsonElement = Json.parseToJsonElement(schema)
    return fromJsonElement(schemaElement, draft)
  }

  override fun fromJsonElement(
    schemaElement: JsonElement,
    draft: SchemaType?,
  ): JsonSchema {
    val assertion: JsonSchemaAssertion =
      loadSchemaData(
        schemaElement,
        createParameters(draft),
      )
    validateReferences(references, usedRefs)
    return createSchema(
      LoadResult(
        assertion,
        references.toMutableMap(),
        usedRefs.mapTo(hashSetOf()) { it.refId },
      ),
    )
  }

  private fun createParameters(draft: SchemaType?): LoadingParameters =
    LoadingParameters(
      defaultType = draft,
      references = references,
      usedRefs = usedRefs,
      extensionFactories = extensionFactories.values,
      customFormats = customFormats,
      registerMetaSchema = { uri, type, vocab ->
        val prev = customMetaSchemas.put(uri, type to vocab)
        require(prev == null) { "duplicated meta-schema with uri '$uri'" }
      },
      resolveCustomVocabulary = { customMetaSchemas[it]?.second },
      resolveCustomMetaSchemaType = { customMetaSchemas[it]?.first },
    )

  private fun addExtensionFactory(extensionFactory: ExternalAssertionFactory) {
    for (schemaType in SchemaType.entries) {
      val match =
        schemaType.config.allFactories.find { it.property.equals(extensionFactory.keywordName, ignoreCase = true) }
      if (match == null) {
        continue
      }
      error(
        "external factory with keyword '${extensionFactory.keywordName}' " +
          "overlaps with '${match.property}' keyword from $schemaType",
      )
    }
    val duplicate = extensionFactories.keys.find { it.equals(extensionFactory.keywordName, ignoreCase = true) }
    check(duplicate == null) { "duplicated extension factory with keyword '$duplicate'" }
    extensionFactories[extensionFactory.keywordName] = ExternalAssertionFactoryAdapter(extensionFactory)
  }
}

internal object IsolatedLoader : JsonSchemaLoader {
  override fun register(
    schema: JsonElement,
    draft: SchemaType?,
  ): JsonSchemaLoader = throw UnsupportedOperationException()

  override fun register(
    schema: String,
    draft: SchemaType?,
  ): JsonSchemaLoader = throw UnsupportedOperationException()

  override fun register(
    schema: JsonElement,
    remoteUri: String,
    draft: SchemaType?,
  ): JsonSchemaLoader = throw UnsupportedOperationException()

  override fun withExtensions(
    externalFactory: ExternalAssertionFactory,
    vararg otherExternalFactories: ExternalAssertionFactory,
  ): JsonSchemaLoader = throw UnsupportedOperationException()

  override fun withExtensions(externalFactories: Iterable<ExternalAssertionFactory>): JsonSchemaLoader =
    throw UnsupportedOperationException()

  override fun withCustomFormat(
    format: String,
    formatValidator: FormatValidator,
  ): JsonSchemaLoader = throw UnsupportedOperationException()

  override fun withCustomFormats(formats: Map<String, FormatValidator>): JsonSchemaLoader =
    throw UnsupportedOperationException()

  override fun fromDefinition(
    schema: String,
    draft: SchemaType?,
  ): JsonSchema {
    val schemaElement: JsonElement = Json.parseToJsonElement(schema)
    return fromJsonElement(schemaElement, draft)
  }

  override fun fromJsonElement(
    schemaElement: JsonElement,
    draft: SchemaType?,
  ): JsonSchema {
    val references: MutableMap<RefId, AssertionWithPath> = linkedMapOf()
    val usedRefs: MutableSet<ReferenceLocation> = hashSetOf()
    val assertion: JsonSchemaAssertion = loadSchemaData(schemaElement, LoadingParameters(draft, references, usedRefs))
    validateReferences(references, usedRefs)
    return createSchema(LoadResult(assertion, references, usedRefs.mapTo(hashSetOf()) { it.refId }))
  }
}

@Suppress("detekt:LongParameterList")
private class LoadingParameters(
  val defaultType: SchemaType?,
  val references: MutableMap<RefId, AssertionWithPath>,
  val usedRefs: MutableSet<ReferenceLocation>,
  val extensionFactories: Collection<AssertionFactory> = emptySet(),
  val customFormats: Map<String, FormatValidator> = emptyMap(),
  val resolveCustomMetaSchemaType: (Uri) -> SchemaType? = { null },
  val resolveCustomVocabulary: (Uri) -> Vocabulary? = { null },
  val registerMetaSchema: (Uri, SchemaType, Vocabulary) -> Unit = { _, _, _ -> },
)

private fun loadSchemaData(
  schemaDefinition: JsonElement,
  parameters: LoadingParameters,
  externalUri: Uri? = null,
): JsonSchemaAssertion {
  val schema: Uri? = extractSchema(schemaDefinition)?.let(Uri::parse)
  val schemaType: SchemaType = resolveSchemaType(schema, parameters.defaultType, parameters.resolveCustomMetaSchemaType)
  val baseId: Uri = extractID(schemaDefinition, schemaType.config) ?: externalUri ?: Uri.EMPTY
  val schemaVocabulary: Vocabulary? =
    schemaType.config.createVocabulary(schemaDefinition)?.also {
      parameters.registerMetaSchema(baseId, schemaType, it)
    }
  val vocabulary: Vocabulary =
    schemaVocabulary
      ?: schema?.let(parameters.resolveCustomVocabulary)
      ?: schemaType.config.defaultVocabulary
  val assertionFactories =
    schemaType.config.factories(schemaDefinition, vocabulary).let {
      if (parameters.extensionFactories.isEmpty()) {
        it
      } else {
        it + parameters.extensionFactories
      }
    }
  val isolatedReferences: MutableMap<RefId, AssertionWithPath> = linkedMapOf()
  val context =
    defaultLoadingContext(
      baseId,
      schemaType.config,
      assertionFactories,
      references = isolatedReferences,
      customFormats = parameters.customFormats,
    ).let {
      if (externalUri != null && baseId != externalUri) {
        // The external URI is added as the first one
        // as it should not be used to calculate ids
        // inside the schema
        it.copy(additionalIDs = setOf(IdWithLocation(externalUri, JsonPointer.ROOT)) + it.additionalIDs)
      } else {
        it
      }
    }
  val schemaAssertion = loadSchema(schemaDefinition, context)
  parameters.references.putAll(isolatedReferences)
  parameters.usedRefs.addAll(context.usedRef)
  return schemaAssertion
}

private fun validateReferences(
  references: Map<RefId, AssertionWithPath>,
  usedRefs: Set<ReferenceLocation>,
) {
  ReferenceValidator.validateReferences(
    references.mapValues { it.value.run { PointerWithBaseId(this.baseId, schemaPath) } },
    usedRefs,
  )
}

private fun createSchema(result: LoadResult): JsonSchema {
  val dynamicRefs =
    result.references.asSequence()
      .filter { it.value.dynamic }
      .map { it.key }
      .toSet()
  // pre-filter references to get rid of unused references
  val usedReferencesWithPath: Map<RefId, AssertionWithPath> =
    result.references.asSequence()
      .filter { it.key in result.usedRefs || it.key in dynamicRefs }
      .associate { it.key to it.value }
  return JsonSchema(result.assertion, DefaultReferenceResolver(usedReferencesWithPath))
}

private class LoadResult(
  val assertion: JsonSchemaAssertion,
  val references: Map<RefId, AssertionWithPath>,
  val usedRefs: Set<RefId>,
)

private fun resolveSchemaType(
  schema: Uri?,
  defaultType: SchemaType?,
  resolveCustomMetaSchemaType: (Uri) -> SchemaType?,
): SchemaType {
  val schemaType: SchemaType? =
    schema?.let {
      findSchemaType(it)
        ?: resolveCustomMetaSchemaType(it)
        ?: throw IllegalArgumentException("unsupported schema type $it")
    }
  return schemaType ?: defaultType ?: SchemaType.entries.last()
}

private fun extractSchema(schemaDefinition: JsonElement): String? {
  return if (schemaDefinition is JsonObject) {
    schemaDefinition[SCHEMA_PROPERTY]?.let {
      require(it is JsonPrimitive && it.isString) { "$SCHEMA_PROPERTY must be a string" }
      it.content
    }
  } else {
    null
  }
}

private fun loadDefinitions(
  schemaDefinition: JsonElement,
  context: DefaultLoadingContext,
) {
  if (schemaDefinition !is JsonObject) {
    return
  }
  val (definitionsProperty, definitionsElement: JsonElement?) =
    context.config.keywordResolver.run {
      resolve(KeyWord.DEFINITIONS)
        ?.let {
          it to schemaDefinition[it]
        }?.takeIf { it.second != null }
        ?: resolve(KeyWord.COMPATIBILITY_DEFINITIONS)
          ?.let {
            it to schemaDefinition[it]
          }?.takeIf { it.second != null }
    } ?: return
  if (definitionsElement == null) {
    return
  }
  require(definitionsElement is JsonObject) { "$definitionsProperty must be an object" }
  val definitionsContext = context.at(definitionsProperty)
  for ((name, element) in definitionsElement) {
    loadSchema(element, definitionsContext.at(name))
  }
}

private fun extractID(
  schemaDefinition: JsonElement,
  config: SchemaLoaderConfig,
): Uri? =
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
  val contextWithAdditionalID = additionalId?.let(context::addId) ?: context
  val referenceFactory = context.config.referenceFactory
  return when (schemaDefinition) {
    is JsonPrimitive ->
      if (schemaDefinition.boolean) {
        TrueSchemaAssertion
      } else {
        FalseSchemaAssertion(path = context.schemaPath)
      }

    is JsonObject -> {
      // If a new ID scope is introduced we must check whether we still should try to recursively resolve refs
      if (additionalId != null) {
        contextWithAdditionalID.updateRecursiveResolution(schemaDefinition)
      }
      val refLoadingContext = if (referenceFactory.resolveRefPriorId) contextWithAdditionalID else context
      val extractedRef: RefHolder? = referenceFactory.extractRef(schemaDefinition, refLoadingContext)
      val refAssertion: JsonSchemaAssertion? =
        if (extractedRef != null) {
          loadRefAssertion(extractedRef, refLoadingContext)
        } else {
          null
        }
      if (refAssertion != null && !referenceFactory.allowOverriding) {
        JsonSchemaRoot(
          contextWithAdditionalID.baseId,
          contextWithAdditionalID.schemaPath,
          listOf(refAssertion),
          contextWithAdditionalID.recursiveResolution,
        )
      } else {
        loadJsonSchemaRoot(contextWithAdditionalID, schemaDefinition, refAssertion)
      }
    }
    // should never happen
    else -> throw IllegalArgumentException("schema must be either a valid JSON object or boolean")
  }.apply {
    loadDefinitions(schemaDefinition, contextWithAdditionalID)
    context.register(additionalId, this)
    registerWithAnchor(
      context.config.keywordResolver.resolve(KeyWord.ANCHOR),
      schemaDefinition,
      contextWithAdditionalID,
    )
    registerWithAnchor(
      context.config.keywordResolver.resolve(KeyWord.DYNAMIC_ANCHOR),
      schemaDefinition,
      contextWithAdditionalID,
      dynamic = true,
    )
  }
}

private fun JsonSchemaAssertion.registerWithAnchor(
  anchorProperty: String?,
  schemaDefinition: JsonElement,
  contextWithAdditionalID: DefaultLoadingContext,
  dynamic: Boolean = false,
) {
  if (anchorProperty != null && schemaDefinition is JsonObject) {
    schemaDefinition.getString(anchorProperty)?.also {
      contextWithAdditionalID.registerByAnchor(it, this, dynamic)
    }
  }
}

private fun loadJsonSchemaRoot(
  context: DefaultLoadingContext,
  schemaDefinition: JsonElement,
  refAssertion: JsonSchemaAssertion?,
): JsonSchemaRoot {
  val assertions =
    context.assertionFactories.filter { it.isApplicable(schemaDefinition) }
      .map {
        it.create(
          schemaDefinition,
          // we register id to be used for future schema registration
          context,
        )
      }
  val result =
    buildList(assertions.size + (refAssertion?.let { 1 } ?: 0)) {
      refAssertion?.also(this::add)
      addAll(assertions)
    }
  return JsonSchemaRoot(
    context.baseId,
    context.schemaPath,
    result,
    context.recursiveResolution,
  )
}

private fun loadRefAssertion(
  refHolder: RefHolder,
  context: DefaultLoadingContext,
): JsonSchemaAssertion {
  return when (refHolder) {
    is Simple -> RefSchemaAssertion(context.schemaPath / refHolder.property, refHolder.refId)
    is Recursive ->
      RecursiveRefSchemaAssertion(
        context.schemaPath / refHolder.property,
        refHolder.refId,
      )
  }
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
  val dynamic: Boolean,
  val baseId: Uri,
)

private data class DefaultLoadingContext(
  override val baseId: Uri,
  var recursiveResolution: Boolean = false,
  override val schemaPath: JsonPointer = JsonPointer.ROOT,
  val additionalIDs: Set<IdWithLocation> = linkedSetOf(IdWithLocation(baseId, schemaPath)),
  val references: MutableMap<RefId, AssertionWithPath> = linkedMapOf(),
  val usedRef: MutableSet<ReferenceLocation> = linkedSetOf(),
  val config: SchemaLoaderConfig,
  val assertionFactories: List<AssertionFactory>,
  override val customFormatValidators: Map<String, FormatValidator>,
) : LoadingContext, SchemaLoaderContext {
  override fun at(property: String): DefaultLoadingContext {
    return copy(schemaPath = schemaPath / property)
  }

  override fun at(index: Int): DefaultLoadingContext {
    return copy(schemaPath = schemaPath[index])
  }

  override fun schemaFrom(element: JsonElement): JsonSchemaAssertion = loadSchema(element, this)

  override fun isJsonSchema(element: JsonElement): Boolean =
    (
      element is JsonObject ||
        (element is JsonPrimitive && element.booleanOrNull != null)
    )

  fun register(
    id: Uri?,
    assertion: JsonSchemaAssertion,
    dynamic: Boolean = false,
  ) {
    if (id != null) {
      registerById(id, assertion, dynamic)
    }
    for ((baseId, location) in additionalIDs) {
      val relativePointer = location.relative(schemaPath)
      val referenceId: RefId =
        baseId.buildUpon()
          .encodedFragment(relativePointer.toString())
          .buildRefId()
      if (referenceId.uri == id) {
        // this happens when the root schema has ID,
        // and we register it using Empty pointer
        continue
      }
      register(referenceId, assertion, dynamic = false)
    }
  }

  /**
   * [anchor] is a plain text that will be transformed into a URI fragment
   * It must match [ANCHOR_REGEX] otherwise [IllegalArgumentException] will be thrown
   */
  fun registerByAnchor(
    anchor: String,
    assertion: JsonSchemaAssertion,
    dynamic: Boolean,
  ) {
    require(ANCHOR_REGEX.matches(anchor)) { "$anchor must match the format ${ANCHOR_REGEX.pattern}" }
    val refId = additionalIDs.last().id.buildUpon().fragment(anchor).buildRefId()
    register(refId, assertion, dynamic)
  }

  fun addId(additionalId: Uri): DefaultLoadingContext {
    return when {
      additionalId.isAbsolute -> copy(additionalIDs = additionalIDs + IdWithLocation(additionalId, schemaPath))
      additionalId.isRelative && !additionalId.path.isNullOrBlank() ->
        copy(
          additionalIDs =
            additionalIDs.run {
              this +
                IdWithLocation(
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
      !refUri.path.isNullOrBlank() ->
        additionalIDs.resolvePath(refUri.path).run {
          if (refUri.fragment.isNullOrBlank()) {
            this
          } else {
            buildUpon().encodedFragment(refUri.fragment).build()
          }
        }.buildRefId()

      refUri.fragment != null -> additionalIDs.last().id.buildUpon().encodedFragment(refUri.fragment).buildRefId()
      else -> throw IllegalArgumentException("invalid reference '$refId'")
    }.also { usedRef += ReferenceLocation(schemaPath, it) }
  }

  fun updateRecursiveResolution(schemaDefinition: JsonObject) {
    recursiveResolution = config.referenceFactory.recursiveResolutionEnabled(schemaDefinition)
  }

  private fun registerById(
    id: Uri,
    assertion: JsonSchemaAssertion,
    dynamic: Boolean,
  ) {
    when {
      id.isAbsolute -> register(id.buildRefId(), assertion, dynamic) // register JSON schema by absolute URI
      id.isRelative ->
        when {
          !id.path.isNullOrBlank() ->
            register(
              // register JSON schema by related path
              additionalIDs.resolvePath(id.path).buildRefId(),
              assertion,
              dynamic,
            )

          !id.fragment.isNullOrBlank() ->
            register(
              // register JSON schema by fragment
              additionalIDs.last().id.buildUpon().encodedFragment(id.fragment).buildRefId(),
              assertion,
              dynamic,
            )
        }
    }
  }

  private fun register(
    referenceId: RefId,
    assertion: JsonSchemaAssertion,
    dynamic: Boolean,
  ) {
    references.put(referenceId, AssertionWithPath(assertion, schemaPath, dynamic, baseId))?.apply {
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
        if (pathSegments.isEmpty()) return@apply
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

private fun defaultLoadingContext(
  baseId: Uri,
  config: SchemaLoaderConfig,
  assertionFactories: List<AssertionFactory>,
  references: MutableMap<RefId, AssertionWithPath>,
  customFormats: Map<String, FormatValidator>,
): DefaultLoadingContext =
  DefaultLoadingContext(
    baseId,
    references = references,
    config = config,
    assertionFactories = assertionFactories,
    customFormatValidators = customFormats,
  )