package com.github.optimumcode.json.schema.assertions.ref

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.JsonSchema
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.base.KEY
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
    JsonSchema.fromDescription(
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
        val jsonObject = buildJsonObject {
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
        val jsonObject = buildJsonObject {
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
              absoluteLocation = JsonPointer(
                "/definitions/positiveInteger/minimum",
              ),
            ),
          )
        }
      }
    }

    JsonSchema.fromDescription(
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
        val jsonObject = buildJsonObject {
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
        val jsonObject = buildJsonObject {
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
              schemaPath = JsonPointer(
                "/properties/other/${KEY}ref/properties/size/${KEY}ref/minimum",
              ),
              objectPath = JsonPointer("/other/size"),
              message = "-1 must be greater or equal to 0",
              absoluteLocation = JsonPointer(
                "/definitions/positiveInteger/minimum",
              ),
            ),
          )
        }
      }
    }
  }
}