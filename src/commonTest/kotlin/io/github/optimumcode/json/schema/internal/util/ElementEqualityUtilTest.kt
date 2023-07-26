package io.github.optimumcode.json.schema.internal.util

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
      val (integer, fraction, precision) = parseNumberParts(JsonUnquotedLiteral("1e308"))
        .shouldNotBeNull()
      assertSoftly {
        integer shouldBe Long.MAX_VALUE
        fraction shouldBe 0L
        precision shouldBe 0
      }
    }

    test("correctly compares fractional part") {
      areEqualPrimitives(
        JsonUnquotedLiteral("0.0075"),
        JsonUnquotedLiteral("0.00075"),
      ) shouldBe false
    }

    listOf(
      "0.00751",
      "0.0075100",
      "751e-5",
    ).forEach {
      test("correctly extract all parts from float number in format $it") {
        val parts = parseNumberParts(JsonUnquotedLiteral(it)).shouldNotBeNull()
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
            JsonUnquotedLiteral(first),
            JsonUnquotedLiteral(second),
          ) shouldBe true

          areEqualPrimitives(
            JsonUnquotedLiteral(second),
            JsonUnquotedLiteral(first),
          ) shouldBe true
        }
      }
    }
  }
}