import com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer
import com.expediagroup.graphql.plugin.gradle.graphql
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

plugins {
  // otherwise there is Gradle exception
  // https://github.com/gradle/gradle/issues/20084
  id(libs.plugins.kotlin.jvm.get().pluginId)
  alias(libs.plugins.kotlin.serialization)
  // version 7.x requires java 17
  id("com.expediagroup.graphql") version "6.7.0"

  alias(libs.plugins.detekt)
  alias(libs.plugins.ktlint)
}

repositories {
  mavenCentral()
}

kotlin {
  jvmToolchain(11)
}

dependencies {
  implementation("com.squareup:kotlinpoet:1.16.0")
  implementation("com.expediagroup:graphql-kotlin-ktor-client:6.7.0")
  implementation("com.github.ajalt.clikt:clikt:4.3.0")
}

graphql {
  client {
    endpoint = "https://www.compart.com/en/unicode/graphql"
    packageName = "io.github.optimumcode.unicode.generator.internal.graphql"
    serializer = GraphQLSerializer.KOTLINX
  }
}

ktlint {
  version.set(libs.versions.ktlint)
  debug.set(true)
  reporters {
    reporter(ReporterType.HTML)
  }
  filter {
    exclude { el ->
      val absolutePath = el.file.absolutePath
      absolutePath.contains("generated").and(!el.isDirectory)
    }
  }
}