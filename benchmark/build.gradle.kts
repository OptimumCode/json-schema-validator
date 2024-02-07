plugins {
  alias(libs.plugins.kotlin.mutliplatform)
  alias(libs.plugins.kotlin.benchmark)
  alias(libs.plugins.kotlin.allopen)
}

repositories {
  mavenCentral()
}

allOpen {
  annotation("org.openjdk.jmh.annotations.State")
}

kotlin {
  jvm {
    jvmToolchain(11)
  }
  macosX64()
  macosArm64()
  iosX64()
  iosArm64()
  iosSimulatorArm64()

  linuxX64()

  mingwX64()

  applyDefaultHierarchyTemplate()

  sourceSets {
    commonMain {
      dependencies {
        implementation(project(":"))
        implementation(libs.kotlin.benchmark)
        implementation(libs.okio.common)
        implementation(libs.kotlin.serialization.json.okio)
      }
    }

    jvmMain {
      dependencies {
        implementation(project.dependencies.platform(libs.openapi.bom))
        implementation(libs.bundles.openapi)
        implementation(project.dependencies.platform(libs.jackson.bom))
        implementation(libs.bundles.jackson)

        implementation(libs.networknt.validator)
      }
    }
  }
}

benchmark {
  configurations {
    getByName("main") {
      warmups = 5
      iterations = 3
      iterationTime = 1
      iterationTimeUnit = "s"
      param("objectPath", "$projectDir/data/openapi.json")
      param("schemaPath", "$projectDir/data/schemas/openapi_schema.json")
    }
  }
  targets {
    register("jvm")
    register("macosX64")
    register("macosArm64")
    register("iosX64")
    register("iosArm64")
    register("iosSimulatorArm64")
    register("linuxX64")
    register("mingwX64")
  }
}