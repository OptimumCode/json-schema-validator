package io.github.optimumcode.json.schema.model

public sealed interface AbstractElement {
  override fun toString(): String
}

public interface PrimitiveElement : AbstractElement {
  public val isNull: Boolean
  public val isString: Boolean
  public val contentOrNull: String?
  public val longOrNull: Long?
  public val doubleOrNull: Double?
  public val booleanOrNull: Boolean?
  public val double: Double
  public val content: String
}

public interface ObjectElement : AbstractElement, Sequence<Pair<String, AbstractElement>> {
  public val keys: Set<String>

  public operator fun get(key: String): AbstractElement?

  public operator fun contains(key: String): Boolean

  public val size: Int

  public fun isEmpty(): Boolean = size == 0
}

public interface ArrayElement : AbstractElement, Sequence<AbstractElement> {
  public operator fun get(index: Int): AbstractElement

  public val size: Int
  public val lastIndex: Int
    get() = size - 1
}