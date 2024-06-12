import io.gitlab.arturbosch.detekt.Detekt
import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.plugin.KotlinTarget
import org.jetbrains.kotlin.gradle.plugin.KotlinTargetWithTests
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType
import java.util.Locale

plugins {
  alias(libs.plugins.kotlin.mutliplatform)
  alias(libs.plugins.kotlin.serialization)
  alias(libs.plugins.kotest.multiplatform)
  alias(libs.plugins.kover)
  alias(libs.plugins.detekt)
  alias(libs.plugins.ktlint)
  alias(libs.plugins.kotlin.binaryCompatibility)
  alias(libs.plugins.kotlin.dokka)
  alias(libs.plugins.nexus.publish)
  id("convention.publication")
}

repositories {
  mavenCentral()
}

apiValidation {
  ignoredProjects += listOf("benchmark", "test-suites", "generator")
}

val generatedSourceDirectory: Provider<Directory> = layout.buildDirectory.dir("generated/source/unicode")

//region Generation tasks block
val generatorConfiguration: Configuration by configurations.creating

dependencies {
  generatorConfiguration(project(":generator"))
}

val dumpDir: Provider<Directory> = layout.buildDirectory.dir("unicode_dump")

val dumpCharacterData by tasks.register<JavaExec>("dumpCharacterData") {
  onlyIf {
    dumpDir.get().asFile.run { !exists() || listFiles().isNullOrEmpty() }
  }
  outputs.dir(dumpDir)
  classpath(generatorConfiguration)
  mainClass.set("io.github.optimumcode.unocode.generator.Main")
  args(
    "dump",
    "-o",
    dumpDir.get(),
  )
}

val generateCharacterDirectionData by tasks.register<JavaExec>("generateCharacterDirectionData") {
  inputs.dir(dumpDir)
  outputs.dir(generatedSourceDirectory)

  dependsOn(dumpCharacterData)

  classpath(generatorConfiguration)
  mainClass.set("io.github.optimumcode.unocode.generator.Main")
  args(
    "character-direction",
    "-p",
    "io.github.optimumcode.json.schema.internal.unicode",
    "-o",
    generatedSourceDirectory.get(),
    "-d",
    dumpDir.get(),
  )
}

val generateCharacterCategoryData by tasks.register<JavaExec>("generateCharacterCategoryData") {
  inputs.dir(dumpDir)
  outputs.dir(generatedSourceDirectory)

  dependsOn(dumpCharacterData)

  classpath(generatorConfiguration)
  mainClass.set("io.github.optimumcode.unocode.generator.Main")
  args(
    "character-category",
    "-p",
    "io.github.optimumcode.json.schema.internal.unicode",
    "-o",
    generatedSourceDirectory.get(),
    "-d",
    dumpDir.get(),
  )
}

val generateDerivedProperties by tasks.register<JavaExec>("generateDerivedProperties") {
  val dataFile = layout.projectDirectory.dir("generator").dir("data").file("rfc5895_appendix_b_1.txt")
  inputs.file(dataFile)
  outputs.dir(generatedSourceDirectory)

  classpath(generatorConfiguration)
  mainClass.set("io.github.optimumcode.unocode.generator.Main")
  args(
    "derived-properties",
    "-p",
    "io.github.optimumcode.json.schema.internal.unicode",
    "-o",
    generatedSourceDirectory.get(),
    "-d",
    dataFile,
  )
}

val generateJoiningTypes by tasks.register<JavaExec>("generateJoiningTypes") {
  val dataFile = layout.projectDirectory.dir("generator").dir("data").file("DerivedJoiningType.txt")
  inputs.file(dataFile)
  outputs.dir(generatedSourceDirectory)

  classpath(generatorConfiguration)
  mainClass.set("io.github.optimumcode.unocode.generator.Main")
  args(
    "joining-types",
    "-p",
    "io.github.optimumcode.json.schema.internal.unicode",
    "-o",
    generatedSourceDirectory.get(),
    "-d",
    dataFile,
  )
}
//endregion

