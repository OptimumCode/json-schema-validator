@file:OptIn(ExperimentalWasmDsl::class)

import io.gitlab.arturbosch.detekt.Detekt
import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

plugins {
  convention.kotlin
  convention.`multiplatform-lib`
  convention.`multiplatform-tests`
  alias(libs.plugins.kotlin.serialization)
  alias(libs.plugins.kotest.multiplatform)
  alias(libs.plugins.kover)
  alias(libs.plugins.detekt)
  alias(libs.plugins.ktlint)
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
        implementation(libs.kotlin.codepoints.get().toString()) {
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