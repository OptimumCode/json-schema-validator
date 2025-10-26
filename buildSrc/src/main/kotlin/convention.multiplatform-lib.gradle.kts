import io.gitlab.arturbosch.detekt.Detekt
import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

plugins {
  id("convention.kotlin")
  id("convention.multiplatform-jvm")
  id("io.gitlab.arturbosch.detekt")
  id("org.jlleitschuh.gradle.ktlint")
}

kotlin {
  explicitApi()

  jvm()
  js(IR) {
    browser()
    generateTypeScriptDefinitions()
    nodejs()
  }

  @OptIn(ExperimentalWasmDsl::class)
  wasmJs {
    // The wasmJsBrowserTest prints all executed tests as one unformatted string
    // Have not found a way to suppress printing all this into console
    browser()
    nodejs()
  }

  applyDefaultHierarchyTemplate()

  macosX64()
  macosArm64()
  iosX64()
  iosArm64()
  iosSimulatorArm64()

  linuxX64()
  linuxArm64()

  mingwX64()
}

ktlint {
  version.set(VersionConstants.KTLINT_VERSION)
  reporters {
    reporter(ReporterType.HTML)
  }
  filter {
    exclude("**/kotest/**/kotest.kt")
  }
}

val detektAllTask by tasks.register("detektAll")

tasks.named("check").configure {
  dependsOn(detektAllTask)
}

tasks.withType<Detekt> {
  detektAllTask.dependsOn(this)
  exclude("**/kotest/**/kotest.kt")
}