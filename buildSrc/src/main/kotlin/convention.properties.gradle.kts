import java.util.Properties

allprojects {
  ext["signing.keyId"] = ""
  ext["signing.password"] = ""
  ext["signing.key"] = ""
  ext["ossrhUsername"] = ""
  ext["ossrhPassword"] = ""

  val secretPropsFile: File = project.rootProject.file("local.properties")
  if (secretPropsFile.exists()) {
    secretPropsFile
      .reader()
      .use {
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
}