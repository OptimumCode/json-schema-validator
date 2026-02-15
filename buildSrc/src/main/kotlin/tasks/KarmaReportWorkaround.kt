package tasks

import org.gradle.api.DefaultTask
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.tasks.InputFile
import org.gradle.api.tasks.TaskAction

/**
 * Applies a workaround for kotlin-karma-reporter to append new lines when flushing log messages
 */
abstract class KarmaReportWorkaround : DefaultTask() {
  @get:InputFile
  val karmaReporterFile: RegularFileProperty =
    project.objects
      .fileProperty()
      .convention(
        project.rootProject.layout.buildDirectory
          .file("js/node_modules/kotlin-web-helpers/dist/karma-kotlin-reporter.js"),
      )

  @TaskAction
  protected fun applyWorkaround() {
    val reporterFile = karmaReporterFile.get().asFile
    logger.lifecycle("Applying karma reporter workaround to file: {}", reporterFile)
    val karmaReporterContent = reporterFile.readText()
    // We append add a new line after each log line to ensure we don't get large single line in the end
    // The line larger than 1MB cannot be parsed by TCServiceMessageOutputStreamHandler
    // https://github.com/JetBrains/kotlin/blob/679366a83f99851b42f64795f10ed803ff011c73/libraries/tools/kotlin-gradle-plugin/src/common/kotlin/org/jetbrains/kotlin/gradle/internal/testing/TCServiceMessageOutputStreamHandler.kt#L25C16-L25C51
    val expectedWriteLine = "this.write(line); if (browserResult.log.length > 0) { self.write('\\n'); }"
    if (karmaReporterContent.contains(expectedWriteLine)) {
      // Alrady updated
      return
    }
    reporterFile.writeText(
      karmaReporterContent.replace(
        "this.write(line);",
        expectedWriteLine,
      ),
    )
  }
}