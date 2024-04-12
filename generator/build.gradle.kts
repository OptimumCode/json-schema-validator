import com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer
import com.expediagroup.graphql.plugin.gradle.graphql
import org.jlleitschuh.gradle.ktlint.reporter.ReporterType

plugins {
  // otherwise there is Gradle exception
  // https://github.com/gradle/gradle/issues/20084
  id(libs.plugins.kotlin.jvm.get().pluginId)
  alias(libs.plugins.kotlin.serialization)
  alias(libs.plugins.expediagroup.graphql)

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
  implementation(libs.kotlinpoet)
  implementation(libs.graphql.ktor)
  implementation(libs.clikt) {
    because("cli for executing generation")
  }
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