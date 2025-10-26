@file:OptIn(ExperimentalWasmDsl::class)

import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl

plugins {
  convention.kotlin
  convention.`multiplatform-lib`
  convention.`multiplatform-tests`
  alias(libs.plugins.kotlin.serialization)
  alias(libs.plugins.kover)
  convention.publication
}

kotlin {
  @OptIn(ExperimentalKotlinGradlePluginApi::class)
  compilerOptions {
    freeCompilerArgs.add("-opt-in=io.github.optimumcode.json.schema.ExperimentalApi")
  }

  sourceSets {
    commonMain {
      dependencies {
        api(libs.kotlin.serialization.json)
        api(libs.uri)
        // When using approach like above you won't be able to add because block
        implementation(
          libs.kotlin.codepoints
            .get()
            .toString(),
        ) {
          because("simplifies work with unicode codepoints")
        }
        implementation(libs.normalize.get().toString()) {
          because("provides normalization required by IDN-hostname format")
        }
        implementation(libs.karacteristics)
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
}