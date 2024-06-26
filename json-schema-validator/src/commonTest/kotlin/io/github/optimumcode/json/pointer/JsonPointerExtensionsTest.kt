package io.github.optimumcode.json.pointer

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

@Suppress("unused")
class JsonPointerExtensionsTest : FunSpec() {
  init {
    data class TestCase<T, R>(
      val firstArg: JsonPointer,
      val secondArg: T,
      val result: R,
    )

    listOf(
      TestCase(
        JsonPointer.ROOT,
        "prop",
        JsonPointer("/prop"),
      ),
      TestCase(
        JsonPointer.ROOT,
        "",
        JsonPointer("/"),
      ),
      TestCase(
        JsonPointer("/test"),
        "prop",
        JsonPointer("/test/prop"),
      ),
      TestCase(
        JsonPointer("/test"),
        "",
        JsonPointer("/test/"),
      ),
      TestCase(
        JsonPointer("/test"),
        "tilde~field",
        JsonPointer("/test/tilde~0field"),
      ),
      TestCase(
        JsonPointer("/test"),
        "slash/field",
        JsonPointer("/test/slash~1field"),
      ),
    ).forEach { (initial, prop, result) ->
      test("$initial / $prop => $result") {
        (initial / prop) shouldBe result
      }
    }

    listOf(
      TestCase(
        JsonPointer.ROOT,
        0,
        JsonPointer("/0"),
      ),
      TestCase(
        JsonPointer("/test"),
        0,
        JsonPointer("/test/0"),
      ),
      TestCase(
        JsonPointer("/test/"),
        0,
        JsonPointer("/test//0"),
      ),
    ).forEach { (initial, prop, result) ->
      test("$initial [ $prop ] => $result") {
        (initial[prop]) shouldBe result
      }
    }

    listOf(
      TestCase(
        JsonPointer.ROOT,
        JsonPointer.ROOT,
        JsonPointer.ROOT,
      ),
      TestCase(
        JsonPointer.ROOT,
        JsonPointer("/test"),
        JsonPointer("/test"),
      ),
      TestCase(
        JsonPointer("/test"),
        JsonPointer.ROOT,
        JsonPointer("/test"),
      ),
      TestCase(
        JsonPointer("/test1"),
        JsonPointer("/test2"),
        JsonPointer("/test1/test2"),
      ),
      TestCase(
        JsonPointer("/test1/"),
        JsonPointer("/test2"),
        JsonPointer("/test1//test2"),
      ),
      TestCase(
        JsonPointer("/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/v"),
        JsonPointer("/w/x/y/z"),
        JsonPointer("/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/v/w/x/y/z"),
      ),
    ).forEach { (init, append, result) ->
      test("$init + $append => $result") {
        (init + append) shouldBe result
      }
    }

    listOf(
      TestCase(
        JsonPointer.ROOT,
        JsonPointer.ROOT,
        JsonPointer.ROOT,
      ),
      TestCase(
        JsonPointer.ROOT,
        JsonPointer("/test"),
        JsonPointer("/test"),
      ),
      TestCase(
        JsonPointer("/test"),
        JsonPointer("/test/data"),
        JsonPointer("/data"),
      ),
      TestCase(
        JsonPointer("/test"),
        JsonPointer("/test//data"),
        JsonPointer("//data"),
      ),
      TestCase(
        JsonPointer("/test/data"),
        JsonPointer("/test"),
        JsonPointer("/test"),
      ),
    ).forEach { (base, relativeToBase, relativePath) ->
      test("relative path from '$base' to '$relativeToBase' is '$relativePath'") {
        base.relative(relativeToBase) shouldBe relativePath
      }
    }

    listOf(
      TestCase(
        JsonPointer.ROOT,
        JsonPointer.ROOT,
        true,
      ),
      TestCase(
        JsonPointer("/path"),
        JsonPointer.ROOT,
        true,
      ),
      TestCase(
        JsonPointer.ROOT,
        JsonPointer("/path"),
        false,
      ),
      TestCase(
        JsonPointer("/path/to/node"),
        JsonPointer("/path"),
        true,
      ),
      TestCase(
        JsonPointer("/path"),
        JsonPointer("/path"),
        true,
      ),
      TestCase(
        JsonPointer("/path"),
        JsonPointer("/another"),
        false,
      ),
      TestCase(
        JsonPointer("/path"),
        JsonPointer("/path/to/node"),
        false,
      ),
    ).forEach { (primary, secondary, result) ->
      test("'$primary' starts with '$secondary' => $result") {
        primary.startsWith(secondary) shouldBe result
      }
    }

    listOf(
      TestCase(
        JsonPointer.ROOT,
        "",
        false,
      ),
      TestCase(
        JsonPointer.ROOT,
        "test",
        false,
      ),
      TestCase(
        JsonPointer("/test/path/to/node"),
        "anotherPath",
        false,
      ),
      TestCase(
        JsonPointer("/test/path/to/node"),
        "path",
        true,
      ),
    ).forEach { (path, segment, result) ->
      test("'$path' contains segment '$segment' => $result") {
        path.contains(segment) shouldBe result
      }
    }
  }
}