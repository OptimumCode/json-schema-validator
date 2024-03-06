package io.github.optimumcode.json.schema.assertions.general.format

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.FormatBehavior.ANNOTATION_AND_ASSERTION
import io.github.optimumcode.json.schema.FormatBehavior.ANNOTATION_ONLY
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.SchemaOption
import io.github.optimumcode.json.schema.SchemaType
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

data class TestCase(val value: String, val description: String)

internal fun FunSpec.formatValidationTestSuite(
  format: String,
  validTestCases: List<String>,
  invalidTestCases: List<TestCase>,
) {
  fun FunSpec.notStringPasses(
    schemaType: SchemaType,
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
      test("$schemaType '$it' passes validation for '$format'") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        assertSoftly {
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
    }
  }

  val loaderWithFormatAssertions =
    JsonSchemaLoader.create()
      .withSchemaOption(SchemaOption.FORMAT_BEHAVIOR_OPTION, ANNOTATION_AND_ASSERTION)
  val loaderWithFormatAnnotation =
    JsonSchemaLoader.create()
      .withSchemaOption(SchemaOption.FORMAT_BEHAVIOR_OPTION, ANNOTATION_ONLY)
  for (schemaType in SchemaType.entries) {
    loaderWithFormatAssertions.fromDefinition(
      """
      {
        "${KEY}schema": "${schemaType.schemaId}",
        "format": "$format"
      }
      """.trimIndent(),
      draft = schemaType,
    ).also { schema ->
      notStringPasses(schemaType, format, schema)

      validTestCases.forEach {
        test("$schemaType valid $format '$it' passes") {
          val errors = mutableListOf<ValidationError>()
          val valid = schema.validate(JsonPrimitive(it), errors::add)
          assertSoftly {
            valid shouldBe true
            errors shouldHaveSize 0
          }
        }
      }

      invalidTestCases.forEach { (element, description) ->
        test("$schemaType invalid $format '$element' with '$description' fails validation") {
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
    loaderWithFormatAnnotation.fromDefinition(
      """
      {
        "${KEY}schema": "${schemaType.schemaId}",
        "format": "$format"
      }
      """.trimIndent(),
      draft = schemaType,
    ).also { schema ->
      invalidTestCases.forEach { (element, description) ->
        test("$schemaType invalid $format '$element' with '$description' passes annotation only mode") {
          val errors = mutableListOf<ValidationError>()
          val valid = schema.validate(JsonPrimitive(element), errors::add)
          assertSoftly {
            valid shouldBe true
            errors shouldHaveSize 0
          }
        }
      }
    }
  }
}