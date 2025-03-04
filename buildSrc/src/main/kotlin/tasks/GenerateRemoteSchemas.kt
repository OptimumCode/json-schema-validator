package tasks

import org.gradle.api.DefaultTask
import org.gradle.api.file.Directory
import org.gradle.api.file.RegularFile
import org.gradle.api.provider.Provider
import org.gradle.api.tasks.InputDirectory
import org.gradle.api.tasks.InputFile
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.TaskAction
import org.gradle.process.ExecOperations
import javax.inject.Inject

/**
 * Generates remote schemas file for JSON schema test-suite
 */
abstract class GenerateRemoteSchemas : DefaultTask() {
  @InputDirectory
  val remotes: Provider<Directory> =
    project.objects.directoryProperty()
      .convention(
        project.layout.projectDirectory.dir("schema-test-suite/remotes"),
      )

  @InputFile
  val script: Provider<RegularFile> =
    project.objects.fileProperty()
      .convention(
        project.layout.projectDirectory.file("schema-test-suite/bin/jsonschema_suite"),
      )

  @OutputFile
  val remotesFile: Provider<RegularFile> =
    project.objects.fileProperty()
      .convention(
        project.layout.buildDirectory.file("remotes.json"),
      )

  @get:Inject
  protected abstract val execService: ExecOperations

  init {
    group = "generation"
    description = "Generates remote schema files for test suites"
  }

  @TaskAction
  protected fun generate() {
    remotesFile.get().asFile.outputStream().use { out ->
      execService.exec {
        standardOutput = out
        executable = "python3"
        args(
          script.get().asFile.path,
          "remotes",
        )
      }
    }
  }
}