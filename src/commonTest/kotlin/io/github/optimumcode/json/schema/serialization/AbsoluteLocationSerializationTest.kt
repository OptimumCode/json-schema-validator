package io.github.optimumcode.json.schema.serialization

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AbsoluteLocation
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

class AbsoluteLocationSerializationTest : FunSpec() {
  init {
    listOf(
      AbsoluteLocation(
        uri = Uri.EMPTY,
        path = JsonPointer.ROOT,
      ) to "#",
      AbsoluteLocation(
        uri = Uri.EMPTY,
        path = JsonPointer("/test/\$ref"),
      ) to "#/test/\$ref",
      AbsoluteLocation(
        uri = Uri.parse("https://test.com"),
        path = JsonPointer.ROOT,
      ) to "https://test.com#",
      AbsoluteLocation(
        uri = Uri.parse("https://test.com"),
        path = JsonPointer("/test/\$ref"),
      ) to "https://test.com#/test/\$ref",
    ).forEach { (location, expected) ->
      test("absolute location $location serialized") {
        Json.encodeToString(location) shouldBe "\"$expected\""
      }
      test("absolute location $location can be deserialized") {
        Json.decodeFromString(AbsoluteLocation.serializer(), "\"$expected\"") shouldBe location
      }
    }
  }
}