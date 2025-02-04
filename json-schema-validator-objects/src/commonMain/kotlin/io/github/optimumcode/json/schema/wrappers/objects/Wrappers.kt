@file:JvmName("ObjectWrappers")
@file:Suppress("detekt:MatchingDeclarationName")

package io.github.optimumcode.json.schema.wrappers.objects

import io.github.optimumcode.json.schema.ExperimentalApi
import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ArrayElement
import io.github.optimumcode.json.schema.model.ObjectElement
import io.github.optimumcode.json.schema.model.PrimitiveElement
import kotlin.jvm.JvmInline
import kotlin.jvm.JvmName
import kotlin.jvm.JvmOverloads

@ExperimentalApi
public class WrappingConfiguration internal constructor(
  /**
   * If set to `false` an exception is thrown when wrapping a [Set].
   * If set to `true`, [Set] is wrapped the same way as [List]
   */
  public val allowSets: Boolean = false,
  /**
   * If set to `false` the [Char] is converted to [String].
   * If set to `true` the [Char] is converted to a codepoint (and then to [Long])
   */
  public val charAsCodepoint: Boolean = false,
)

@ExperimentalApi
@JvmOverloads
public fun wrappingConfiguration(
  allowSets: Boolean = false,
  charAsCodepoint: Boolean = false,
): WrappingConfiguration =
  WrappingConfiguration(
    allowSets = allowSets,
    charAsCodepoint = charAsCodepoint,
  )

/**
 * Returns an [AbstractElement] produced by converting the [obj] value.
 * The [configuration] allows conversion customization.
 *
 * # The supported types
 *
 * ## Simple values:
 * * [String]
 * * [Byte]
 * * [Short]
 * * [Int]
 * * [Long]
 * * [Float]
 * * [Double]
 * * [Boolean]
 * * [Char]
 * * `null`
 *
 * ## Structures:
 * * [Map] -> keys MUST have a [String] type, values MUST be one of the supported types
 * * [List] -> elements MUST be one of the supported types
 * * [Array] -> elements MUST be one of the supported types
 *
 * If [WrappingConfiguration.allowSets] is enabled [Set] is also converted to [ArrayElement].
 * Please be aware that in order to have consistent verification results
 * the [Set] must be one of the ORDERED types, e.g. [LinkedHashSet].
 */
@JvmOverloads
@ExperimentalApi
public fun wrapAsElement(
  obj: Any?,
  configuration: WrappingConfiguration = WrappingConfiguration(),
): AbstractElement {
  if (obj == null) {
    return NullWrapper
  }
  return when {
    obj is Map<*, *> -> checkKeysAndWrap(obj, configuration)
    obj is List<*> -> ListWrapper(obj.map { wrapAsElement(it, configuration) })
    obj is Array<*> -> ListWrapper(obj.map { wrapAsElement(it, configuration) })
    obj is Set<*> && configuration.allowSets ->
      ListWrapper(obj.map { wrapAsElement(it, configuration) })

    isPrimitive(obj) -> PrimitiveWrapper(convertToSupportedType(obj, configuration))
    else -> error("unsupported type to wrap: ${obj::class}")
  }
}

private fun isPrimitive(obj: Any): Boolean = obj is String || obj is Number || obj is Boolean || obj is Char

/**
 * Returns `true` if the [value] is an integer ([Byte], [Short], [Int], [Long]).
 * Otherwise, returns `false`.
 *
 * Required because JS platform matches all types except Long with `number` type.
 * Refer to the [KT-18177](https://youtrack.jetbrains.com/issue/KT-18177/) for additional details
 */
internal expect fun isInteger(value: Number): Boolean

private fun convertToSupportedType(
  obj: Any,
  configuration: WrappingConfiguration,
): Any =
  when {
    obj !is Number ->
      if (obj is Char) {
        if (configuration.charAsCodepoint) obj.code.toLong() else obj.toString()
      } else {
        obj
      }
    obj is Long -> obj
    isInteger(obj) -> obj.toLong()
    obj is Double -> obj
    // due to KT-18177 this won't be invoked for Float on JS platform
    obj is Float -> obj.toDoubleSafe()
    else -> error("unsupported number type: ${obj::class}")
  }

private fun Float.toDoubleSafe(): Double {
  val double = toDouble()
  // in some cases the conversion from float to double
  // can introduce a difference between numbers. (e.g. 42.2f -> 42.2)
  // In this case, the only way (at the moment) is to try parsing
  // the double from float converted to string
  val floatAsString = toString()
  if (double.toString() == floatAsString) {
    return double
  }
  return floatAsString.toDouble()
}

private fun checkKeysAndWrap(
  map: Map<*, *>,
  configuration: WrappingConfiguration,
): ObjectWrapper {
  if (map.isEmpty()) {
    return ObjectWrapper(emptyMap())
  }

  require(map.keys.all { it is String }) {
    val notStrings =
      map.keys.asSequence().filterNot { it is String }.mapTo(hashSetOf()) { key ->
        key?.let { it::class.simpleName } ?: "null"
      }.joinToString()
    "map keys must be strings, found: $notStrings"
  }

  @Suppress("UNCHECKED_CAST")
  val elementsMap =
    map.mapValues { (_, value) ->
      wrapAsElement(value, configuration)
    } as Map<String, AbstractElement>
  return ObjectWrapper(elementsMap)
}

@JvmInline
private value class ObjectWrapper(
  private val map: Map<String, AbstractElement>,
) : ObjectElement {
  override val keys: Set<String>
    get() = map.keys

  override fun get(key: String): AbstractElement? = map[key]

  override fun contains(key: String): Boolean = map.containsKey(key)

  override val size: Int
    get() = map.size

  override fun iterator(): Iterator<Pair<String, AbstractElement>> =
    map.asSequence().map { (key, value) -> key to value }.iterator()

  override fun toString(): String = map.toString()
}

@JvmInline
private value class ListWrapper(
  private val list: List<AbstractElement>,
) : ArrayElement {
  override fun iterator(): Iterator<AbstractElement> = list.iterator()

  override fun get(index: Int): AbstractElement = list[index]

  override val size: Int
    get() = list.size

  override fun toString(): String = list.toString()
}

@JvmInline
private value class PrimitiveWrapper(
  private val value: Any,
) : PrimitiveElement {
  override val isNull: Boolean
    get() = false
  override val isString: Boolean
    get() = value is String
  override val isBoolean: Boolean
    get() = value is Boolean
  override val isNumber: Boolean
    get() = value is Number
  override val longOrNull: Long?
    get() = value as? Long
  override val doubleOrNull: Double?
    get() = value as? Double
  override val content: String
    get() = value.toString()

  override fun toString(): String = value.toString()
}

private data object NullWrapper : PrimitiveElement {
  override val isNull: Boolean
    get() = true
  override val isString: Boolean
    get() = false
  override val isBoolean: Boolean
    get() = false
  override val isNumber: Boolean
    get() = false
  override val longOrNull: Long?
    get() = null
  override val doubleOrNull: Double?
    get() = null
  override val content: String
    get() = "null"

  override fun toString(): String = "null"
}