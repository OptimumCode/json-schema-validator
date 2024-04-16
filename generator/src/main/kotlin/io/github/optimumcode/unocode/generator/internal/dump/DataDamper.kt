package io.github.optimumcode.unocode.generator.internal.dump

import io.github.optimumcode.unocode.generator.internal.graphql.GraphqlClient
import io.github.optimumcode.unocode.generator.internal.model.BiDirectionalClass
import io.github.optimumcode.unocode.generator.internal.model.Category
import io.github.optimumcode.unocode.generator.internal.model.Range
import io.github.optimumcode.unocode.generator.internal.model.UnicodeChar
import kotlinx.coroutines.flow.Flow
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.decodeFromStream
import kotlinx.serialization.json.encodeToStream
import java.nio.file.Path
import kotlin.io.path.inputStream
import kotlin.io.path.outputStream

internal object DataDamper {
  private const val CATEGORIES = "categories.json"
  private const val CATEGORY_RANGES = "-categories-range.json"
  private const val BIDIRECTIONAL_CLASSES = "bidir-classes.json"
  private const val BIDIRECTIONAL_CLASSE_RANGES = "-classes-range.json"

  suspend fun dump(
    client: GraphqlClient,
    dumpDir: Path,
    onDump: (String) -> Unit,
  ) {
    val classes: List<BiDirectionalClass> = client.bidirectionalClasses()
    dumpDirectionClasses(dumpDir, classes)
    onDump("directional classes are dumped")

    for (clazz in classes) {
      dumpCharactersForDirection(client, clazz, dumpDir)
      onDump("characters for directional class ${clazz.name} are dumped")
    }

    val categories = client.categories()

    dumpCategories(dumpDir, categories)
    onDump("categories are dumped")

    for (category in categories) {
      dumpCharactersForCategory(client, category, dumpDir)
      onDump("characters for category class ${category.name} are dumped")
    }
  }

  private suspend fun dumpCharactersForCategory(
    client: GraphqlClient,
    category: Category,
    dumpDir: Path,
  ) {
    val ranges =
      client.charactersForCategory(category)
        .groupCharactersToRanges()

    dumpToFile(dumpDir.resolve(fileNameForCategory(category)), ranges)
  }

  private fun dumpCategories(
    dumpDir: Path,
    categories: List<Category>,
  ) {
    dumpToFile(dumpDir.resolve(CATEGORIES), categories)
  }

  private suspend fun dumpCharactersForDirection(
    client: GraphqlClient,
    clazz: BiDirectionalClass,
    dumpDir: Path,
  ) {
    val ranges: List<Range> =
      client.charactersForClass(clazz.id)
        .groupCharactersToRanges()

    dumpToFile(dumpDir.resolve(fileNameForDirectionClass(clazz)), ranges)
  }

  private fun dumpDirectionClasses(
    dumpDir: Path,
    classes: List<BiDirectionalClass>,
  ) {
    dumpToFile(dumpDir.resolve(BIDIRECTIONAL_CLASSES), classes)
  }

  @OptIn(ExperimentalSerializationApi::class)
  private inline fun <reified T> dumpToFile(
    path: Path,
    data: T,
  ) {
    path.outputStream().use {
      Json.encodeToStream(data, it)
    }
  }

  @OptIn(ExperimentalSerializationApi::class)
  fun loadClasses(dumpDir: Path): List<BiDirectionalClass> =
    dumpDir.resolve(BIDIRECTIONAL_CLASSES).inputStream().use {
      Json.decodeFromStream(ListSerializer(BiDirectionalClass.serializer()), it)
    }

  @OptIn(ExperimentalSerializationApi::class)
  fun loadCategories(dumpDir: Path): List<Category> =
    dumpDir.resolve(CATEGORIES).inputStream().use {
      Json.decodeFromStream(ListSerializer(Category.serializer()), it)
    }

  fun loadRanges(
    dumpDir: Path,
    clazz: BiDirectionalClass,
  ): List<Range> = loadRanges(dumpDir.resolve(fileNameForDirectionClass(clazz)))

  fun loadRanges(
    dumpDir: Path,
    category: Category,
  ): List<Range> = loadRanges(dumpDir.resolve(fileNameForCategory(category)))

  @OptIn(ExperimentalSerializationApi::class)
  private fun loadRanges(path: Path): List<Range> =
    path.inputStream().use {
      Json.decodeFromStream(ListSerializer(Range.serializer()), it)
    }

  private fun fileNameForDirectionClass(clazz: BiDirectionalClass) = "${clazz.id}$BIDIRECTIONAL_CLASSE_RANGES"

  private fun fileNameForCategory(category: Category) = "${category.id}$CATEGORY_RANGES"

  private suspend fun Flow<UnicodeChar>.groupCharactersToRanges(): List<Range> {
    val resultRanges = mutableListOf<Range>()
    var lastStartCodePoint: Int = -1
    var lastEndCodePoint: Int = -1
    collect { unicode ->
      @Suppress("detekt:MagicNumber")
      val codepoint = unicode.id.removePrefix("U+").toInt(16)
      if (lastStartCodePoint < 0) {
        lastStartCodePoint = codepoint
        lastEndCodePoint = codepoint
      }
      if (codepoint - lastEndCodePoint > 1) {
        resultRanges.add(Range(lastStartCodePoint, lastEndCodePoint))
        lastStartCodePoint = codepoint
        lastEndCodePoint = codepoint
        return@collect
      }
      lastEndCodePoint = codepoint
    }
    if (lastStartCodePoint >= 0) {
      resultRanges.add(Range(lastStartCodePoint, lastEndCodePoint))
    }
    return resultRanges
  }
}