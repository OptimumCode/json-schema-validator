package io.github.optimumcode.json.schema.assertions.general.format

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

class FormatValidationTestSuite(
  private val format: String,
  private val validTestCases: List<String>,
  private val invalidTestCases: List<TestCase>,
) {
  data class TestCase(val value: String, val description: String)

  fun FunSpec.testFormat() {
    fun FunSpec.notStringPasses(
      format: String,
      schema: JsonSchema,
    ) {
      listOf(
        JsonPrimitive(42),
        JsonPrimitive(42.5),
        JsonPrimitive(true),
        JsonNull,
        buildJsonArray { },
        buildJsonObject { },
      ).forEach {
        test("'$it' passes validation for '$format'") {
          val errors = mutableListOf<ValidationError>()
          val valid = schema.validate(it, errors::add)
          assertSoftly {
            valid shouldBe true
            errors shouldHaveSize 0
          }
        }
      }
    }
    JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "https://json-schema.org/draft/2020-12/schema",
        "${KEY}vocabulary": {
          "https://json-schema.org/draft/2020-12/vocab/core": true,
          "https://json-schema.org/draft/2020-12/vocab/applicator": true,
          "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
          "https://json-schema.org/draft/2020-12/vocab/validation": true,
          "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
          "https://json-schema.org/draft/2020-12/vocab/format-assertion": true,
          "https://json-schema.org/draft/2020-12/vocab/content": true
        },
        "format": "$format"
      }
      """.trimIndent(),
    ).also { schema ->
      notStringPasses(format, schema)

      validTestCases.forEach {
        test("valid $format '$it' passes") {
          val errors = mutableListOf<ValidationError>()
          val valid = schema.validate(JsonPrimitive(it), errors::add)
          assertSoftly {
            valid shouldBe true
            errors shouldHaveSize 0
          }
        }
      }

      invalidTestCases.forEach { (element, description) ->
        test("invalid $format '$element' with '$description' fails validation") {
          val errors = mutableListOf<ValidationError>()
          val valid = schema.validate(JsonPrimitive(element), errors::add)
          assertSoftly {
            valid shouldBe false
            errors.shouldContainExactly(
              ValidationError(
                schemaPath = JsonPointer("/format"),
                objectPath = JsonPointer.ROOT,
                message = "value does not match '$format' format",
              ),
            )
          }
        }
      }
    }
  }
}