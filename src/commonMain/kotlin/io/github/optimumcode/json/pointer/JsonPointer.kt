package io.github.optimumcode.json.pointer

import kotlin.jvm.JvmField
import kotlin.jvm.JvmStatic

/**
 * Function to create [JsonPointer].
 * It is a more convenient way to create a JSON pointer rather than using [JsonPointer.compile] function
 */
public fun JsonPointer(path: String): JsonPointer = JsonPointer.compile(path)

/**
 * Implementation of a JSON pointer described in the specification
 * [RFC6901](https://datatracker.ietf.org/doc/html/rfc6901).
 */
public sealed class JsonPointer(
  internal open val next: JsonPointer? = null,
) {
  private var asString: String? = null
  private var hash: Int = 0

  /**
   * Creates a new [JsonPointer] that points to an [index] in the array.
   *
   * Example:
   * ```kotlin
   * val pointer = JsonPointer("/test").atIndex(0) // "/test/0"
   * ```
   */
  public fun atIndex(index: Int): JsonPointer {
    require(index >= 0) { "negative index: $index" }
    return atProperty(index.toString())
  }

  /**
   * Creates a new [JsonPointer] that points to a [property] passed as a parameter.
   *
   * Example:
   * ```kotlin
   * val pointer = JsonPointer.ROOT.atProperty("prop1").atProperty("prop2")  // "/prop1/prop2"
   * ```
   */
  public fun atProperty(property: String): JsonPointer = insertLast(SegmentPointer(property))

  override fun toString(): String {
    val str = asString
    if (str != null) {
      return str
    }
    if (this !is SegmentPointer) {
      return ""
    }
    return buildString {
      var node: JsonPointer = this@JsonPointer
      while (node is SegmentPointer) {
        append(SEPARATOR)
        append(escapeJsonPointer(node.propertyName))
        node = node.next
      }
    }.also {
      asString = it
    }
  }

  internal fun insertLast(last: SegmentPointer): JsonPointer {
    if (this !is SegmentPointer) {
      return last
    }
    return insertLastDeepCopy(this, last)
  }

  // there might be an issue with stack in case this function is called deep on the stack
  private fun insertLastDeepCopy(
    pointer: SegmentPointer,
    last: SegmentPointer,
  ): JsonPointer =
    with(pointer) {
      if (next is SegmentPointer) {
        SegmentPointer(
          propertyName = propertyName,
          index = index,
          next = insertLastDeepCopy(next, last),
        )
      } else {
        SegmentPointer(
          propertyName = propertyName,
          index = index,
          next = last,
        )
      }
    }

  private fun escapeJsonPointer(propertyName: String): String {
    if (propertyName.contains(SEPARATOR) || propertyName.contains(QUOTATION)) {
      return buildString(capacity = propertyName.length + 1) {
        for (ch in propertyName) {
          when (ch) {
            SEPARATOR -> append(QUOTATION).append(SEPARATOR_ESCAPE)
            QUOTATION -> append(QUOTATION).append(QUOTATION_ESCAPE)
            else -> append(ch)
          }
        }
      }
    }
    return propertyName
  }

  override fun equals(other: Any?): Boolean {
    if (this === other) return true
    if (other == null || this::class != other::class) return false

    other as JsonPointer

    var node = this
    var otherNode = other
    while (node is SegmentPointer && otherNode is SegmentPointer) {
      if (node.propertyName != otherNode.propertyName) {
        return false
      }
      node = node.next
      otherNode = otherNode.next
    }
    return node is EmptyPointer && otherNode is EmptyPointer
  }

  override fun hashCode(): Int {
    if (hash != 0) {
      return hash
    }
    var result = 31
    var node = this
    while (node is SegmentPointer) {
      result = 31 * result + node.propertyName.hashCode()
      node = node.next
    }
    if (result == 0) {
      // just in case if for some reason the resulting has is zero
      // this way we won't recalculate it again
      result = 31
    }
    hash = result
    return result
  }

  public companion object {
    internal const val SEPARATOR: Char = '/'
    internal const val QUOTATION: Char = '~'
    internal const val QUOTATION_ESCAPE: Char = '0'
    internal const val SEPARATOR_ESCAPE: Char = '1'

    /**
     * An empty [JsonPointer]. The empty JSON pointer corresponds to the current JSON element.s
     */
    @JvmField
    public val ROOT: JsonPointer = EmptyPointer

    private const val DEFAULT_BUFFER_CAPACITY = 32

    /**
     * Returns instance of the [JsonPointer] class.
     * If the [expr] is an empty string the [JsonPointer.ROOT] will be returned.
     *
     * If the [expr] is not an empty string it must start from the `/` character.
     *
     * @throws IllegalArgumentException the [expr] does not start from `/`
     */
    @JvmStatic
    public fun compile(expr: String): JsonPointer {
      return if (expr.isEmpty()) {
        EmptyPointer
      } else {
        require(expr.startsWith(SEPARATOR)) {
          "JSON pointer must start from $SEPARATOR: '$expr'"
        }
        parseExpression(expr)
      }
    }

    private class PointerParent(
      val parent: PointerParent?,
      val segment: String,
      val index: Int? = null,
    )

    private fun buildPath(
      lastSegment: SegmentPointer,
      parent: PointerParent?,
    ): JsonPointer {
      var curr = lastSegment
      var parentValue = parent
      while (parentValue != null) {
        curr =
          parentValue.run {
            if (index == null) {
              SegmentPointer(
                segment,
                curr,
              )
            } else {
              SegmentPointer(
                segment,
                curr,
                index,
              )
            }
          }
        parentValue = parentValue.parent
      }
      return curr
    }

    @JvmStatic
    private fun parseExpression(expr: String): JsonPointer {
      var parent: PointerParent? = null

      var offset = 1 // skip contextual slash
      val end = expr.length
      var start = 0
      while (offset < end) {
        val currentChar = expr[offset]
        if (currentChar == SEPARATOR) {
          parent = PointerParent(parent, expr.substring(start + 1, offset))
          start = offset
          offset++
          continue
        }
        offset++
        if (currentChar == QUOTATION && offset < end) {
          val builder = StringBuilder(DEFAULT_BUFFER_CAPACITY)
          offset = builder.appendEscapedSegment(expr, start + 1, offset)
          val segment = builder.toString()
          if (offset < 0) {
            return buildPath(SegmentPointer(segment), parent)
          }
          parent = PointerParent(parent, segment)
          start = offset
          offset++
          continue
        }
      }
      return buildPath(SegmentPointer(expr.substring(start + 1)), parent)
    }
  }
}

