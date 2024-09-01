package io.github.optimumcode.json.schema.internal.wrapper

import io.github.optimumcode.json.schema.model.contentOrNull
import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.booleans.shouldBeFalse
import io.kotest.matchers.booleans.shouldBeTrue
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.nulls.shouldBeNull
import io.kotest.matchers.should
import io.kotest.matchers.shouldBe
import io.kotest.matchers.types.instanceOf
import io.kotest.matchers.types.shouldBeInstanceOf
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

class JsonWrapperTest : FunSpec() {
  init {
    mapOf(
      buildJsonObject { } to JsonObjectWrapper::class,
      buildJsonArray { } to JsonArrayWrapper::class,
      JsonPrimitive("hello") to JsonPrimitiveWrapper::class,
      JsonNull to JsonPrimitiveWrapper::class,
    ).forEach { (node, wrapperClass) ->
      test("node ${node::class.simpleName} wraps into ${wrapperClass.simpleName}") {
        node.wrap() shouldBe instanceOf(wrapperClass)
      }
    }

    test("object wrapper") {
      buildJsonObject {
        put("a", JsonPrimitive("hello"))
        put("b", buildJsonArray { })
      }.wrap().shouldBeInstanceOf<JsonObjectWrapper> {
        assertSoftly {
          it.size shouldBe 2
          it.keys shouldContainExactly setOf("a", "b")
          it["a"].shouldBeInstanceOf<JsonPrimitiveWrapper>()
          it["b"].shouldBeInstanceOf<JsonArrayWrapper>()
        }
      }
    }

    test("array wrapper") {
      buildJsonArray {
        add(JsonPrimitive("hello"))
        add(buildJsonObject { })
      }.wrap().shouldBeInstanceOf<JsonArrayWrapper> {
        assertSoftly {
          it.size shouldBe 2
          it[0].shouldBeInstanceOf<JsonPrimitiveWrapper>()
          it[1].shouldBeInstanceOf<JsonObjectWrapper>()
        }
      }
    }

    test("primitive wrapper for null") {
      JsonNull.wrap().shouldBeInstanceOf<JsonPrimitiveWrapper> {
        assertSoftly {
          it.isString.shouldBeFalse()
          it.isNumber.shouldBeFalse()
          it.isBoolean.shouldBeFalse()
          it.isNull.shouldBeTrue()
          it.content shouldBe "null"
          it.contentOrNull.shouldBeNull()
        }
      }
    }

    test("primitive wrapper for boolean") {
      JsonPrimitive(true).wrap().shouldBeInstanceOf<JsonPrimitiveWrapper> {
        assertSoftly {
          it.isString.shouldBeFalse()
          it.isNumber.shouldBeFalse()
          it.isBoolean.shouldBeTrue()
          it.isNull.shouldBeFalse()
          it.content shouldBe "true"
          it.contentOrNull shouldBe "true"
        }
      }
    }

    test("primitive wrapper for number") {
      JsonPrimitive(42).wrap().shouldBeInstanceOf<JsonPrimitiveWrapper> {
        assertSoftly {
          it.isString.shouldBeFalse()
          it.isNumber.shouldBeTrue()
          it.isBoolean.shouldBeFalse()
          it.isNull.shouldBeFalse()
          it.content shouldBe "42"
          it.contentOrNull shouldBe "42"
        }
      }
    }

    test("primitive wrapper for string") {
      JsonPrimitive("42").wrap().shouldBeInstanceOf<JsonPrimitiveWrapper> {
        assertSoftly {
          it.isString.shouldBeTrue()
          it.isNumber.shouldBeFalse()
          it.isBoolean.shouldBeFalse()
          it.isNull.shouldBeFalse()
          it.content shouldBe "42"
          it.contentOrNull shouldBe "42"
        }
      }
    }

    test("string wrapper for property") {
      StringWrapper("prop").should {
        it.isString.shouldBeTrue()
        it.isNumber.shouldBeFalse()
        it.isBoolean.shouldBeFalse()
        it.isNull.shouldBeFalse()
        it.content shouldBe "prop"
        it.contentOrNull shouldBe "prop"
      }
    }
  }
}