package io.github.optimumcode.json.schema.assertions.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaMaxContainsValidationTest : FunSpec() {
  init {
    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
        "contains": {
          "type": "string"
        },
        "maxContains": 2
      }
      """.trimIndent(),
    ).also { schema ->
      test("validation passes when contains less items") {
        val errors = mutableListOf<ValidationError>()
        val array =
          buildJsonArray {
            add(JsonPrimitive("a"))
          }
        val valid = schema.validate(array, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
      test("validation passes when contains exact items") {
        val errors = mutableListOf<ValidationError>()
        val array =
          buildJsonArray {
            add(JsonPrimitive("a"))
            add(JsonPrimitive("b"))
          }
        val valid = schema.validate(array, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
      test("validation fails when contains less items") {
        val errors = mutableListOf<ValidationError>()
        val array =
          buildJsonArray {
            add(JsonPrimitive("a"))
            add(JsonPrimitive("b"))
            add(JsonPrimitive("c"))
          }
        val valid = schema.validate(array, errors::add)
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/maxContains"),
            objectPath = JsonPointer.ROOT,
            message = "array must contain at most 2 element(s) match the 'contains' schema but has 3",
          ),
        )
      }
      test("not an array passes the validation") {
        val errors = mutableListOf<ValidationError>()
        val obj = buildJsonObject { }
        val valid = schema.validate(obj, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }
  }
}