# json-schema-validator

[![Licence](https://img.shields.io/github/license/OptimumCode/json-schema-validator)](https://opensource.org/license/mit/)

This multiplatform library is an implementation of JSON schema that can validate
[JsonElement](https://github.com/Kotlin/kotlinx.serialization/blob/master/formats/json/commonMain/src/kotlinx/serialization/json/JsonElement.kt)
from [kotlinx.serialization-json](https://github.com/Kotlin/kotlinx.serialization/tree/master/formats/json) library.

## Usage

### Supported targets

| Target            |
|-------------------|
| jvm               |
| js                |
| macosX64          |
| macosArm64        |
| iosArm64          |
| iosSimulatorArm64 |
| linuxX64          |
| linuxArm64        |
| mingwX64          |

### Dependencies

#### Releases

In order to use releases add Maven Central repository to the list of repositories.

##### Kotlin

```kotlin
repositories {
  mavenCentral()
}

implementation("io.github.optimumcode:json-schema-validator:0.0.4")
```

##### Groovy

```groovy
repositories {
  mavenCentral()
}

implementation 'io.github.optimumcode:json-schema-validator:0.0.4'
```

_Release are published to Sonatype repository. The synchronization with Maven Central takes time._
_If you want to use the release right after the publication you should add Sonatype Release repository to your build script._

##### Kotlin

```kotlin
repositories {
  maven(url = "https://s01.oss.sonatype.org/content/repositories/releases/")
}
```

##### Groovy

```groovy
repositories {
  maven { url 'https://s01.oss.sonatype.org/content/repositories/releases/' }
}
```

#### Snapshots

_If you want to use SNAPSHOT version you should add Sonatype Snapshot repository to your build script._

##### Kotlin

```kotlin
repositories {
  maven(url = "https://s01.oss.sonatype.org/content/repositories/snapshots")
}

implementation("io.github.optimumcode:json-schema-validator:0.0.5-SNAPSHOT")
```

##### Groovy

```groovy
repositories {
  maven { url 'https://s01.oss.sonatype.org/content/repositories/snapshots' }
}

implementation 'io.github.optimumcode:json-schema-validator:0.0.5-SNAPSHOT'
```

### Example

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
  <details>
  <summary>Supported keywords</summary>
  
  - Core

  | Keyword     | Status                                                                                              |
  |:------------|:----------------------------------------------------------------------------------------------------|
  | $id         | Supported. $id in sub-schemas are collected as well and can be used in $ref                         |
  | $schema     | Supported. Validates if schema is one of the supported schemas. The last supported is used if empty |
  | $ref        | Supported (except references to schemas from another document)                                      |
  | definitions | Supported. Definitions are loaded and can be referenced                                             |

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
  </details>
- [Draft 2019-09](https://json-schema.org/specification-links#draft-2019-09-(formerly-known-as-draft-8))
  <details>
  <summary>Supported keywords</summary>

  - Core

  | Keyword           | Status                                                                                              |
  |:------------------|:----------------------------------------------------------------------------------------------------|
  | $id               | Supported. $id in sub-schemas are collected as well and can be used in $ref                         |
  | $schema           | Supported. Validates if schema is one of the supported schemas. The last supported is used if empty |
  | $ref              | Supported (except references to schemas from another document)                                      |
  | $recursiveRef     | Supported (does not work yet to extend schemas from other documents)                                |
  | $defs/definitions | Supported. Definitions are loaded and can be referenced                                             |

  - Assertions

  | Category      | Assertion             | Status                                                                                                                                          |
  |:--------------|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
  | General       | type                  | Supported all type [defined in the specification](https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.1.1) |
  |               | enum                  | Supported                                                                                                                                       |
  |               | const                 | Supported                                                                                                                                       |
  | Numbers       | multipleOf            | Supported                                                                                                                                       |
  |               | maximum               | Supported                                                                                                                                       |
  |               | exclusiveMaximum      | Supported                                                                                                                                       |
  |               | minimum               | Supported                                                                                                                                       |
  |               | exclusiveMinimum      | Supported                                                                                                                                       |
  | Strings       | maxLength             | Supported                                                                                                                                       |
  |               | minLength             | Supported                                                                                                                                       |
  |               | pattern               | Supported (kotlin.text.Regex is used)                                                                                                           |
  | Arrays        | items                 | Supported                                                                                                                                       |
  |               | additionalItems       | Supported                                                                                                                                       |
  |               | unevaluatedItems      | Supported                                                                                                                                       |
  |               | maxItems              | Supported                                                                                                                                       |
  |               | uniqueItems           | Supported                                                                                                                                       |
  |               | contains              | Supported                                                                                                                                       |
  |               | minContains           | Supported (does not affect the work of contains assertion anyhow even if minContains=0)                                                         |
  |               | maxContains           | Supported                                                                                                                                       |
  | Objects       | maxProperties         | Supported                                                                                                                                       |
  |               | minProperties         | Supported                                                                                                                                       |
  |               | required              | Supported                                                                                                                                       |
  |               | properties            | Supported                                                                                                                                       |
  |               | patternProperties     | Supported (kotlin.text.Regex is used)                                                                                                           |
  |               | additionalProperties  | Supported                                                                                                                                       |
  |               | unevaluatedProperties | Supported                                                                                                                                       |
  |               | dependentRequired     | Supported                                                                                                                                       |
  |               | dependentSchemas      | Supported                                                                                                                                       |
  |               | propertyNames         | Supported                                                                                                                                       |
  | Conditions    | if/then/else          | Supported                                                                                                                                       |
  | Boolean logic | allOf                 | Supported                                                                                                                                       |
  |               | anyOf                 | Supported (all validation will be executed even if the element matches the first one)                                                           |
  |               | oneOf                 | Supported                                                                                                                                       |
  |               | not                   | Supported                                                                                                                                       |
  </details>
- [Draft 2020-12](https://json-schema.org/specification-links#2020-12)
  <details>
  <summary>Supported keywords</summary>

  - Core

  | Keyword                    | Status                                                                                              |
  |:---------------------------|:----------------------------------------------------------------------------------------------------|
  | $id                        | Supported. $id in sub-schemas are collected as well and can be used in $ref                         |
  | $schema                    | Supported. Validates if schema is one of the supported schemas. The last supported is used if empty |
  | $ref                       | Supported (except references to schemas from another document)                                      |
  | $dynamicRef/$dynamicAnchor | Supported (does not work yet to extend schemas from other documents)                                |
  | $defs/definitions          | Supported. Definitions are loaded and can be referenced                                             |

  - Assertions

  | Category      | Assertion             | Status                                                                                                                                          |
  |:--------------|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
  | General       | type                  | Supported all type [defined in the specification](https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.1.1) |
  |               | enum                  | Supported                                                                                                                                       |
  |               | const                 | Supported                                                                                                                                       |
  | Numbers       | multipleOf            | Supported                                                                                                                                       |
  |               | maximum               | Supported                                                                                                                                       |
  |               | exclusiveMaximum      | Supported                                                                                                                                       |
  |               | minimum               | Supported                                                                                                                                       |
  |               | exclusiveMinimum      | Supported                                                                                                                                       |
  | Strings       | maxLength             | Supported                                                                                                                                       |
  |               | minLength             | Supported                                                                                                                                       |
  |               | pattern               | Supported (kotlin.text.Regex is used)                                                                                                           |
  | Arrays        | prefixItems           | Supported                                                                                                                                       |
  |               | items                 | Supported                                                                                                                                       |
  |               | unevaluatedItems      | Supported                                                                                                                                       |
  |               | maxItems              | Supported                                                                                                                                       |
  |               | uniqueItems           | Supported                                                                                                                                       |
  |               | contains              | Supported                                                                                                                                       |
  |               | minContains           | Supported                                                                                                                                       |
  |               | maxContains           | Supported                                                                                                                                       |
  | Objects       | maxProperties         | Supported                                                                                                                                       |
  |               | minProperties         | Supported                                                                                                                                       |
  |               | required              | Supported                                                                                                                                       |
  |               | properties            | Supported                                                                                                                                       |
  |               | patternProperties     | Supported (kotlin.text.Regex is used)                                                                                                           |
  |               | additionalProperties  | Supported                                                                                                                                       |
  |               | unevaluatedProperties | Supported                                                                                                                                       |
  |               | dependentRequired     | Supported                                                                                                                                       |
  |               | dependentSchemas      | Supported                                                                                                                                       |
  |               | propertyNames         | Supported                                                                                                                                       |
  | Conditions    | if/then/else          | Supported                                                                                                                                       |
  | Boolean logic | allOf                 | Supported                                                                                                                                       |
  |               | anyOf                 | Supported (all validation will be executed even if the element matches the first one)                                                           |
  |               | oneOf                 | Supported                                                                                                                                       |
  |               | not                   | Supported                                                                                                                                       |
  </details>

## Compliance to JSON schema test suites

This library uses official [JSON schema test suites](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
as a part of the CI to make sure the validation meet the expected behavior.
Not everything is supported right now but the missing functionality might be added in the future.
The test are located [here](test-suites).

## Future plans

- [x] Add `$schema` property validation (if not set the latest supported will be used)
- [x] Add proper `$id` support (for nested schemas and for referencing)
- [x] Add support for newer drafts
  - [x] [Draft 2019-09 (Draft 8)](https://json-schema.org/specification-links.html#draft-2019-09-formerly-known-as-draft-8)
  - [x] [2020-12](https://json-schema.org/specification-links.html#2020-12)
- [ ] Add support for schemas from external documents
  - [ ] Load schemas from local sources
  - [ ] Load schemas from remote sources
- [ ] Formalize error output as it is defined in the latest drafts (have not fully decided if it should be done)