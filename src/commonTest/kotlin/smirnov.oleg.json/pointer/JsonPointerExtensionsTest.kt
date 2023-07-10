package smirnov.oleg.json.pointer

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import smirnov.oleg.json.pointer.JsonPointer.Companion

@Suppress("unused")
class JsonPointerExtensionsTest : FunSpec() {
  init {
    data class TestCase<T>(
      val firstArg: JsonPointer,
      val secondArg: T,
      val result: JsonPointer,
    )

    listOf(
      TestCase(JsonPointer.ROOT, "prop", JsonPointer("/prop")),
      TestCase(JsonPointer("/test"), "prop", JsonPointer("/test/prop")),
    ).forEach { (initial, prop, result) ->
      test("$initial / $prop => $result") {
        (initial / prop) shouldBe result
      }
    }

    listOf(
      TestCase(JsonPointer.ROOT, 0, JsonPointer("/0")),
      TestCase(JsonPointer("/test"), 0, JsonPointer("/test/0")),
    ).forEach { (initial, prop, result) ->
      test("$initial [ $prop ] => $result") {
        (initial[prop]) shouldBe result
      }
    }

    listOf(
      TestCase(JsonPointer.ROOT, JsonPointer.ROOT, JsonPointer.ROOT),
      TestCase(JsonPointer.ROOT, JsonPointer("/test"), JsonPointer("/test")),
      TestCase(JsonPointer("/test"), JsonPointer.ROOT, JsonPointer("/test")),
      TestCase(JsonPointer("/test1"), JsonPointer("/test2"), JsonPointer("/test1/test2")),
    ).forEach { (init, append, result) ->
      test("$init + $append => $result") {
        (init + append) shouldBe result
      }
    }

    listOf(
      TestCase(JsonPointer.ROOT, JsonPointer.ROOT, JsonPointer.ROOT),
      TestCase(JsonPointer.ROOT, JsonPointer("/test"), JsonPointer("/test")),
      TestCase(JsonPointer("/test"), JsonPointer("/test/data"), JsonPointer("/data")),
    ).forEach { (base, relativeToBase, relativePath) ->
      test("relative path from '$base' to '$relativeToBase' is '$relativePath'") {
        base.relative(relativeToBase) shouldBe relativePath
      }
    }
  }
}