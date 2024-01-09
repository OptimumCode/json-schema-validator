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
  private val fullPath: String,
  private val pathOffset: Int,
  internal val next: JsonPointer? = null,
) {
  /**
   * Creates a new [JsonPointer] that points to an [index] in the array.
   *
   * Example:
   * ```kotlin
   * val pointer = JsonPointer("/test").atIndex(0) // "/test/0"
   * ```
   */
  public fun atIndex(index: Int): JsonPointer =
    JsonPointer(
      buildString {
        val pointer = this@JsonPointer.toString()
        append(pointer)
        append(SEPARATOR)
        append(index)
      },
    )

  /**
   * Creates a new [JsonPointer] that points to a [property] passed as a parameter.
   *
   * Example:
   * ```kotlin
   * val pointer = JsonPointer.ROOT.atProperty("prop1").atProperty("prop2")  // "/prop1/prop2"
   * ```
   */
  public fun atProperty(property: String): JsonPointer =
    JsonPointer(
      buildString {
        val pointer = this@JsonPointer.toString()
        append(pointer)
        append(SEPARATOR)
        for (ch in property) {
          when (ch) {
            QUOTATION -> append(QUOTATION).append(QUOTATION_ESCAPE)
            SEPARATOR -> append(QUOTATION).append(SEPARATOR_ESCAPE)
            else -> append(ch)
          }
        }
      },
    )

  override fun toString(): String {
    return if (pathOffset <= 0) {
      fullPath
    } else {
      fullPath.substring(pathOffset)
    }
  }

  override fun equals(other: Any?): Boolean {
    if (this === other) return true
    if (other == null || this::class != other::class) return false

    other as JsonPointer

    if (fullPath != other.fullPath) return false
    return pathOffset == other.pathOffset
  }

  override fun hashCode(): Int {
    var result = fullPath.hashCode()
    result = 31 * result + pathOffset
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

    @JvmStatic
    private fun parseExpression(expr: String): JsonPointer {
      class PointerParent(
        val parent: PointerParent?,
        val startOffset: Int,
        val segment: String,
      )

      fun buildPath(
        start: Int,
        lastSegment: String,
        parent: PointerParent?,
      ): JsonPointer {
        var curr =
          SegmentPointer(
            expr,
            start,
            lastSegment,
            EmptyPointer,
          )
        var parentValue = parent
        while (parentValue != null) {
          curr =
            parentValue.run {
              SegmentPointer(
                expr,
                startOffset,
                segment,
                curr,
              )
            }
          parentValue = parentValue.parent
        }
        return curr
      }

      var parent: PointerParent? = null

      var offset = 1 // skip contextual slash
      val end = expr.length
      var start = 0
      while (offset < end) {
        val currentChar = expr[offset]
        if (currentChar == SEPARATOR) {
          parent = PointerParent(parent, start, expr.substring(start + 1, offset))
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
            return buildPath(start, segment, parent)
          }
          parent = PointerParent(parent, start, segment)
          start = offset
          offset++
          continue
        }
      }
      return buildPath(start, expr.substring(start + 1), parent)
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

internal object EmptyPointer : JsonPointer(fullPath = "", pathOffset = 0)

internal class SegmentPointer(
  fullPath: String,
  pathOffset: Int,
  segment: String,
  next: JsonPointer? = null,
) : JsonPointer(fullPath, pathOffset, next) {
  val propertyName: String = segment
  val index: Int = parseIndex(segment)

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