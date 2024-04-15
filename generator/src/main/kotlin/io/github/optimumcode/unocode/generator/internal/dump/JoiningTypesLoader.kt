package io.github.optimumcode.unocode.generator.internal.dump

import io.github.optimumcode.unocode.generator.internal.model.JoiningType
import java.nio.file.Path
import kotlin.io.path.inputStream

internal object JoiningTypesLoader {
  private const val TYPE_DECLARATION = "Joining_Type="
  private const val COMMENT = '#'
  private const val SEPARATOR = ';'

  fun loadTypes(path: Path): Map<String, List<JoiningType>> {
    return path.inputStream()
      .bufferedReader(Charsets.UTF_8)
      .useLines { lines ->
        var type: String? = null
        val destination = hashMapOf<String, MutableList<JoiningType>>()
        for (line in lines.filter(String::isNotBlank)) {
          if (line.contains(TYPE_DECLARATION)) {
            type = line.substringAfter(TYPE_DECLARATION).trim() + ""
            continue
          }
          if (SEPARATOR !in line || line.startsWith(COMMENT)) {
            continue
          }
          val codepoints = line.substringBefore(SEPARATOR).trim()
          destination.computeIfAbsent(
            requireNotNull(type) { "type" },
          ) { arrayListOf() }.add(
            JoiningType(
              type = type,
              range = parseCodepointsPart(codepoints),
            ),
          )
        }
        destination
      }
  }
}