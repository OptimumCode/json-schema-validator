package smirnov.oleg.json.schema

import io.kotest.assertions.asClue
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainOnly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject
import smirnov.oleg.json.pointer.JsonPointer

@Suppress("unused")
class JsonSchemaTypeValidationTest : FunSpec() {
  init {
    val possibleTypes = mapOf(
      "boolean" to JsonPrimitive(true),
      "string" to JsonPrimitive("true"),
      "number" to JsonPrimitive(42.0),
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
        val schema = JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": "$type"
          }
          """.trimIndent()
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
      val schema = JsonSchema.fromDescription(
        """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": "$type"
          }
          """.trimIndent()
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
                )
              )
            }
          }
        }
    }

    val schema = JsonSchema.fromDescription(
      """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": ["object","array"]
          }
          """.trimIndent()
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
  }
}