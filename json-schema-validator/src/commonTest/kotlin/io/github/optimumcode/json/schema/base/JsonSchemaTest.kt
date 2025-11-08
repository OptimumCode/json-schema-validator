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
          $$"""
          {
            "$schema": "http://json-schema.org/draft-07/schema#",
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
          $$"""
          {
            "$schema": "http://json-schema.org/draft-07/schema#",
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
          $$"""
          {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "properties": {
              "other": { "$ref": "#" }
            }
          }
          """.trimIndent(),
        )
      }
    }

    test("reports missing reference") {
      shouldThrow<IllegalArgumentException> {
        JsonSchema.fromDefinition(
          $$"""
          {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "definitions": {
              "positiveInteger": {
                "type": "integer",
                "minimum": 0
              }
            },
            "properties": {
              "size": {
                "$ref": "#/definitions/positiveIntege"
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
          "./other.json",
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
      possibleRefs
        .asSequence()
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
                  $$"""
                  {
                    "$id": "http://example.com/root.json",
                    "definitions": {
                      "A": { "$id": "#foo" },
                      "B": {
                        "$id": "other.json",
                        "definitions": {
                          "X": { "$id": "#bar" },
                          "Y": { "$id": "t/inner.json" }
                        }
                      },
                      "C": {
                        "$id": "urn:uuid:ee564b8a-7a87-4125-8c96-e9f123d6766f"
                      }
                    },
                    "properties": {
                      "test": { "$ref": "$$ref" } 
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
            $$"""
            {
              "$schema": "$$it",
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
            $$"""
            {
              "$schema": "$$it",
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
          $$"""
          {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://test.json-schema.org/dynamic-ref-with-multiple-paths/main",
            "if": {
                "properties": {
                    "kindOfList": { "const": "numbers" }
                },
                "required": ["kindOfList"]
            },
            "then": { "$ref": "numberList" },
            "else": { "$ref": "stringList" },
          
            "$defs": {
                "genericList": {
                    "$id": "genericList",
                    "properties": {
                        "list": {
                            "items": { "$dynamicRef": "#itemType" }
                        }
                    },
                    "$defs": {
                        "defaultItemType": {
                            "$comment": "Only needed to satisfy bookending requirement",
                            "$dynamicAnchor": "itemType"
                        }
                    }
                },
                "numberList": {
                    "$id": "numberList",
                    "$defs": {
                        "itemType": {
                            "$dynamicAnchor": "itemType",
                            "type": "number"
                        }
                    },
                    "$ref": "genericList"
                },
                "stringList": {
                    "$id": "stringList",
                    "$defs": {
                        "itemType": {
                            "$dynamicAnchor": "itemType",
                            "type": "string"
                        }
                    },
                    "$ref": "genericList"
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