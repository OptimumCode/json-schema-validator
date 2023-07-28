package io.github.optimumcode.json.schema.internal.factories.string.util

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