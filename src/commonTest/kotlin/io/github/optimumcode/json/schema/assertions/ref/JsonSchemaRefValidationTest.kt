package io.github.optimumcode.json.schema.assertions.ref

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.kotest.assertions.asClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaRefValidationTest : FunSpec() {
  init {
    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "definitions": {
          "positiveInteger": {
            "type": "integer",
            "minimum": 0
          }
        },
        "properties": {
          "size": { "${KEY}ref": "#/definitions/positiveInteger" }
        }
      }
      """.trimIndent(),
    ).apply {
      test("object passes ref validation") {
        val jsonObject =
          buildJsonObject {
            put("size", JsonPrimitive(42))
          }
        val errors = mutableListOf<ValidationError>()
        val valid = validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object fails ref validation") {
        val jsonObject =
          buildJsonObject {
            put("size", JsonPrimitive(-1))
          }
        val errors = mutableListOf<ValidationError>()
        val valid = validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/properties/size/${KEY}ref/minimum"),
              objectPath = JsonPointer("/size"),
              message = "-1 must be greater or equal to 0",
              absoluteLocation =
                Uri.parse(
                  "#/definitions/positiveInteger/minimum",
                ),
            ),
          )
        }
      }
    }

    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "definitions": {
          "positiveInteger": {
            "type": "integer",
            "minimum": 0
          }
        },
        "properties": {
          "size": { "${KEY}ref": "#/definitions/positiveInteger" },
          "other": { "${KEY}ref": "#" }
        }
      }
      """.trimIndent(),
    ).apply {
      test("object self reference passes validation") {
        val jsonObject =
          buildJsonObject {
            put(
              "other",
              buildJsonObject {
                put("size", JsonPrimitive(42))
              },
            )
          }

        val errors = mutableListOf<ValidationError>()
        val valid = validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object self reference fails validation") {
        val jsonObject =
          buildJsonObject {
            put(
              "other",
              buildJsonObject {
                put("size", JsonPrimitive(-1))
              },
            )
          }

        val errors = mutableListOf<ValidationError>()
        val valid = validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath =
                JsonPointer(
                  "/properties/other/${KEY}ref/properties/size/${KEY}ref/minimum",
                ),
              objectPath = JsonPointer("/other/size"),
              message = "-1 must be greater or equal to 0",
              absoluteLocation =
                Uri.parse(
                  "#/definitions/positiveInteger/minimum",
                ),
            ),
          )
        }
      }
    }

    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "definitions": {
          "A": {
            "definitions": {
              "B": {
                "type": "integer"
              }
            }
          }
        },
        "properties": {
          "size": { "${KEY}ref": "#/definitions/A/definitions/B" }
        }
      }
      """.trimIndent(),
    ).apply {
      test("correctly reports path for inner definitions") {
        val jsonObject =
          buildJsonObject {
            put("size", JsonPrimitive("42"))
          }
        val errors = mutableListOf<ValidationError>()
        val valid = validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/properties/size/${KEY}ref/type"),
              objectPath = JsonPointer("/size"),
              message = "element is not a integer",
              absoluteLocation =
                Uri.parse(
                  "#/definitions/A/definitions/B/type",
                ),
            ),
          )
        }
      }
    }
  }
}