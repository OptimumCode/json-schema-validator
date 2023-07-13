package io.github.optimumcode.json.schema.internal

import kotlin.jvm.JvmInline

@JvmInline
internal value class RefId(private val id: String) {
  val fragment: String
    get() = id.substringAfter(ROOT_REFERENCE)
}