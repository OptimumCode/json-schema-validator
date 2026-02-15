import org.jetbrains.kotlin.gradle.plugin.KotlinTargetWithTests
import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension
import org.jetbrains.kotlin.gradle.targets.js.testing.KotlinJsTest
import org.jetbrains.kotlin.gradle.targets.wasm.nodejs.WasmNodeJsRootExtension
import org.jetbrains.kotlin.gradle.tasks.KotlinTest
import tasks.KarmaReportWorkaround

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

val karmaReportWorkaround =
  tasks.register<KarmaReportWorkaround>("karmaReportWorkaround") {
    val nodeJsRootExtension = rootProject.extensions.getByType<NodeJsRootExtension>()
    val wasmNodeJsRootExtension = rootProject.extensions.getByType<WasmNodeJsRootExtension>()
    shouldRunAfter(nodeJsRootExtension.npmInstallTaskProvider, wasmNodeJsRootExtension.npmInstallTaskProvider)
  }

tasks.withType<KotlinJsTest> {
  when (name) {
    "jsBrowserTest" -> dependsOn(karmaReportWorkaround)

    // For some reasons, the output of wasmJsBrowserTest is not captured correclty
    // NOTE: the reason is the same as for JS but same workaround does not work...
    "wasmJsBrowserTest" -> failOnNoDiscoveredTests = false

    else -> Unit
  }
}