private fun StringBuilder.appendEscapedSegment(
  expr: String,
  start: Int,
  offset: Int,
): Int {
  var pos: Int = offset
  val end = expr.length
  val needCopy = pos - 1 - start > 0
  if (needCopy) {
    append(expr, start, pos - 1)
  }
  appendEscaped(expr[pos])
  pos++
  while (pos < end) {
    val currentChar = expr[pos]
    if (currentChar == JsonPointer.SEPARATOR) {
      return pos
    }
    pos++
    if (currentChar == '~' && pos < end) {
      appendEscaped(expr[pos])
      pos++
      continue
    }
    append(currentChar)
  }
  return -1
}

private fun StringBuilder.appendEscaped(ch: Char) {
  val result =
    when (ch) {
      JsonPointer.QUOTATION_ESCAPE -> JsonPointer.QUOTATION
      JsonPointer.SEPARATOR_ESCAPE -> JsonPointer.SEPARATOR
      else -> {
        append(JsonPointer.QUOTATION)
        ch
      }
    }

  append(result)
}

internal object EmptyPointer : JsonPointer()

internal class SegmentPointer(
  val propertyName: String,
  override val next: JsonPointer = EmptyPointer,
  val index: Int = parseIndex(propertyName),
) : JsonPointer(next) {
  companion object {
    private const val NO_INDEX: Int = -1
    private const val LONG_LENGTH_THRESHOLD = 10

    @JvmStatic
    private fun parseIndex(segment: String): Int {
      if (segment.isEmpty()) {
        return NO_INDEX
      }
      val len = segment.length
      // super long indexes are no good
      // let's assume we don't have any array over 2 billion entries
      if (len > LONG_LENGTH_THRESHOLD) {
        return NO_INDEX
      }
      return parseIndexValue(segment)
    }

    private fun parseIndexValue(segment: String): Int {
      val len = segment.length
      val ch = segment[0]
      if (ch <= '0') {
        return if (len == 1 && ch == '0') {
          0
        } else {
          NO_INDEX
        }
      }
      // not a number
      if (ch > '9') {
        return NO_INDEX
      }

      for (char in segment) {
        if (char !in '0'..'9') {
          return NO_INDEX
        }
      }

      return if (len == LONG_LENGTH_THRESHOLD) {
        // check the index fits integer
        val index = segment.toLong()
        if (index > Int.MAX_VALUE) {
          NO_INDEX
        } else {
          index.toInt()
        }
      } else {
        segment.toInt()
      }
    }
  }
}