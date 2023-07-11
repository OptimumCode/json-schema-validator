package com.github.optimumcode.json.schema.base

import com.github.optimumcode.json.schema.JsonSchema
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

internal const val KEY = "\$"

@Suppress("unused")
class JsonSchemaTest : FunSpec() {
  init {
    test("loads schema object from string description") {
      shouldNotThrowAny {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "type": "string"
          }
          """.trimIndent(),
        )
      }
    }

    test("loads true schema from string description") {
      shouldNotThrowAny {
        JsonSchema.fromDescription("true")
      }
    }

    test("loads false schema from string description") {
      shouldNotThrowAny {
        JsonSchema.fromDescription("false")
      }
    }

    test("loads schema with definitions") {
      shouldNotThrowAny {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "definitions": {
              "positiveInteger": {
                "type": "integer",
                "minimum": 0
              }
            }
          }
          """.trimIndent(),
        )
      }
    }

    test("loads schema with self reference") {
      shouldNotThrowAny {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "properties": {
              "other": { "${KEY}ref": "#" }
            }
          }
          """.trimIndent(),
        )
      }
    }

    test("reports missing reference") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "definitions": {
              "positiveInteger": {
                "type": "integer",
                "minimum": 0
              }
            },
            "properties": {
              "size": {
                "${KEY}ref": "#/definitions/positiveIntege"
              }
            }
          }
          """.trimIndent(),
        )
      }.message shouldBe "cannot resolve references: {\"/definitions/positiveIntege\": [\"/properties/size\"]}"
    }

    test("reports circled references") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDescription(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "definitions": {
              "alice": {
                "allOf": [
                  { "${KEY}ref": "#/definitions/bob" }
                ]
              },
              "bob": {
                "allOf": [
                  { "${KEY}ref": "#/definitions/alice" }
                ]
              }
            },
            "properties": {
              "alice": {
                "${KEY}ref": "#/definitions/alice"
              },
              "bob": {
                "${KEY}ref": "#/definitions/bob"
              }
            }
          }
          """.trimIndent(),
        )
      }.message shouldBe "circled references: /definitions/alice/allOf/0 ref to /definitions/bob" +
        " and /definitions/bob/allOf/0 ref to /definitions/alice"
    }
  }
}