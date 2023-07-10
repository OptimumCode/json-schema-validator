package smirnov.oleg.json.schema.assertions.number

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
import smirnov.oleg.json.pointer.JsonPointer
import smirnov.oleg.json.schema.JsonSchema
import smirnov.oleg.json.schema.base.KEY
import smirnov.oleg.json.schema.ValidationError

@OptIn(ExperimentalSerializationApi::class)
@Suppress("unused")
class JsonSchemaExclusiveMinimumValidationTest : FunSpec() {
  init {
    listOf("10", "10.0").forEach { number ->
      val schemaPositive = JsonSchema.fromDescription(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "exclusiveMinimum": $number
        }
        """.trimIndent()
      )
      listOf(
        JsonPrimitive(11),
        JsonPrimitive(10.01),
        JsonPrimitive(12),
        JsonPrimitive(11.5),
      ).forEach {
        test("$it passes validation against $number") {
          val errors = mutableListOf<ValidationError>()
          val valid = schemaPositive.validate(it, errors::add)
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      listOf(
        JsonPrimitive(10),
        // Because 10.0 in JS is 10
        JsonUnquotedLiteral("10.0"),
        JsonPrimitive(9),
        JsonPrimitive(9.99),
      ).forEach {
        test("$it fails validation against $number") {
          val errors = mutableListOf<ValidationError>()
          val valid = schemaPositive.validate(it, errors::add)
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/exclusiveMinimum"),
              objectPath = JsonPointer.ROOT,
              message = "$it must be greater than $number",
            )
          )
        }
      }
    }

    val schema = JsonSchema.fromDescription(
      """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "exclusiveMinimum": 10
        }
        """.trimIndent()
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
        val valid = schema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }
  }
}