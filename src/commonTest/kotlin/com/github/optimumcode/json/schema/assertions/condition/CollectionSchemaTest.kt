package com.github.optimumcode.json.schema.assertions.condition

import com.github.optimumcode.json.schema.JsonSchema
import com.github.optimumcode.json.schema.base.KEY
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

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