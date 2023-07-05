package smirnov.oleg.json.schema.assertions.condition

import io.kotest.assertions.asClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.JsonSchema
import smirnov.oleg.json.schema.KEY
import smirnov.oleg.json.schema.ValidationError

@Suppress("unused")
class JsonSchemaIfThenElseValidationTest : FunSpec() {
  init {
    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "if": {
          "type": "object"
        },
        "then": {
          "required": ["f1","f2"]
        },
        "else": {
          "type": "string"
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("when matches `if` passes `then` validation") {
        val jsonObject = buildJsonObject {
          put("f1", JsonPrimitive(42))
          put("f2", JsonPrimitive(43))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("when matches `if` fails `then` validation") {
        val jsonObject = buildJsonObject {
          put("f1", JsonPrimitive(42))
          put("f3", JsonPrimitive(43))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/then/required"),
              objectPath = JsonPointer.ROOT,
              message = "missing required properties: [f2]",
            )
          )
        }
      }

      test("when does not matches `if` passes `else` validation") {
        val element = JsonPrimitive("test")

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(element, errors::add)

        element.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("when does not matches `if` fails `else` validation") {
        val element = JsonPrimitive(42)

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(element, errors::add)

        element.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/else/type"),
              objectPath = JsonPointer.ROOT,
              message = "element is not a string",
            )
          )
        }
      }
    }

    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "if": {
          "type": "object"
        },
        "then": {
          "required": ["f1","f2"]
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("when does not matches `if` and `else` is missing nothing is checked") {
        val element = JsonPrimitive("test")

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(element, errors::add)

        element.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }

    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "if": {
          "type": "object"
        },
        "else": {
          "type": "string"
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("when matches `if` and `then` is missing nothing is checked") {
        val element = buildJsonObject {
          put("f1", JsonPrimitive(42))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(element, errors::add)

        element.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }
  }
}