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
class JsonSchemaDependentRequiredValidationTest : FunSpec() {
  init {
    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
        "dependentRequired": {
          "trigger": ["depend"]
        }
      }
      """.trimIndent(),
    ).also { schema ->
      test("object without trigger array property passes validation") {
        val jsonObject =
          buildJsonObject {
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
        val jsonObject =
          buildJsonObject {
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
        val jsonObject =
          buildJsonObject {
            put("trigger", JsonPrimitive(42))
            put("depend2", JsonPrimitive("test"))
          }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/dependentRequired/trigger"),
              objectPath = JsonPointer.ROOT,
              message = "has 'trigger' property but missing required dependencies: [depend]",
            ),
          )
        }
      }
    }

    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
        "dependentRequired": {
          "trigger2": ["depend2"]
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
        "dependentRequired": {}
      }
      """.trimIndent(),
    ).also { schema ->
      test("object passes empty dependencies") {
        val jsonObject =
          buildJsonObject {
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

    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
        "dependentRequired": {
          "trigger": []
        }
      }
      """.trimIndent(),
    ).also { schema ->
      test("object passes empty dependencies array") {
        val jsonObject =
          buildJsonObject {
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

    test("reports if dependency is not an array") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
            "dependentRequired": {
              "trigger": 42
            }
          }
          """.trimIndent(),
        )
      }.message shouldBe "trigger dependency must be an array"
    }

    test("reports if not an object") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
            "dependentRequired": 42
          }
          """.trimIndent(),
        )
      }.message shouldBe "dependentRequired must be an object"
    }

    test("reports not unique elements") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
            "dependentRequired": {
              "trigger": ["a","b","a"]
            }
          }
          """.trimIndent(),
        )
      }.message shouldBe "trigger must consist of unique elements"
    }
  }
}