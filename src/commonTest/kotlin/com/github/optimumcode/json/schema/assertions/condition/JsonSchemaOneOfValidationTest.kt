package com.github.optimumcode.json.schema.assertions.condition

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.JsonSchema
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.base.KEY
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaOneOfValidationTest : FunSpec() {
  init {
    testInvalidSchemaInArray("oneOf")
    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          },
          {
            "type": "boolean"
          }
        ]
      }
      """.trimIndent(),
    ).apply {
      listOf(
        JsonPrimitive("test"),
        JsonPrimitive(42),
        JsonPrimitive(true),
      ).forEach {
        test("element $it matches one of the schemas and passes validation") {
          val errors = mutableListOf<ValidationError>()
          val valid = validate(it, errors::add)

          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("element does not match any of the schemas and fails validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = validate(buildJsonObject { }, errors::add)

        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/oneOf/0/type"),
            objectPath = JsonPointer.ROOT,
            message = "element is not a string",
          ),
          ValidationError(
            schemaPath = JsonPointer("/oneOf/1/type"),
            objectPath = JsonPointer.ROOT,
            message = "element is not a number",
          ),
          ValidationError(
            schemaPath = JsonPointer("/oneOf/2/type"),
            objectPath = JsonPointer.ROOT,
            message = "element is not a boolean",
          ),
        )
      }
    }

    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "oneOf": [
          {
            "type": "integer"
          },
          {
            "type": "number"
          }
        ]
      }
      """.trimIndent(),
    ).apply {
      test("element matches more than one JSON schema and fails validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = validate(JsonPrimitive(42), errors::add)

        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/oneOf"),
            objectPath = JsonPointer.ROOT,
            message = "element matches more than one JSON schema at indexes: [0, 1]",
          ),
        )
      }
    }
  }
}