plugins {
  alias(libs.plugins.kotlin.mutliplatform) apply false
  alias(libs.plugins.kotlin.binaryCompatibility)
  alias(libs.plugins.nexus.publish)
  convention.properties
}

allprojects {
  repositories {
    mavenCentral()
    mavenLocal()
  }
}

apiValidation {
  ignoredProjects += listOf("benchmark", "test-suites")
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

tasks.register("printKtlintVersion") {
  println(libs.versions.ktlint.get())
}

tasks.register("printDetektVersion") {
  println(libs.versions.detekt.get())
}