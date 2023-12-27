package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AnnotationKey
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import io.github.optimumcode.json.schema.internal.factories.AbstractAssertionFactory
import io.github.optimumcode.json.schema.internal.factories.array.ItemsAssertionFactory.Result
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement

internal object UnevaluatedItemsAssertionFactory : AbstractAssertionFactory("unevaluatedItems") {
  val ANNOTATION: AnnotationKey<Boolean> = AnnotationKey.create("unevaluatedItems")

  override fun createFromProperty(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    require(context.isJsonSchema(element)) { "$property must be a valid JSON schema" }
    val assertion = context.schemaFrom(element)
    return UnevaluatedItemsAssertion(assertion)
  }
}

private class UnevaluatedItemsAssertion(
  private val assertion: JsonSchemaAssertion,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    if (element !is JsonArray) {
      return true
    }
    val startIndex: Int = when (
      val itemsAnnotation: Result? =
        findMaxResult(context.annotatedAll(ItemsAssertionFactory.ANNOTATION))
    ) {
      Result.All -> return true // all items are evaluated
      is Result.Index -> itemsAnnotation.value
      null -> -1
    }
    if (context.annotatedAll(AdditionalItemsAssertionFactory.ANNOTATION).any { it }) {
      // all items evaluated by additional items
      return true
    }
    if (context.annotatedAll(UnevaluatedItemsAssertionFactory.ANNOTATION).any { it }) {
      // another unevaluatedItems was applied
      return true
    }
    var valid = true
    element.forEachIndexed { index, jsonElement ->
      if (index <= startIndex) {
        return@forEachIndexed
      }
      val result = assertion.validate(jsonElement, context.at(index), errorCollector)
      valid = valid and result
    }
    context.annotate(UnevaluatedItemsAssertionFactory.ANNOTATION, true)
    return valid
  }

  private fun findMaxResult(input: List<Result>): Result? {
    var last: Result.Index? = null
    for (r in input) {
      when (r) {
        Result.All -> return r
        is Result.Index -> if (last == null || last.value < r.value) {
          last = r
        }
      }
    }
    return last
  }
}