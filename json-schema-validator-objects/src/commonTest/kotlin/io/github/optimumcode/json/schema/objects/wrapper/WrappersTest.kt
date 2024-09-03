package io.github.optimumcode.json.schema.objects.wrapper

import io.github.optimumcode.json.schema.model.ArrayElement
import io.github.optimumcode.json.schema.model.ObjectElement
import io.github.optimumcode.json.schema.model.PrimitiveElement
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
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
        else -> toString()
      }

    fun Any?.type(): String = this?.let { "(${it::class.simpleName}) " } ?: ""

    mapOf(
      emptyMap<String, Any>() to ObjectElement::class,
      listOf<Any>() to ArrayElement::class,
      emptyArray<Any>() to ArrayElement::class,
      "test" to PrimitiveElement::class,
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
      wrapAsElement(null).shouldBeInstanceOf<PrimitiveElement> {
        assertSoftly {
          it.isString.shouldBeFalse()
          it.isNumber.shouldBeFalse()
          it.isBoolean.shouldBeFalse()
          it.isNull.shouldBeTrue()
          it.content shouldBe "null"
          it.longOrNull.shouldBeNull()
          it.doubleOrNull.shouldBeNull()
        }
      }
    }

    test("primitive wrapper for boolean") {
      wrapAsElement(true).shouldBeInstanceOf<PrimitiveElement> {
        assertSoftly {
          it.isString.shouldBeFalse()
          it.isNumber.shouldBeFalse()
          it.isBoolean.shouldBeTrue()
          it.isNull.shouldBeFalse()
          it.content shouldBe "true"
          it.longOrNull.shouldBeNull()
          it.doubleOrNull.shouldBeNull()
        }
      }
    }

    test("primitive wrapper for number") {
      wrapAsElement(42).shouldBeInstanceOf<PrimitiveElement> {
        assertSoftly {
          it.isString.shouldBeFalse()
          it.isNumber.shouldBeTrue()
          it.isBoolean.shouldBeFalse()
          it.isNull.shouldBeFalse()
          it.content shouldBe "42"
          it.longOrNull shouldBe 42L
          it.doubleOrNull.shouldBeNull()
        }
      }
    }

    test("primitive wrapper for string") {
      wrapAsElement("42").shouldBeInstanceOf<PrimitiveElement> {
        assertSoftly {
          it.isString.shouldBeTrue()
          it.isNumber.shouldBeFalse()
          it.isBoolean.shouldBeFalse()
          it.isNull.shouldBeFalse()
          it.content shouldBe "42"
          it.longOrNull.shouldBeNull()
          it.doubleOrNull.shouldBeNull()
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
            wrappingConfiguration(
              allowSets = true,
            ),
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

    mapOf(
      42.2f to 42.2,
      42.5f to 42.5,
      42.5 to 42.5,
    ).forEach { (originalNumber, convertedNumber) ->
      val name =
        "floating number $originalNumber ${originalNumber.type()}" +
          "converted to $convertedNumber ${convertedNumber.type()}"
      test(name) {
        wrapAsElement(originalNumber).shouldBeInstanceOf<PrimitiveElement> {
          it.doubleOrNull.shouldNotBeNull()
            .shouldBe(convertedNumber)
          it.longOrNull.shouldBeNull()
        }
      }
    }

    test("other number implementations are not allowed") {
      shouldThrow<IllegalStateException> {
        wrapAsElement(
          object : Number() {
            override fun toByte(): Byte = TODO("Not yet implemented")

            override fun toDouble(): Double = TODO("Not yet implemented")

            override fun toFloat(): Float = TODO("Not yet implemented")

            override fun toInt(): Int = TODO("Not yet implemented")

            override fun toLong(): Long = TODO("Not yet implemented")

            override fun toShort(): Short = TODO("Not yet implemented")
          },
        )
      }.message.shouldStartWith("unsupported number type:")
    }
  }
}