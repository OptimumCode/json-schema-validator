package io.github.optimumcode.json.pointer

import io.kotest.assertions.asClue
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.types.shouldBeSameInstanceAs
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonPointerWorkTest : FunSpec() {
  init {
    listOf(
      buildJsonObject {
        put("test", JsonPrimitive("a"))
      },
      buildJsonArray {
        add(JsonPrimitive("a"))
      },
      JsonPrimitive("a"),
    ).forEach {
      test("root pointer should match ${it::class.simpleName}") {
        val element: JsonElement? = it.at(JsonPointer.ROOT)
        withClue("is the same instance") {
          element shouldBeSameInstanceAs it
        }
      }
    }

    test("returns property from object") {
      val jsonObject =
        buildJsonObject {
          put("test", JsonPrimitive("a"))
        }

      jsonObject.at(JsonPointer("/test")) shouldBe JsonPrimitive("a")
    }

    test("returns array element") {
      val array =
        buildJsonArray {
          add(JsonPrimitive("a"))
        }
      array.at(JsonPointer("/0")) shouldBe JsonPrimitive("a")
    }

    listOf(
      '~' to "~0",
      '/' to "~1",
    ).forEach { (actual, escaped) ->
      test("handles escaped charter $escaped as $actual") {
        val jsonObject =
          buildJsonObject {
            put("name${actual}field", JsonPrimitive("a"))
            put("${actual}field", JsonPrimitive("b"))
            put("name$actual", JsonPrimitive("c"))
          }

        assertSoftly {
          JsonPointer("/name${escaped}field").asClue {
            jsonObject.at(it) shouldBe JsonPrimitive("a")
          }
          JsonPointer("/${escaped}field").asClue {
            jsonObject.at(it) shouldBe JsonPrimitive("b")
          }
          JsonPointer("/name$escaped").asClue {
            jsonObject.at(it) shouldBe JsonPrimitive("c")
          }
        }
      }
    }

    listOf(
      "",
      "/test",
      "/0/test",
    ).forEach {
      test("two pointers with path $it are equal") {
        JsonPointer(it) shouldBe JsonPointer(it)
      }
    }
  }
}