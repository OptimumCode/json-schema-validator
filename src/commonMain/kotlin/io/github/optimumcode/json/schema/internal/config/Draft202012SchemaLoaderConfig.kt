package io.github.optimumcode.json.schema.internal.config

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
import io.github.optimumcode.json.schema.internal.SchemaLoaderContext
import io.github.optimumcode.json.schema.internal.config.Draft202012KeyWordResolver.DYNAMIC_ANCHOR_PROPERTY
import io.github.optimumcode.json.schema.internal.config.Draft202012KeyWordResolver.DYNAMIC_REF_PROPERTY
import io.github.optimumcode.json.schema.internal.config.Draft202012KeyWordResolver.REF_PROPERTY
import io.github.optimumcode.json.schema.internal.factories.array.ContainsAssertionFactoryDraft202012
import io.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactoryDraft202012
import io.github.optimumcode.json.schema.internal.factories.array.MaxContainsAssertionFactoryDraft202012
import io.github.optimumcode.json.schema.internal.factories.array.MaxItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.MinContainsAssertionFactoryDraft202012
import io.github.optimumcode.json.schema.internal.factories.array.MinItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.PrefixItemsAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.UnevaluatedItemsAssertionFactoryDraft202012
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
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.jsonPrimitive

private const val APPLICATOR_VOCABULARY_URI = "https://json-schema.org/draft/2020-12/vocab/applicator"
private const val VALIDATION_VOCABULARY_URI = "https://json-schema.org/draft/2020-12/vocab/validation"
private const val VOCABULARY_PROPERTY = "\$vocabulary"

internal object Draft202012SchemaLoaderConfig : SchemaLoaderConfig {
  private val applicatorFactories: List<AssertionFactory> =
    listOf(
      PrefixItemsAssertionFactory,
      ItemsAssertionFactoryDraft202012,
      ContainsAssertionFactoryDraft202012,
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
      UnevaluatedItemsAssertionFactoryDraft202012,
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
      MinContainsAssertionFactoryDraft202012,
      MaxContainsAssertionFactoryDraft202012,
      UniqueItemsAssertionFactory,
      MaxPropertiesAssertionFactory,
      MinPropertiesAssertionFactory,
      RequiredAssertionFactory,
      DependentRequiredAssertionFactory,
      ConstAssertionFactory,
      EnumAssertionFactory,
      TypeAssertionFactory,
    )

  override val allFactories: List<AssertionFactory> =
    applicatorFactories + validationFactories

  override fun factories(schemaDefinition: JsonElement): List<AssertionFactory> {
    if (schemaDefinition !is JsonObject) {
      // no point to return any factories here
      return emptyList()
    }
    val vocabularyElement = schemaDefinition[VOCABULARY_PROPERTY] ?: return allFactories()
    require(vocabularyElement is JsonObject) { "$VOCABULARY_PROPERTY must be a JSON object" }
    val applicators = vocabularyElement[APPLICATOR_VOCABULARY_URI]?.jsonPrimitive?.boolean ?: true
    val validations = vocabularyElement[VALIDATION_VOCABULARY_URI]?.jsonPrimitive?.boolean ?: true
    return when {
      applicators && validations -> allFactories()
      applicators -> applicatorFactories
      validations -> validationFactories
      else -> emptyList() // no vocabulary enabled
    }
  }

  override val keywordResolver: KeyWordResolver
    get() = Draft202012KeyWordResolver
  override val referenceFactory: ReferenceFactory
    get() = Draft202012ReferenceFactory

  private fun allFactories(): List<AssertionFactory> = applicatorFactories + validationFactories
}

private object Draft202012KeyWordResolver : KeyWordResolver {
  private const val ANCHOR_PROPERTY = "\$anchor"
  private const val ID_PROPERTY = "\$id"
  private const val DEF_PROPERTY = "\$defs"
  private const val OLD_DEF_PROPERTY = "definitions"
  const val REF_PROPERTY: String = "\$ref"
  const val DYNAMIC_REF_PROPERTY: String = "\$dynamicRef"
  const val DYNAMIC_ANCHOR_PROPERTY: String = "\$dynamicAnchor"

  override fun resolve(keyword: KeyWord): String {
    return when (keyword) {
      ID -> ID_PROPERTY
      ANCHOR -> ANCHOR_PROPERTY
      DEFINITIONS -> DEF_PROPERTY
      COMPATIBILITY_DEFINITIONS -> OLD_DEF_PROPERTY
      DYNAMIC_ANCHOR -> DYNAMIC_ANCHOR_PROPERTY
    }
  }
}

private object Draft202012ReferenceFactory : ReferenceFactory {
  override fun extractRef(
    schemaDefinition: JsonObject,
    context: SchemaLoaderContext,
  ): RefHolder? {
    return when {
      REF_PROPERTY in schemaDefinition ->
        RefHolder.Simple(REF_PROPERTY, schemaDefinition.getStringRequired(REF_PROPERTY).let(context::ref))

      DYNAMIC_REF_PROPERTY in schemaDefinition -> {
        val recRef = schemaDefinition.getStringRequired(DYNAMIC_REF_PROPERTY)
        RefHolder.Recursive(DYNAMIC_REF_PROPERTY, context.ref(recRef))
      }

      else -> null
    }
  }

  override val allowOverriding: Boolean
    get() = true
  override val resolveRefPriorId: Boolean
    get() = true

  override fun recursiveResolutionEnabled(schemaDefinition: JsonObject): Boolean = false
}