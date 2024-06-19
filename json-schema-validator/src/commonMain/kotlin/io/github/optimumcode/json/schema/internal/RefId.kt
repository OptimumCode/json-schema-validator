package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import kotlin.jvm.JvmInline

@JvmInline
internal value class RefId(val uri: Uri) {
  val fragment: String
    get() = uri.fragment ?: ""
}