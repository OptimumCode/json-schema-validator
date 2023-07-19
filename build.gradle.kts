import io.gitlab.arturbosch.detekt.Detekt
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

@Suppress("DSL_SCOPE_VIOLATION") // TODO: remove when migrate to Gradle 8
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

val mainHost: String by project

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

  val macOsTargets = listOf(
    macosX64(),
    macosArm64(),
    ios(),
    iosArm64(),
    iosSimulatorArm64(),
    watchos(),
    watchosArm32(),
    watchosSimulatorArm64(),
    tvos(),
    tvosArm64(),
    tvosX64(),
  )
  val linuxTargets = listOf(
    linuxX64(),
    linuxArm64(),
  )

  val windowsTargets = listOf(
    mingwX64(),
  )

  sourceSets {
    val commonMain by getting {
      dependencies {
        api(libs.kotlin.serialization.json)
      }
    }
    val commonTest by getting {
      dependencies {
        implementation(libs.kotest.assertions.core)
        implementation(libs.kotest.framework.engine)
        implementation(kotlin("test-common"))
        implementation(kotlin("test-annotations-common"))
      }
    }
    val jvmTest by getting {
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