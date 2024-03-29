package io.github.optimumcode.json.schema.base

import com.eygraber.uri.Uri
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchema
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

internal const val KEY = "\$"

@Suppress("unused")
class JsonSchemaTest : FunSpec() {
  init {
    test("loads schema object from string description") {
      shouldNotThrowAny {
        JsonSchema.fromDefinition(
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
        JsonSchema.fromDefinition("true")
      }
    }

    test("loads false schema from string description") {
      shouldNotThrowAny {
        JsonSchema.fromDefinition("false")
      }
    }

    test("loads schema with definitions") {
      shouldNotThrowAny {
        JsonSchema.fromDefinition(
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
        JsonSchema.fromDefinition(
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
        JsonSchema.fromDefinition(
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
      }.message shouldBe "cannot resolve references: {\"#/definitions/positiveIntege\": [\"/properties/size\"]}"
    }

    listOf(
      "document root" to
        listOf(
          "http://example.com/root.json",
          "http://example.com/root.json#",
        ),
      "definition A" to
        listOf(
          "http://example.com/root.json#foo",
          "http://example.com/root.json#/definitions/A",
        ),
      "definition B" to
        listOf(
          "http://example.com/other.json",
          "http://example.com/other.json#",
          "http://example.com/root.json#/definitions/B",
        ),
      "definition X" to
        listOf(
          "http://example.com/other.json#bar",
          "http://example.com/other.json#/definitions/X",
          "http://example.com/root.json#/definitions/B/definitions/X",
        ),
      "definition Y" to
        listOf(
          "http://example.com/t/inner.json",
          "http://example.com/t/inner.json#",
          "http://example.com/other.json#/definitions/Y",
          "http://example.com/root.json#/definitions/B/definitions/Y",
        ),
      "definition C" to
        listOf(
          "urn:uuid:ee564b8a-7a87-4125-8c96-e9f123d6766f",
          "urn:uuid:ee564b8a-7a87-4125-8c96-e9f123d6766f#",
          "http://example.com/root.json#/definitions/C",
        ),
    ).forEach { (refDestination, possibleRefs) ->
      possibleRefs.asSequence()
        .flatMapIndexed { index, ref ->
          val uri = Uri.parse(ref)
          val caseNumber = index + 1
          if (uri.schemeSpecificPart == "//example.com/root.json" && uri.fragment != null) {
            sequenceOf("$caseNumber" to ref, "$caseNumber.1" to "#${uri.fragment}")
          } else {
            sequenceOf("$caseNumber" to ref)
          }
        }.forEach { (caseNumber, ref) ->
          test("$refDestination can be accessed ($caseNumber)") {
            withClue(ref) {
              shouldNotThrowAny {
                JsonSchema.fromDefinition(
                  """
                  {
                    "${KEY}id": "http://example.com/root.json",
                    "definitions": {
                      "A": { "${KEY}id": "#foo" },
                      "B": {
                        "${KEY}id": "other.json",
                        "definitions": {
                          "X": { "${KEY}id": "#bar" },
                          "Y": { "${KEY}id": "t/inner.json" }
                        }
                      },
                      "C": {
                        "${KEY}id": "urn:uuid:ee564b8a-7a87-4125-8c96-e9f123d6766f"
                      }
                    },
                    "properties": {
                      "test": { "${KEY}ref": "$ref" } 
                    }
                  }
                  """.trimIndent(),
                )
              }
            }
          }
        }
    }

    listOf(
      "http://json-schema.org/draft-07/schema#",
      "http://json-schema.org/draft-07/schema",
      "https://json-schema.org/draft-07/schema#",
      "https://json-schema.org/draft-07/schema",
    ).forEach {
      test("loads schema with supported '$it' \$schema property") {
        shouldNotThrowAny {
          JsonSchema.fromDefinition(
            """
            {
              "${KEY}schema": "$it",
              "type": "string"
            }
            """.trimIndent(),
          )
        }
      }
    }

    listOf(
      "https://json-schema.org/draft/2021-12/schema",
      "http://json-schema.org/draft-07/schema/",
    ).forEach {
      test("reports unsupported '$it' \$schema property") {
        shouldThrow<IllegalArgumentException> {
          JsonSchema.fromDefinition(
            """
            {
              "${KEY}schema": "$it",
              "type": "string"
            }
            """.trimIndent(),
          )
        }.message shouldBe "unsupported schema type $it"
      }
    }

    test("\$dynamicRef is resolved every time") {
      val schema =
        JsonSchema.fromDefinition(
          """
          {
            "${KEY}schema": "https://json-schema.org/draft/2020-12/schema",
            "${KEY}id": "https://test.json-schema.org/dynamic-ref-with-multiple-paths/main",
            "if": {
                "properties": {
                    "kindOfList": { "const": "numbers" }
                },
                "required": ["kindOfList"]
            },
            "then": { "${KEY}ref": "numberList" },
            "else": { "${KEY}ref": "stringList" },
          
            "${KEY}defs": {
                "genericList": {
                    "${KEY}id": "genericList",
                    "properties": {
                        "list": {
                            "items": { "${KEY}dynamicRef": "#itemType" }
                        }
                    },
                    "${KEY}defs": {
                        "defaultItemType": {
                            "${KEY}comment": "Only needed to satisfy bookending requirement",
                            "${KEY}dynamicAnchor": "itemType"
                        }
                    }
                },
                "numberList": {
                    "${KEY}id": "numberList",
                    "${KEY}defs": {
                        "itemType": {
                            "${KEY}dynamicAnchor": "itemType",
                            "type": "number"
                        }
                    },
                    "${KEY}ref": "genericList"
                },
                "stringList": {
                    "${KEY}id": "stringList",
                    "${KEY}defs": {
                        "itemType": {
                            "${KEY}dynamicAnchor": "itemType",
                            "type": "string"
                        }
                    },
                    "${KEY}ref": "genericList"
                }
            }
          }
          """.trimIndent(),
        )
      val numberList =
        buildJsonObject {
          put("kindOfList", JsonPrimitive("numbers"))
          put(
            "list",
            buildJsonArray {
              add(JsonPrimitive(42))
            },
          )
        }
      val stringsList =
        buildJsonObject {
          put("kindOfList", JsonPrimitive("strings"))
          put(
            "list",
            buildJsonArray {
              add(JsonPrimitive("test"))
            },
          )
        }

      assertSoftly {
        withClue("resolves into list of numbers") {
          schema.validate(numberList, ErrorCollector.EMPTY) shouldBe true
        }
        withClue("resolves into list of strings") {
          schema.validate(stringsList, ErrorCollector.EMPTY) shouldBe true
        }
      }
    }
  }
}