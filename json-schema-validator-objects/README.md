# JSON schema object wrapper

This module allows wrapping Kotlin objects (e.g. Map, List, primitives) to `AbstractElement` that can be validated by JSON schema.

## Usage

```kotlin
val schema = JsonSchema.fromDefinition(/*schema*/)

val obj = mapOf(
  "a" to 42,
  "b" to listOf("test"),
  "c" to mapOf(
    "inner" to 42,
  ),
)

val result = schema.validate(wrapAsElement(obj), OutputCollector.flag())
```