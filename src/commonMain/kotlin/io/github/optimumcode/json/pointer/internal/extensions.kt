@file:Suppress("ktlint:standard:filename")

package io.github.optimumcode.json.pointer.internal

import io.github.optimumcode.json.pointer.EmptyPointer
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.SegmentPointer

internal val JsonPointer.length: Int
  get() {
    if (this is EmptyPointer) {
      return 0
    }
    var length = 0
    var segment: JsonPointer? = this
    while (segment != null) {
      if (segment is SegmentPointer) {
        length += 1
      }
      segment = segment.next
    }
    return length
  }

internal fun JsonPointer.dropLast(): JsonPointer? {
  if (this is EmptyPointer) {
    return null
  }
  val fullPath = toString()
  val lastPathPart = fullPath.lastIndexOf('/')
  if (lastPathPart == 0) {
    return EmptyPointer
  }
  return JsonPointer.compile(fullPath.substring(0, lastPathPart))
}