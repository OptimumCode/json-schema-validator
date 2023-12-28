package io.github.optimumcode.json.schema.assertions.`object`

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject

class JsonSchemaUnevaluatedPropertiesValidationTest : FunSpec() {
  init {
    JsonSchema.fromDefinition(
      """
      {
        "properties": {
          "prop1": {
            "type": "string"
          }
        },
        "patternProperties": {
          "^pattern": {
            "type": "integer"
          }
        },
        "unevaluatedProperties": false
      }
      """.trimIndent(),
    ).also { schema ->
      notAnObjectPasses(schema)

      test("skips if property is validated by properties") {
        val obj = buildJsonObject {
          put("prop1", JsonPrimitive("test"))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(obj, errors::add)
        assertSoftly {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("skips if property is validated by patternProperties") {
        val obj = buildJsonObject {
          put("pattern123", JsonPrimitive(42))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(obj, errors::add)
        assertSoftly {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("process object when not other validation passed") {
        val obj = buildJsonObject {
          put("test", JsonPrimitive(42))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(obj, errors::add)
        assertSoftly {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              objectPath = JsonPointer("/test"),
              schemaPath = JsonPointer("/unevaluatedProperties"),
              message = "all values fail against the false schema",
            ),
          )
        }
      }
    }

    JsonSchema.fromDefinition(
      """
      {
        "additionalProperties": {
          "type": "object"
        },
        "unevaluatedProperties": false
      }
      """.trimIndent(),
    ).also { schema ->
      test("skips if property is validated by additionalProperties") {
        val obj = buildJsonObject {
          put("test", buildJsonObject { })
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(obj, errors::add)
        assertSoftly {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }
  }
}