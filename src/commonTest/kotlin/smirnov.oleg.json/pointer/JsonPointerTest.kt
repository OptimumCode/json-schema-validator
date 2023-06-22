package smirnov.oleg.json.pointer

import io.kotest.assertions.asClue
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.should
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.string.shouldStartWith
import io.kotest.matchers.types.beOfType
import io.kotest.matchers.types.shouldBeSameInstanceAs

@Suppress("unused")
class JsonPointerTest : FunSpec() {
  init {
    test("empty string results empty pointer") {
      JsonPointer("") shouldBeSameInstanceAs EmptyPointer
    }
    test("pointer should start with /") {
      val exception = shouldThrow<IllegalArgumentException> { JsonPointer("slash") }
      exception.message shouldStartWith "JSON pointer must start from /"
    }
    listOf(
      "zero",
      "01",
      "10000000000",
      "0a",
      "2147483648", // more than Int.MAX
    ).forEach {
      test("$it is not an index") {
        JsonPointer("/$it").assertSegment(property = it, index = -1)
      }
    }

    listOf(
      "0",
      "1",
      "256",
      "2147483646",
    ).forEach {
      test("$it is an index") {
        JsonPointer("/$it").assertSegment(property = it, index = it.toInt())
      }
    }

    test("extracts segment path") {
      val pointer = JsonPointer("/first/second")
      assertSoftly {
        pointer.assertSegment(property = "first")
        pointer.next shouldNotBe null
        pointer.next!!.assertSegment(property = "second")
        pointer.next?.next shouldBe EmptyPointer
      }
    }


    listOf(
      '/' to "~1",
      '~' to "~0",
    ).forEach { (actual, escaped) ->
      test("parses escaped character '$escaped' as '$actual'") {
        val pointer = JsonPointer("/$escaped")
        pointer.assertSegment("$actual")
      }

      test("parses several escaped characters '$escaped' as '$actual'") {
        val pointer = JsonPointer("/${escaped}and$escaped/test")
        pointer.assertSegment("${actual}and$actual")
        pointer.next.apply {
          shouldNotBe(null)
          this!!.assertSegment("test")
        }
      }
    }

    test("correctly reads ~ at the end") {
      val pointer = JsonPointer("/~")
      pointer.assertSegment(property = "~")
    }
  }

  private fun JsonPointer.assertSegment(property: String, index: Int = -1) {
    asClue {
      this should beOfType<SegmentPointer>()
      this as SegmentPointer
      this.propertyName shouldBe property
      this.index shouldBe index
    }
  }
}