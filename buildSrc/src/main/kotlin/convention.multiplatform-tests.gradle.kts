import org.jetbrains.kotlin.gradle.plugin.KotlinTargetWithTests

plugins {
  id("convention.kotlin")
  id("com.google.devtools.ksp")
  id("io.kotest")
}

val macOsAllTest by tasks.register("macOsAllTest") {
  group = "verification"
  description = "runs all tests for MacOS and IOS targets"
}

val windowsAllTest by tasks.register("windowsAllTest") {
  group = "verification"
  description = "runs all tests for Windows targets"
}
val linuxAllTest by tasks.register("linuxAllTest") {
  group = "verification"
  description = "runs all tests for Linux targets"
}

kotlin.targets.configureEach {
  if (this !is KotlinTargetWithTests<*, *>) {
    return@configureEach
  }
  when {
    name.startsWith("ios") || name.startsWith("macos") -> {
      macOsAllTest.dependsOn(tasks.named("${name}Test"))
    }
    name.startsWith("mingw") -> {
      windowsAllTest.dependsOn(tasks.named("${name}Test"))
    }
    else -> {
      linuxAllTest.dependsOn(tasks.named("${name}Test"))
    }
  }
}