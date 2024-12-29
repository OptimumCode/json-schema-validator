package io.github.optimumcode.json.schema.objects.wrapper

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.SchemaType
import io.github.optimumcode.json.schema.ValidationOutput
import io.kotest.assertions.asClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactlyInAnyOrder
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe

class ValidationTest : FunSpec() {
  init {
    val schema =
      JsonSchema.fromDefinition(
        """
        {
          "properties": {
            "simple": {
              "type": "integer"
            },
            "collection": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "sub-map": {
              "properties": {
                "inner": {
                  "type": "string"
                }
              }
            }
          },
          "additionalProperties": false,
          "required": ["simple"]
        }
        """.trimIndent(),
        defaultType = SchemaType.DRAFT_2020_12,
      )

    test("valid object") {
      val result =
        schema.validate(
          wrapAsElement(
            mapOf(
              "simple" to 1,
              "collection" to
                listOf(
                  "test1",
                  "test2",
                ),
              "sub-map" to
                mapOf(
                  "inner" to "inner1",
                ),
            ),
          ),
          OutputCollector.basic(),
        )

      result.asClue {
        it.valid shouldBe true
      }
    }

    test("invalid object") {
      val result =
        schema.validate(
          wrapAsElement(
            mapOf(
              "simple" to 1.5,
              "collection" to
                listOf(
                  "test1",
                  1,
                ),
              "sub-map" to
                mapOf(
                  "inner" to 42,
                ),
            ),
          ),
          OutputCollector.basic(),
        )

      result.asClue {
        it.valid shouldBe false
        it.errors shouldHaveSize 3
        it.errors.shouldContainExactlyInAnyOrder(
          ValidationOutput.OutputUnit(
            valid = false,
            keywordLocation = JsonPointer("/properties/simple/type"),
            instanceLocation = JsonPointer("/simple"),
            error = "element is not a integer",
          ),
          ValidationOutput.OutputUnit(
            valid = false,
            keywordLocation = JsonPointer("/properties/collection/items/type"),
            instanceLocation = JsonPointer("/collection/1"),
            error = "element is not a string",
          ),
          ValidationOutput.OutputUnit(
            valid = false,
            keywordLocation = JsonPointer("/properties/sub-map/properties/inner/type"),
            instanceLocation = JsonPointer("/sub-map/inner"),
            error = "element is not a string",
          ),
        )
      }
    }
  }
}