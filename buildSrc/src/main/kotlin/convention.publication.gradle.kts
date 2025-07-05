plugins {
  `maven-publish`
  signing
  id("dev.sigstore.sign")
  id("com.vanniktech.maven.publish")
}

/**
 * Create a service for collecting the coordinates of all artifacts that should be included in the bom.
 */
abstract class BomService : BuildService<BuildServiceParameters.None> {
  /** Coordinates that will be included in the BOM. */
  abstract val coordinates: SetProperty<String>
}

val bomService: BomService =
  gradle.sharedServices.registerIfAbsent("bomService", BomService::class).get()

extensions.add("bomService", bomService)

/** Controls whether the current subproject will be included in the kotest-bom. */
val includeInBom: Property<Boolean> =
  objects.property<Boolean>().convention(project.name != "json-schema-validator-bom")

extensions.add<Property<Boolean>>("includeInBom", includeInBom)

bomService.coordinates
  .addAll(
    provider {
      project.run { "$group:$name:$version" }
    }.zip(includeInBom) { coordinates, include ->
      if (include) listOf(coordinates) else emptyList()
    },
  )

mavenPublishing {
  publishToMavenCentral(automaticRelease = true)
  signAllPublications()

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
