package io.github.optimumcode.json.schema.wrappers.objects

import io.github.optimumcode.json.schema.model.ArrayElement
import io.github.optimumcode.json.schema.model.ObjectElement
import io.github.optimumcode.json.schema.model.PrimitiveElement
import io.kotest.assertions.asClue
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.Platform
import io.kotest.core.platform
import io.kotest.core.spec.style.FunSpec
import io.kotest.core.test.Enabled
import io.kotest.core.test.EnabledOrReasonIf
import io.kotest.matchers.booleans.shouldBeFalse
import io.kotest.matchers.booleans.shouldBeTrue
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.nulls.shouldBeNull
import io.kotest.matchers.nulls.shouldNotBeNull
import io.kotest.matchers.shouldBe
import io.kotest.matchers.string.shouldStartWith
import io.kotest.matchers.types.shouldBeInstanceOf

class WrappersTest : FunSpec() {
  init {
    fun Any?.str(): String =
      when (this) {
        is Array<*> -> this.contentToString()
        is ByteArray -> this.contentToString()
        is ShortArray -> this.contentToString()
        is IntArray -> this.contentToString()
        is LongArray -> this.contentToString()
        is FloatArray -> this.contentToString()
        is DoubleArray -> this.contentToString()
        is CharArray -> this.contentToString()
        else -> toString()
      }

    fun Any?.type(): String = this?.let { "(${it::class.simpleName}) " } ?: ""

    mapOf(
      emptyMap<String, Any>() to ObjectElement::class,
      listOf<Any>() to ArrayElement::class,
      emptyArray<Any>() to ArrayElement::class,
      // by default ByteArray is encoded as base64 string
      byteArrayOf() to PrimitiveElement::class,
      shortArrayOf() to ArrayElement::class,
      intArrayOf() to ArrayElement::class,
      longArrayOf() to ArrayElement::class,
      floatArrayOf() to ArrayElement::class,
      doubleArrayOf() to ArrayElement::class,
      charArrayOf() to ArrayElement::class,
      "test" to PrimitiveElement::class,
      't' to PrimitiveElement::class,
      42 to PrimitiveElement::class,
      42L to PrimitiveElement::class,
      42.2 to PrimitiveElement::class,
      42.2f to PrimitiveElement::class,
      true to PrimitiveElement::class,
      null to PrimitiveElement::class,
    ).forEach { (obj, wrapperClass) ->
      test("element ${obj.str()} ${obj.type()}is wrapped into ${wrapperClass.simpleName}") {
        wrapperClass.isInstance(wrapAsElement(obj)).shouldBeTrue()
      }
    }

    test("primitive wrapper for null") {
      wrapAsElement(null).shouldBeInstanceOf<PrimitiveElement> { el ->
        assertSoftly {
          "isString".asClue { el.isString.shouldBeFalse() }
          "isNumber".asClue { el.isNumber.shouldBeFalse() }
          "isBoolean".asClue { el.isBoolean.shouldBeFalse() }
          "isNull".asClue { el.isNull.shouldBeTrue() }
          "content".asClue { el.content shouldBe "null" }
          "longOrNull".asClue { el.longOrNull.shouldBeNull() }
          "doubleOrNull".asClue { el.doubleOrNull.shouldBeNull() }
        }
      }
    }

    test("primitive wrapper for boolean") {
      wrapAsElement(true).shouldBeInstanceOf<PrimitiveElement> { el ->
        assertSoftly {
          "isString".asClue { el.isString.shouldBeFalse() }
          "isNumber".asClue { el.isNumber.shouldBeFalse() }
          "isBoolean".asClue { el.isBoolean.shouldBeTrue() }
          "isNull".asClue { el.isNull.shouldBeFalse() }
          "content".asClue { el.content shouldBe "true" }
          "longOrNull".asClue { el.longOrNull.shouldBeNull() }
          "doubleOrNull".asClue { el.doubleOrNull.shouldBeNull() }
        }
      }
    }

    test("primitive wrapper for integer number") {
      wrapAsElement(42).shouldBeInstanceOf<PrimitiveElement> { el ->
        assertSoftly {
          "isString".asClue { el.isString.shouldBeFalse() }
          "isNumber".asClue { el.isNumber.shouldBeTrue() }
          "isBoolean".asClue { el.isBoolean.shouldBeFalse() }
          "isNull".asClue { el.isNull.shouldBeFalse() }
          "content".asClue { el.content shouldBe "42" }
          "longOrNull".asClue { el.longOrNull shouldBe 42L }
          "doubleOrNull".asClue { el.doubleOrNull.shouldBeNull() }
        }
      }
    }

    test("primitive wrapper for floating number") {
      wrapAsElement(42.5).shouldBeInstanceOf<PrimitiveElement> { el ->
        assertSoftly {
          "isString".asClue { el.isString.shouldBeFalse() }
          "isNumber".asClue { el.isNumber.shouldBeTrue() }
          "isBoolean".asClue { el.isBoolean.shouldBeFalse() }
          "isNull".asClue { el.isNull.shouldBeFalse() }
          "content".asClue { el.content shouldBe "42.5" }
          "longOrNull".asClue { el.longOrNull.shouldBeNull() }
          "doubleOrNull".asClue { el.doubleOrNull shouldBe 42.5 }
        }
      }
    }

    test("primitive wrapper for string") {
      wrapAsElement("42").shouldBeInstanceOf<PrimitiveElement> { el ->
        assertSoftly {
          "isString".asClue { el.isString.shouldBeTrue() }
          "isNumber".asClue { el.isNumber.shouldBeFalse() }
          "isBoolean".asClue { el.isBoolean.shouldBeFalse() }
          "isNull".asClue { el.isNull.shouldBeFalse() }
          "content".asClue { el.content shouldBe "42" }
          "longOrNull".asClue { el.longOrNull.shouldBeNull() }
          "doubleOrNull".asClue { el.doubleOrNull.shouldBeNull() }
        }
      }
    }

    test("primitive wrapper for char") {
      wrapAsElement('4').shouldBeInstanceOf<PrimitiveElement> { el ->
        assertSoftly {
          "isString".asClue { el.isString.shouldBeTrue() }
          "isNumber".asClue { el.isNumber.shouldBeFalse() }
          "isBoolean".asClue { el.isBoolean.shouldBeFalse() }
          "isNull".asClue { el.isNull.shouldBeFalse() }
          "content".asClue { el.content shouldBe "4" }
          "longOrNull".asClue { el.longOrNull.shouldBeNull() }
          "doubleOrNull".asClue { el.doubleOrNull.shouldBeNull() }
        }
      }
    }

    test("primitive wrapper for char as codepoint") {
      wrapAsElement('4', WrappingConfiguration.create { charAsCodepoint = true })
        .shouldBeInstanceOf<PrimitiveElement> { el ->
          assertSoftly {
            "isString".asClue { el.isString.shouldBeFalse() }
            "isNumber".asClue { el.isNumber.shouldBeTrue() }
            "isBoolean".asClue { el.isBoolean.shouldBeFalse() }
            "isNull".asClue { el.isNull.shouldBeFalse() }
            "content".asClue { el.content shouldBe "52" }
            "longOrNull".asClue { el.longOrNull shouldBe 52L }
            "doubleOrNull".asClue { el.doubleOrNull.shouldBeNull() }
          }
        }
    }

    test("object wrapper") {
      wrapAsElement(
        buildMap {
          put("a", "hello")
          put("b", listOf<Any>())
          put("c", mapOf<String, Any>())
          put("d", null)
        },
      ).shouldBeInstanceOf<ObjectElement> {
        assertSoftly {
          it.size shouldBe 4
          it.keys shouldContainExactly setOf("a", "b", "c", "d")
          it["a"].shouldBeInstanceOf<PrimitiveElement>()
          it["b"].shouldBeInstanceOf<ArrayElement>()
          it["c"].shouldBeInstanceOf<ObjectElement>()
          it["d"].shouldBeInstanceOf<PrimitiveElement> {
            it.isNull.shouldBeTrue()
          }
          it["e"].shouldBeNull()
          ("a" in it).shouldBeTrue()
          ("e" in it).shouldBeFalse()
        }
      }
    }

    test("array wrapper") {
      wrapAsElement(
        buildList {
          add("hello")
          add(mapOf<String, Any>())
          add(listOf<Any>())
          add(null)
        },
      ).shouldBeInstanceOf<ArrayElement> {
        assertSoftly {
          it.size shouldBe 4
          it[0].shouldBeInstanceOf<PrimitiveElement>()
          it[1].shouldBeInstanceOf<ObjectElement>()
          it[2].shouldBeInstanceOf<ArrayElement>()
          it[3].shouldBeInstanceOf<PrimitiveElement> {
            it.isNull.shouldBeTrue()
          }
        }
      }
    }

    test("set is not allowed by default") {
      shouldThrow<IllegalStateException> {
        wrapAsElement(setOf("a"))
      }.message.shouldStartWith("unsupported type to wrap:")
    }

    test("set is allowed if configuration is provided") {
      val element =
        shouldNotThrowAny {
          wrapAsElement(
            setOf("a"),
            WrappingConfiguration.create {
              allowSets = true
            },
          )
        }
      element.shouldBeInstanceOf<ArrayElement> {
        it.size shouldBe 1
        it[0].shouldBeInstanceOf<PrimitiveElement>()
      }
    }

    mapOf(42 to "Int", null to "null").forEach { (key, type) ->
      test("map with key '${key.str()}' ${key.type()} is not allowed") {
        shouldThrow<IllegalArgumentException> {
          wrapAsElement(
            mapOf(key to "test"),
          )
        }.message.shouldBe("map keys must be strings, found: $type")
      }
    }

    mapOf(
      42.toByte() to 42L,
      42.toShort() to 42L,
      42 to 42L,
      42L to 42L,
    ).forEach { (originalNumber, convertedNumber) ->
      val name =
        "integer number $originalNumber ${originalNumber.type()}" +
          "converted to $convertedNumber ${convertedNumber.type()}"
      test(name) {
        wrapAsElement(originalNumber).shouldBeInstanceOf<PrimitiveElement> {
          it.longOrNull.shouldNotBeNull()
            .shouldBe(convertedNumber)
          it.doubleOrNull.shouldBeNull()
        }
      }
    }

    class DoubleConversionTestCase(
      val initial: Any,
      val expected: Double,
    )

    mapOf<DoubleConversionTestCase, EnabledOrReasonIf>(
      DoubleConversionTestCase(
        42.2f,
        42.2,
      ) to {
        if (platform == Platform.WasmJs) {
          Enabled.disabled("problems with precision on wasm platform")
        } else {
          Enabled.enabled
        }
      },
      DoubleConversionTestCase(42.5f, 42.5) to { Enabled.enabled },
      DoubleConversionTestCase(42.5, 42.5) to { Enabled.enabled },
    ).forEach { (tc, condition) ->
      val originalNumber = tc.initial
      val convertedNumber = tc.expected
      val name =
        "floating number $originalNumber ${originalNumber.type()}" +
          "converted to $convertedNumber ${convertedNumber.type()}"
      test(name).config(enabledOrReasonIf = condition) {
        wrapAsElement(originalNumber).shouldBeInstanceOf<PrimitiveElement> {
          it.doubleOrNull.shouldNotBeNull()
            .shouldBe(convertedNumber)
          it.longOrNull.shouldBeNull()
        }
      }
    }

    test("other number implementations are not allowed")
      .config(
        enabledOrReasonIf = {
          when (platform) {
            Platform.JS -> Enabled.disabled("you cannot create a class that is a Number on JS")
            else -> Enabled.enabled
          }
        },
      ) {
        shouldThrow<IllegalStateException> {
          wrapAsElement(MyNumber())
        }.message.shouldStartWith("unsupported number type:")
      }

    test("byte array can be wrapped as an array element") {
      wrapAsElement(
        byteArrayOf(42),
        WrappingConfiguration.create {
          byteArrayAsBase64String = false
        },
      ).shouldBeInstanceOf<ArrayElement> {
        it.size shouldBe 1
        it.single().shouldBeInstanceOf<PrimitiveElement>()
      }
    }
  }
}

private class MyNumber : Number() {
  override fun toByte(): Byte = TODO("Not yet implemented")

  override fun toDouble(): Double = TODO("Not yet implemented")

  override fun toFloat(): Float = TODO("Not yet implemented")

  override fun toInt(): Int = TODO("Not yet implemented")

  override fun toLong(): Long = TODO("Not yet implemented")

  override fun toShort(): Short = TODO("Not yet implemented")
}