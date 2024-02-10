// plugins {
//  id("com.gradle.enterprise") version "3.16.2"
// }
//
// gradleEnterprise {
//  buildScan {
//    termsOfServiceUrl = "https://gradle.com/terms-of-service"
//    termsOfServiceAgree = "yes"
//    isUploadInBackground = false
//  }
// }

rootProject.name = "json-schema-validator"

include(":test-suites")
include(":benchmark")