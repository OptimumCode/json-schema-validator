package io.github.optimumcode.json.schema.base

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AbsoluteLocation
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationOutput
import io.github.optimumcode.json.schema.ValidationOutput.OutputUnit
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

class OutputCollectorsTest : FunSpec() {
  init {
    JsonSchema.fromDefinition(
      """
      {
        "type": "object",
        "allOf": [
          {
            "${KEY}ref": "#/${KEY}defs/reference"
          },
          {
            "properties": {
              "collection": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        ],
        "${KEY}defs": {
          "reference": {
            "type": "object",
            "propertyNames": {
              "type": "string",
              "minLength": 3
            }
          }
        }
      }
      """.trimIndent(),
    ).also { schema ->
      val validObject =
        buildJsonObject {
          put(
            "collection",
            buildJsonArray {
              add(JsonPrimitive("test1"))
              add(JsonPrimitive("test2"))
            },
          )
          put("ano", JsonPrimitive(1))
        }
      val invalidObject =
        buildJsonObject {
          put(
            "collection",
            buildJsonArray {
              add(JsonPrimitive(1))
              add(JsonPrimitive("test"))
              add(JsonPrimitive(false))
            },
          )
          put("a", JsonPrimitive(42))
        }
      test("flag output for valid object") {
        val res = schema.validate(validObject, OutputCollector.flag())
        res shouldBe ValidationOutput.Flag.VALID
      }
      test("flag output for invalid object") {
        val res = schema.validate(invalidObject, OutputCollector.flag())
        res shouldBe ValidationOutput.Flag.INVALID
      }

      test("basic output for valid object") {
        val res = schema.validate(validObject, OutputCollector.basic())
        res shouldBe
          ValidationOutput.Basic(
            valid = true,
          )
      }

      test("basic output for invalid object") {
        val res = schema.validate(invalidObject, OutputCollector.basic())
        res shouldBe
          ValidationOutput.Basic(
            valid = false,
            errors =
              setOf(
                OutputUnit(
                  valid = false,
                  keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/minLength"),
                  instanceLocation = JsonPointer("/a"),
                  error = "property a: string length (1) must be greater or equal to 3",
                  absoluteKeywordLocation =
                    AbsoluteLocation(
                      uri = Uri.EMPTY,
                      path = JsonPointer("/\$defs/reference/propertyNames/minLength"),
                    ),
                ),
                OutputUnit(
                  valid = false,
                  keywordLocation = JsonPointer("/allOf/1/properties/collection/items/type"),
                  instanceLocation = JsonPointer("/collection/0"),
                  error = "element is not a string",
                ),
                OutputUnit(
                  valid = false,
                  keywordLocation = JsonPointer("/allOf/1/properties/collection/items/type"),
                  instanceLocation = JsonPointer("/collection/2"),
                  error = "element is not a string",
                ),
              ),
          )
      }

      test("OutputUnit output for valid object") {
        val res = schema.validate(validObject, OutputCollector.detailed())
        res shouldBe
          OutputUnit(
            valid = true,
            keywordLocation = JsonPointer.ROOT,
            instanceLocation = JsonPointer.ROOT,
          )
      }

      test("OutputUnit output for invalid object") {
        val res = schema.validate(invalidObject, OutputCollector.detailed())
        res shouldBe
          OutputUnit(
            valid = false,
            keywordLocation = JsonPointer("/allOf"),
            instanceLocation = JsonPointer.ROOT,
            errors =
              setOf(
                OutputUnit(
                  valid = false,
                  keywordLocation = JsonPointer("/allOf/0/\$ref"),
                  instanceLocation = JsonPointer.ROOT,
                  absoluteKeywordLocation =
                    AbsoluteLocation(
                      uri = Uri.EMPTY,
                      path = JsonPointer("/\$defs/reference"),
                    ),
                  errors =
                    setOf(
                      OutputUnit(
                        valid = false,
                        keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/minLength"),
                        instanceLocation = JsonPointer("/a"),
                        absoluteKeywordLocation =
                          AbsoluteLocation(
                            uri = Uri.EMPTY,
                            path = JsonPointer("/\$defs/reference/propertyNames/minLength"),
                          ),
                        error = "property a: string length (1) must be greater or equal to 3",
                      ),
                    ),
                ),
                OutputUnit(
                  valid = false,
                  keywordLocation = JsonPointer("/allOf/1/properties/collection/items"),
                  instanceLocation = JsonPointer("/collection"),
                  errors =
                    setOf(
                      OutputUnit(
                        valid = false,
                        keywordLocation = JsonPointer("/allOf/1/properties/collection/items/type"),
                        instanceLocation = JsonPointer("/collection/0"),
                        error = "element is not a string",
                      ),
                      OutputUnit(
                        valid = false,
                        keywordLocation = JsonPointer("/allOf/1/properties/collection/items/type"),
                        instanceLocation = JsonPointer("/collection/2"),
                        error = "element is not a string",
                      ),
                    ),
                ),
              ),
          )
      }

      test("verbose output for valid object") {
        val res = schema.validate(validObject, OutputCollector.verbose())
        val expected =
          //region Expected result
          OutputUnit(
            valid = true,
            keywordLocation = JsonPointer.ROOT,
            instanceLocation = JsonPointer.ROOT,
            errors =
              setOf(
                OutputUnit(
                  valid = true,
                  keywordLocation = JsonPointer("/type"),
                  instanceLocation = JsonPointer.ROOT,
                ),
                OutputUnit(
                  valid = true,
                  keywordLocation = JsonPointer("/allOf"),
                  instanceLocation = JsonPointer.ROOT,
                  errors =
                    setOf(
                      OutputUnit(
                        valid = true,
                        keywordLocation = JsonPointer("/allOf/0"),
                        instanceLocation = JsonPointer.ROOT,
                        errors =
                          setOf(
                            OutputUnit(
                              valid = true,
                              keywordLocation = JsonPointer("/allOf/0/\$ref"),
                              instanceLocation = JsonPointer.ROOT,
                              absoluteKeywordLocation =
                                AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference")),
                              errors =
                                setOf(
                                  OutputUnit(
                                    valid = true,
                                    keywordLocation = JsonPointer("/allOf/0/\$ref/type"),
                                    instanceLocation = JsonPointer.ROOT,
                                    absoluteKeywordLocation =
                                      AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference/type")),
                                  ),
                                  OutputUnit(
                                    valid = true,
                                    keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames"),
                                    instanceLocation = JsonPointer.ROOT,
                                    absoluteKeywordLocation =
                                      AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference/propertyNames")),
                                    errors =
                                      setOf(
                                        OutputUnit(
                                          valid = true,
                                          keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames"),
                                          instanceLocation = JsonPointer("/collection"),
                                          absoluteKeywordLocation =
                                            AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference/propertyNames")),
                                          errors =
                                            setOf(
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/type"),
                                                instanceLocation = JsonPointer("/collection"),
                                                absoluteKeywordLocation =
                                                  AbsoluteLocation(
                                                    Uri.EMPTY,
                                                    JsonPointer("/\$defs/reference/propertyNames/type"),
                                                  ),
                                              ),
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/minLength"),
                                                instanceLocation = JsonPointer("/collection"),
                                                absoluteKeywordLocation =
                                                  AbsoluteLocation(
                                                    Uri.EMPTY,
                                                    JsonPointer("/\$defs/reference/propertyNames/minLength"),
                                                  ),
                                              ),
                                            ),
                                        ),
                                        OutputUnit(
                                          valid = true,
                                          keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames"),
                                          instanceLocation = JsonPointer("/ano"),
                                          absoluteKeywordLocation =
                                            AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference/propertyNames")),
                                          errors =
                                            setOf(
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/type"),
                                                instanceLocation = JsonPointer("/ano"),
                                                absoluteKeywordLocation =
                                                  AbsoluteLocation(
                                                    Uri.EMPTY,
                                                    JsonPointer("/\$defs/reference/propertyNames/type"),
                                                  ),
                                              ),
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/minLength"),
                                                instanceLocation = JsonPointer("/ano"),
                                                absoluteKeywordLocation =
                                                  AbsoluteLocation(
                                                    Uri.EMPTY,
                                                    JsonPointer("/\$defs/reference/propertyNames/minLength"),
                                                  ),
                                              ),
                                            ),
                                        ),
                                      ),
                                  ),
                                ),
                            ),
                          ),
                      ),
                      OutputUnit(
                        valid = true,
                        keywordLocation = JsonPointer("/allOf/1"),
                        instanceLocation = JsonPointer.ROOT,
                        errors =
                          setOf(
                            OutputUnit(
                              valid = true,
                              keywordLocation = JsonPointer("/allOf/1/properties"),
                              instanceLocation = JsonPointer.ROOT,
                              errors =
                                setOf(
                                  OutputUnit(
                                    valid = true,
                                    keywordLocation = JsonPointer("/allOf/1/properties"),
                                    instanceLocation = JsonPointer("/collection"),
                                    errors =
                                      setOf(
                                        OutputUnit(
                                          valid = true,
                                          keywordLocation = JsonPointer("/allOf/1/properties/collection"),
                                          instanceLocation = JsonPointer("/collection"),
                                          errors =
                                            setOf(
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/1/properties/collection/type"),
                                                instanceLocation = JsonPointer("/collection"),
                                              ),
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/1/properties/collection/items"),
                                                instanceLocation = JsonPointer("/collection"),
                                                errors =
                                                  setOf(
                                                    OutputUnit(
                                                      valid = true,
                                                      keywordLocation =
                                                        JsonPointer(
                                                          "/allOf/1/properties/collection/items",
                                                        ),
                                                      instanceLocation = JsonPointer("/collection/0"),
                                                      errors =
                                                        setOf(
                                                          OutputUnit(
                                                            valid = true,
                                                            keywordLocation =
                                                              JsonPointer(
                                                                "/allOf/1/properties/collection/items/type",
                                                              ),
                                                            instanceLocation = JsonPointer("/collection/0"),
                                                          ),
                                                        ),
                                                    ),
                                                    OutputUnit(
                                                      valid = true,
                                                      keywordLocation =
                                                        JsonPointer(
                                                          "/allOf/1/properties/collection/items",
                                                        ),
                                                      instanceLocation = JsonPointer("/collection/1"),
                                                      errors =
                                                        setOf(
                                                          OutputUnit(
                                                            valid = true,
                                                            keywordLocation =
                                                              JsonPointer(
                                                                "/allOf/1/properties/collection/items/type",
                                                              ),
                                                            instanceLocation = JsonPointer("/collection/1"),
                                                          ),
                                                        ),
                                                    ),
                                                  ),
                                              ),
                                            ),
                                        ),
                                      ),
                                  ),
                                ),
                            ),
                          ),
                      ),
                    ),
                ),
              ),
          )
        //endregion
        res shouldBe expected
      }

      test("verbose output for invalid object") {
        val res = schema.validate(invalidObject, OutputCollector.verbose())
        val expected =
          //region Expected result
          OutputUnit(
            valid = false,
            keywordLocation = JsonPointer.ROOT,
            instanceLocation = JsonPointer.ROOT,
            errors =
              setOf(
                OutputUnit(
                  valid = true,
                  keywordLocation = JsonPointer("/type"),
                  instanceLocation = JsonPointer.ROOT,
                ),
                OutputUnit(
                  valid = false,
                  keywordLocation = JsonPointer("/allOf"),
                  instanceLocation = JsonPointer.ROOT,
                  errors =
                    setOf(
                      OutputUnit(
                        valid = false,
                        keywordLocation = JsonPointer("/allOf/0"),
                        instanceLocation = JsonPointer.ROOT,
                        errors =
                          setOf(
                            OutputUnit(
                              valid = false,
                              keywordLocation = JsonPointer("/allOf/0/\$ref"),
                              instanceLocation = JsonPointer.ROOT,
                              absoluteKeywordLocation =
                                AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference")),
                              errors =
                                setOf(
                                  OutputUnit(
                                    valid = true,
                                    keywordLocation = JsonPointer("/allOf/0/\$ref/type"),
                                    instanceLocation = JsonPointer.ROOT,
                                    absoluteKeywordLocation =
                                      AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference/type")),
                                  ),
                                  OutputUnit(
                                    valid = false,
                                    keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames"),
                                    instanceLocation = JsonPointer.ROOT,
                                    absoluteKeywordLocation =
                                      AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference/propertyNames")),
                                    errors =
                                      setOf(
                                        OutputUnit(
                                          valid = true,
                                          keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames"),
                                          instanceLocation = JsonPointer("/collection"),
                                          absoluteKeywordLocation =
                                            AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference/propertyNames")),
                                          errors =
                                            setOf(
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/type"),
                                                instanceLocation = JsonPointer("/collection"),
                                                absoluteKeywordLocation =
                                                  AbsoluteLocation(
                                                    Uri.EMPTY,
                                                    JsonPointer("/\$defs/reference/propertyNames/type"),
                                                  ),
                                              ),
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/minLength"),
                                                instanceLocation = JsonPointer("/collection"),
                                                absoluteKeywordLocation =
                                                  AbsoluteLocation(
                                                    Uri.EMPTY,
                                                    JsonPointer("/\$defs/reference/propertyNames/minLength"),
                                                  ),
                                              ),
                                            ),
                                        ),
                                        OutputUnit(
                                          valid = false,
                                          keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames"),
                                          instanceLocation = JsonPointer("/a"),
                                          absoluteKeywordLocation =
                                            AbsoluteLocation(Uri.EMPTY, JsonPointer("/\$defs/reference/propertyNames")),
                                          errors =
                                            setOf(
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/type"),
                                                instanceLocation = JsonPointer("/a"),
                                                absoluteKeywordLocation =
                                                  AbsoluteLocation(
                                                    Uri.EMPTY,
                                                    JsonPointer("/\$defs/reference/propertyNames/type"),
                                                  ),
                                              ),
                                              OutputUnit(
                                                valid = false,
                                                keywordLocation = JsonPointer("/allOf/0/\$ref/propertyNames/minLength"),
                                                instanceLocation = JsonPointer("/a"),
                                                absoluteKeywordLocation =
                                                  AbsoluteLocation(
                                                    Uri.EMPTY,
                                                    JsonPointer("/\$defs/reference/propertyNames/minLength"),
                                                  ),
                                                error = "property a: string length (1) must be greater or equal to 3",
                                              ),
                                            ),
                                        ),
                                      ),
                                  ),
                                ),
                            ),
                          ),
                      ),
                      OutputUnit(
                        valid = false,
                        keywordLocation = JsonPointer("/allOf/1"),
                        instanceLocation = JsonPointer.ROOT,
                        errors =
                          setOf(
                            OutputUnit(
                              valid = false,
                              keywordLocation = JsonPointer("/allOf/1/properties"),
                              instanceLocation = JsonPointer.ROOT,
                              errors =
                                setOf(
                                  OutputUnit(
                                    valid = false,
                                    keywordLocation = JsonPointer("/allOf/1/properties"),
                                    instanceLocation = JsonPointer("/collection"),
                                    errors =
                                      setOf(
                                        OutputUnit(
                                          valid = false,
                                          keywordLocation = JsonPointer("/allOf/1/properties/collection"),
                                          instanceLocation = JsonPointer("/collection"),
                                          errors =
                                            setOf(
                                              OutputUnit(
                                                valid = true,
                                                keywordLocation = JsonPointer("/allOf/1/properties/collection/type"),
                                                instanceLocation = JsonPointer("/collection"),
                                              ),
                                              OutputUnit(
                                                valid = false,
                                                keywordLocation = JsonPointer("/allOf/1/properties/collection/items"),
                                                instanceLocation = JsonPointer("/collection"),
                                                errors =
                                                  setOf(
                                                    OutputUnit(
                                                      valid = false,
                                                      keywordLocation =
                                                        JsonPointer(
                                                          "/allOf/1/properties/collection/items",
                                                        ),
                                                      instanceLocation = JsonPointer("/collection/0"),
                                                      errors =
                                                        setOf(
                                                          OutputUnit(
                                                            valid = false,
                                                            keywordLocation =
                                                              JsonPointer(
                                                                "/allOf/1/properties/collection/items/type",
                                                              ),
                                                            instanceLocation = JsonPointer("/collection/0"),
                                                            error = "element is not a string",
                                                          ),
                                                        ),
                                                    ),
                                                    OutputUnit(
                                                      valid = true,
                                                      keywordLocation =
                                                        JsonPointer(
                                                          "/allOf/1/properties/collection/items",
                                                        ),
                                                      instanceLocation = JsonPointer("/collection/1"),
                                                      errors =
                                                        setOf(
                                                          OutputUnit(
                                                            valid = true,
                                                            keywordLocation =
                                                              JsonPointer(
                                                                "/allOf/1/properties/collection/items/type",
                                                              ),
                                                            instanceLocation = JsonPointer("/collection/1"),
                                                          ),
                                                        ),
                                                    ),
                                                    OutputUnit(
                                                      valid = false,
                                                      keywordLocation =
                                                        JsonPointer(
                                                          "/allOf/1/properties/collection/items",
                                                        ),
                                                      instanceLocation = JsonPointer("/collection/2"),
                                                      errors =
                                                        setOf(
                                                          OutputUnit(
                                                            valid = false,
                                                            keywordLocation =
                                                              JsonPointer(
                                                                "/allOf/1/properties/collection/items/type",
                                                              ),
                                                            instanceLocation = JsonPointer("/collection/2"),
                                                            error = "element is not a string",
                                                          ),
                                                        ),
                                                    ),
                                                  ),
                                              ),
                                            ),
                                        ),
                                      ),
                                  ),
                                ),
                            ),
                          ),
                      ),
                    ),
                ),
              ),
          )
        //endregion
        compare(expected, res)
        res shouldBe expected
      }
    }
  }

  private fun compare(
    expected: OutputUnit,
    actual: OutputUnit,
  ): Boolean {
    if (expected.valid != actual.valid) {
      println("diff valid flag: $expected and $actual")
      return false
    }
    if (expected.keywordLocation != actual.keywordLocation) {
      println("diff keyword location: $expected and $actual")
      return false
    }
    if (expected.instanceLocation != actual.instanceLocation) {
      println("diff instance location: $expected and $actual")
      return false
    }
    if (expected.absoluteKeywordLocation != actual.absoluteKeywordLocation) {
      println("diff absolute keyword location: $expected and $actual")
      return false
    }
    if (expected.errors.isEmpty() xor actual.errors.isEmpty()) {
      println("diff number of errors: $expected and $actual")
      return false
    }
    var match = true
    expected.errors.forEach { expectedErr ->
      val actualErr =
        actual.errors.find {
          it.keywordLocation == expectedErr.keywordLocation &&
            it.instanceLocation == expectedErr.instanceLocation
        } ?: run {
          println("no match for $expectedErr")
          match = false
          return@forEach
        }
      match = compare(expectedErr, actualErr)
    }
    return match
  }
}