kotlin {
  explicitApi()

  @OptIn(ExperimentalKotlinGradlePluginApi::class)
  compilerOptions {
    freeCompilerArgs.add("-opt-in=io.github.optimumcode.json.schema.ExperimentalApi")
  }
  jvm {
    jvmToolchain(11)
    withJava()
    testRuns["test"].executionTask.configure {
      useJUnitPlatform()
    }
  }
  js(IR) {
    browser {
      commonWebpackConfig {
        cssSupport {
          enabled.set(true)
        }
      }
    }
    generateTypeScriptDefinitions()
    nodejs()
  }
  applyDefaultHierarchyTemplate()

  val macOsTargets =
    listOf<KotlinTarget>(
      macosX64(),
      macosArm64(),
      iosX64(),
      iosArm64(),
      iosSimulatorArm64(),
    )

  val linuxTargets =
    listOf<KotlinTarget>(
      linuxX64(),
      linuxArm64(),
    )

  val windowsTargets =
    listOf<KotlinTarget>(
      mingwX64(),
    )

  sourceSets {
    commonMain {
      kotlin.srcDirs(generatedSourceDirectory)

      dependencies {
        api(libs.kotlin.serialization.json)
        api(libs.uri)
        // When using approach like above you won't be able to add because block
        implementation(libs.kotlin.codepoints.get().toString()) {
          because("simplifies work with unicode codepoints")
        }
        implementation(libs.normalize.get().toString()) {
          because("provides normalization required by IDN-hostname format")
        }
      }
    }
    commonTest {
      dependencies {
        implementation(libs.kotest.assertions.core)
        implementation(libs.kotest.framework.engine)
        implementation(kotlin("test-common"))
        implementation(kotlin("test-annotations-common"))
      }
    }
    jvmTest {
      dependencies {
        implementation(libs.kotest.runner.junit5)
      }
    }
  }

  fun Task.addGeneratedTasks() {
    dependsOn(
      generateCharacterDirectionData,
      generateCharacterCategoryData,
      generateDerivedProperties,
      generateJoiningTypes,
    )
  }

  targets.configureEach {
    val capitalizedTargetName =
      name.replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
    tasks.named("compileKotlin$capitalizedTargetName") {
      addGeneratedTasks()
    }
  }
  afterEvaluate {
    targets.configureEach {
      tasks.named("${name}SourcesJar") {
        addGeneratedTasks()
      }
    }
    tasks.named("sourcesJar") {
      addGeneratedTasks()
    }
  }

  afterEvaluate {
    fun Task.dependsOnTargetTests(targets: List<KotlinTarget>) {
      targets.forEach {
        if (it is KotlinTargetWithTests<*, *>) {
          dependsOn(tasks.getByName("${it.name}Test"))
        }
      }
    }
    tasks.register("macOsAllTest") {
      group = "verification"
      description = "runs all tests for MacOS and IOS targets"
      dependsOnTargetTests(macOsTargets)
    }
    tasks.register("windowsAllTest") {
      group = "verification"
      description = "runs all tests for Windows targets"
      dependsOnTargetTests(windowsTargets)
    }
    tasks.register("linuxAllTest") {
      group = "verification"
      description = "runs all tests for Linux targets"
      dependsOnTargetTests(linuxTargets)
      dependsOn(tasks.getByName("jvmTest"))
      dependsOn(tasks.getByName("jsTest"))
    }
  }
}

afterEvaluate {
  val taskNames = setOf("compile", "detekt", "runKtlint")
  tasks.configureEach {
    // There is something wrong with compileCommonMainKotlinMetadata task
    // Gradle cannot find it, but this task uses the generated source directory
    // and Gradle reports implicit dependency.
    // As a workaround I do this - seems like it is working.
    // However, I might be missing something. Need to revisit this later.

    if (taskNames.any { name.startsWith(it) }) {
      mustRunAfter(
        generateCharacterDirectionData,
        generateCharacterCategoryData,
        generateDerivedProperties,
        generateJoiningTypes,
      )
    }
  }
}

kover {
  reports {
    filters {
      excludes {
        packages(
          "io.github.optimumcode.json.schema.internal.unicode.*",
          "io.github.optimumcode.json.schema.internal.unicode",
        )
      }
    }
  }
}

ktlint {
  version.set(libs.versions.ktlint)
  reporters {
    reporter(ReporterType.HTML)
  }
  filter {
    exclude { el ->
      val absolutePath = el.file.absolutePath
      absolutePath.contains("generated").and(!el.isDirectory)
    }
  }
}

afterEvaluate {
  val detektAllTask by tasks.register("detektAll") {
    dependsOn(tasks.withType<Detekt>())
  }

  tasks.named("check").configure {
    dependsOn(detektAllTask)
  }
}

val ossrhUsername: String by project.ext
val ossrhPassword: String by project.ext

nexusPublishing {
  this.repositories {
    sonatype {
      nexusUrl.set(uri("https://s01.oss.sonatype.org/service/local/"))
      snapshotRepositoryUrl.set(uri("https://s01.oss.sonatype.org/content/repositories/snapshots/"))

      username.set(ossrhUsername)
      password.set(ossrhPassword)
    }
  }
}