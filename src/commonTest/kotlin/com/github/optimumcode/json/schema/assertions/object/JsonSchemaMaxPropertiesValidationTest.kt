package com.github.optimumcode.json.schema.assertions.`object`

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.JsonSchema
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.base.KEY
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
class JsonSchemaMaxPropertiesValidationTest : FunSpec() {
  init {
    val schema = JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "maxProperties": 2
      }
      """.trimIndent(),
    )

    listOf(
      buildJsonObject { },
      buildJsonObject {
        put("test1", JsonPrimitive("a"))
      },
      buildJsonObject {
        put("test1", JsonPrimitive("a"))
        put("test2", JsonPrimitive("b"))
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

    test("object with 3 properties fails validation") {
      val jsonObject = buildJsonObject {
        put("test1", JsonPrimitive("a"))
        put("test2", JsonPrimitive("b"))
        put("test3", JsonPrimitive("c"))
      }

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(jsonObject, errors::add)
      jsonObject.asClue {
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/maxProperties"),
            objectPath = JsonPointer.ROOT,
            message = "number of properties must be less or equal to 2",
          ),
        )
      }
    }

    notAnObjectPasses(schema)

    test("reports negative value") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "maxProperties": -1
          }
          """.trimIndent(),
        )
      }.message shouldBe "maxProperties must be a non-negative integer"
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
              "maxProperties": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "maxProperties must be a valid integer"
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
              "maxProperties": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "maxProperties must be an integer"
      }
    }
  }
}