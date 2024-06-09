package io.github.optimumcode.json.schema.benchmark

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.networknt.schema.JsonSchemaFactory
import com.networknt.schema.OutputFormat
import com.networknt.schema.SchemaValidatorsConfig
import com.networknt.schema.SpecVersion.VersionFlag.V7
import io.github.optimumcode.json.schema.ErrorCollector
import io.github.optimumcode.json.schema.OutputCollector
import io.github.optimumcode.json.schema.ValidationError
import io.github.optimumcode.json.schema.fromStream
import io.openapiprocessor.jackson.JacksonConverter
import io.openapiprocessor.jsonschema.reader.UriReader
import io.openapiprocessor.jsonschema.schema.DocumentLoader
import io.openapiprocessor.jsonschema.schema.JsonInstance
import io.openapiprocessor.jsonschema.schema.JsonSchema
import io.openapiprocessor.jsonschema.schema.Output.FLAG
import io.openapiprocessor.jsonschema.schema.SchemaStore
import io.openapiprocessor.jsonschema.validator.Validator
import io.openapiprocessor.jsonschema.validator.ValidatorSettings
import kotlinx.benchmark.Benchmark
import kotlinx.benchmark.Blackhole
import kotlinx.benchmark.Setup
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.decodeFromStream
import java.io.File
import java.nio.file.Path
import kotlin.io.path.inputStream

/**
 * This abstract class is extracted to configure different output time units for benchmarks
 */
abstract class AbstractComparisonBenchmark {
  abstract var objectPath: String

  abstract var schemaPath: String

  // OpenAPI schema
  private lateinit var openapiSchema: JsonSchema
  private lateinit var openapiDocument: JsonInstance
  private val openapiValidator: Validator = Validator(ValidatorSettings().setOutput(FLAG))

  // networknt
  private lateinit var networkntSchema: com.networknt.schema.JsonSchema
  private lateinit var networkntDocument: JsonNode

  private lateinit var schema: io.github.optimumcode.json.schema.JsonSchema
  private lateinit var document: JsonElement

  @Setup
  fun setup() {
    setupOpenAPI()
    setupNetworknt()

    setupKmp()
  }

  private fun setupNetworknt() {
    val factory = JsonSchemaFactory.getInstance(V7)
    networkntSchema =
      Path.of(schemaPath).inputStream().use {
        factory.getSchema(it, SchemaValidatorsConfig())
      }
    networkntDocument =
      Path.of(objectPath).inputStream().use {
        ObjectMapper().readTree(it)
      }
  }

  @OptIn(ExperimentalSerializationApi::class)
  private fun setupKmp() {
    schema =
      Path.of(schemaPath).inputStream().use {
        io.github.optimumcode.json.schema.JsonSchema.fromStream(it)
      }
    document =
      Path.of(objectPath).inputStream().use {
        Json.decodeFromStream(JsonElement.serializer(), it)
      }
  }

  private fun setupOpenAPI() {
    val converter = JacksonConverter()
    val loader = DocumentLoader(UriReader(), converter)
    val store = SchemaStore(loader)
    val uri = File(schemaPath).toURI()
    store.register(uri)
    openapiSchema = store.getSchema(uri)
    openapiDocument =
      JsonInstance(
        converter.convert(Path.of(objectPath).inputStream().use { it.readAllBytes() }.toString(Charsets.UTF_8)),
      )
  }

  @Benchmark
  fun validateOpenApi(bh: Blackhole) {
    bh.consume(openapiValidator.validate(openapiSchema, openapiDocument))
  }

  @Benchmark
  fun validateNetworkntFlag(bh: Blackhole) {
    bh.consume(networkntSchema.validate(networkntDocument, OutputFormat.FLAG))
  }

  @Benchmark
  fun validateNetworkntDetailed(bh: Blackhole) {
    bh.consume(networkntSchema.validate(networkntDocument, OutputFormat.LIST))
  }

  @Benchmark
  fun validateNetworkntVerbose(bh: Blackhole) {
    bh.consume(networkntSchema.validate(networkntDocument, OutputFormat.HIERARCHICAL))
  }

  @Benchmark
  fun validateKmpEmptyCollector(bh: Blackhole) {
    bh.consume(schema.validate(document, ErrorCollector.EMPTY))
  }

  @Benchmark
  fun validateKmpCollectErrors(bh: Blackhole) {
    val errors = arrayListOf<ValidationError>()
    schema.validate(document, errors::add)
    bh.consume(errors)
  }

  @Benchmark
  fun validateKmpFlag(bh: Blackhole) {
    bh.consume(schema.validate(document, OutputCollector.flag()))
  }

  @Benchmark
  fun validateKmpDetailed(bh: Blackhole) {
    bh.consume(schema.validate(document, OutputCollector.detailed()))
  }

  @Benchmark
  fun validateKmpVerbose(bh: Blackhole) {
    bh.consume(schema.validate(document, OutputCollector.verbose()))
  }
}