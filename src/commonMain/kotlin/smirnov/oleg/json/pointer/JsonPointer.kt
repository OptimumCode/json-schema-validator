package smirnov.oleg.json.pointer

import kotlin.jvm.JvmStatic

fun JsonPointer(path: String): JsonPointer = JsonPointer.compile(path)

sealed class JsonPointer(
  private val fullPath: String,
  private val pathOffset: Int,
  internal val next: JsonPointer? = null,
) {

  override fun toString(): String {
    return if (pathOffset <= 0) {
      fullPath
    } else {
      fullPath.substring(pathOffset)
    }
  }

  companion object {
    const val SEPARATOR: Char = '/'
    const val QUOTATION: Char = '~'
    val ROOT: JsonPointer = EmptyPointer

    @JvmStatic
    fun compile(expr: String): JsonPointer {
      return if (expr.isEmpty()) {
        EmptyPointer
      } else {
        require(expr.startsWith(SEPARATOR)) { "JSON pointer must start from $SEPARATOR: '$expr'" }
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

      fun buildPath(start: Int, lastSegment: String, parent: PointerParent?): JsonPointer {
        var curr = SegmentPointer(expr, start, lastSegment, EmptyPointer)
        var parentValue = parent
        while (parentValue != null) {
          curr = parentValue.run { SegmentPointer(expr, startOffset, segment, curr) }
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
          val builder = StringBuilder(32)
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

private fun StringBuilder.appendEscapedSegment(expr: String, start: Int, offset: Int): Int {
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
  val result = when (ch) {
    '0' -> JsonPointer.QUOTATION
    '1' -> JsonPointer.SEPARATOR
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

    @JvmStatic
    private fun parseIndex(segment: String): Int {
      if (segment.isEmpty()) {
        return NO_INDEX
      }
      val len = segment.length
      // super long indexes are no good
      // let's assume we don't have any array over 2 billion entries
      if (len > 10) {
        return NO_INDEX
      }
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

      return if (len == 10) {
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