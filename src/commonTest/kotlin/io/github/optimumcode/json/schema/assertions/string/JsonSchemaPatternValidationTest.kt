package io.github.optimumcode.json.schema.assertions.string

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
import kotlinx.serialization.json.JsonPrimitive

@Suppress("unused")
class JsonSchemaPatternValidationTest : FunSpec() {
  init {
    listOf(
      "foo" to "some foo value",
      "^foo" to "foo value",
      "foo$" to "some foo",
      "^foo$" to "foo",
    ).forEach { (pattern, value) ->
      test("matches pattern '$pattern'") {
        val schema =
          JsonSchema.fromDefinition(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "pattern": "$pattern"
            }
            """.trimIndent(),
          )
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(JsonPrimitive(value), errors::add)
        value.asClue {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }

    listOf(
      "foo" to "some for value",
      "^foo" to "for value",
      "foo$" to "some for",
      "^foo$" to "for",
    ).forEach { (pattern, value) ->
      test("does not match pattern '$pattern'") {
        val schema =
          JsonSchema.fromDefinition(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "pattern": "$pattern"
            }
            """.trimIndent(),
          )
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(JsonPrimitive(value), errors::add)
        value.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/pattern"),
              objectPath = JsonPointer.ROOT,
              message = "string does not match pattern '$pattern'",
            ),
          )
        }
      }
    }

    test("reports invalid patter") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "pattern": "*not.a.valid"
          }
          """.trimIndent(),
        )
      }.message shouldBe "pattern is not a valid regular expression"
    }
  }
}