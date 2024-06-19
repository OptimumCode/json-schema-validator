package io.github.optimumcode.json.schema.internal.factories

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.OutputCollector
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
    return ExternalAssertionAdapter(context.schemaPath, externalFactory.create(element, context))
  }
}

private class ExternalAssertionAdapter(
  private val location: JsonPointer,
  private val externalAssertion: ExternalAssertion,
) : JsonSchemaAssertion {
  override fun validate(
    element: JsonElement,
    context: AssertionContext,
    errorCollector: OutputCollector<*>,
  ): Boolean =
    errorCollector.updateKeywordLocation(location).use {
      externalAssertion.validate(element, context, this::onError)
    }
}