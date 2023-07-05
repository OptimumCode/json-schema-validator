package smirnov.oleg.json.schema.assertions.condition

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
import smirnov.oleg.json.schema.KEY
import smirnov.oleg.json.schema.ValidationError

@Suppress("unused")
class JsonSchemaNotValidationTest : FunSpec() {
  init {
    JsonSchema.fromDescription(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "not": {
          "type": "object"
        }
      }
      """.trimIndent()
    ).also { schema ->
      listOf(
        JsonPrimitive(42),
        JsonPrimitive(42.5),
        JsonPrimitive("test"),
        JsonPrimitive(true),
        JsonNull,
        buildJsonArray { },
      ).forEach {
        test("not an object $it passes validation") {
          val errors = mutableListOf<ValidationError>()
          val valid = schema.validate(it, errors::add)

          valid shouldBe true
          errors shouldHaveSize 0
        }
      }

      test("object fails validation") {
        val jsonObject = buildJsonObject { }
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(jsonObject, errors::add)

        jsonObject.asClue {
          valid shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              schemaPath = JsonPointer("/not"),
              objectPath = JsonPointer.ROOT,
              message = "element must not be valid against child JSON schema but was",
            ),
          )
        }
      }
    }

    test("reports if value is not a valid JSON schema") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "not": 42
          }
          """.trimIndent()
        )
      }.message shouldBe "not must be a valid JSON schema"
    }
  }
}