package io.github.optimumcode.json.schema

import com.eygraber.uri.Uri
import io.github.optimumcode.json.schema.internal.SchemaLoaderConfig
import io.github.optimumcode.json.schema.internal.config.Draft201909SchemaLoaderConfig
import io.github.optimumcode.json.schema.internal.config.Draft202012SchemaLoaderConfig
import io.github.optimumcode.json.schema.internal.config.Draft6SchemaLoaderConfig
import io.github.optimumcode.json.schema.internal.config.Draft7SchemaLoaderConfig
import kotlin.jvm.JvmStatic

public enum class SchemaType(
  internal val schemaId: Uri,
  internal val config: SchemaLoaderConfig,
) {
  DRAFT_6(Uri.parse("http://json-schema.org/draft-06/schema"), Draft6SchemaLoaderConfig),
  DRAFT_7(Uri.parse("http://json-schema.org/draft-07/schema"), Draft7SchemaLoaderConfig),
  DRAFT_2019_09(Uri.parse("https://json-schema.org/draft/2019-09/schema"), Draft201909SchemaLoaderConfig),
  DRAFT_2020_12(Uri.parse("https://json-schema.org/draft/2020-12/schema"), Draft202012SchemaLoaderConfig),
  ;

  public companion object {
    @JvmStatic
    public fun find(schemaId: String): SchemaType? {
      val uri = Uri.parse(schemaId)
      return findSchemaType(uri)
    }
  }
}

private const val HTTP_SCHEMA: String = "http"
private const val HTTPS_SCHEMA: String = "https"

internal fun findSchemaType(uri: Uri): SchemaType? {
  if (uri.scheme.let { it != HTTP_SCHEMA && it != HTTPS_SCHEMA }) {
    // the schema in URI is unknown
    // so, it definitely is not a supported schema ID
    return null
  }
  return SchemaType.entries.find {
    it.schemaId.run {
      host == uri.host &&
        port == uri.port &&
        path == uri.path &&
        fragment == uri.fragment?.takeUnless(String::isEmpty)
    }
  }
}