# json-schema-validator

[![Licence](https://img.shields.io/github/license/OptimumCode/json-schema-validator)](https://opensource.org/license/mit/)

This multiplatform library is an implementation of JSON schema that can validate
[JsonElement](https://github.com/Kotlin/kotlinx.serialization/blob/master/formats/json/commonMain/src/kotlinx/serialization/json/JsonElement.kt)
from [kotlinx.serialization-json](https://github.com/Kotlin/kotlinx.serialization/tree/master/formats/json) library.

## Usage

```kotlin
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.ValidationError
import kotlinx.serialization.json.JsonElement

val key = "\$" // to use $ in multiline string
val schema = JsonSchema.fromDefinition(
  """
  {
    "${key}schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
      "positiveInteger": {
        "type": "integer",
        "minimum": 0
      }
    },
    "properties": {
      "size": { "${key}ref": "#/definitions/positiveInteger" }
    }
  }
  """.trimIndent(),
)
val errors = mutableListOf<ValidationError>()
val elementToValidate: JsonElement = loadJsonToValidate()

val valid = schema.validate(elementToValidate, errors::add)
```

## Supported JSON schema drafts:

- [Draft 7](https://json-schema.org/specification-links.html#draft-7)
  - Keywords

  | Keyword     | Status                                                                                                                 |
  |:------------|:-----------------------------------------------------------------------------------------------------------------------|
  | $id         | Basic support. Only in root schema. Currently, it is interpreted as a string. Validation is in the future plans        |
  | $schema     | There is not validation of the $schema property at the moment                                                          |
  | $ref        | Partially supported. Only references like _**#/path/in/schema**_ will work. The circled references validation is added |
  | definitions | Supported. Definitions are loaded and can be referenced                                                                |

  - Assertions

  | Category      | Assertion            | Status                                                                                                                                          |
  |:--------------|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
  | General       | type                 | Supported all type [defined in the specification](https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.1.1) |
  |               | enum                 | Supported                                                                                                                                       |
  |               | const                | Supported                                                                                                                                       |
  | Numbers       | multipleOf           | Supported                                                                                                                                       |
  |               | maximum              | Supported                                                                                                                                       |
  |               | exclusiveMaximum     | Supported                                                                                                                                       |
  |               | minimum              | Supported                                                                                                                                       |
  |               | exclusiveMinimum     | Supported                                                                                                                                       |
  | Strings       | maxLength            | Supported                                                                                                                                       |
  |               | minLength            | Supported                                                                                                                                       |
  |               | pattern              | Supported (kotlin.text.Regex is used)                                                                                                           |
  | Arrays        | items                | Supported                                                                                                                                       |
  |               | additionalItems      | Supported                                                                                                                                       |
  |               | maxItems             | Supported                                                                                                                                       |
  |               | uniqueItems          | Supported                                                                                                                                       |
  |               | contains             | Supported                                                                                                                                       |
  | Objects       | maxProperties        | Supported                                                                                                                                       |
  |               | minProperties        | Supported                                                                                                                                       |
  |               | required             | Supported                                                                                                                                       |
  |               | properties           | Supported                                                                                                                                       |
  |               | patternProperties    | Supported (kotlin.text.Regex is used)                                                                                                           |
  |               | additionalProperties | Supported                                                                                                                                       |
  |               | dependencies         | Supported                                                                                                                                       |
  |               | propertyNames        | Supported                                                                                                                                       |
  | Conditions    | if/then/else         | Supported                                                                                                                                       |
  | Boolean logic | allOf                | Supported                                                                                                                                       |
  |               | anyOf                | Supported (all validation will be executed even if the element matches the first one)                                                           |
  |               | oneOf                | Supported                                                                                                                                       |
  |               | not                  | Supported                                                                                                                                       |

## Future plans

- [ ] Add `$schema` property validation (if not set the latest supported will be used)
- [ ] Add proper `$id` support (for nested schemas and for referencing)
- [ ] Add support for newer drafts
  - [ ] [Draft 2019-09 (Draft 8)](https://json-schema.org/specification-links.html#draft-2019-09-formerly-known-as-draft-8)
  - [ ] [2020-12](https://json-schema.org/specification-links.html#2020-12)
- [ ] Formalize error output as it is defined in the latest drafts (have not fully decided if it should be done)