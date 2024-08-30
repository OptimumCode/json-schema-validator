package io.github.optimumcode.json.schema.internal.wrapper

import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ArrayElement
import io.github.optimumcode.json.schema.model.ObjectElement
import io.github.optimumcode.json.schema.model.PrimitiveElement
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.double
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull
import kotlin.jvm.JvmInline

@JvmInline
internal value class JsonObjectWrapper(
  private val obj: JsonObject,
) : ObjectElement {
  override val keys: Set<String>
    get() = obj.keys

  override fun get(key: String): AbstractElement? = obj[key]?.wrap()

  override fun contains(key: String): Boolean = obj.containsKey(key)

  override val size: Int
    get() = obj.size

  override fun iterator(): Iterator<Pair<String, AbstractElement>> =
    obj
      .asSequence()
      .map {
        it.key to it.value.wrap()
      }.iterator()

  override fun toString(): String = obj.toString()
}

@JvmInline
internal value class JsonArrayWrapper(
  private val array: JsonArray,
) : ArrayElement {
  override fun iterator(): Iterator<AbstractElement> = array.asSequence().map { it.wrap() }.iterator()

  override fun get(index: Int): AbstractElement = array[index].wrap()

  override val size: Int
    get() = array.size

  override fun toString(): String = array.toString()
}

@JvmInline
internal value class JsonPrimitiveWrapper(
  private val primitive: JsonPrimitive,
) : PrimitiveElement {
  override val isNull: Boolean
    get() = primitive is JsonNull
  override val isString: Boolean
    get() = primitive.isString
  override val longOrNull: Long?
    get() = primitive.longOrNull
  override val doubleOrNull: Double?
    get() = primitive.doubleOrNull
  override val booleanOrNull: Boolean?
    get() = primitive.booleanOrNull
  override val double: Double
    get() = primitive.double
  override val content: String
    get() = primitive.content

  override fun toString(): String = primitive.toString()
}

internal fun JsonElement.wrap(): AbstractElement =
  when (this) {
    is JsonObject -> JsonObjectWrapper(this)
    is JsonArray -> JsonArrayWrapper(this)
    is JsonPrimitive -> JsonPrimitiveWrapper(this)
  }

@JvmInline
internal value class StringWrapper(
  private val value: String,
) : PrimitiveElement {
  override val isNull: Boolean
    get() = false
  override val isString: Boolean
    get() = true
  override val longOrNull: Long?
    get() = value.toLongOrNull()
  override val doubleOrNull: Double?
    get() = value.toDoubleOrNull()
  override val booleanOrNull: Boolean?
    get() = value.toBooleanStrictOrNull()
  override val double: Double
    get() = value.toDouble()
  override val content: String
    get() = value

  override fun toString(): String = value
}