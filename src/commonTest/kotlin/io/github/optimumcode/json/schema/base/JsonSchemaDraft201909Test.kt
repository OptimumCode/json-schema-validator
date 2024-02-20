package io.github.optimumcode.json.schema.base

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.SchemaType.DRAFT_2019_09
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

class JsonSchemaDraft201909Test : FunSpec() {
  init {
    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
          "${KEY}id": "https://localhost:8080/custom_meta",
          "${KEY}vocabulary": {
            "https://json-schema.org/draft/2019-09/vocab/core": true,
            "https://json-schema.org/draft/2019-09/vocab/applicator": false,
            "https://json-schema.org/draft/2019-09/vocab/validation": true
          }
        }
        """.trimIndent(),
        DRAFT_2019_09,
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
        DRAFT_2019_09,
      ).also { schema ->
        test("assertion inside applicator is not applied when it is disabled draft 2019-09") {
          schema.validate(
            buildJsonObject {
              put("test", JsonPrimitive(42))
            },
            ErrorCollector.EMPTY,
          ) shouldBe true
        }

        test("top level assertion is applied when applicator is disabled draft 2019-09") {
          schema.validate(
            buildJsonArray { },
            ErrorCollector.EMPTY,
          ) shouldBe false
        }
      }

    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
          "${KEY}id": "https://localhost:8080/custom_meta",
          "${KEY}vocabulary": {
            "https://json-schema.org/draft/2019-09/vocab/core": true,
            "https://json-schema.org/draft/2019-09/vocab/applicator": true,
            "https://json-schema.org/draft/2019-09/vocab/validation": false
          }
        }
        """.trimIndent(),
        DRAFT_2019_09,
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
        DRAFT_2019_09,
      ).also { schema ->
        test("top level assertion is not applied when validation is disabled draft 2019-09") {
          schema.validate(
            buildJsonArray { },
            ErrorCollector.EMPTY,
          ) shouldBe true
        }

        test("assertion in applicator is not applied when validation is disabled draft 2019-09") {
          schema.validate(
            buildJsonObject {
              put("test", JsonPrimitive(42))
            },
            ErrorCollector.EMPTY,
          ) shouldBe true
        }
      }

    JsonSchemaLoader.create()
      .register(
        """
        {
          "${KEY}schema": "https://json-schema.org/draft/2019-09/schema",
          "${KEY}id": "https://localhost:8080/custom_meta",
          "${KEY}vocabulary": {
            "https://json-schema.org/draft/2019-09/vocab/core": true,
            "https://json-schema.org/draft/2019-09/vocab/applicator": false,
            "https://json-schema.org/draft/2019-09/vocab/validation": false
          }
        }
        """.trimIndent(),
        DRAFT_2019_09,
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
        DRAFT_2019_09,
      ).also { schema ->
        test("everything is valid when validation and applicator are disabled draft 2019-09") {
          assertSoftly {
            listOf(
              JsonPrimitive(42),
              JsonPrimitive("42a"),
              buildJsonArray { },
              buildJsonObject {
                put("test", JsonPrimitive(54))
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