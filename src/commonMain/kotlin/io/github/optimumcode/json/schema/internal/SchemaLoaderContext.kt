package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri

internal interface SchemaLoaderContext {
  val baseId: Uri

  fun ref(refId: String): RefId
}