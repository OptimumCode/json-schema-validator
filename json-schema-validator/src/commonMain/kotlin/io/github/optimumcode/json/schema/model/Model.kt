package io.github.optimumcode.json.schema.model

import io.github.optimumcode.json.schema.ExperimentalApi

/**
 * [AbstractElement] represents one of 3 elements that can be consumed and validated:
 * * [ObjectElement] - corresponds to a JSON/YAML object or [Map]
 * * [ArrayElement] - corresponds to a collection of [AbstractElement]s
 * * [PrimitiveElement] - corresponds to a scalar value (string, number, boolean)
 */
@ExperimentalApi
public sealed interface AbstractElement {
  /**
   * Implement [toString] method to provide a useful view that can be used in error message
   */
  override fun toString(): String
}

@ExperimentalApi
public interface PrimitiveElement : AbstractElement {
  /**
   * Returns `true` if the element is `null`.
   * Otherwise, returns `false`
   */
  public val isNull: Boolean

  /**
   * Returns `true` if the element can be interpreted as string.
   * Otherwise, returns `false`
   */
  public val isString: Boolean

  /**
   * Returns `true` if the element can be interpreted as a boolean.
   * Otherwise, returns `false`
   */
  public val isBoolean: Boolean

  /**
   * Returns `true` if the element can be interpreted as a number.
   * Otherwise, returns `false`
   */
  public val isNumber: Boolean

  /**
   * Tries to parse the element as a [Number].
   * Must return either [Long] or [Double].
   * If the element cannot be interpreted as a number, returns `null`.
   */
  public val number: Number?

  /**
   * Returns the content of the element as plain string
   */
  public val content: String
}

internal val PrimitiveElement.contentOrNull: String?
  get() = if (isNull) null else content

@ExperimentalApi
public interface ObjectElement : AbstractElement, Sequence<Pair<String, AbstractElement>> {
  /**
   * Returns the set of keys defined in the [ObjectElement]
   */
  public val keys: Set<String>

  /**
   * Returns an [AbstractElement] associated with the [key].
   * If the [key] does not exist returns `null`
   */
  public operator fun get(key: String): AbstractElement?

  /**
   * Returns `true` if the [key] exists in the [ObjectElement].
   * Otherwise, returns `false`
   */
  public operator fun contains(key: String): Boolean

  /**
   * Returns number of keys in the [ObjectElement]
   */
  public val size: Int
}

internal fun ObjectElement.isEmpty(): Boolean = size == 0

@ExperimentalApi
public interface ArrayElement : AbstractElement, Sequence<AbstractElement> {
  /**
   * Returns the [AbstractElement] associated with the [index].
   */
  public operator fun get(index: Int): AbstractElement

  /**
   * Returns the number of [AbstractElement]s in the collection
   */
  public val size: Int
}

internal val ArrayElement.lastIndex: Int
  get() = size - 1