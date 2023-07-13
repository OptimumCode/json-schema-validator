package io.github.optimumcode.json.schema.assertions.string

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaMaxLengthValidationTest : FunSpec() {
  init {
    val schema = JsonSchema.fromDefinition(
      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "maxLength": 20
      }
      """.trimIndent(),
    )
    val validStrings = listOf(
      "⩌⻏⊧➘⨜Ⅎ⮲➓⌸⨝❌Ⱞ₼⽩Ⅻⱄ⯐⡼℻⮟",
      "OQF1dZuGiXPBwNI2enQ2",
      "ⱜ⠚\u2FDBⲢ⯕⃣⠽␁⧂\u245D≻\u2FDD╉♊\u20CF⯟ℯ∙⧩",
      "JpEblYiJE57H70qGNXs",
      "╒",
      "V",
      "",
    )
    for (str in validStrings) {
      test("'$str' passes validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(JsonPrimitive(str), errors::add)
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    val invalidStrings = listOf(
      "EFDzZMRawYGD9eNfknAUB",
      "⌻ⲝ⣞ℤ⸍⠗⠜ↈ✋☧⾛✩ⓥ⇩⡽⚘\u20FC◭┐⥸⒗",
      "⠺⪒⑸⋶⥠⇀⨑⨋ⅸ⥼\u245F⏇Ⓙⴷ⻘⢢≧\u20C8⬫⡜⸁",
    )
    for (str in invalidStrings) {
      test("'$str' does not pass validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(JsonPrimitive(str), errors::add)
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/maxLength"),
            objectPath = JsonPointer.ROOT,
            message = "string length (${str.length}) must be less or equal to 20",
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