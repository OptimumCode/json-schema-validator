package io.github.optimumcode.json.schema.assertions.array

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.base.KEY
import io.kotest.assertions.asClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

@Suppress("unused")
class JsonSchemaItemsValidationTest : FunSpec() {
  init {
    test("true schema accepts all items") {
      val schema = JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": true
        }
        """.trimIndent(),
      )
      val array = buildJsonArray {
        add(JsonPrimitive(42))
        add(JsonPrimitive(42.5))
        add(JsonPrimitive("test"))
        add(JsonPrimitive(true))
        add(JsonNull)
        add(buildJsonObject { })
        add(buildJsonArray { })
      }

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(array, errors::add)

      array.asClue {
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("items applied against all items") {
      val schema = JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": {
            "type": "number"
          }
        }
        """.trimIndent(),
      )
      val array = buildJsonArray {
        add(JsonPrimitive(42))
        add(JsonPrimitive(42.5))
      }

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(array, errors::add)

      array.asClue {
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("items array applied against items on corresponding indexes") {
      val schema = JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "string"
            }
          ]
        }
        """.trimIndent(),
      )
      val array = buildJsonArray {
        add(JsonPrimitive(42))
        add(JsonPrimitive("string"))
        // should be ignored by validation
        add(JsonPrimitive(true))
        add(JsonNull)
        add(buildJsonObject { })
        add(buildJsonArray { })
      }

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(array, errors::add)

      array.asClue {
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("single item reports error for all elements") {
      val schema = JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": {
            "type": "number"
          }
        }
        """.trimIndent(),
      )
      val array = buildJsonArray {
        add(JsonPrimitive("str"))
        add(JsonPrimitive(true))
        add(JsonNull)
        add(buildJsonObject { })
        add(buildJsonArray { })
      }

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(array, errors::add)

      array.asClue {
        val schemaPath = JsonPointer("/items/type")
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = schemaPath,
            objectPath = JsonPointer("/0"),
            message = "element is not a number",
          ),
          ValidationError(
            schemaPath = schemaPath,
            objectPath = JsonPointer("/1"),
            message = "element is not a number",
          ),
          ValidationError(
            schemaPath = schemaPath,
            objectPath = JsonPointer("/2"),
            message = "element is not a number",
          ),
          ValidationError(
            schemaPath = schemaPath,
            objectPath = JsonPointer("/3"),
            message = "element is not a number",
          ),
          ValidationError(
            schemaPath = schemaPath,
            objectPath = JsonPointer("/4"),
            message = "element is not a number",
          ),
        )
      }
    }

    test("collection items reports error for elements on corresponding indexes") {
      val schema = JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "string"
            }
          ]
        }
        """.trimIndent(),
      )

      val array = buildJsonArray {
        add(JsonPrimitive("string"))
        add(JsonPrimitive(42))
        // should be ignored by validation
        add(JsonPrimitive(true))
        add(JsonNull)
        add(buildJsonObject { })
        add(buildJsonArray { })
      }

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(array, errors::add)

      array.asClue {
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/items/0/type"),
            objectPath = JsonPointer("/0"),
            message = "element is not a number",
          ),
          ValidationError(
            schemaPath = JsonPointer("/items/1/type"),
            objectPath = JsonPointer("/1"),
            message = "element is not a string",
          ),
        )
      }
    }

    test("additional items ignored when item is a JSON schema") {
      val schema = JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": {
            "type": "string"
          },
          "additionalItems": {
            "type": "number"
          }
        }
        """.trimIndent(),
      )

      val array = buildJsonArray {
        add(JsonPrimitive("test1"))
        add(JsonPrimitive("test2"))
      }

      array.asClue {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(array, errors::add)

        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("additional items applied to all remaining elements") {
      val schema = JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "string"
            }
          ],
          "additionalItems": {
            "type": "string"
          }
        }
        """.trimIndent(),
      )

      val array = buildJsonArray {
        add(JsonPrimitive(42))
        add(JsonPrimitive("test"))
        // invalid
        add(JsonPrimitive(true))
        add(JsonNull)
        add(buildJsonObject { })
        add(buildJsonArray { })
      }

      array.asClue {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(array, errors::add)

        val schemaPath = JsonPointer("/additionalItems/type")
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath,
            objectPath = JsonPointer("/2"),
            message = "element is not a string",
          ),
          ValidationError(
            schemaPath,
            objectPath = JsonPointer("/3"),
            message = "element is not a string",
          ),
          ValidationError(
            schemaPath,
            objectPath = JsonPointer("/4"),
            message = "element is not a string",
          ),
          ValidationError(
            schemaPath,
            objectPath = JsonPointer("/5"),
            message = "element is not a string",
          ),
        )
      }
    }

    test("false additional items reports any additional element") {
      val schema = JsonSchema.fromDefinition(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": [
            {
              "type": "string"
            }
          ],
          "additionalItems": false
        }
        """.trimIndent(),
      )

      val array = buildJsonArray {
        add(JsonPrimitive("test1"))
        add(JsonPrimitive("test2"))
      }

      array.asClue {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(array, errors::add)

        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/additionalItems"),
            objectPath = JsonPointer("/1"),
            message = "all values fail against the false schema",
          ),
        )
      }
    }

    val schema = JsonSchema.fromDefinition(
      """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "items": {
            "type": "string"
          },
          "additionalItems": {
            "type": "number"
          }
        }
      """.trimIndent(),
    )
    listOf(
      JsonPrimitive("test"),
      JsonPrimitive(42),
      JsonPrimitive(42.5),
      JsonPrimitive(true),
      JsonNull,
      buildJsonObject { },
    ).forEach {
      test("not array $it passes validation") {
        val errors = mutableListOf<ValidationError>()
        val valid = schema.validate(it, errors::add)

        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("empty array passes validation") {
      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(buildJsonArray { }, errors::add)

      valid shouldBe true
      errors shouldHaveSize 0
    }
  }
}