package smirnov.oleg.json.schema.assertions.`object`

import io.kotest.assertions.asClue
import io.kotest.assertions.throwables.shouldThrow
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
class JsonSchemaDependenciesValidationTest : FunSpec() {
  init {
    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "dependencies": {
          "trigger": {
            "properties": {
              "depend": {
                "type": "number"
              }
            } 
          }
        }
      }
      """.trimIndent()
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
              schemaPath = JsonPointer("/dependencies/trigger/properties/depend/type"),
              objectPath = JsonPointer("/depend"),
              message = "element is not a number",
            )
          )
        }
      }
    }

    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "dependencies": {
          "trigger": ["depend"]
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("object without trigger array property passes validation") {
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

      test("object with trigger array property passes validation") {
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

      test("object with trigger array property fails validation") {
        val jsonObject = buildJsonObject {
          put("trigger", JsonPrimitive(42))
          put("depend2", JsonPrimitive("test"))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/dependencies/trigger"),
              objectPath = JsonPointer.ROOT,
              message = "has 'trigger' property but missing required dependencies: [depend]",
            )
          )
        }
      }
    }

    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "dependencies": {
          "trigger1": {
            "properties": {
              "depend1": {
                "type": "number"
              }
            } 
          },
          "trigger2": ["depend2"]
        }
      }
      """.trimIndent()
    ).also { schema ->
      notAnObjectPasses(schema)
    }

    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "dependencies": {}
      }
      """.trimIndent()
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

    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "dependencies": {
          "trigger": []
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("object passes empty dependencies array") {
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

    test("reports if dependency is neither array or object") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "dependencies": {
              "trigger": 42
            }
          }
          """.trimIndent()
        )
      }.message shouldBe "trigger dependency must be either array of strings or valid JSON schema"
    }

    test("reports if not an object") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "dependencies": 42
          }
          """.trimIndent()
        )
      }.message shouldBe "dependencies must be an object"
    }

    test("reports not unique elements") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "dependencies": {
              "trigger": ["a","b","a"]
            }
          }
          """.trimIndent()
        )
      }.message shouldBe "trigger must consist of unique elements"
    }
  }
}