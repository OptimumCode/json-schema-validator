package io.github.optimumcode.json.schema.assertions.number

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.JsonUnquotedLiteral
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

// JsonUnquotedLiteral is used to bypass the JS conversion to integer value
@OptIn(ExperimentalSerializationApi::class)
@Suppress("unused")
class JsonSchemaMultipleOfValidationTest : FunSpec() {
  init {
    listOf(
      JsonPrimitive(7),
      JsonPrimitive(49),
      JsonUnquotedLiteral("49.0"),
      JsonPrimitive(-49),
      JsonUnquotedLiteral("-49.0"),
    ).forEach {
      val schema =
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "multipleOf": 7
          }
          """.trimIndent(),
        )
      test("integer in multiple of: $it % 7") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    listOf(
      JsonPrimitive(3),
      JsonUnquotedLiteral("3.0"),
      JsonPrimitive(4.5),
      JsonPrimitive(-3),
      JsonUnquotedLiteral("-3.0"),
      JsonPrimitive(-4.5),
    ).forEach {
      val schema =
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "multipleOf": 1.5
          }
          """.trimIndent(),
        )
      test("double in multiple of: $it % 1.5") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    listOf(
      JsonPrimitive(0),
      JsonUnquotedLiteral("0.0"),
      JsonPrimitive(-1),
      JsonUnquotedLiteral("-1.0"),
      JsonPrimitive(-Double.MAX_VALUE),
      JsonPrimitive(Long.MIN_VALUE),
    ).forEach {
      test("reports not positive value $it") {
        shouldThrow<IllegalArgumentException> {
          JsonSchema.fromDefinition(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "multipleOf": $it
            }
            """.trimIndent(),
          )
        }.message shouldBe "multipleOf value $it must be greater than zero"
      }
    }

    val numberSchema =
      JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "multipleOf": 5
        }
        """.trimIndent(),
      )
    listOf(
      JsonPrimitive(true),
      JsonPrimitive("42"),
      JsonNull,
      buildJsonObject { },
      buildJsonArray { },
    ).forEach {
      test("not a number $it passes the validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = numberSchema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "multipleOf": 0.0001
      }
      """.trimIndent(),
    ).apply {
      listOf(
        JsonUnquotedLiteral("0.0075"),
        JsonUnquotedLiteral("0.075"),
        JsonUnquotedLiteral("0.75"),
        JsonUnquotedLiteral("7.5"),
        JsonUnquotedLiteral("75"),
        JsonUnquotedLiteral("750"),
        JsonUnquotedLiteral("12391239123"),
        JsonUnquotedLiteral("-0.0075"),
        JsonUnquotedLiteral("-0.075"),
        JsonUnquotedLiteral("-0.75"),
        JsonUnquotedLiteral("-7.5"),
        JsonUnquotedLiteral("-75"),
        JsonUnquotedLiteral("-750"),
        JsonUnquotedLiteral("-12391239123"),
      ).forEach {
        test("small number $it is multiple of 0.0001") {
          val errors = mutableListOf<ValidationError>()
          validate(it, errors::add) shouldBe true
          errors shouldHaveSize 0
        }
      }

      listOf(
        JsonUnquotedLiteral("0.00001"),
        JsonUnquotedLiteral("0.00011"),
        JsonUnquotedLiteral("0.00751"),
        JsonUnquotedLiteral("0.01751"),
        JsonUnquotedLiteral("0.71751"),
        JsonUnquotedLiteral("1.71751"),
        JsonUnquotedLiteral("-0.00001"),
        JsonUnquotedLiteral("-0.00011"),
        JsonUnquotedLiteral("-0.00751"),
        JsonUnquotedLiteral("-0.01751"),
        JsonUnquotedLiteral("-0.71751"),
        JsonUnquotedLiteral("-1.71751"),
      ).forEach {
        test("small number $it is not a multiple of 0.0001") {
          val errors = mutableListOf<ValidationError>()
          validate(it, errors::add) shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/multipleOf"),
              objectPath = JsonPointer.ROOT,
              message = "$it is not a multiple of 0.0001",
            ),
          )
        }
      }
    }

    test("BUG_70 rounding problem with some numbers because double does not behave as you expect") {
      val schema =
        JsonSchema.fromDefinition(
          """
          {
            "multipleOf": 0.01
          }
          """.trimIndent(),
        )
      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(JsonPrimitive(19.99), errors::add)
      assertSoftly {
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }
  }
}