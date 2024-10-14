package io.github.optimumcode.json.schema

import io.kotest.assertions.asClue
import io.kotest.assertions.throwables.shouldNotThrowAny
import io.kotest.core.spec.style.FunSpec
import kotlinx.serialization.ExperimentalSerializationApi
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse.BodyHandlers
import java.time.Duration

@OptIn(ExperimentalSerializationApi::class)
@Suppress("unused")
class JsonSchemaStreamTest : FunSpec() {
  init {
    test("definition is loaded from input stream") {

      val client =
        HttpClient.newBuilder()
          .followRedirects(HttpClient.Redirect.NORMAL)
          .build()

      val response =
        client.send(
          HttpRequest.newBuilder(URI.create("https://json-schema.org/draft-07/schema#"))
            .GET()
            .timeout(Duration.ofSeconds(10))
            .build(),
          BodyHandlers.ofInputStream(),
        )
      "Response code: ${response.statusCode()}".asClue {
        shouldNotThrowAny {
          response.body().use(JsonSchema::fromStream)
        }
      }
    }
  }
}