package io.github.optimumcode.json.schema.internal.config

import io.github.optimumcode.json.schema.internal.AssertionFactory
import io.github.optimumcode.json.schema.internal.KeyWord
import io.github.optimumcode.json.schema.internal.KeyWord.ANCHOR
import io.github.optimumcode.json.schema.internal.KeyWord.COMPATIBILITY_DEFINITIONS
import io.github.optimumcode.json.schema.internal.KeyWord.DEFINITIONS
import io.github.optimumcode.json.schema.internal.KeyWord.ID
import io.github.optimumcode.json.schema.internal.KeyWord.REF
import io.github.optimumcode.json.schema.internal.KeyWordResolver
import io.github.optimumcode.json.schema.internal.ReferenceFactory
import io.github.optimumcode.json.schema.internal.ReferenceFactory.RefHolder
import io.github.optimumcode.json.schema.internal.SchemaLoaderConfig
import io.github.optimumcode.json.schema.internal.SchemaLoaderContext
import io.github.optimumcode.json.schema.internal.config.Draft7KeyWordResolver.REF_PROPERTY
import io.github.optimumcode.json.schema.internal.factories.FactoryGroup
import io.github.optimumcode.json.schema.internal.factories.array.AdditionalItemsAssertionFactory
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
import io.github.optimumcode.json.schema.internal.factories.`object`.AdditionalPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.DependenciesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.MaxPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.MinPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.PatternPropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.PropertiesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.PropertyNamesAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.`object`.RequiredAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.MaxLengthAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.MinLengthAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.string.PatternAssertionFactory
import io.github.optimumcode.json.schema.internal.util.getStringRequired
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

internal object Draft7SchemaLoaderConfig : SchemaLoaderConfig {
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
    FactoryGroup(
      ItemsAssertionFactory,
      AdditionalItemsAssertionFactory,
    ),
    MaxItemsAssertionFactory,
    MinItemsAssertionFactory,
    UniqueItemsAssertionFactory,
    ContainsAssertionFactory,
    MaxPropertiesAssertionFactory,
    MinPropertiesAssertionFactory,
    RequiredAssertionFactory,
    FactoryGroup(
      PropertiesAssertionFactory,
      PatternPropertiesAssertionFactory,
      AdditionalPropertiesAssertionFactory,
    ),
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

  override fun factories(schemaDefinition: JsonElement): List<AssertionFactory> = factories

  override val keywordResolver: KeyWordResolver
    get() = Draft7KeyWordResolver
  override val referenceFactory: ReferenceFactory
    get() = Draft7ReferenceFactory
}

private object Draft7KeyWordResolver : KeyWordResolver {
  private const val DEFINITIONS_PROPERTY: String = "definitions"
  private const val ID_PROPERTY: String = "\$id"
  const val REF_PROPERTY: String = "\$ref"

  override fun resolve(keyword: KeyWord): String? = when (keyword) {
    REF -> REF_PROPERTY
    ID -> ID_PROPERTY
    DEFINITIONS -> DEFINITIONS_PROPERTY
    ANCHOR -> null
    COMPATIBILITY_DEFINITIONS -> null
  }
}

private object Draft7ReferenceFactory : ReferenceFactory {
  override fun extractRef(schemaDefinition: JsonObject, context: SchemaLoaderContext): RefHolder? {
    return if (REF_PROPERTY in schemaDefinition) {
      RefHolder(REF_PROPERTY, schemaDefinition.getStringRequired(REF_PROPERTY).let(context::ref))
    } else {
      null
    }
  }
}