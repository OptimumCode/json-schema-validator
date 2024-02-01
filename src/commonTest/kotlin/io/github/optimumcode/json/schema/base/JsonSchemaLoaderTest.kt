package io.github.optimumcode.json.schema.base

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.ValidationError
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.throwables.shouldNotThrowAnyUnit
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

class JsonSchemaLoaderTest : FunSpec() {
  init {
    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}id": "https://test.com",
          "properties": {
            "name": {
              "type": "string"
            }
          }
        }
        """.trimIndent(),
      ).fromDefinition(
        """
        {
          "properties": {
            "anotherName": {
              "${KEY}ref": "https://test.com#/properties/name"
            }
          }
        }
        """.trimIndent(),
      ).also { schema ->
        test("remote schema can be referenced by relative path valid") {
          val errors = mutableListOf<ValidationError>()
          val obj =
            buildJsonObject {
              put("anotherName", JsonPrimitive("test"))
            }
          val valid = schema.validate(obj, errors::add)
          assertSoftly {
            valid shouldBe true
            errors shouldHaveSize 0
          }
        }
        test("remote schema can be referenced by relative path invalid") {
          val errors = mutableListOf<ValidationError>()
          val obj =
            buildJsonObject {
              put("anotherName", JsonPrimitive(42))
            }
          val valid = schema.validate(obj, errors::add)
          assertSoftly {
            valid shouldBe false
            errors.shouldContainExactly(
              ValidationError(
                schemaPath = JsonPointer("/properties/anotherName/\$ref/type"),
                objectPath = JsonPointer("/anotherName"),
                message = "element is not a string",
                absoluteLocation = JsonPointer("/properties/name/type"),
              ),
            )
          }
        }
      }

    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2020-12/schema",
          "${KEY}id": "https://test.json-schema.org/dynamic-ref-with-multiple-paths/genericList",
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
        }
        """.trimIndent(),
      ).fromDefinition(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2020-12/schema",
          "if": {
            "properties": {
              "kindOfList": { "const": "numbers" }
            },
            "required": ["kindOfList"]
          },
          "then": { "${KEY}ref": "numberList" },
          "else": { "${KEY}ref": "stringList" },
        
          "${KEY}defs": {
            "numberList": {
              "${KEY}id": "numberList",
              "${KEY}defs": {
                "itemType": {
                  "${KEY}dynamicAnchor": "itemType",
                  "type": "number"
                }
              },
              "${KEY}ref": "https://test.json-schema.org/dynamic-ref-with-multiple-paths/genericList"
            },
            "stringList": {
              "${KEY}id": "stringList",
              "${KEY}defs": {
                "itemType": {
                  "${KEY}dynamicAnchor": "itemType",
                  "type": "string"
                }
              },
              "${KEY}ref": "https://test.json-schema.org/dynamic-ref-with-multiple-paths/genericList"
            }
          }
        }
        """.trimIndent(),
      ).also { schema ->
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

        test("dynamic refs are resolved between separate schemas") {
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

    test("does not report missing refs when schema is registered") {
      shouldNotThrowAnyUnit {
        JsonSchemaLoader.create()
          .register(
            """
            {
              "id": "https://test.com/a",
              "properties": {
                "anotherName": {
                  "${KEY}ref": "https://test.com/b#/properties/name"
                }
              }
            }
            """.trimIndent(),
          )
      }
    }

    test("reports missing refs when schema is created from definition") {
      shouldThrow<IllegalArgumentException> {
        JsonSchemaLoader.create()
          .register(
            """
            {
              "${KEY}id": "https://test.com/a",
              "properties": {
                "anotherName": {
                  "${KEY}ref": "https://test.com/b#/properties/name"
                }
              }
            }
            """.trimIndent(),
          ).fromDefinition(
            """
            {
              "${KEY}id": "https://test.com/c",
              "properties": {
                "subName": {
                  "${KEY}ref": "https://test.com/a#/properties/anotherName"
                }
              }
            }
            """.trimIndent(),
          )
      }.message shouldBe "cannot resolve references: " +
        "{\"https://test.com/b#/properties/name\": [\"/properties/anotherName\"]}"
    }
  }
}