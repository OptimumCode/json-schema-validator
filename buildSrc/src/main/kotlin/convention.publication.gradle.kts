import java.util.Properties

plugins {
  `maven-publish`
  signing
}

ext["signing.keyId"] = ""
ext["signing.password"] = ""
ext["signing.key"] = ""
ext["ossrhUsername"] = ""
ext["ossrhPassword"] = ""

val secretPropsFile: File = project.rootProject.file("local.properties")
if (secretPropsFile.exists()) {
  secretPropsFile.reader().use {
    Properties().apply {
      load(it)
    }
  }.onEach { (name, value) ->
    ext[name.toString()] = value
  }
} else {
  ext["signing.keyId"] = System.getenv("SIGNING_KEY_ID") ?: ""
  ext["signing.password"] = System.getenv("SIGNING_PASSWORD") ?: ""
  ext["signing.keys"] = System.getenv("SIGNING_SECRET_KEY") ?: ""
  ext["ossrhUsername"] = System.getenv("OSSRH_USERNAME") ?: ""
  ext["ossrhPassword"] = System.getenv("OSSRH_PASSWORD") ?: ""
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
}

signing {
  useInMemoryPgpKeys(
    getExtraString("signing.keyId"),
    getExtraString("signing.keys"),
    getExtraString("signing.password"),
  )
  sign(publishing.publications)
}