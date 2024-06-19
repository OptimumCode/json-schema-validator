package io.github.optimumcode.json.schema

import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.core.spec.style.FunSpec
import kotlinx.serialization.ExperimentalSerializationApi
import java.net.URL

@OptIn(ExperimentalSerializationApi::class)
@Suppress("unused")
class JsonSchemaStreamTest : FunSpec() {
  init {
    test("definition is loaded from input stream") {
      shouldNotThrowAny {
        URL("https://json-schema.org/draft-07/schema#").openStream().use { input ->
          JsonSchema.fromStream(input)
        }
      }
    }
  }
}