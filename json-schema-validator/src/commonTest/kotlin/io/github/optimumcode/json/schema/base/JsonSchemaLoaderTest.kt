package io.github.optimumcode.json.schema.base

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AbsoluteLocation
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.FormatBehavior.ANNOTATION_AND_ASSERTION
import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.SchemaOption
import io.github.optimumcode.json.schema.ValidationError
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.throwables.shouldNotThrowAnyUnit
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonElement
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
                absoluteLocation =
                  AbsoluteLocation(
                    Uri.parse("https://test.com"),
                    JsonPointer("/properties/name/type"),
                  ),
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

    class MagicFormatValidator : FormatValidator {
      override fun validate(element: JsonElement): FormatValidationResult {
        return if (element is JsonPrimitive && element.isString) {
          if (element.content == "42") {
            FormatValidator.Valid()
          } else {
            FormatValidator.Invalid()
          }
        } else {
          FormatValidator.Valid()
        }
      }
    }
    JsonSchemaLoader.create()
      .withSchemaOption(SchemaOption.FORMAT_BEHAVIOR_OPTION, ANNOTATION_AND_ASSERTION)
      .withCustomFormat("magic", MagicFormatValidator())
      .fromDefinition(
        """
        {
          "format": "magic"
        }
        """.trimIndent(),
      ).also { schema ->
        test("single custom format validator and element passes validation") {
          val errors = mutableListOf<ValidationError>()
          assertSoftly {
            schema.validate(JsonPrimitive("42"), errors::add) shouldBe true
            errors shouldHaveSize 0
          }
        }

        test("single custom format validator and element fails validation") {
          val errors = mutableListOf<ValidationError>()
          assertSoftly {
            schema.validate(JsonPrimitive("54"), errors::add) shouldBe false
            errors.shouldContainExactly(
              ValidationError(
                schemaPath = JsonPointer("/format"),
                objectPath = JsonPointer.ROOT,
                message = "value does not match 'magic' format",
              ),
            )
          }
        }
      }

    JsonSchemaLoader.create()
      .withSchemaOption(SchemaOption.FORMAT_BEHAVIOR_OPTION, ANNOTATION_AND_ASSERTION)
      .withCustomFormats(mapOf("magic" to MagicFormatValidator()))
      .fromDefinition(
        """
        {
          "format": "magic"
        }
        """.trimIndent(),
      ).also { schema ->
        test("map custom format validator and element passes validation") {
          val errors = mutableListOf<ValidationError>()
          assertSoftly {
            schema.validate(JsonPrimitive("42"), errors::add) shouldBe true
            errors shouldHaveSize 0
          }
        }

        test("map custom format validator and element fails validation") {
          val errors = mutableListOf<ValidationError>()
          assertSoftly {
            schema.validate(JsonPrimitive("54"), errors::add) shouldBe false
            errors.shouldContainExactly(
              ValidationError(
                schemaPath = JsonPointer("/format"),
                objectPath = JsonPointer.ROOT,
                message = "value does not match 'magic' format",
              ),
            )
          }
        }
      }

    test("reports error for duplicated custom format validators") {
      shouldThrow<IllegalArgumentException> {
        JsonSchemaLoader.create()
          .withCustomFormat("magic", MagicFormatValidator())
          .withCustomFormat("magic", MagicFormatValidator())
      }.message shouldBe "format 'magic' already registered"
    }

    // https://github.com/OptimumCode/json-schema-validator/issues/87
    test("BUG_87 relative uri-ref in root \$id causes incorrect reference resolution for root schema") {
      val schema =
        shouldNotThrowAny {
          JsonSchemaLoader.create()
            .register(
              """
              {
                "${'$'}schema": "https://json-schema.org/draft/2020-12/schema",
                "${'$'}id": "myproject/enums/foo",
                "type": "integer"
              }
              """.trimIndent(),
            ).fromDefinition(
              """
              {
                  "${'$'}schema": "https://json-schema.org/draft/2020-12/schema",
                  "${'$'}id": "myproject/data/request",
                  "type": "object",
                  "properties": {
                      "foobar": {
                          "${'$'}ref": "/myproject/enums/foo"
                      }
                  }
              }
              """.trimIndent(),
            )
        }

      val errors = mutableListOf<ValidationError>()
      val valid =
        schema.validate(
          buildJsonObject {
            put("foobar", JsonPrimitive("test"))
          },
          errors::add,
        )
      assertSoftly {
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/properties/foobar/\$ref/type"),
            objectPath = JsonPointer("/foobar"),
            message = "element is not a integer",
            absoluteLocation =
              AbsoluteLocation(
                Uri.parse("myproject/enums/foo"),
                JsonPointer("/type"),
              ),
          ),
        )
      }
    }
  }
}