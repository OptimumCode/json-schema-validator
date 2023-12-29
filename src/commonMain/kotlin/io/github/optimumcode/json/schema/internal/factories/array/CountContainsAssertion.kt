package io.github.optimumcode.json.schema.internal.factories.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import kotlinx.serialization.json.JsonElement

internal class CountContainsAssertion(
  private val path: JsonPointer,
  private val expected: Int,
  private val operationName: String,
  private val operation: (expected: Int, actual: Int) -> Boolean,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    val matchedElements = context.annotated(ContainsAssertionFactory.ANNOTATION) ?: return true
    if (operation.invoke(expected, matchedElements)) {
      return true
    }
    errorCollector.onError(
      ValidationError(
        schemaPath = path,
        objectPath = context.objectPath,
        message = "array must contain $operationName $expected element(s) match the 'contains' schema" +
          " but has $matchedElements",
      ),
    )
    return false
  }
}