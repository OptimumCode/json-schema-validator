import io.gitlab.arturbosch.detekt.Detekt
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
  `maven-publish`
}

repositories {
  mavenCentral()
}

kotlin {
  explicitApi()
  jvm {
    jvmToolchain(11)
    withJava()
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

  val hostOs = System.getProperty("os.name")
  val isMingwX64 = hostOs.startsWith("Windows")
  when {
    hostOs == "Mac OS X" -> {
      macosX64()
      macosArm64()

      ios()
      iosArm64()
      iosSimulatorArm64()

      watchos()
      watchosArm32()
      watchosSimulatorArm64()

      tvos()
      tvosArm64()
      tvosX64()
    }

    hostOs == "Linux" -> {
      linuxX64()
      linuxArm64()
    }
    isMingwX64 -> mingwX64()
    else -> throw GradleException("Host OS is not supported in Kotlin/Native.")
  }

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

  val publicationsFromMainHost =
    listOf(jvm(), js()).map { it.name } + "kotlinMultiplatform"
  publishing {
    publications {
      matching { it.name in publicationsFromMainHost }.all {
        val targetPublication = this@all
        tasks.withType<AbstractPublishToMaven>()
          .matching { it.publication == targetPublication }
          .configureEach { onlyIf { findProperty("isMainHost") == "true" } }
      }
    }
  }
}

tasks.named<Test>("jvmTest") {
  useJUnitPlatform()
}

ktlint {
  version.set(libs.versions.ktlint)
  reporters {
    reporter(ReporterType.HTML)
  }
}

private val detektAllTask by tasks.register("detektAll") {
  dependsOn(tasks.withType<Detekt>())
}

tasks.named("check") {
  dependsOn(detektAllTask)
}