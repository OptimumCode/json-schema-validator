package smirnov.oleg.json.schema

import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.core.spec.style.FunSpec

internal const val KEY = "\$"

@Suppress("unused")
class JsonSchemaTest : FunSpec() {
  init {
    test("loads schema from string description") {
      shouldNotThrowAny {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": "string"
          }
          """.trimIndent()
        )
      }
    }
  }
}