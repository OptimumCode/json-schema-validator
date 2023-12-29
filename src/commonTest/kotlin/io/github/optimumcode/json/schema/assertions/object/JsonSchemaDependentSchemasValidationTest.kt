package io.github.optimumcode.json.schema.assertions.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.kotest.assertions.asClue
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaDependentSchemasValidationTest : FunSpec() {
  init {
    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
        "dependentSchemas": {
          "trigger": {
            "properties": {
              "depend": {
                "type": "number"
              }
            } 
          }
        }
      }
      """.trimIndent(),
    ).also { schema ->
      test("object without trigger JSON schema property passes validation") {
        val jsonObject = buildJsonObject {
          put("depend", JsonPrimitive("test"))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object with trigger JSON schema property passes validation") {
        val jsonObject = buildJsonObject {
          put("trigger", JsonPrimitive(42))
          put("depend", JsonPrimitive(42.5))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object with trigger JSON schema property fails validation") {
        val jsonObject = buildJsonObject {
          put("trigger", JsonPrimitive(42))
          put("depend", JsonPrimitive("test"))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer(
                "/dependentSchemas/trigger/properties/depend/type",
              ),
              objectPath = JsonPointer("/depend"),
              message = "element is not a number",
            ),
          )
        }
      }
    }

    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
        "dependentSchemas": {
          "trigger1": {
            "properties": {
              "depend1": {
                "type": "number"
              }
            } 
          }
        }
      }
      """.trimIndent(),
    ).also { schema ->
      notAnObjectPasses(schema)
    }

    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
        "dependentSchemas": {}
      }
      """.trimIndent(),
    ).also { schema ->
      test("object passes empty dependencies") {
        val jsonObject = buildJsonObject {
          put("trigger", JsonPrimitive(42))
          put("depend", JsonPrimitive(42.5))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }

    test("reports if dependency is not an object") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
            "dependentSchemas": {
              "trigger": 42
            }
          }
          """.trimIndent(),
        )
      }.message shouldBe "trigger dependency must be a valid JSON schema"
    }

    test("reports if not an object") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
            "dependentSchemas": 42
          }
          """.trimIndent(),
        )
      }.message shouldBe "dependentSchemas must be an object"
    }
  }
}