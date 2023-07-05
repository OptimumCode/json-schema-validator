package smirnov.oleg.json.schema.assertions.condition

import io.kotest.assertions.asClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.pointer.JsonPointer.Companion
import smirnov.oleg.json.schema.JsonSchema
import smirnov.oleg.json.schema.KEY
import smirnov.oleg.json.schema.ValidationError

@Suppress("unused")
class JsonSchemaAnyOfValidationTest : FunSpec() {
  init {
    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "anyOf": [
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
      """.trimIndent()
    ).also { schema ->
      listOf(
        JsonPrimitive("str"),
        JsonPrimitive(42),
        JsonPrimitive(true),
      ).forEach {
        test("element $it passes validation") {
          val errors = mutableListOf<ValidationError>()
          val valid  = schema.validate(it, errors::add)

          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("element does not match any assertion") {
        val jsonObject = buildJsonObject {
          put("test", JsonPrimitive(42))
        }

        val errors = mutableListOf<ValidationError>()
        val valid  = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/anyOf/0/type"),
              objectPath = JsonPointer.ROOT,
              message = "element is not a string",
            ),
            ValidationError(
              schemaPath = JsonPointer("/anyOf/1/type"),
              objectPath = JsonPointer.ROOT,
              message = "element is not a number",
            ),
            ValidationError(
              schemaPath = JsonPointer("/anyOf/2/type"),
              objectPath = JsonPointer.ROOT,
              message = "element is not a boolean",
            ),
          )
        }
      }
    }
  }
}