package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AnnotationKeyFactory
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ArrayElement
import kotlinx.serialization.json.JsonElement

@Suppress("unused")
internal object ContainsAssertionFactory : AbstractAssertionFactory("contains") {
  val ANNOTATION: AnnotationKey<Int> = AnnotationKeyFactory.create(property)

  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val containsAssertion = context.schemaFrom(element)
    return ContainsAssertion(context.schemaPath, containsAssertion)
  }
}

private class ContainsAssertion(
  private val path: JsonPointer,
  private val containsAssertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(
    element: AbstractElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean {
    return errorCollector.updateKeywordLocation(path).use {
      if (element !is ArrayElement) {
        return@use true
      }
      val foundElements =
        element.count {
          containsAssertion.validate(it, context, OutputCollector.Empty)
        }
      context.annotationCollector.annotate(ContainsAssertionFactory.ANNOTATION, foundElements)
      if (foundElements != 0) {
        return@use true
      }

      onError(
        ValidationError(
          schemaPath = path,
          objectPath = context.objectPath,
          message = "array does not contain expected element",
        ),
      )

      false
    }
  }
}