package io.github.optimumcode.json.schema.cuncurrency

import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.SchemaType
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.booleans.shouldBeTrue
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject
import kotlin.time.Duration.Companion.milliseconds

class ConcurrentExecutionTest : FunSpec() {
  init {
    val schema =
      JsonSchema.Companion.fromDefinition(
        """
        {
          "properties": {
            "inner": {
              "type": "object",
              "properties": {
                "value": {
                  "type": "string"
                }
              }
            }
          }
        }
        """.trimIndent(),
        defaultType = SchemaType.DRAFT_2020_12,
      )

    test("BUG #224: JsonSchema can be used concurrently").config(coroutineTestScope = false) {
      val target =
        buildJsonObject {
          put(
            "inner",
            buildJsonObject {
              put("value", JsonPrimitive("test"))
            },
          )
        }
      shouldNotThrowAny {
        coroutineScope {
          withContext(Dispatchers.Default) {
            repeat(1000) {
              launch {
                // delay is added to force suspension and increase changes of catching a concurrent issue within JsonSchema
                delay(1.milliseconds)
                val result = schema.validate(target, OutputCollector.Companion.flag())
                result.valid.shouldBeTrue()
              }
            }
          }
        }
      }
    }
  }
}