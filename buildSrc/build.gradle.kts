plugins {
  `kotlin-dsl`
}

repositories {
  gradlePluginPortal()
}

dependencies {
  implementation(libs.kotlin.gradle.plugin)
  implementation(libs.sigstore.gradle.plugin)
  implementation(libs.maven.publish.gradle.plugin)
}