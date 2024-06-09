package io.github.optimumcode.json.schema.benchmark

import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.JsonSchema
import io.github.optimumcode.json.schema.OutputCollector
import kotlinx.benchmark.Benchmark
import kotlinx.benchmark.Blackhole
import kotlinx.benchmark.Setup
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.okio.decodeFromBufferedSource
import okio.Path.Companion.toPath
import okio.buffer
import okio.use

/**
 * This abstract class is extracted to bypass limitations for a single benchmark mode for native targets.
 * Also, it allows to configure different output time units for benchmarks
 */
abstract class AbstractCommonBenchmark {
  abstract var objectPath: String

  abstract var schemaPath: String

  private lateinit var schema: JsonSchema
  private lateinit var document: JsonElement

  @OptIn(ExperimentalSerializationApi::class)
  @Setup
  fun setup() {
    val fs = fileSystem()
    document =
      fs.openReadOnly(objectPath.toPath()).use { fh ->
        fh.source().buffer().use {
          Json.decodeFromBufferedSource(JsonElement.serializer(), it)
        }
      }
    schema =
      fs.openReadOnly(schemaPath.toPath()).use { fh ->
        fh.source().buffer().use {
          Json.decodeFromBufferedSource(JsonElement.serializer(), it)
        }
      }.let { schemaElement ->
        JsonSchema.fromJsonElement(schemaElement)
      }
  }

  @Benchmark
  fun validate(bh: Blackhole) {
    bh.consume(schema.validate(document, ErrorCollector.EMPTY))
  }

  @Benchmark
  fun validateFlag(bh: Blackhole) {
    bh.consume(schema.validate(document, OutputCollector.flag()))
  }

  @Benchmark
  fun validateBasic(bh: Blackhole) {
    bh.consume(schema.validate(document, OutputCollector.basic()))
  }

  @Benchmark
  fun validateDetailed(bh: Blackhole) {
    bh.consume(schema.validate(document, OutputCollector.detailed()))
  }

  @Benchmark
  fun validateVerbose(bh: Blackhole) {
    bh.consume(schema.validate(document, OutputCollector.verbose()))
  }
}