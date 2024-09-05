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
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull
import kotlin.jvm.JvmInline

internal interface JsonWrapper {
  fun unwrap(): JsonElement
}

@JvmInline
internal value class JsonObjectWrapper(
  private val obj: JsonObject,
) : ObjectElement, JsonWrapper {
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

  override fun unwrap(): JsonElement = obj

  override fun toString(): String = obj.toString()
}

@JvmInline
internal value class JsonArrayWrapper(
  private val array: JsonArray,
) : ArrayElement, JsonWrapper {
  override fun iterator(): Iterator<AbstractElement> = array.asSequence().map { it.wrap() }.iterator()

  override fun get(index: Int): AbstractElement = array[index].wrap()

  override val size: Int
    get() = array.size

  override fun toString(): String = array.toString()

  override fun unwrap(): JsonElement = array
}

@JvmInline
internal value class JsonPrimitiveWrapper(
  private val primitive: JsonPrimitive,
) : PrimitiveElement, JsonWrapper {
  override val isNull: Boolean
    get() = primitive is JsonNull
  override val isString: Boolean
    get() = primitive.isString
  override val longOrNull: Long?
    get() = primitive.longOrNull
  override val doubleOrNull: Double?
    get() = primitive.doubleOrNull
  override val isBoolean: Boolean
    get() = primitive.run { !isString && booleanOrNull != null }
  override val isNumber: Boolean
    get() =
      primitive.run {
        !isString && (longOrNull ?: doubleOrNull) != null
      }
  override val content: String
    get() = primitive.content

  override fun toString(): String = primitive.toString()

  override fun unwrap(): JsonElement = primitive
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
) : PrimitiveElement, JsonWrapper {
  override val isNull: Boolean
    get() = false
  override val isString: Boolean
    get() = true
  override val longOrNull: Long?
    get() = value.toLongOrNull()
  override val doubleOrNull: Double?
    get() = value.toDoubleOrNull()
  override val isBoolean: Boolean
    get() = false
  override val isNumber: Boolean
    get() = false
  override val content: String
    get() = value

  override fun toString(): String = value

  override fun unwrap(): JsonElement = JsonPrimitive(value)
}