plugins {
  convention.kotlin
  convention.`multiplatform-jvm`
  alias(libs.plugins.kotlin.benchmark)
  alias(libs.plugins.kotlin.allopen)
}

allOpen {
  annotation("org.openjdk.jmh.annotations.State")
}

kotlin {
  jvm()
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
        implementation(projects.jsonSchemaValidator)
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

fun Any?.takeIfNotBlank(): String? = this?.toString()?.takeUnless(String::isBlank)

benchmark {
  configurations {
    configureEach {
      warmups = properties["benchmark_warmups"]?.takeIfNotBlank()?.toInt() ?: 5
      iterations = properties["benchmark_iterations"]?.takeIfNotBlank()?.toInt() ?: 10
      iterationTime = properties["benchmark_iteration_time"]?.takeIfNotBlank()?.toLong() ?: 1L
      iterationTimeUnit = properties["benchmark_iteration_time_unit"]?.takeIfNotBlank() ?: "s"
      reportFormat = properties["benchmark_report_format"]?.takeIfNotBlank() ?: "json"
      param("objectPath", "$projectDir/data/openapi.json", "$projectDir/data/openapi-invalid.json")
      param("schemaPath", "$projectDir/data/schemas/openapi_schema.json")
    }
    getByName("main") {
      include(".*Common.*Bench.*")
    }
    create("prValidation") {
      include(".*CommonAvgTimeBench.*")
    }
    create("comparison") {
      include(".*Comparison.*Benchmark.*")
    }
    create("prValidationComparison") {
      include(".*ComparisonAvgTimeBenchmark.*")
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