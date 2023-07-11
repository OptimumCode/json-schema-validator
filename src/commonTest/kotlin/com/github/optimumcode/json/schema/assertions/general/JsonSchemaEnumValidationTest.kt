package com.github.optimumcode.json.schema.assertions.general

import com.github.optimumcode.json.pointer.JsonPointer
import com.github.optimumcode.json.schema.JsonSchema
import com.github.optimumcode.json.schema.ValidationError
import com.github.optimumcode.json.schema.base.KEY
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaEnumValidationTest : FunSpec() {
  init {
    val enumElements = listOf(
      JsonPrimitive(1),
      JsonPrimitive(1.5),
      JsonPrimitive("a"),
      JsonPrimitive(true),
//      JsonPrimitive(Long.MAX_VALUE - 1),
      JsonNull,
      buildJsonObject {
        put("test", JsonPrimitive("a"))
      },
      buildJsonArray {
        add(JsonPrimitive("a"))
      },
    )

    val schema = JsonSchema.fromDescription(
      """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "enum": ${JsonArray(enumElements)}
          }
      """.trimIndent(),
    )
    enumElements.forEach {
      test("element $it in enum") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("not in enum") {
      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(JsonPrimitive(42), errors::add)
      valid shouldBe false
      errors.shouldContainExactly(
        ValidationError(
          schemaPath = JsonPointer("/enum"),
          objectPath = JsonPointer.ROOT,
          message = "element is not in enum",
        ),
      )
    }

    test("error when it is not enum") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "enum": 42
          }
          """.trimIndent(),
        )
      }.message shouldBe "enum must be an array"
    }

    test("error when not unique elements is not enum") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "enum": ["A", "B", "A"]
          }
          """.trimIndent(),
        )
      }.message shouldBe "enum must consist of unique elements"
    }
    test("empty array") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "enum": []
          }
          """.trimIndent(),
        )
      }.message shouldBe "enum must have at least one element"
    }
  }
}