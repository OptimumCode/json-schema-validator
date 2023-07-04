package smirnov.oleg.json.schema.assertions.`object`

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
class JsonSchemaPropertyNamesValidationTest : FunSpec() {
  init {
    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "propertyNames": {
          "minLength": 3,
          "maxLength": 5
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("object properties passes validation") {
        val jsonObject = buildJsonObject {
          put("abc", JsonPrimitive(42))
          put("abcd", JsonPrimitive(42))
          put("abcde", JsonPrimitive(42))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object properties fails validation") {
        val jsonObject = buildJsonObject {
          put("ab", JsonPrimitive("42"))
          put("abc", JsonPrimitive(42))
          put("abcd", JsonPrimitive(42.0))
          put("abcde", JsonPrimitive(42))
          put("abcdef", JsonPrimitive(42))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/propertyNames/minLength"),
              objectPath = JsonPointer("/ab"),
              message = "property ab: string length (2) must be greater or equal to 3",
            ),
            ValidationError(
              schemaPath = JsonPointer("/propertyNames/maxLength"),
              objectPath = JsonPointer("/abcdef"),
              message = "property abcdef: string length (6) must be less or equal to 5",
            )
          )
        }
      }

      notAnObjectPasses(schema)
    }
  }
}