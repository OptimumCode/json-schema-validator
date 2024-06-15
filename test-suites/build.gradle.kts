import io.gitlab.arturbosch.detekt.Detekt
import org.jetbrains.kotlin.gradle.plugin.KotlinTarget
import org.jetbrains.kotlin.gradle.plugin.KotlinTargetWithTests
import org.jetbrains.kotlin.gradle.targets.js.testing.KotlinJsTest
import org.jetbrains.kotlin.gradle.targets.native.tasks.KotlinNativeSimulatorTest
import org.jetbrains.kotlin.gradle.targets.native.tasks.KotlinNativeTest
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

plugins {
  alias(libs.plugins.kotlin.mutliplatform)
  alias(libs.plugins.kotlin.serialization)
  alias(libs.plugins.kotest.multiplatform)
  alias(libs.plugins.kover)
  alias(libs.plugins.detekt)
  alias(libs.plugins.ktlint)
}

repositories {
  mavenCentral()
}

kotlin {
  explicitApi()
  jvmToolchain(11)
  jvm {
    withJava()
    testRuns["test"].executionTask.configure {
      useJUnitPlatform()
    }
  }
  js(IR) {
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
    commonTest {
      dependencies {
        implementation(project(":"))
        implementation(libs.kotest.assertions.core)
        implementation(libs.kotest.framework.engine)
        implementation(kotlin("test-common"))
        implementation(kotlin("test-annotations-common"))
        implementation(libs.okio.common)
        implementation(libs.kotlin.serialization.json.okio)
      }
    }
    jsTest {
      dependencies {
        implementation(libs.okio.nodefilesystem)
      }
    }
    jvmTest {
      dependencies {
        implementation(libs.kotest.runner.junit5)
      }
    }

    // in order to support test suites for all targets I have to use the expect/actual functionality
    // but some of the targets does not have test tasks (but they are in the sources)
    // so I remove them to let the compiler check that all actual implementations are in place
    listOf(
      macOsTargets,
      linuxTargets,
      windowsTargets,
    ).asSequence().flatten().forEach {
      if (it is KotlinTargetWithTests<*, *>) {
        // don't need to remove test sources from targets with tests
        return@forEach
      }
      val sourceSetForTarget = getByName("${it.name}Test")
      remove(sourceSetForTarget)
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

dependencies {
  kover(project(":"))
}

private val remotesFile = layout.buildDirectory.file("remotes.json").get().asFile

val generateRemoteSchemas =
  tasks.register("generateRemoteSchemas") {
    inputs.dir("$projectDir/schema-test-suite/remotes")
    outputs.files(remotesFile)
    doLast {
      remotesFile.outputStream().use { out ->
        exec {
          standardOutput = out
          executable = "python3"
          args(
            "$projectDir/schema-test-suite/bin/jsonschema_suite",
            "remotes",
          )
        }
      }
    }
  }

tasks.withType<AbstractTestTask> {
  dependsOn(generateRemoteSchemas)
}

tasks.withType<KotlinJsTest> {
  // This is used to pass the right location for Node.js test
  environment("TEST_SUITES_DIR", "$projectDir/schema-test-suite/tests")
  environment("REMOTES_SCHEMAS_JSON", remotesFile.absolutePath)
}

tasks.withType<KotlinNativeSimulatorTest> {
  // prefix SIMCTL_CHILD_ is used to pass the env variable to the simulator
  environment("SIMCTL_CHILD_TEST_SUITES_DIR", "$projectDir/schema-test-suite/tests")
  environment("SIMCTL_CHILD_REMOTES_SCHEMAS_JSON", remotesFile.absolutePath)
}

tasks.withType<KotlinNativeTest> {
  environment("REMOTES_SCHEMAS_JSON", remotesFile.absolutePath)
}

tasks.withType<Test> {
  environment("REMOTES_SCHEMAS_JSON", remotesFile.absolutePath)
}

ktlint {
  version.set(libs.versions.ktlint)
  reporters {
    reporter(ReporterType.HTML)
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