package io.github.optimumcode.unocode.generator.internal.dump

import io.github.optimumcode.unocode.generator.internal.graphql.GraphqlClient
import io.github.optimumcode.unocode.generator.internal.model.BiDirectionalClass
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
  private const val BIDIRECTIONAL_CLASSES = "bidir-classes.json"
  private const val BIDIRECTIONAL_CLASSE_RANGES = "-classes-range.json"

  @OptIn(ExperimentalSerializationApi::class)
  suspend fun dump(
    client: GraphqlClient,
    dumpDir: Path,
  ) {
    val classes: List<BiDirectionalClass> = client.bidirectionalClasses()
    dumpDir.resolve(BIDIRECTIONAL_CLASSES).outputStream().use {
      Json.encodeToStream(classes, it)
    }

    for (clazz in classes) {
      val ranges: List<Range> =
        client.charactersForClass(clazz.id)
          .groupCharactersToRanges()

      dumpDir.resolve(fileName(clazz)).outputStream().use {
        Json.encodeToStream(ranges, it)
      }
    }
  }

  @OptIn(ExperimentalSerializationApi::class)
  fun loadClasses(dumpDir: Path): List<BiDirectionalClass> =
    dumpDir.resolve(BIDIRECTIONAL_CLASSES).inputStream().use {
      Json.decodeFromStream(ListSerializer(BiDirectionalClass.serializer()), it)
    }

  @OptIn(ExperimentalSerializationApi::class)
  fun loadRanges(
    dumpDir: Path,
    clazz: BiDirectionalClass,
  ): List<Range> =
    dumpDir.resolve(fileName(clazz)).inputStream().use {
      Json.decodeFromStream(ListSerializer(Range.serializer()), it)
    }

  private fun fileName(clazz: BiDirectionalClass) = "${clazz.id}$BIDIRECTIONAL_CLASSE_RANGES"

  private suspend fun Flow<UnicodeChar>.groupCharactersToRanges(): List<Range> {
    val resultRanges = mutableListOf<Range>()
    var lastStartCodePoint: Int = -1
    var lastEndCodePoint: Int = -1
    collect { unicode ->
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