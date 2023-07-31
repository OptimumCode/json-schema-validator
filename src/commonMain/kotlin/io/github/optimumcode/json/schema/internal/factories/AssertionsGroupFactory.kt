package io.github.optimumcode.json.schema.internal.factories

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.internal.AssertionContext
import io.github.optimumcode.json.schema.internal.AssertionFactory
import io.github.optimumcode.json.schema.internal.JsonSchemaAssertion
import io.github.optimumcode.json.schema.internal.LoadingContext
import kotlinx.serialization.json.JsonElement

/**
 * This class allows to create a group assertion that guarantees the order of assertion execution
 * (the same order as [group])
 */
internal class AssertionsGroupFactory(
  private val group: List<AssertionFactory>,
) : AssertionFactory {
  init {
    require(group.isNotEmpty()) { "at least one assertion must be in group" }
  }

  override fun isApplicable(element: JsonElement): Boolean {
    return group.any { it.isApplicable(element) }
  }

  override fun create(element: JsonElement, context: LoadingContext): JsonSchemaAssertion {
    return GroupAssertion(
      assertions = group.asSequence()
        .filter { it.isApplicable(element) }
        .map { it.create(element, context) }
        .toList(),
    )
  }
}

@Suppress("FunctionName")
internal fun FactoryGroup(vararg factories: AssertionFactory): AssertionFactory =
  AssertionsGroupFactory(factories.toList())

private class GroupAssertion(
  private val assertions: List<JsonSchemaAssertion>,
) : JsonSchemaAssertion {
  override fun validate(element: JsonElement, context: AssertionContext, errorCollector: ErrorCollector): Boolean {
    var result = true
    assertions.forEach {
      val valid = it.validate(element, context, errorCollector)
      result = result && valid
    }
    return result
  }
}