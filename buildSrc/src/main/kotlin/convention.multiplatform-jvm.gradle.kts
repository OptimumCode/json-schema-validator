import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
  id("convention.kotlin")
}

kotlin {
  jvm {
    testRuns["test"].executionTask.configure {
      useJUnitPlatform()
    }
    compilerOptions {
      jvmTarget.set(JvmTarget.JVM_11)
      freeCompilerArgs.add("-Xjdk-release=11")
    }
  }
}