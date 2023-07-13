package io.github.optimumcode.json.schema.assertions.`object`

import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray

fun FunSpec.notAnObjectPasses(schema: JsonSchema) {
  listOf(
    JsonPrimitive("a"),
    JsonPrimitive(42),
    JsonPrimitive(42.5),
    JsonPrimitive(true),
    JsonNull,
    buildJsonArray { },
  ).forEach {
    test("not an object $it passes validation") {
      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(it, errors::add)
      valid shouldBe true
      errors shouldHaveSize 0
    }
  }
}