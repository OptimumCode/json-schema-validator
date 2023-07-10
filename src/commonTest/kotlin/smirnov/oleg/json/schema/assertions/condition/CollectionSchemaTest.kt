package smirnov.oleg.json.schema.assertions.condition

import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import smirnov.oleg.json.schema.JsonSchema
import smirnov.oleg.json.schema.base.KEY

fun FunSpec.testInvalidSchemaInArray(name: String) {
  test("reports empty array") {
    shouldThrow<IllegalArgumentException> {
      JsonSchema.fromDescription(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "$name": []
        }
        """.trimIndent(),
      )
    }.message shouldBe "$name must have at least one element"
  }

  test("reports not array") {
    shouldThrow<IllegalArgumentException> {
      JsonSchema.fromDescription(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "$name": {}
        }
        """.trimIndent(),
      )
    }.message shouldBe "$name must be an array"
  }

  test("reports element in array is not a valid JSON schema") {
    shouldThrow<IllegalArgumentException> {
      JsonSchema.fromDescription(
        """
        {
          "${KEY}schema": "http://json-schema.org/draft-07/schema#",
          "$name": [42]
        }
        """.trimIndent(),
      )
    }.message shouldBe "each element in $name must be a valid JSON schema"
  }
}