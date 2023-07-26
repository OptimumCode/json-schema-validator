package io.github.optimumcode.json.schema.internal.util

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
      val (integer, fraction) = parseNumberParts(JsonUnquotedLiteral("1e308"))
        .shouldNotBeNull()
      assertSoftly {
        integer shouldBe Long.MAX_VALUE
        fraction shouldBe 0L
      }
    }
  }
}