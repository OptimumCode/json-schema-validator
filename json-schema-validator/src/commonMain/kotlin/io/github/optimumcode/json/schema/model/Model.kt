package io.github.optimumcode.json.schema.model

public sealed interface AbstractElement {
  override fun toString(): String
}

public interface PrimitiveElement : AbstractElement {
  public val isNull: Boolean
  public val isString: Boolean
  public val number: Number?
  public val isBoolean: Boolean
  public val isNumber: Boolean
  public val double: Double
  public val content: String
}

internal val PrimitiveElement.contentOrNull: String?
  get() = if (isNull) null else content

public interface ObjectElement : AbstractElement, Sequence<Pair<String, AbstractElement>> {
  public val keys: Set<String>

  public operator fun get(key: String): AbstractElement?

  public operator fun contains(key: String): Boolean

  public val size: Int
}

internal fun ObjectElement.isEmpty(): Boolean = size == 0

public interface ArrayElement : AbstractElement, Sequence<AbstractElement> {
  public operator fun get(index: Int): AbstractElement

  public val size: Int
  public val lastIndex: Int
    get() = size - 1
}