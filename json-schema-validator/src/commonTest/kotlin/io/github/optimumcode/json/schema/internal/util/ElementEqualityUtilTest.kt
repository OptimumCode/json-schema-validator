package io.github.optimumcode.json.schema.internal.util

import io.github.optimumcode.json.schema.internal.wrapper.JsonPrimitiveWrapper
import io.kotest.assertions.asClue
import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.nulls.shouldNotBeNull
import io.kotest.matchers.shouldBe
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.JsonUnquotedLiteral

@Suppress("unused")
@OptIn(ExperimentalSerializationApi::class)
class ElementEqualityUtilTest : FunSpec() {
  init {
    test("extracts number parts from max long engineering format") {
      val (integer, fraction, precision) =
        parseNumberParts(JsonPrimitiveWrapper(JsonUnquotedLiteral("1e308")))
          .shouldNotBeNull()
      assertSoftly {
        integer shouldBe Long.MAX_VALUE
        fraction shouldBe 0L
        precision shouldBe 0
      }
    }

    test("correctly compares fractional part") {
      areEqualPrimitives(
        JsonPrimitiveWrapper(JsonUnquotedLiteral("0.0075")),
        JsonPrimitiveWrapper(JsonUnquotedLiteral("0.00075")),
      ) shouldBe false
    }

    listOf(
      "0.00751",
      "0.0075100",
      "751e-5",
    ).forEach {
      test("correctly extract all parts from float number in format $it") {
        val parts = parseNumberParts(JsonPrimitiveWrapper(JsonUnquotedLiteral(it))).shouldNotBeNull()
        assertSoftly {
          parts.asClue { p ->
            p.integer shouldBe 0
            p.precision shouldBe 5
            p.fractional shouldBe 751
          }
        }
      }
    }

    listOf(
      "2" to "2.0",
      "0.1" to "0.1",
      "0.1" to "0.100",
      "1e-1" to "0.1",
    ).forEach { (first, second) ->
      test("numbers $first and $second are equal") {
        assertSoftly {
          areEqualPrimitives(
            JsonPrimitiveWrapper(JsonUnquotedLiteral(first)),
            JsonPrimitiveWrapper(JsonUnquotedLiteral(second)),
          ) shouldBe true

          areEqualPrimitives(
            JsonPrimitiveWrapper(JsonUnquotedLiteral(second)),
            JsonPrimitiveWrapper(JsonUnquotedLiteral(first)),
          ) shouldBe true
        }
      }
    }
  }
}