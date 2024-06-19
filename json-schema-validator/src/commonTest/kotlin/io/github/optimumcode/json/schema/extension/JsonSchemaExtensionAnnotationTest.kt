package io.github.optimumcode.json.schema.extension

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchemaLoader
import io.github.optimumcode.json.schema.ValidationError
import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.shouldBe
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive

class JsonSchemaExtensionAnnotationTest : FunSpec() {
  init {
    val schemaDef =
      """
      {
        "foo": "ann1",
        "bar": "ann1"
      }
      """.trimIndent()
    test("can see annotation when registered in right order") {
      val schema =
        JsonSchemaLoader.create()
          .withExtensions(FooFactory, BarFactory)
          .fromDefinition(schemaDef)

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(JsonNull, errors::add)
      assertSoftly {
        valid shouldBe true
        errors shouldHaveSize 0
      }
    }

    test("cannot see annotation when registered in wrong order") {
      val schema =
        JsonSchemaLoader.create()
          .withExtensions(BarFactory, FooFactory)
          .fromDefinition(schemaDef)

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(JsonNull, errors::add)
      assertSoftly {
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/bar"),
            objectPath = JsonPointer.ROOT,
            message = "expected 'ann1' but actual 'null'",
          ),
        )
      }
    }

    test("cannot see annotation when using different key with same name and type") {
      val schema =
        JsonSchemaLoader.create()
          .withExtensions(FooFactory, WrongBarFactory)
          .fromDefinition(schemaDef)

      val errors = mutableListOf<ValidationError>()
      val valid = schema.validate(JsonNull, errors::add)
      assertSoftly {
        valid shouldBe false
        errors.shouldContainExactly(
          ValidationError(
            schemaPath = JsonPointer("/bar"),
            objectPath = JsonPointer.ROOT,
            message = "expected 'ann1' but actual 'null'",
          ),
        )
      }
    }
  }
}

private object FooFactory : ExternalAssertionFactory {
  val ANNOTATION: AnnotationKey<String> = AnnotationKey.simple(keywordName)

  override val keywordName: String
    get() = "foo"

  override fun create(
    element: JsonElement,
    context: ExternalLoadingContext,
  ): ExternalAssertion {
    require(element is JsonPrimitive && element.isString) { "$keywordName must be a string" }
    val annotationValue = element.content
    return object : ExternalAssertion {
      override fun validate(
        element: JsonElement,
        context: ExternalAssertionContext,
        errorCollector: ErrorCollector,
      ): Boolean {
        context.annotationCollector.annotate(ANNOTATION, annotationValue)
        return true
      }
    }
  }
}

private object BarFactory : ExternalAssertionFactory {
  override val keywordName: String
    get() = "bar"

  override fun create(
    element: JsonElement,
    context: ExternalLoadingContext,
  ): ExternalAssertion {
    require(element is JsonPrimitive && element.isString) { "$keywordName must be a string" }
    val expectedAnnotation: String = element.content
    val path = context.schemaPath
    return object : ExternalAssertion {
      override fun validate(
        element: JsonElement,
        context: ExternalAssertionContext,
        errorCollector: ErrorCollector,
      ): Boolean {
        val annotation: String? = context.annotationCollector.annotated(FooFactory.ANNOTATION)
        if (annotation == expectedAnnotation) {
          return true
        }

        errorCollector.onError(
          ValidationError(
            schemaPath = path,
            objectPath = context.objectPath,
            message = "expected '$expectedAnnotation' but actual '$annotation'",
          ),
        )
        return false
      }
    }
  }
}

private object WrongBarFactory : ExternalAssertionFactory {
  val WRONG_ANNOTATION: AnnotationKey<String> = AnnotationKey.simple(FooFactory.keywordName)
  override val keywordName: String
    get() = "bar"

  override fun create(
    element: JsonElement,
    context: ExternalLoadingContext,
  ): ExternalAssertion {
    require(element is JsonPrimitive && element.isString) { "$keywordName must be a string" }
    val expectedAnnotation: String = element.content
    val path = context.schemaPath
    return object : ExternalAssertion {
      override fun validate(
        element: JsonElement,
        context: ExternalAssertionContext,
        errorCollector: ErrorCollector,
      ): Boolean {
        val annotation: String? = context.annotationCollector.annotated(WRONG_ANNOTATION)
        if (annotation == expectedAnnotation) {
          return true
        }

        errorCollector.onError(
          ValidationError(
            schemaPath = path,
            objectPath = context.objectPath,
            message = "expected '$expectedAnnotation' but actual '$annotation'",
          ),
        )
        return false
      }
    }
  }
}