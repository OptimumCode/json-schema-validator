import io.gitlab.arturbosch.detekt.Detekt
import org.jetbrains.kotlin.gradle.plugin.KotlinTarget
import org.jetbrains.kotlin.gradle.plugin.KotlinTargetWithTests
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

@Suppress("DSL_SCOPE_VIOLATION") // TODO: remove when migrate to Gradle 8
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
  jvm {
    jvmToolchain(11)
    withJava()
    testRuns["test"].executionTask.configure {
      useJUnitPlatform()
    }
  }
  js(IR) {
    nodejs()
  }
  ios()

  val macOsTargets = listOf<KotlinTarget>(
    macosX64(),
    macosArm64(),
    iosX64(),
    iosArm64(),
    iosSimulatorArm64(),
  )

  val linuxTargets = listOf<KotlinTarget>(
    linuxX64(),
    linuxArm64(),
  )

  val windowsTargets = listOf<KotlinTarget>(
    mingwX64(),
  )

  sourceSets {
    val commonTest by getting {
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
    val jsTest by getting {
      dependencies {
        implementation(libs.okio.nodefilesystem)
      }
    }
    val jvmTest by getting {
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