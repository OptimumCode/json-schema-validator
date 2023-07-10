package smirnov.oleg.json.schema.assertions.array

import io.kotest.assertions.asClue
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.JsonSchema
import smirnov.oleg.json.schema.ValidationError
import smirnov.oleg.json.schema.base.KEY

@Suppress("unused")
class JsonSchemaContainsValidationTest : FunSpec() {
  init {
    val schema = JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "contains": {
          "type": "string"
        }
      }
      """.trimIndent(),
    )

    listOf(
      JsonPrimitive("test"),
      JsonPrimitive(42),
      JsonPrimitive(42.5),
      JsonPrimitive(true),
      JsonNull,
      buildJsonObject { },
    ).forEach {
      test("not array $it passes validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)

        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("array with expected element passes validation") {
      val array = buildJsonArray {
        add(JsonPrimitive(42))
        add(JsonPrimitive(true))
        add(JsonPrimitive("test"))
        add(buildJsonObject { })
        add(buildJsonArray { })
      }

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(array, errors::add)

      valid shouldBe true
      errors shouldHaveSize 0
    }

    listOf(
      buildJsonArray {
        add(JsonPrimitive(42))
        add(JsonPrimitive(true))
        add(buildJsonObject { })
        add(buildJsonArray { })
      },
      buildJsonArray { },
    ).forEach {
      test("array without expected element fails validation $it") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)

        it.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/contains"),
              objectPath = JsonPointer.ROOT,
              message = "array does not contain expected element",
            ),
          )
        }
      }
    }

    listOf(
      JsonPrimitive(42),
      JsonPrimitive("test"),
      buildJsonArray { },
    ).forEach {
      test("reports $it is invalid value") {
        shouldThrow<IllegalArgumentException> {
          JsonSchema.fromDescription(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "contains": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "contains must be a valid JSON schema"
      }
    }
  }
}