plugins {
  `java-platform`
  convention.publication
}

configurations.api.configure {
  dependencyConstraints.addAllLater(
    bomService.coordinates
      .map { coordinates ->
        coordinates
          .distinct()
          .map(project.dependencies.constraints::create)
      },
  )
}

publishing {
  publications {
    create<MavenPublication>("jsonSchemaValidatorBom") {
      from(components["javaPlatform"])
    }
  }
}