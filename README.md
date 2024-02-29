# json-schema-validator

[![Licence](https://img.shields.io/github/license/OptimumCode/json-schema-validator)](https://opensource.org/license/mit/)
[![Supported-drafts](https://img.shields.io/endpoint?url=https://bowtie-json-schema.github.io/bowtie/badges/kotlin-kmp-json-schema-validator/supported_versions.json)](https://json-schema.org/specification)
![Codecov](https://img.shields.io/codecov/c/github/optimumcode/json-schema-validator)

![Maven Central Version](https://img.shields.io/maven-central/v/io.github.optimumcode/json-schema-validator)
![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/io.github.optimumcode/json-schema-validator?server=https%3A%2F%2Fs01.oss.sonatype.org)
![Sonatype Nexus (Snapshots)](https://img.shields.io/nexus/s/io.github.optimumcode/json-schema-validator?server=https%3A%2F%2Fs01.oss.sonatype.org)


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

implementation("io.github.optimumcode:json-schema-validator:0.0.8")
```

##### Groovy

```groovy
repositories {
  mavenCentral()
}

implementation 'io.github.optimumcode:json-schema-validator:0.0.8'
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

implementation("io.github.optimumcode:json-schema-validator:0.0.9-SNAPSHOT")
```

##### Groovy

```groovy
repositories {
  maven { url 'https://s01.oss.sonatype.org/content/repositories/snapshots' }
}

implementation 'io.github.optimumcode:json-schema-validator:0.0.9-SNAPSHOT'
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
  | $ref        | Supported                                                                                           |
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
  | $ref              | Supported                                                                                           |
  | $recursiveRef     | Supported                                                                                           |
  | $defs/definitions | Supported. Definitions are loaded and can be referenced                                             |
  | $vocabulary       | Supported. You can disable and enable vocabularies through custom meta-schemes                      |

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
  | $ref                       | Supported                                                                                           |
  | $dynamicRef/$dynamicAnchor | Supported                                                                                           |
  | $defs/definitions          | Supported. Definitions are loaded and can be referenced                                             |
  | $vocabulary                | Supported. You can disable and enable vocabularies through custom meta-schemes                      |

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

## Format assertion

The library supports `format` assertion. For now only a few formats are supported:
* date
* time
* date-time
* duration

But there is an API to implement the user's defined format validation.
The [FormatValidator](src/commonMain/kotlin/io/github/optimumcode/json/schema/ValidationError.kt) interface can be user for that.
The custom format validators can be register in [JsonSchemaLoader](src/commonMain/kotlin/io/github/optimumcode/json/schema/JsonSchemaLoader.kt).

_**Please note, that the format validation API is marked as experimental and will require `OptIn` declaration in your code.**_

## Custom assertions

You can implement custom assertions and use them. Read more [here](docs/custom_assertions.md).

## Compliance to JSON schema test suites

This library uses official [JSON schema test suites](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
as a part of the CI to make sure the validation meet the expected behavior.
Not everything is supported right now but the missing functionality might be added in the future.
The test are located [here](test-suites).


**NOTE:** _Python 3.* is required to run test-suites._
_It is used to generate list of remote schemas using [this script](test-suites/schema-test-suite/bin/jsonschema_suite)_

This library is also integrated into [bowtie](https://github.com/bowtie-json-schema/bowtie)
and runs against the official test suite along with other libraries.
You can find the report [here](https://bowtie.report/).

[![draft-07](https://img.shields.io/endpoint?url=https://bowtie-json-schema.github.io/bowtie/badges/kotlin-kmp-json-schema-validator/compliance/Draft_7.json)](https://bowtie.report/#/dialects/draft7?language=kotlin)
[![draft/2019-09](https://img.shields.io/endpoint?url=https://bowtie-json-schema.github.io/bowtie/badges/kotlin-kmp-json-schema-validator/compliance/Draft_2019-09.json)](https://bowtie.report/#/dialects/draft2019-09?language=kotlin)
[![draft/2020-12](https://img.shields.io/endpoint?url=https://bowtie-json-schema.github.io/bowtie/badges/kotlin-kmp-json-schema-validator/compliance/Draft_2020-12.json)](https://bowtie.report/#/dialects/draft2020-12?language=kotlin)

## Benchmarking

There is a benchmark project that compares this library with some other ones:

+ [OpenAPI schema validator](https://github.com/openapi-processor/openapi-parser/tree/master/json-schema-validator)
+ [Networknt Schema Validator](https://github.com/networknt/json-schema-validator)

The benchmark is scheduled to run every night on Monday.
You can see the results in the latest workflow execution.

## Developer notes

The update to Kotlin 1.9.22 came with an issue for JS incremental compilation.
In case you see an error about main function that already bind please execute `clean` task.

## Future plans

- [x] Add `$schema` property validation (if not set the latest supported will be used)
- [x] Add proper `$id` support (for nested schemas and for referencing)
- [x] Add support for newer drafts
  - [x] [Draft 2019-09 (Draft 8)](https://json-schema.org/specification-links.html#draft-2019-09-formerly-known-as-draft-8)
  - [x] [2020-12](https://json-schema.org/specification-links.html#2020-12)
- [x] Add support for schemas from external documents
  - [x] Load schemas from local sources
  - [ ] Load schemas from remote sources
- [ ] Formalize error output as it is defined in the latest drafts (have not fully decided if it should be done)