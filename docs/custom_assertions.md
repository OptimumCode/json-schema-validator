# Create and use custom assertions

The library provides functionality to create custom assertions that can be used in JSON schemes then.
Here you can see how you can add, register and use the custom assertion.

## Creating custom assertion

There are two interfaces you need to use here:
1. [ExternalAssertionFactory](../src/commonMain/kotlin/io/github/optimumcode/json/schema/extension/ExternalAssertionFactory.kt) -
   this interface creates an assertions from a JsonElement.
2. [ExternalAssertion](../src/commonMain/kotlin/io/github/optimumcode/json/schema/extension/ExternalAssertion.kt) -
   this interface is the actual implementation of the assertion that validates the corresponding element.

### ExternalAssertionFactory interface

The `ExternalAssertionFactory` interface is quite simple.
You need to implement `keywordName` property that returns a keyword associated with the assertion.

Another method is `create` that instantiates an `ExternalAssertion` implementation based on the `JsonElement` passed as a parameter.
There is also another parameter [ExternalLoadingContext](../src/commonMain/kotlin/io/github/optimumcode/json/schema/extension/ExternalLoadingContext.kt).
This object provides you information about current location in schema which should be used later 
when create a [ValidationError](../src/commonMain/kotlin/io/github/optimumcode/json/schema/ValidationError.kt).

Almost always the `ExternalAssertionFactory` does not have any state.
Because of that it is better to create it as a Kotlin `object` instead of regular `class`. 

### ExternalAssertion interface

The `ExternalAssertion` interface has only one method `validate`.
This method performs required actions and decides whether the passed `JsonElement` passes the assertion.
There are two more parameters in this method:
* [ExternalAssertionContext](../src/commonMain/kotlin/io/github/optimumcode/json/schema/extension/ExternalAssertionContext.kt);
* [ErrorCollector](../src/commonMain/kotlin/io/github/optimumcode/json/schema/ErrorCollector.kt).

`ExternalAssertionContext` contains information associated with currently validating `JsonElement`.
It has a JSON path that point to the location of the current `JsonElement` 
and [ExternalAnnotationCollector](../src/commonMain/kotlin/io/github/optimumcode/json/schema/extension/ExternalAnnotationCollector.kt).
The later one provides the way to add annotations to the `JsonElement` and communicate between different assertion using those.

## Registering custom assertions

You can register custom assertions using `withExtensions` methods on `JsonSchemaLoader` instance.

**NOTE: the order of registration is important in case the assertions uses annotations.**
**The assertions will be executed in the same order as their factories were registered.**

## Example

Let's try to implement a small assertion `dateFormat` that accepts a value `iso` and checks that the `JsonElement` matches ISO date format.

**NOTE: the example implementation does not check the date part values**

First we need to create an `ExternalAssertionFactory`:

```kotlin
import io.github.optimumcode.json.schema.extension.*
import kotlinx.serialization.json.*

object DateFormatAssertionFactory : ExternalAssertionFactory {
  private const val PROPERTY: String = "dateFormat"
  override val keywordName: String
    get() = PROPERTY // 1 - the keyword that is used for our assertion

  override fun create(
    element: JsonElement,
    context: ExternalLoadingContext,
  ): ExternalAssertion {
    require(element is JsonPrimitive && element.isString) { // 2 - validate the element
      "$PROPERTY must be a string"
    }
    val formatType: String = element.content
    require(formatType.equals("iso", ignoreCase = true)) { // 3 - we only support one format for now
      "$PROPERTY has unsupported value '$formatType'"
    }
    return DateFormatAssertion(
      context.schemaPath, // 4 - we pass the schema path to the assertion to use it later in case of validation error
    )
  }
}
```

Now we can create the `ExternalAssertion` itself:

```kotlin
import io.github.optimumcode.json.schema.extension.*
import io.github.optimumcode.json.schema.*
import io.github.optimumcode.json.pointer.*
import kotlinx.serialization.json.*

class DateFormatAssertion(
  private val schemaPath: JsonPointer,
) : ExternalAssertion {
  override fun validate(
    element: JsonElement,
    context: ExternalAssertionContext,
    errorCollector: ErrorCollector,
  ): Boolean {
    if (element !is JsonPrimitive || !element.isString) {
      return true // 1 - the assertion must ignore types that it does not expect. In our case the element must be a string
    }
    val matches = FORMAT_REGEX.matches(element.content) // 2 - checking the format
    if (!matches) {
      errorCollector.onError(  // 3 - creating error if value does not match the expected format
        ValidationError(
          schemaPath = schemaPath,  // 4 - set path to our keyword in schema
          objectPath = context.objectPath, // 5 - set path to the element in the object we validate
          message = "invalid date format", // 6 - specify the error message
        ),
      )
    }
    return matches // 7 - return the validation result
  }
  
  private companion object {
    private val FORMAT_REGEX = Regex("\\d{4}-\\d{2}-\\d{2}")
  }
}
```

Good. Once the assertion factory and assertion itself are implemented we can now register them and use.
Here is a code snippet that creates JSON schema using our custom assertion:

```kotlin
import io.github.optimumcode.json.schema.*

fun main() {
  val schema = JsonSchemaLoader.create()
    .withExtensions(DateFormatAssertionFactory)
    .fromDefinition(
      """
      {
        "properties": {
          "date": {
            "type": "string",
            "dateFormat": "iso"
          }
        }
      }
      """.trimMargin()
    )

  val validElement = toJsonElement(
    """
    {
        "date": "2024-02-10"
    }
    """.trimMargin()
  )

  val invalidElement = toJsonElement(
    """
    {
        "date": "2024/02/10"
    }
    """.trimMargin()
  )

  schema.validate(validElement, ErrorCollector.EMPTY) // returns true
  schema.validate(invalidElement, ErrorCollector.EMPTY) // returns false
}
```