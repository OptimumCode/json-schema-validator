import io.gitlab.arturbosch.detekt.Detekt
import org.jetbrains.kotlin.gradle.targets.js.testing.KotlinJsTest
import org.jetbrains.kotlin.gradle.targets.native.tasks.KotlinNativeSimulatorTest
import org.jetbrains.kotlin.gradle.targets.native.tasks.KotlinNativeTest
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

plugins {
  convention.kotlin
  convention.`mutliplatform-tests`
  alias(libs.plugins.kotlin.serialization)
  alias(libs.plugins.kotest.multiplatform)
  alias(libs.plugins.kover)
  alias(libs.plugins.detekt)
  alias(libs.plugins.ktlint)
}

kotlin {
  explicitApi()

  jvm {
    testRuns["test"].executionTask.configure {
      useJUnitPlatform()
    }
  }
  js(IR) {
    nodejs()
  }
  // wasmJs target is not added because the okio does not provide a dependency to use FileSystem API in wasmJs target
  applyDefaultHierarchyTemplate()

  macosX64()
  macosArm64()
  iosX64()
  iosArm64()
  iosSimulatorArm64()

  linuxX64()
  linuxArm64()

  mingwX64()

  sourceSets {
    commonTest {
      dependencies {
        implementation(projects.jsonSchemaValidator)
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
  }
}

dependencies {
  kover(projects.jsonSchemaValidator)
}

private val remotesFile =
  layout.buildDirectory
    .file("remotes.json")
    .get()
    .asFile

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

val detektAllTask by tasks.register("detektAll")

tasks.named("check").configure {
  dependsOn(detektAllTask)
}

tasks.withType<Detekt> {
  detektAllTask.dependsOn(this)
}