import io.gitlab.arturbosch.detekt.Detekt
import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
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
  alias(libs.plugins.kotlin.binaryCompatibility)
  alias(libs.plugins.kotlin.dokka)
  alias(libs.plugins.nexus.publish)
  id("convention.publication")
}

repositories {
  mavenCentral()
}

apiValidation {
  ignoredProjects += listOf("benchmark", "test-suites")
}

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
      dependencies {
        api(libs.kotlin.serialization.json)
        implementation(libs.uri)
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