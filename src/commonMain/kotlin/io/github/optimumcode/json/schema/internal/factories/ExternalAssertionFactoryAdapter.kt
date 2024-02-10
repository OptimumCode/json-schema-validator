package io.github.optimumcode.json.schema.internal.factories

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.extension.ExternalAssertion
import io.github.optimumcode.json.schema.extension.ExternalAssertionFactory
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonElement

internal class ExternalAssertionFactoryAdapter(
  private val externalFactory: ExternalAssertionFactory,
) : AbstractAssertionFactory(externalFactory.keywordName) {
  override fun createFromProperty(
    element: JsonElement,
    context: LoadingContext,
  ): JsonSchemaAssertion {
    return ExternalAssertionAdapter(externalFactory.create(element, context))
  }
}

private class ExternalAssertionAdapter(
  private val externalAssertion: ExternalAssertion,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean = externalAssertion.validate(element, context, errorCollector)
}