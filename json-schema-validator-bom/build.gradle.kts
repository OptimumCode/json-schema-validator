plugins {
  `java-platform`
  convention.publication
}

private val bomProjectName = name

configurations.api.configure {
  dependencyConstraints.addAllLater(
    provider {
      rootProject.allprojects.filter {
        it.pluginManager.hasPlugin("maven-publish") &&
          it.name != bomProjectName
      }.map {
        project.dependencies.constraints.create("${it.group}:${it.name}:${it.version}")
      }
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