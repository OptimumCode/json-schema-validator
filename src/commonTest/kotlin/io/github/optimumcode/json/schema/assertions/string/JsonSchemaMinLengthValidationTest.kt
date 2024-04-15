package io.github.optimumcode.json.schema.assertions.string

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.github.optimumcode.json.schema.internal.util.codePointCount
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaMinLengthValidationTest : FunSpec() {
  init {
    val schema =
      JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "minLength": 10
        }
        """.trimIndent(),
      )
    val validStrings =
      listOf(
        "⩌⻏⊧➘⨜Ⅎ⮲➓⌸⨝❌Ⱞ₼⽩Ⅻⱄ⯐⡼℻⮟",
        "OQF1dZuGiXPBwNI2enQ2",
        "ⱜ⠚\u2FDBⲢ⯕⃣⠽␁⧂\u245D≻\u2FDD╉♊\u20CF⯟ℯ∙⧩",
        "JpEblYiJE57H70qGNXs",
        "ⅵ┡\u243A⢻␀⁾⡪∛⫑⏽",
        "Si1kaAhdpS",
        "💩".repeat(11),
        "💩".repeat(10),
      )
    for (str in validStrings) {
      test("'$str' passes validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(JsonPrimitive(str), errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    val invalidStrings =
      listOf(
        "5z0byD49N",
        "⸖⿻ⲏ⯥ⲃ⮔∸ⲷ▭",
        " ⍘↽♔⚪➕ⷰ➖",
        "⧦",
        "",
        "💩".repeat(9),
      )
    for (str in invalidStrings) {
      test("'$str' does not pass validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(JsonPrimitive(str), errors::add)
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/minLength"),
            objectPath = JsonPointer.ROOT,
            message = "string length (${str.codePointCount()}) must be greater or equal to 10",
          ),
        )
      }
    }

    listOf(
      JsonPrimitive(true),
      JsonPrimitive(42.1),
      JsonPrimitive(42),
      JsonNull,
      buildJsonObject { },
      buildJsonArray { },
    ).forEach {
      test("$it passes validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }
  }
}