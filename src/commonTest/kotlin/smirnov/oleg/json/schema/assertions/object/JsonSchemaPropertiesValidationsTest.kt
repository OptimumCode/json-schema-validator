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
import smirnov.oleg.json.schema.base.KEY
import smirnov.oleg.json.schema.ValidationError

@Suppress("unused")
class JsonSchemaPropertiesValidationsTest : FunSpec() {
  init {
    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "properties": {
          "prop1": {
            "type": "number"
          }
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("object passes properties validation") {
        val jsonObject = buildJsonObject {
          put("prop1", JsonPrimitive(42))
          put("prop2", JsonPrimitive("test"))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object fails properties validation") {
        val jsonObject = buildJsonObject {
          put("prop1", JsonPrimitive("test"))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/properties/prop1/type"),
              objectPath = JsonPointer("/prop1"),
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
        "patternProperties": {
          "^foo\\d$": {
            "type": "number"
          }
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("object passes patternProperties validation") {
        val jsonObject = buildJsonObject {
          put("foo1", JsonPrimitive(42))
          put("foo2", JsonPrimitive(42.5))
          put("test", JsonPrimitive("string"))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object fails patternProperties validation") {
        val jsonObject = buildJsonObject {
          put("foo1", JsonPrimitive("test"))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/patternProperties/^foo\\d\$/type"),
              objectPath = JsonPointer("/foo1"),
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
        "additionalProperties": {
          "type": "number"
        }
      }
      """.trimIndent()
    ).also { schema ->
      test("object passes additionalProperties validation") {
        val jsonObject = buildJsonObject {
          put("foo1", JsonPrimitive(42))
          put("foo2", JsonPrimitive(42.5))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object fails additionalProperties validation") {
        val jsonObject = buildJsonObject {
          put("foo1", JsonPrimitive("test"))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/additionalProperties/type"),
              objectPath = JsonPointer("/foo1"),
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
        "properties": {
          "test": {
            "type": "string"
          }
        },
        "patternProperties": {
          "^foo\\d$": {
            "type": "number"
          }
        },
        "additionalProperties": false
      }
      """.trimIndent()
    ).also { schema ->
      test("false additionalProperties reports all unknown properties") {
        val jsonObject = buildJsonObject {
          put("test", JsonPrimitive("value"))
          put("foo2", JsonPrimitive(42.5))
          put("unknown", JsonPrimitive(42.5))
        }

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/additionalProperties"),
              objectPath = JsonPointer("/unknown"),
              message = "all values fail against the false schema",
            )
          )
        }
      }

      notAnObjectPasses(schema)
    }

    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "properties": {},
        "patternProperties": {}
      }
      """.trimIndent()
    ).also { schema ->
      test("object passes schema with empty properties and patternProperties") {
        val jsonObject = buildJsonObject {
          put("test", JsonPrimitive("value"))
          put("foo2", JsonPrimitive(42.5))
          put("unknown", JsonPrimitive(42.5))
        }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)
        jsonObject.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }

    test("reports invalid regular expression") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "patternProperties": {
              "*^foo\\d$": {
                "type": "number"
              }
            }
          }
          """.trimIndent()
        )
      }.message shouldBe "*^foo\\d\$ must be a valid regular expression"
    }
  }
}