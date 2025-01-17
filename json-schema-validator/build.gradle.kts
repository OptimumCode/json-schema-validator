@file:OptIn(ExperimentalWasmDsl::class)

import io.gitlab.arturbosch.detekt.Detekt
import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl
import org.jetbrains.kotlin.gradle.plugin.KotlinTarget
import org.jetbrains.kotlin.gradle.plugin.KotlinTargetWithTests
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

plugins {
  alias(libs.plugins.kotlin.mutliplatform)
  alias(libs.plugins.kotlin.serialization)
  alias(libs.plugins.kotest.multiplatform)
  alias(libs.plugins.kover)
  alias(libs.plugins.detekt)
  alias(libs.plugins.ktlint)
  alias(libs.plugins.kotlin.dokka)
  convention.publication
}

kotlin {
  explicitApi()

  @OptIn(ExperimentalKotlinGradlePluginApi::class)
  compilerOptions {
    freeCompilerArgs.add("-opt-in=io.github.optimumcode.json.schema.ExperimentalApi")
  }
  jvmToolchain(11)
  jvm {
    testRuns["test"].executionTask.configure {
      useJUnitPlatform()
    }
  }
  js(IR) {
    browser()
    generateTypeScriptDefinitions()
    nodejs()
  }
  wasmJs {
    // The wasmJsBrowserTest prints all executed tests as one unformatted string
    // Have not found a way to suppress printing all this into console
    browser()
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
    val commonMain by getting {
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
        implementation(libs.karacteristics)
      }
    }

    val nonWasmJsMain by creating {
      dependsOn(commonMain)

      dependencies {
        implementation(libs.normalize.get().toString()) {
          because("provides normalization required by IDN-hostname format")
        }
      }
    }

    jvmMain {
      dependsOn(nonWasmJsMain)
    }
    jsMain {
      dependsOn(nonWasmJsMain)
    }
    nativeMain {
      dependsOn(nonWasmJsMain)
    }

    commonTest {
      dependencies {
        implementation(libs.kotest.assertions.core)
        implementation(libs.kotlin.coroutines.core.get().toString()) {
          // see "https://kotlinlang.slack.com/archives/CDFP59223/p1736191408326039?thread_ts=1734964013.996149&cid=CDFP59223"
          because(
            "there is a problem with linkage related to changes in kotlin 2.1.0: " +
              "wasmJs tests in browser does not work without updating coroutines to the version compiled with 2.1.0",
          )
        }
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
      dependsOn(tasks.getByName("wasmJsTest"))
    }
  }
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