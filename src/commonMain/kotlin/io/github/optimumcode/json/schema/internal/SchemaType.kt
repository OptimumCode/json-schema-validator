package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import io.github.optimumcode.json.schema.internal.config.Draft7SchemaLoaderConfig
import kotlin.jvm.JvmStatic

internal enum class SchemaType(
  private val schemaId: Uri,
  val config: SchemaLoaderConfig,
) {
  DRAFT_7(Uri.parse("http://json-schema.org/draft-07/schema"), Draft7SchemaLoaderConfig),
  ;

  companion object {
    private const val HTTP_SCHEMA: String = "http"
    private const val HTTPS_SCHEMA: String = "https"

    @JvmStatic
    fun find(schemaId: String): SchemaType? {
      val uri = Uri.parse(schemaId)
      if (uri.scheme.let { it != HTTP_SCHEMA && it != HTTPS_SCHEMA }) {
        // the schema in URI is unknown
        // so, it definitely is not a supported schema ID
        return null
      }
      return values().find {
        it.schemaId.run {
          host == uri.host &&
            port == uri.port &&
            path == uri.path &&
            fragment == uri.fragment?.takeUnless(String::isEmpty)
        }
      }
    }
  }
}