package io.github.optimumcode.unocode.generator.internal.graphql

import com.expediagroup.graphql.client.ktor.GraphQLKtorClient
import io.github.optimumcode.unicode.generator.internal.graphql.BidirectionalCharactersForClass
import io.github.optimumcode.unicode.generator.internal.graphql.BidirectionalCharactersForClass.Variables
import io.github.optimumcode.unicode.generator.internal.graphql.BidirectionalClasses
import io.github.optimumcode.unocode.generator.internal.model.BiDirectionalClass
import io.github.optimumcode.unocode.generator.internal.model.UnicodeChar
import io.ktor.client.HttpClient
import io.ktor.client.engine.cio.CIO
import io.ktor.client.plugins.HttpRequestRetry
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import java.net.URL

internal class GraphqlClient(
  url: URL,
  maxRetries: Int = 3,
) : AutoCloseable {
  private val client =
    GraphQLKtorClient(
      url = url,
      httpClient =
        HttpClient(CIO) {
          install(HttpRequestRetry) {
            retryOnServerErrors(maxRetries = maxRetries)
            exponentialDelay()
          }
        },
    )

  suspend fun bidirectionalClasses(): List<BiDirectionalClass> {
    val response = client.execute(BidirectionalClasses())
    check(response.errors.isNullOrEmpty()) {
      "errors during request execution: ${response.errors}"
    }
    return response.data?.unicodeObject
      ?.mapNotNull { it?.run { BiDirectionalClass(id!!, name!!) } }
      ?: emptyList()
  }

  fun charactersForClass(classId: String): Flow<UnicodeChar> =
    flow {
      var offset = 0
      do {
        val response =
          client.execute(
            BidirectionalCharactersForClass(
              Variables(
                id = classId,
                offset = offset,
                limit = 1000,
              ),
            ),
          )
        check(response.errors.isNullOrEmpty()) {
          "errors during request execution: ${response.errors}"
        }
        val data = response.data?.unicodeObject ?: return@flow
        for (unicodeObject in data) {
          unicodeObject?.chars?.forEach {
            it?.run { emit(UnicodeChar(id!!, text?.takeUnless(String::isEmpty))) }
          }
          offset += unicodeObject?.chars?.size ?: 0
        }
      } while (data.any { !it?.chars.isNullOrEmpty() })
    }

  override fun close() {
    client.close()
  }
}