plugins {
  `maven-publish`
  signing
}

val javadocJar by tasks.registering(Jar::class) {
  archiveClassifier.set("javadoc")
}

fun getExtraString(name: String) = ext[name]?.toString()

afterEvaluate {
  publishing {

    publications.withType<MavenPublication> {
      // Stub javadoc.jar artifact
      artifact(javadocJar)

      pom {
        name.set("JSON schema validator")
        description.set("Multiplatform Kotlin implementation of JSON schema validator")
        url.set("https://github.com/OptimumCode/json-schema-validator")

        licenses {
          license {
            name.set("MIT")
            url.set("https://opensource.org/licenses/MIT")
          }
        }
        developers {
          developer {
            id.set("OptimumCode")
            name.set("Oleg Smirnov")
            email.set("oleg31101996@gmail.com")
          }
        }
        scm {
          url.set("https://github.com/OptimumCode/json-schema-validator")
        }
      }
    }
  }

  val signTasks = tasks.withType<Sign>()
  // otherwise, the publication fails because some task uses sign output but do not declare that
  tasks.withType<AbstractPublishToMaven> {
    mustRunAfter(signTasks)
  }

  // Call toList to prevent concurrent modification exception
  signTasks.toList().forEach {
    val platform =
      it.name.substring(
        "sign".length,
        it.name.length - "Publication".length,
      )
    tasks
      .findByName("linkDebugTest$platform")
      ?.mustRunAfter(it)
    tasks
      .findByName("compileTestKotlin$platform")
      ?.mustRunAfter(it)
  }
}

signing {
  useInMemoryPgpKeys(
    getExtraString("signing.keyId"),
    getExtraString("signing.keys"),
    getExtraString("signing.password"),
  )
  sign(publishing.publications)
}