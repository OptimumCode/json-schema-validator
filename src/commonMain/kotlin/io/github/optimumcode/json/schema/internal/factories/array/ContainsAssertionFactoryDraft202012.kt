package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AnnotationKeyFactory
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.AssertionFactory
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.util.integerOrNull
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonPrimitive

/**
 * This factory is unusual exception when one factory had to know about another keyword.
 * In normal case the annotation should be used to pass information between keywords.
 * However, in this case we need to know about another keyword before we create the assertion.
 */
internal object ContainsAssertionFactoryDraft202012 : AssertionFactory {
  private const val PROPERTY: String = "contains"
  private const val MIN_CONTAINS_PROPERTY: String = "minContains"

  val ANNOTATION: AnnotationKey<Set<Int>> = AnnotationKeyFactory.createAggregatable(PROPERTY, Set<Int>::plus)

  override val property: String
    get() = PROPERTY

  override fun isApplicable(element: JsonElement): Boolean {
    return element is JsonObject && element.containsKey(PROPERTY)
  }

  override fun create(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(element is JsonObject) { "cannot extract $PROPERTY property from ${element::class.simpleName}" }
    val typeElement = requireNotNull(element[PROPERTY]) { "no property $PROPERTY found in element $element" }
    require(context.isJsonSchema(typeElement)) { "$PROPERTY must be a valid JSON schema" }
    val elementContext = context.at(PROPERTY)
    val containsAssertion = elementContext.schemaFrom(typeElement)
    val allowNoMatch =
      element[MIN_CONTAINS_PROPERTY]
        ?.jsonPrimitive
        ?.integerOrNull
        ?.let { it == 0 }
        ?: false
    return ContainsAssertionDraft202012(elementContext.schemaPath, containsAssertion, allowNoMatch)
  }
}

private class ContainsAssertionDraft202012(
  private val path: JsonPointer,
  private val containsAssertion: JsonSchemaAssertion,
  private val allowNoMatch: Boolean,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    if (element !is JsonArray) {
      return true
    }
    val foundElements =
      element.asSequence().withIndex().filter { (_, el) ->
        val childContext = context.childContext()
        containsAssertion.validate(el, childContext, OutputCollector.Empty).also { valid ->
          if (valid) {
            childContext.propagateToParent()
          }
        }
      }.mapTo(hashSetOf(), IndexedValue<*>::index)
    context.annotationCollector.annotate(ContainsAssertionFactoryDraft202012.ANNOTATION, foundElements)
    if (foundElements.isNotEmpty() || allowNoMatch) {
      return true
    }

    errorCollector.updateKeywordLocation(path).use {
      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "array does not contain expected element",
        ),
      )
    }

    return false
  }
}