package io.github.optimumcode.unocode.generator.internal.graphql

import com.expediagroup.graphql.client.ktor.GraphQLKtorClient
import com.expediagroup.graphql.client.types.GraphQLClientResponse
import io.github.optimumcode.unicode.generator.internal.graphql.BidirectionalCharactersForClass
import io.github.optimumcode.unicode.generator.internal.graphql.BidirectionalClasses
import io.github.optimumcode.unicode.generator.internal.graphql.CharacterCategories
import io.github.optimumcode.unicode.generator.internal.graphql.CharactersForCategory
import io.github.optimumcode.unocode.generator.internal.model.BiDirectionalClass
import io.github.optimumcode.unocode.generator.internal.model.Category
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
    checkNoErrors(response)
    return response.data?.unicodeObject
      ?.mapNotNull { it?.run { BiDirectionalClass(id!!, name!!) } }
      ?: emptyList()
  }

  @Suppress("DuplicatedCode")
  fun charactersForClass(classId: String): Flow<UnicodeChar> =
    flow {
      var offset = 0
      do {
        val response =
          client.execute(
            BidirectionalCharactersForClass(
              BidirectionalCharactersForClass.Variables(
                id = classId,
                offset = offset,
                limit = 1000,
              ),
            ),
          )
        checkNoErrors(response)
        val data = response.data?.unicodeObject ?: return@flow
        for (unicodeObject in data) {
          unicodeObject?.chars?.forEach {
            it?.run { emit(UnicodeChar(id!!, text?.takeUnless(String::isEmpty))) }
          }
          offset += unicodeObject?.chars?.size ?: 0
        }
      } while (data.any { !it?.chars.isNullOrEmpty() })
    }

  suspend fun categories(): List<Category> {
    val response = client.execute(CharacterCategories())
    checkNoErrors(response)
    return response.data?.unicodeObject
      ?.mapNotNull { it?.run { Category(id!!, name!!) } }
      ?: emptyList()
  }

  @Suppress("DuplicatedCode")
  fun charactersForCategory(category: Category): Flow<UnicodeChar> =
    flow {
      var offset = 0
      do {
        val response =
          client.execute(
            CharactersForCategory(
              CharactersForCategory.Variables(
                id = category.id,
                offset = offset,
                limit = 1000,
              ),
            ),
          )
        checkNoErrors(response)
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

  private fun checkNoErrors(response: GraphQLClientResponse<*>) {
    check(response.errors.isNullOrEmpty()) {
      "errors during request execution: ${response.errors}"
    }
  }
}