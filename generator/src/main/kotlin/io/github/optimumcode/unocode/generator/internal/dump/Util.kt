package io.github.optimumcode.unocode.generator.internal.dump

import io.github.optimumcode.unocode.generator.internal.model.Range

internal fun parseCodepointsPart(codepoints: String): Range {
  val rangeParts = codepoints.trim().split("..", limit = 2)
  @Suppress("detekt:MagicNumber")
  return when (rangeParts.size) {
    1 -> Range(rangeParts[0].toInt(16))
    2 -> Range(rangeParts[0].toInt(16), rangeParts[1].toInt(16))
    else -> error("invalid code points part '$rangeParts'")
  }
}