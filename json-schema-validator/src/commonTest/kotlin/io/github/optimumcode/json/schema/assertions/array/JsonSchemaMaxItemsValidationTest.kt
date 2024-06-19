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
class JsonSchemaMaxItemsValidationTest : FunSpec() {
  init {
    val schema =
      JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "maxItems": 3
        }
        """.trimIndent(),
      )

    listOf(
      buildJsonArray { },
      buildJsonArray {
        add(JsonPrimitive("a"))
      },
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

    test("array with size 4 fails validation") {
      val errors = mutableListOf<ValidationError>()
      val array =
        buildJsonArray {
          add(JsonPrimitive("a"))
          add(JsonPrimitive("b"))
          add(JsonPrimitive("c"))
          add(JsonPrimitive("d"))
        }
      val valid = schema.validate(array, errors::add)
      array.asClue {
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/maxItems"),
            objectPath = JsonPointer.ROOT,
            message = "array length must be less or equal to 3",
          ),
        )
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
            "maxItems": -1
          }
          """.trimIndent(),
        )
      }.message shouldBe "maxItems must be a non-negative integer"
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
              "maxItems": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "maxItems must be a valid integer"
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
              "maxItems": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "maxItems must be an integer"
      }
    }
  }
}