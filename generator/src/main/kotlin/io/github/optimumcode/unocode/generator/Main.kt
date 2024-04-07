@file:JvmName("Main")

package io.github.optimumcode.unocode.generator

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands
import com.github.ajalt.clikt.parameters.options.check
import com.github.ajalt.clikt.parameters.options.default
import com.github.ajalt.clikt.parameters.options.option
import com.github.ajalt.clikt.parameters.options.required
import com.github.ajalt.clikt.parameters.types.path
import io.github.optimumcode.unocode.generator.internal.dump.DataDamper
import io.github.optimumcode.unocode.generator.internal.generator.generateDirectionClasses
import io.github.optimumcode.unocode.generator.internal.graphql.GraphqlClient
import kotlinx.coroutines.runBlocking
import java.net.URL
import java.nio.file.Path
import kotlin.io.path.createDirectories

fun main(args: Array<String>) = GeneratorCommand().main(args)

private class GeneratorCommand : CliktCommand() {
  init {
    subcommands(
      CharacterDirectionGenerator(),
      DumpCommand(),
    )
  }

  override fun run() = Unit
}

private class DumpCommand : CliktCommand(
  name = "dump",
) {
  private val outputDirectory: Path by option("--outputDir", "-o", help = "Output directory")
    .path(mustExist = false, canBeFile = false, canBeDir = true)
    .required()

  private val sourceUrl: String by option("--source", "-s", help = "Source URL")
    .default("https://www.compart.com/en/unicode/graphql")

  override fun run() {
    outputDirectory.createDirectories()
    GraphqlClient(URL(sourceUrl)).use { cl ->
      runBlocking {
        DataDamper.dump(cl, outputDirectory)
      }
    }
  }
}

private class CharacterDirectionGenerator : CliktCommand(
  name = "character-direction",
) {
  private val dumpDirectory: Path by option("--dumpDir", "-d", help = "Output directory")
    .path(mustExist = true, canBeFile = false, canBeDir = true)
    .required()
  private val outputDirectory: Path by option("--outputDir", "-o", help = "Output directory")
    .path(mustExist = true, canBeFile = false, canBeDir = true)
    .required()

  private val packageName: String by option("--package-name", "-p", help = "Package name")
    .required()
    .check("empty package name", String::isNotEmpty)

  override fun run() {
    val classes = DataDamper.loadClasses(dumpDirectory)
    generateDirectionClasses(packageName, outputDirectory, classes) {
      DataDamper.loadRanges(dumpDirectory, it)
    }
  }
}