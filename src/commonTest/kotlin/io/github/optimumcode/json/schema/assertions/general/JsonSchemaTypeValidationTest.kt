package io.github.optimumcode.json.schema.assertions.general

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.kotest.assertions.asClue
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainOnly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.JsonUnquotedLiteral
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

@OptIn(ExperimentalSerializationApi::class)
@Suppress("unused")
class JsonSchemaTypeValidationTest : FunSpec() {
  init {
    val possibleTypes = mapOf(
      "boolean" to JsonPrimitive(true),
      "string" to JsonPrimitive("true"),
      // JsonUnquotedLiteral is used to bypass the JS conversion to integer value
      // If we use JsonPrimitive(42.0) the 42.0 will be converted to 42
      "number" to JsonUnquotedLiteral("42.0"),
      "integer" to JsonPrimitive(42),
      "null" to JsonNull,
      "array" to buildJsonArray {},
      "object" to buildJsonObject {},
    )
    val associatedTypes = mapOf(
      "number" to "integer",
    )

    possibleTypes.forEach { (type, value) ->
      test("validates type $type") {
        val schema = JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": "$type"
          }
          """.trimIndent(),
        )
        val errors = mutableListOf<ValidationError>()
        val valid: Boolean = schema.validate(value, errors::add)
        value.asClue {
          withClue("should be valid") {
            valid shouldBe true
            errors shouldHaveSize 0
          }
        }
      }
    }

    for (type in possibleTypes.keys) {
      val schema = JsonSchema.fromDefinition(
        """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": "$type"
          }
        """.trimIndent(),
      )
      possibleTypes.asSequence().filter { it.key != type && it.key != associatedTypes[type] }
        .forEach { (currentType, value) ->
          test("reports $currentType is not a $type") {
            val errors = mutableListOf<ValidationError>()
            withClue(value) {
              val valid = schema.validate(value, errors::add)
              valid shouldBe false
              errors.shouldHaveSize(1).shouldContainOnly(
                ValidationError(
                  schemaPath = JsonPointer("/type"),
                  objectPath = JsonPointer.ROOT,
                  message = "element is not a $type",
                ),
              )
            }
          }
        }
    }

    val schema = JsonSchema.fromDefinition(
      """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": ["object","array"]
          }
      """.trimIndent(),
    )
    test("object is one of [object, array]") {
      val errors = mutableListOf<ValidationError>()
      possibleTypes.getValue("object").asClue {
        val valid = schema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }
    test("array is one of [object, array]") {
      val errors = mutableListOf<ValidationError>()
      possibleTypes.getValue("array").asClue {
        val valid = schema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }
    test("unknown type") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": "unknown"
          }
          """.trimIndent(),
        )
      }.message shouldBe "unknown type 'unknown' (known: [null, string, boolean, number, integer, array, object])"
    }
    test("unknown type in array") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": ["unknown","number"]
          }
          """.trimIndent(),
        )
      }.message shouldBe "unknown types [unknown] (known: [null, string, boolean, number, integer, array, object])"
    }
    test("type not a string") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": 42
          }
          """.trimIndent(),
        )
      }.message shouldBe "type must be a string if it is not an array"
    }

    test("type array not a string") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": [42]
          }
          """.trimIndent(),
        )
      }.message shouldBe "each type element must be a string"
    }

    test("duplicates in array") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": ["number", "string", "number"]
          }
          """.trimIndent(),
        )
      }.message shouldBe "array must consist of unique values"
    }

    test("neither array or string") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": {"type": "number"}
          }
          """.trimIndent(),
        )
      }.message shouldBe "type must be either array or a string"
    }
  }
}