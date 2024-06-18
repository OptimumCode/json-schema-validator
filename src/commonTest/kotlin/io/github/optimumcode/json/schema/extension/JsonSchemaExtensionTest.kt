package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.ValidationError
import io.kotest.assertions.assertSoftly
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.core.test.TestScope
import io.kotest.matchers.collections.shouldContainExactlyInAnyOrder
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject

class JsonSchemaExtensionTest : FunSpec() {
  init {
    test("reports keyword that matches one of the existing keywords") {
      shouldThrow<IllegalStateException> {
        JsonSchemaLoader
          .create()
          .withExtensions(DuplicatedAssertionFactory)
      }.message shouldBe "external factory with keyword 'type' overlaps with 'type' keyword from DRAFT_6"
    }

    test("reports duplicated extension keywords") {
      shouldThrow<IllegalStateException> {
        JsonSchemaLoader
          .create()
          .withExtensions(SimpleDateFormatAssertionFactory, SimpleDateFormatAssertionFactory)
      }.message shouldBe "duplicated extension factory with keyword 'dateFormat'"
    }

    val schemaDef =
      """
      {
        "properties": {
          "date": {
            "dateFormat": "iso"
          },
          "time": {
            "timeFormat": "iso"
          }
        }
      }
      """.trimIndent()

    val validObject =
      buildJsonObject {
        put("time", JsonPrimitive("12:35:42"))
        put("date", JsonPrimitive("2024-02-10"))
      }

    val invalidObject =
      buildJsonObject {
        put("time", JsonPrimitive("12h35m42s"))
        put("date", JsonPrimitive("2024/02/10"))
      }

    fun TestScope.checkValidAndInvalid(schema: JsonSchema) {
      withClue("checking valid object") {
        assertSoftly {
          val errors = mutableListOf<ValidationError>()
          val valid = schema.validate(validObject, errors::add)
          valid shouldBe true
          errors shouldHaveSize 0
        }
      }
      withClue("checking invalid object") {
        assertSoftly {
          val errors = mutableListOf<ValidationError>()
          val valid = schema.validate(invalidObject, errors::add)
          valid shouldBe false
          errors.shouldContainExactlyInAnyOrder(
            ValidationError(
              schemaPath = JsonPointer("/properties/time/timeFormat"),
              objectPath = JsonPointer("/time"),
              message = "invalid time format",
            ),
            ValidationError(
              schemaPath = JsonPointer("/properties/date/dateFormat"),
              objectPath = JsonPointer("/date"),
              message = "invalid date format",
            ),
          )
        }
      }
    }

    test("registers all extensions with varargs") {
      val schema =
        shouldNotThrowAny {
          JsonSchemaLoader
            .create()
            .withExtensions(SimpleTimeFormatAssertionFactory, SimpleDateFormatAssertionFactory)
            .fromDefinition(schemaDef)
        }
      checkValidAndInvalid(schema)
    }

    test("registers all extensions with iterable") {
      val schema =
        shouldNotThrowAny {
          JsonSchemaLoader
            .create()
            .withExtensions(listOf(SimpleTimeFormatAssertionFactory, SimpleDateFormatAssertionFactory))
            .fromDefinition(schemaDef)
        }
      checkValidAndInvalid(schema)
    }
  }
}

private object DuplicatedAssertionFactory : ExternalAssertionFactory {
  override val keywordName: String
    get() = "type"

  override fun create(
    element: JsonElement,
    context: ExternalLoadingContext,
  ): ExternalAssertion = throw UnsupportedOperationException("should never be invoked")
}

private object SimpleDateFormatAssertionFactory : ExternalAssertionFactory {
  override val keywordName: String
    get() = "dateFormat"

  override fun create(
    element: JsonElement,
    context: ExternalLoadingContext,
  ): ExternalAssertion {
    require(element is JsonPrimitive) { "$keywordName must be a string primitive" }
    val type = element.content
    require(type.equals("iso", ignoreCase = true)) {
      "${SimpleTimeFormatAssertionFactory.keywordName} has unsupported value '$type'"
    }
    val path = context.schemaPath
    return object : ExternalAssertion {
      private val dateRegex = Regex("(\\d{4})-(\\d{2})-(\\d{2})")

      override fun validate(
        element: JsonElement,
        context: ExternalAssertionContext,
        errorCollector: ErrorCollector,
      ): Boolean {
        if (element !is JsonPrimitive || !element.isString) {
          return true
        }
        return dateRegex.matches(element.content).also {
          if (!it) {
            errorCollector.onError(
              ValidationError(
                schemaPath = path,
                objectPath = context.objectPath,
                message = "invalid date format",
              ),
            )
          }
        }
      }
    }
  }
}

private object SimpleTimeFormatAssertionFactory : ExternalAssertionFactory {
  override val keywordName: String
    get() = "timeFormat"

  override fun create(
    element: JsonElement,
    context: ExternalLoadingContext,
  ): ExternalAssertion {
    require(element is JsonPrimitive) { "$keywordName must be a string primitive" }
    val type = element.content
    require(type.equals("iso", ignoreCase = true)) { "$keywordName has unsupported value '$type'" }

    val path = context.schemaPath
    return object : ExternalAssertion {
      private val timeRegex = Regex("\\d{2}:\\d{2}:\\d{2}(.\\d{1,9})?")

      override fun validate(
        element: JsonElement,
        context: ExternalAssertionContext,
        errorCollector: ErrorCollector,
      ): Boolean {
        if (element !is JsonPrimitive || !element.isString) {
          return true
        }
        return timeRegex.matches(element.content).also {
          if (!it) {
            errorCollector.onError(
              ValidationError(
                schemaPath = path,
                objectPath = context.objectPath,
                message = "invalid time format",
              ),
            )
          }
        }
      }
    }
  }
}