package io.github.optimumcode.json.schema.assertions.array

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
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaMinItemsValidationTest : FunSpec() {
  init {
    val schema =
      JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "minItems": 2
        }
        """.trimIndent(),
      )

    listOf(
      buildJsonArray {
        add(JsonPrimitive("a"))
        add(JsonPrimitive("b"))
      },
      buildJsonArray {
        add(JsonPrimitive("a"))
        add(JsonPrimitive("b"))
        add(JsonPrimitive("c"))
      },
    ).forEach {
      test("array with size ${it.size} passes validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        it.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }

    listOf(
      buildJsonArray { },
      buildJsonArray {
        add(JsonPrimitive("a"))
      },
    ).forEach {
      test("array with size ${it.size} fails validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        it.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/minItems"),
              objectPath = JsonPointer.ROOT,
              message = "array length must be greater or equal to 2",
            ),
          )
        }
      }
    }

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

    test("reports negative value") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "minItems": -1
          }
          """.trimIndent(),
        )
      }.message shouldBe "minItems must be a non-negative integer"
    }

    listOf(
      JsonPrimitive(42.5),
      JsonPrimitive(Int.MAX_VALUE.toLong() + 1),
      JsonPrimitive(true),
      JsonNull,
    ).forEach {
      test("reports not valid integer value $it") {
        shouldThrow<IllegalArgumentException> {
          JsonSchema.fromDefinition(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "minItems": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "minItems must be a valid integer"
      }
    }

    listOf(
      JsonPrimitive("test"),
      buildJsonObject { },
      buildJsonArray { },
    ).forEach {
      test("reports not integer value $it") {
        shouldThrow<IllegalArgumentException> {
          JsonSchema.fromDefinition(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "minItems": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "minItems must be an integer"
      }
    }
  }
}