package io.github.optimumcode.json.pointer

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

class JsonPointerSerializationTest : FunSpec() {
  init {
    listOf(
      JsonPointer.ROOT to "",
      JsonPointer("/test") to "/test",
      JsonPointer("/te~0st") to "/te~0st",
      JsonPointer("/te~1st") to "/te~1st",
    ).forEach { (pointer, expected) ->
      test("json pointer $pointer serialized") {
        Json.encodeToString(pointer) shouldBe "\"$expected\""
      }

      test("json pointer $pointer deserialized") {
        Json.decodeFromString(JsonPointer.serializer(), "\"$expected\"") shouldBe pointer
      }
    }
  }
}