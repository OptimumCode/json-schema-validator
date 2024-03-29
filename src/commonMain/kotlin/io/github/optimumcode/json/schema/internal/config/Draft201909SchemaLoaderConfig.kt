package io.github.optimumcode.json.schema.internal.config

import io.github.optimumcode.json.schema.FormatBehavior.ANNOTATION_AND_ASSERTION
import io.github.optimumcode.json.schema.SchemaOption
import io.github.optimumcode.json.schema.internal.AssertionFactory
import io.github.optimumcode.json.schema.internal.KeyWord
import io.github.optimumcode.json.schema.internal.KeyWord.ANCHOR
import io.github.optimumcode.json.schema.internal.KeyWord.COMPATIBILITY_DEFINITIONS
import io.github.optimumcode.json.schema.internal.KeyWord.DEFINITIONS
import io.github.optimumcode.json.schema.internal.KeyWord.DYNAMIC_ANCHOR
import io.github.optimumcode.json.schema.internal.KeyWord.ID
import io.github.optimumcode.json.schema.internal.KeyWordResolver
import io.github.optimumcode.json.schema.internal.ReferenceFactory
import io.github.optimumcode.json.schema.internal.ReferenceFactory.RefHolder
import io.github.optimumcode.json.schema.internal.SchemaLoaderConfig
import io.github.optimumcode.json.schema.internal.SchemaLoaderConfig.Options
import io.github.optimumcode.json.schema.internal.SchemaLoaderConfig.Vocabulary
import io.github.optimumcode.json.schema.internal.SchemaLoaderContext
import io.github.optimumcode.json.schema.internal.config.Draft201909KeyWordResolver.REC_ANCHOR_PROPERTY
import io.github.optimumcode.json.schema.internal.config.Draft201909KeyWordResolver.REC_REF_PROPERTY
import io.github.optimumcode.json.schema.internal.config.Draft201909KeyWordResolver.REF_PROPERTY
import io.github.optimumcode.json.schema.internal.factories.array.AdditionalItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.ContainsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.MaxContainsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.MaxItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.MinContainsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.MinItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.UnevaluatedItemsAssertionFactory
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
import io.github.optimumcode.json.schema.internal.factories.general.FormatAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.general.TypeAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.ExclusiveMaximumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.ExclusiveMinimumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.MaximumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.MinimumAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.number.MultipleOfAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.AdditionalPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.DependentRequiredAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.DependentSchemasAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.MaxPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.MinPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.PatternPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.PropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.PropertyNamesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.RequiredAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.UnevaluatedPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.MaxLengthAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.MinLengthAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.PatternAssertionFactory
import io.github.optimumcode.json.schema.internal.util.getStringRequired
import io.github.optimumcode.json.schema.internal.wellknown.Draft201909
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.jsonPrimitive

private const val APPLICATOR_VOCABULARY_URI = "https://json-schema.org/draft/2019-09/vocab/applicator"
private const val VALIDATION_VOCABULARY_URI = "https://json-schema.org/draft/2019-09/vocab/validation"
private const val FORMAT_VOCABULARY_URI = "https://json-schema.org/draft/2019-09/vocab/format"
private const val VOCABULARY_PROPERTY = "\$vocabulary"

internal object Draft201909SchemaLoaderConfig : SchemaLoaderConfig {
  private val applicatorFactories: List<AssertionFactory> =
    listOf(
      ItemsAssertionFactory,
      AdditionalItemsAssertionFactory,
      ContainsAssertionFactory,
      PropertiesAssertionFactory,
      PatternPropertiesAssertionFactory,
      AdditionalPropertiesAssertionFactory,
      PropertyNamesAssertionFactory,
      DependentSchemasAssertionFactory,
      IfAssertionFactory,
      ThenAssertionFactory,
      ElseAssertionFactory,
      AllOfAssertionFactory,
      AnyOfAssertionFactory,
      OneOfAssertionFactory,
      NotAssertionFactory,
      // MUST be applied last
      UnevaluatedItemsAssertionFactory,
      UnevaluatedPropertiesAssertionFactory,
    )

  private val validationFactories: List<AssertionFactory> =
    listOf(
      MultipleOfAssertionFactory,
      MaximumAssertionFactory,
      ExclusiveMaximumAssertionFactory,
      MinimumAssertionFactory,
      ExclusiveMinimumAssertionFactory,
      MaxLengthAssertionFactory,
      MinLengthAssertionFactory,
      PatternAssertionFactory,
      MaxItemsAssertionFactory,
      MinItemsAssertionFactory,
      MinContainsAssertionFactory,
      MaxContainsAssertionFactory,
      UniqueItemsAssertionFactory,
      MaxPropertiesAssertionFactory,
      MinPropertiesAssertionFactory,
      RequiredAssertionFactory,
      DependentRequiredAssertionFactory,
      ConstAssertionFactory,
      EnumAssertionFactory,
      TypeAssertionFactory,
    )

