package io.github.optimumcode.json.schema.base

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.SchemaType.DRAFT_2020_12
import io.github.optimumcode.json.schema.ValidationError
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

class JsonSchemaDraft202012Test : FunSpec() {
  init {
    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2020-12/schema",
          "${KEY}id": "https://localhost:8080/custom_meta",
          "${KEY}vocabulary": {
            "https://json-schema.org/draft/2020-12/vocab/core": true,
            "https://json-schema.org/draft/2020-12/vocab/applicator": false,
            "https://json-schema.org/draft/2020-12/vocab/validation": true,
            "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
          }
        }
        """.trimIndent(),
        DRAFT_2020_12,
      ).fromDefinition(
        """
        {
          "${KEY}schema": "https://localhost:8080/custom_meta",
          "type": "object",
          "properties": {
            "test": {
              "type": "string"
            }
          },
          "unevaluatedProperties": false
        }
        """.trimIndent(),
        DRAFT_2020_12,
      ).also { schema ->
        test("assertion inside applicator is not applied when it is disabled draft 2020-12") {
          val errors = mutableListOf<ValidationError>()
          schema.validate(
            buildJsonObject {
              put("test", JsonPrimitive(42))
            },
            errors::add,
          ) shouldBe false
          errors.shouldContainExactly(
            ValidationError(
              objectPath = JsonPointer("/test"),
              schemaPath = JsonPointer("/unevaluatedProperties"),
              message = "all values fail against the false schema",
            ),
          )
        }

        test("top level assertion is applied when applicator is disabled draft 2020-12") {
          val errors = mutableListOf<ValidationError>()
          schema.validate(
            buildJsonArray { },
            errors::add,
          ) shouldBe false

          errors.shouldContainExactly(
            ValidationError(
              objectPath = JsonPointer.ROOT,
              schemaPath = JsonPointer("/type"),
              message = "element is not a object",
            ),
          )
        }

        test("unevaluated is applied when applicator is disabled draft 2020-12") {
          val errors = mutableListOf<ValidationError>()
          schema.validate(
            buildJsonObject {
              put("test2", JsonPrimitive(42))
            },
            errors::add,
          ) shouldBe false

          errors.shouldContainExactly(
            ValidationError(
              objectPath = JsonPointer("/test2"),
              schemaPath = JsonPointer("/unevaluatedProperties"),
              message = "all values fail against the false schema",
            ),
          )
        }
      }

    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2020-12/schema",
          "${KEY}id": "https://localhost:8080/custom_meta",
          "${KEY}vocabulary": {
            "https://json-schema.org/draft/2020-12/vocab/core": true,
            "https://json-schema.org/draft/2020-12/vocab/applicator": true,
            "https://json-schema.org/draft/2020-12/vocab/validation": false,
            "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
          }
        }
        """.trimIndent(),
        DRAFT_2020_12,
      ).fromDefinition(
        """
        {
          "${KEY}schema": "https://localhost:8080/custom_meta",
          "type": "object",
          "properties": {
            "test": {
              "type": "string"
            }
          },
          "unevaluatedProperties": false
        }
        """.trimIndent(),
        DRAFT_2020_12,
      ).also { schema ->
        test("top level assertion is not applied when validation is disabled draft 2020-12") {
          schema.validate(
            buildJsonArray { },
            ErrorCollector.EMPTY,
          ) shouldBe true
        }

        test("assertion in applicator is not applied when validation is disabled draft 2020-12") {
          schema.validate(
            buildJsonObject {
              put("test", JsonPrimitive(42))
            },
            ErrorCollector.EMPTY,
          ) shouldBe true
        }

        test("unevaluated is applied when validation is disabled draft 2020-12") {
          val errors = mutableListOf<ValidationError>()
          schema.validate(
            buildJsonObject {
              put("test2", JsonPrimitive(42))
            },
            errors::add,
          ) shouldBe false

          errors.shouldContainExactly(
            ValidationError(
              objectPath = JsonPointer("/test2"),
              schemaPath = JsonPointer("/unevaluatedProperties"),
              message = "all values fail against the false schema",
            ),
          )
        }
      }

    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2020-12/schema",
          "${KEY}id": "https://localhost:8080/custom_meta",
          "${KEY}vocabulary": {
            "https://json-schema.org/draft/2020-12/vocab/core": true,
            "https://json-schema.org/draft/2020-12/vocab/applicator": true,
            "https://json-schema.org/draft/2020-12/vocab/validation": true,
            "https://json-schema.org/draft/2020-12/vocab/unevaluated": false
          }
        }
        """.trimIndent(),
        DRAFT_2020_12,
      ).fromDefinition(
        """
        {
          "${KEY}schema": "https://localhost:8080/custom_meta",
          "type": "object",
          "properties": {
            "test": {
              "type": "string"
            }
          },
          "unevaluatedProperties": false
        }
        """.trimIndent(),
        DRAFT_2020_12,
      ).also { schema ->
        test("top level assertion is applied when unevaluated is disabled draft 2020-12") {
          val errors = mutableListOf<ValidationError>()
          schema.validate(
            buildJsonArray { },
            errors::add,
          ) shouldBe false

          errors.shouldContainExactly(
            ValidationError(
              objectPath = JsonPointer.ROOT,
              schemaPath = JsonPointer("/type"),
              message = "element is not a object",
            ),
          )
        }

        test("assertion in applicator is applied when unevaluated is disabled draft 2020-12") {
          val errors = mutableListOf<ValidationError>()
          schema.validate(
            buildJsonObject {
              put("test", JsonPrimitive(42))
            },
            errors::add,
          ) shouldBe false

          errors.shouldContainExactly(
            ValidationError(
              objectPath = JsonPointer("/test"),
              schemaPath = JsonPointer("/properties/test/type"),
              message = "element is not a string",
            ),
          )
        }

        test("unevaluated is not applied when unevaluated is disabled draft 2020-12") {
          schema.validate(
            buildJsonObject {
              put("test2", JsonPrimitive(42))
            },
            ErrorCollector.EMPTY,
          ) shouldBe true
        }
      }

    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2020-12/schema",
          "${KEY}id": "https://localhost:8080/custom_meta",
          "${KEY}vocabulary": {
            "https://json-schema.org/draft/2020-12/vocab/core": true,
            "https://json-schema.org/draft/2020-12/vocab/applicator": false,
            "https://json-schema.org/draft/2020-12/vocab/validation": false,
            "https://json-schema.org/draft/2020-12/vocab/unevaluated": false
          }
        }
        """.trimIndent(),
        DRAFT_2020_12,
      ).fromDefinition(
        """
        {
          "${KEY}schema": "https://localhost:8080/custom_meta",
          "type": "object",
          "properties": {
            "test": {
              "type": "string"
            }
          }
        }
        """.trimIndent(),
        DRAFT_2020_12,
      ).also { schema ->
        test("everything is valid when validation and applicator are disabled draft 2020-12") {
          assertSoftly {
            listOf(
              JsonPrimitive(42),
              JsonPrimitive("42a"),
              buildJsonArray { },
              buildJsonObject {
                put("test", JsonPrimitive(54))
              },
              buildJsonObject {
                put("test54", JsonPrimitive(54))
              },
            ).forEach {
              withClue(it) {
                schema.validate(
                  it,
                  ErrorCollector.EMPTY,
                ) shouldBe true
              }
            }
          }
        }
      }
  }
}