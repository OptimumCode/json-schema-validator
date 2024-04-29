package io.github.optimumcode.json.schema.internal.util

import de.cketti.codepoints.CodePoints

internal fun CharSequence.codePointCount(): Int {
  val endIndex = length
  var index = 0
  var count = 0
  while (index < endIndex) {
    val firstChar = this[index]
    index++
    if (firstChar.isHighSurrogate() && index < endIndex) {
      val nextChar = this[index]
      if (nextChar.isLowSurrogate()) {
        index++
      }
    }

    count++
  }

  return count
}

internal inline fun CharSequence.forEachCodePointIndexed(
  startFrom: Int = 0,
  block: (index: Int, codePoint: Int) -> Unit,
) {
  val str = this
  val endIndex = length
  var index = startFrom
  while (index < endIndex) {
    val startIndex = index
    val firstChar = str[index]
    index++
    if (firstChar.isHighSurrogate() && index < endIndex) {
      val nextChar = str[index]
      if (nextChar.isLowSurrogate()) {
        block(index, CodePoints.toCodePoint(firstChar, nextChar))
        index++
        continue
      }
    }
    block(startIndex, firstChar.code)
  }
}

internal fun CharSequence.allCodepoints(condition: (Int) -> Boolean): Boolean {
  forEachCodePointIndexed { _, codePoint ->
    if (!condition(codePoint)) {
      return false
    }
  }
  return true
}