import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl

plugins {
  id("convention.kotlin")
  id("convention.multiplatform-jvm")
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