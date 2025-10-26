import org.jetbrains.kotlin.gradle.targets.js.testing.KotlinJsTest
import org.jetbrains.kotlin.gradle.targets.native.tasks.KotlinNativeSimulatorTest
import org.jetbrains.kotlin.gradle.targets.native.tasks.KotlinNativeTest
import tasks.GenerateRemoteSchemas

plugins {
  convention.kotlin
  convention.`multiplatform-jvm`
  convention.`multiplatform-tests`
  alias(libs.plugins.kotlin.serialization)
  alias(libs.plugins.kover)
}

kotlin {
  explicitApi()

  jvm()
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

val generateRemoteSchemas =
  tasks.register<GenerateRemoteSchemas>("generateRemoteSchemas")

tasks.withType<AbstractTestTask> {
  dependsOn(generateRemoteSchemas)
}

tasks.withType<KotlinJsTest> {
  doFirst {
    // This is used to pass the right location for Node.js test
    environment("TEST_SUITES_DIR", "$projectDir/schema-test-suite/tests")
    environment(
      "REMOTES_SCHEMAS_JSON",
      generateRemoteSchemas
        .flatMap { it.remotesFile }
        .get()
        .asFile.absolutePath,
    )
  }
}

tasks.withType<KotlinNativeSimulatorTest> {
  doFirst {
    // prefix SIMCTL_CHILD_ is used to pass the env variable to the simulator
    environment("SIMCTL_CHILD_TEST_SUITES_DIR", "$projectDir/schema-test-suite/tests")
    environment(
      "SIMCTL_CHILD_REMOTES_SCHEMAS_JSON",
      generateRemoteSchemas
        .flatMap {
          it.remotesFile
        }.get()
        .asFile.absolutePath,
    )
  }
}

tasks.withType<KotlinNativeTest> {
  doFirst {
    environment(
      "REMOTES_SCHEMAS_JSON",
      generateRemoteSchemas
        .flatMap { it.remotesFile }
        .get()
        .asFile.absolutePath,
    )
  }
}

tasks.withType<Test> {
  doFirst {
    environment(
      "REMOTES_SCHEMAS_JSON",
      generateRemoteSchemas
        .flatMap { it.remotesFile }
        .get()
        .asFile.absolutePath,
    )
  }
}