plugins {
  alias(libs.plugins.kotlin.binaryCompatibility)
  alias(libs.plugins.nexus.publish)
  convention.properties
}

allprojects {
  repositories {
    mavenCentral()
  }
}

apiValidation {
  ignoredProjects += listOf("benchmark", "test-suites", "json-schema-validator-bom")
}

val ossrhUsername: String by project.ext
val ossrhPassword: String by project.ext

nexusPublishing {
  this.repositories {
    sonatype {
      nexusUrl.set(uri("https://ossrh-staging-api.central.sonatype.com/service/local/"))
      snapshotRepositoryUrl.set(uri("https://central.sonatype.com/repository/maven-snapshots/"))

      username.set(ossrhUsername)
      password.set(ossrhPassword)
    }
  }
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