  override val defaultVocabulary: Vocabulary =
    requireNotNull(createVocabulary(Json.parseToJsonElement(Draft201909.DRAFT201909_SCHEMA.content))) {
      "draft schema must have a vocabulary"
    }

  override val allFactories: List<AssertionFactory> =
    applicatorFactories + validationFactories

  override fun createVocabulary(schemaDefinition: JsonElement): Vocabulary? {
    if (schemaDefinition !is JsonObject || VOCABULARY_PROPERTY !in schemaDefinition) {
      return null
    }
    val vocabulary = schemaDefinition.getValue(VOCABULARY_PROPERTY)
    require(vocabulary is JsonObject) { "$VOCABULARY_PROPERTY must be a JSON object" }
    if (vocabulary.isEmpty()) {
      return null
    }
    return Vocabulary(
      vocabularies =
        vocabulary.mapValues { (_, state) -> state.jsonPrimitive.boolean },
    )
  }

  override fun factories(
    schemaDefinition: JsonElement,
    vocabulary: Vocabulary,
    options: Options,
  ): List<AssertionFactory> {
    if (schemaDefinition !is JsonObject) {
      // no point to return any factories here
      return emptyList()
    }

    val applicators = vocabulary.enabled(APPLICATOR_VOCABULARY_URI)
    val validations = vocabulary.enabled(VALIDATION_VOCABULARY_URI)
    val formatAssertion =
      options[SchemaOption.FORMAT_BEHAVIOR_OPTION]?.let { it == ANNOTATION_AND_ASSERTION }
        ?: vocabulary.enabled(FORMAT_VOCABULARY_URI)
    val formatFactory =
      if (formatAssertion) {
        FormatAssertionFactory.AnnotationAndAssertion
      } else {
        FormatAssertionFactory.AnnotationOnly
      }
    return when {
      applicators && validations -> allFactories()
      applicators -> applicatorFactories
      validations -> validationFactories
      else -> emptyList() // no vocabulary enabled
    }.let { factories ->
      if (factories.isEmpty()) {
        listOf(formatFactory)
      } else {
        factories + formatFactory
      }
    }
  }

  override val keywordResolver: KeyWordResolver
    get() = Draft201909KeyWordResolver
  override val referenceFactory: ReferenceFactory
    get() = Draft201909ReferenceFactory

  private fun allFactories(): List<AssertionFactory> = applicatorFactories + validationFactories
}

private object Draft201909KeyWordResolver : KeyWordResolver {
  private const val ANCHOR_PROPERTY = "\$anchor"
  private const val ID_PROPERTY = "\$id"
  private const val DEF_PROPERTY = "\$defs"
  private const val OLD_DEF_PROPERTY = "definitions"
  const val REF_PROPERTY: String = "\$ref"
  const val REC_REF_PROPERTY: String = "\$recursiveRef"
  const val REC_ANCHOR_PROPERTY: String = "\$recursiveAnchor"

  override fun resolve(keyword: KeyWord): String? {
    return when (keyword) {
      ID -> ID_PROPERTY
      ANCHOR -> ANCHOR_PROPERTY
      DEFINITIONS -> DEF_PROPERTY
      COMPATIBILITY_DEFINITIONS -> OLD_DEF_PROPERTY
      DYNAMIC_ANCHOR -> null
    }
  }
}

private object Draft201909ReferenceFactory : ReferenceFactory {
  override fun extractRef(
    schemaDefinition: JsonObject,
    context: SchemaLoaderContext,
  ): RefHolder? {
    return when {
      REF_PROPERTY in schemaDefinition ->
        RefHolder.Simple(REF_PROPERTY, schemaDefinition.getStringRequired(REF_PROPERTY).let(context::ref))

      REC_REF_PROPERTY in schemaDefinition -> {
        val recRef = schemaDefinition.getStringRequired(REC_REF_PROPERTY)
        require(recRef == "#") { "only ref to root is supported by $REC_REF_PROPERTY" }
        RefHolder.Recursive(REC_REF_PROPERTY, context.ref(recRef))
      }

      else -> null
    }
  }

  override val allowOverriding: Boolean
    get() = true
  override val resolveRefPriorId: Boolean
    get() = true

  override fun recursiveResolutionEnabled(schemaDefinition: JsonObject): Boolean =
    schemaDefinition[REC_ANCHOR_PROPERTY]?.jsonPrimitive?.boolean ?: false
}