plugins {
  alias(libs.plugins.kotlin.binaryCompatibility)
}

allprojects {
  repositories {
    mavenCentral()
  }
}

apiValidation {
  ignoredProjects += listOf("benchmark", "test-suites", "json-schema-validator-bom")
}

tasks.register("printKtlintVersion") {
  doLast {
    println(libs.versions.ktlint.get())
  }
}

tasks.register("printDetektVersion") {
  doLast {
    println(libs.versions.detekt.get())
  }
}