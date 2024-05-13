package io.github.optimumcode.json.schema.base

import io.github.optimumcode.json.schema.JsonSchema
import io.kotest.assertions.asClue
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactlyInAnyOrder
import io.kotest.matchers.nulls.shouldNotBeNull
import io.kotest.matchers.string.shouldStartWith

class JsonSchemaCircledReferencesTest : FunSpec() {
  init {

    fun String.shouldHaveExactReferences(vararg references: String) {
      this shouldStartWith "circled references: "
      this.removePrefix("circled references: ")
        .split(',')
        .flatMap { listOf(it.substringBefore(" and ").trim(), it.substringAfter(" and ").trim()) }
        .shouldContainExactlyInAnyOrder(*references)
    }

    listOf(
      "oneOf",
      "allOf",
      "anyOf",
    ).forEach {
      test("reports circled references $it") {
        shouldThrow<IllegalArgumentException> {
          JsonSchema.fromDefinition(
            """
            {
              "${KEY}schema": "http://json-schema.org/draft-07/schema#",
              "definitions": {
                "alice": {
                  "$it": [
                    { "${KEY}ref": "#/definitions/bob" }
                  ]
                },
                "bob": {
                  "$it": [
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
        }.message.shouldNotBeNull().shouldHaveExactReferences(
          "/definitions/alice/$it/0 ref to /definitions/bob",
          "/definitions/bob/$it/0 ref to /definitions/alice",
        )
      }
    }

    test("reports if properties is not the applicator") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "definitions": {
              "alice": {
                "allOf": [
                  { "${KEY}ref": "#/definitions/properties" }
                ]
              },
              "properties": {
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
                "${KEY}ref": "#/definitions/properties"
              }
            }
          }
          """.trimIndent(),
        )
      }.message.shouldNotBeNull().shouldHaveExactReferences(
        "/definitions/alice/allOf/0 ref to /definitions/properties",
        "/definitions/properties/allOf/0 ref to /definitions/alice",
      )
    }

    test("does not report circled references if definitions have similar names") {
      shouldNotThrowAny {
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "http://json-schema.org/draft-07/schema#",
            "definitions": {
              "nonNegativeInteger": {
                  "type": "integer",
                  "minimum": 0
              },
              "nonNegativeIntegerDefault0": {
                  "allOf": [
                      { "${KEY}ref": "#/definitions/nonNegativeInteger" },
                      { "default": 0 }
                  ]
              }
            }
          }
          """.trimIndent(),
        )
      }
    }

    test("does not report circled references if one is defined inside properties applicator") {
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
            "properties": {
              "test": {
                "allOf": [
                  { "${KEY}ref": "#/definitions/alice" }
                ]
              }
            }
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
      """.trimIndent().asClue {
        shouldNotThrowAny {
          JsonSchema.fromDefinition(it)
        }
      }

      """
      {
        "${KEY}schema": "http://json-schema.org/draft-07/schema#",
        "definitions": {
          "alice": {
            "properties": {
              "test": {
                "allOf": [
                  { "${KEY}ref": "#/definitions/alice" }
                ]
              }
            }
          },
          "bob": {
            "allOf": [
              { "${KEY}ref": "#/definitions/bob" }
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
      """.trimIndent().asClue {
        shouldNotThrowAny {
          JsonSchema.fromDefinition(it)
        }
      }
    }

    test("does not report circled references if property match allOf") {
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
            "properties": {
              "allOf": { "${KEY}ref": "#/definitions/alice" }
            }
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
      """.trimIndent().asClue {
        shouldNotThrowAny {
          JsonSchema.fromDefinition(it)
        }
      }
    }
  }
}