package smirnov.oleg.json.schema.assertions.general

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
class JsonSchemaConstValidationTest : FunSpec() {
  init {
    listOf(
      JsonPrimitive(1),
      JsonPrimitive(42.5),
      JsonPrimitive("a"),
      JsonPrimitive(true),
      JsonNull,
      buildJsonObject {
        put("key1", JsonPrimitive(42))
        put("key2", JsonPrimitive("a"))
      },
      buildJsonArray {
        add(JsonPrimitive(1))
        add(JsonPrimitive(2))
      },
    ).forEach {
      test("const match to $it") {
        val schema = JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "const": $it
          }
          """.trimIndent(),
        )

        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("does not match const") {
      val schema = JsonSchema.fromDescription(
        """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "const": 42
          }
        """.trimIndent(),
      )

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(JsonPrimitive("test"), errors::add)
      valid shouldBe false
      errors.shouldContainExactly(
        ValidationError(
          schemaPath = JsonPointer("/const"),
          objectPath = JsonPointer.ROOT,
          message = "element does not match constant definition",
        ),
      )
    }
  }
}