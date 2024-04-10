package io.github.optimumcode.unocode.generator.internal.model

import kotlinx.serialization.Serializable

@Serializable
data class BiDirectionalClass(
  val id: String,
  val name: String,
)

@Serializable
data class UnicodeChar(
  val id: String,
  val text: String?,
)

@Serializable
data class Category(
  val id: String,
  val name: String,
)

@Serializable
class Range(val start: Int, val end: Int) {
  constructor(single: Int) : this(single, single)
}

@Serializable
class DerivedProperty(val type: String, val range: Range)