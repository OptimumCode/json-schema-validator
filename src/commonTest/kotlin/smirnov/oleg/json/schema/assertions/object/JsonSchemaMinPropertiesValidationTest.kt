package smirnov.oleg.json.schema.assertions.`object`

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
class JsonSchemaMinPropertiesValidationTest : FunSpec() {
  init {
    val schema = JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "minProperties": 2
      }
      """.trimIndent(),
    )

    listOf(
      buildJsonObject {
        put("test1", JsonPrimitive("a"))
        put("test2", JsonPrimitive("b"))
      },
      buildJsonObject {
        put("test1", JsonPrimitive("a"))
        put("test2", JsonPrimitive("b"))
        put("test3", JsonPrimitive("c"))
      },
    ).forEach {
      test("object with ${it.size} properties passes validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        it.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }

    listOf(
      buildJsonObject { },
      buildJsonObject {
        put("test1", JsonPrimitive("a"))
      },
    ).forEach {
      test("object with ${it.size} properties fails validation") {

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        it.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/minProperties"),
              objectPath = JsonPointer.ROOT,
              message = "number of properties must be greater or equal to 2",
            ),
          )
        }
      }
    }

    notAnObjectPasses(schema)

    test("reports negative value") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "minProperties": -1
          }
          """.trimIndent(),
        )
      }.message shouldBe "minProperties must be a non-negative integer"
    }

    listOf(
      JsonPrimitive(42.5),
      JsonPrimitive(Int.MAX_VALUE.toLong() + 1),
      JsonPrimitive(true),
      JsonNull,
    ).forEach {
      test("reports not valid integer value $it") {
        shouldThrow<IllegalArgumentException> {
          JsonSchema.fromDescription(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "minProperties": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "minProperties must be a valid integer"
      }
    }

    listOf(
      JsonPrimitive("test"),
      buildJsonObject { },
      buildJsonArray { },
    ).forEach {
      test("reports not integer value $it") {
        shouldThrow<IllegalArgumentException> {
          JsonSchema.fromDescription(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "minProperties": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "minProperties must be an integer"
      }
    }
  }
}