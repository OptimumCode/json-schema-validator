package smirnov.oleg.json.schema.assertions.condition

import io.kotest.assertions.asClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.JsonSchema
import smirnov.oleg.json.schema.KEY
import smirnov.oleg.json.schema.ValidationError

@Suppress("unused")
class JsonSchemaAllOfValidationTest : FunSpec() {
  init {
    testInvalidSchemaInArray("allOf")
    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "allOf": [
          {
            "type": "string"
          },
          {
            "minLength": 3
          },
          {
            "maxLength": 6
          }
        ]
      }
      """.trimIndent()
    ).also { schema ->
      test("passes all assertions") {
        val element = JsonPrimitive("test")

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(element, errors::add)

        element.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("fails first assertion") {
        val element = JsonPrimitive(42)

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(element, errors::add)

        element.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/allOf/0/type"),
              objectPath = JsonPointer.ROOT,
              message = "element is not a string",
            )
          )
        }
      }

      test("fails second assertion") {
        val element = JsonPrimitive("te")

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(element, errors::add)

        element.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/allOf/1/minLength"),
              objectPath = JsonPointer.ROOT,
              message = "string length (2) must be greater or equal to 3",
            )
          )
        }
      }

      test("fails last assertion") {
        val element = JsonPrimitive("test123")

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(element, errors::add)

        element.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/allOf/2/maxLength"),
              objectPath = JsonPointer.ROOT,
              message = "string length (7) must be less or equal to 6",
            )
          )
        }
      }
    }
  }
}