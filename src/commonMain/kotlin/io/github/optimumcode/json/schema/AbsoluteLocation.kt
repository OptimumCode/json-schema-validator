package io.github.optimumcode.json.schema

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

@Serializable(AbsoluteLocationSerializer::class)
public data class AbsoluteLocation(
  val uri: Uri,
  val path: JsonPointer,
)

internal object AbsoluteLocationSerializer : KSerializer<AbsoluteLocation> {
  override val descriptor: SerialDescriptor =
    PrimitiveSerialDescriptor(
      "com.optimumcode.json.schema.AbsoluteLocation",
      PrimitiveKind.STRING,
    )

  override fun deserialize(decoder: Decoder): AbsoluteLocation {
    val uri = Uri.parse(decoder.decodeString())
    val fragment = uri.fragment
    return AbsoluteLocation(
      // if builder is not invoked empty fragment won't be removed
      uri = uri.buildUpon().encodedFragment(null).build(),
      path = if (fragment.isNullOrEmpty()) JsonPointer.ROOT else JsonPointer(fragment),
    )
  }

  override fun serialize(
    encoder: Encoder,
    value: AbsoluteLocation,
  ) {
    val result =
      value.uri.buildUpon()
        .encodedFragment(value.path.toString())
        .build().toString()
    encoder.encodeString(
      if (value.path == JsonPointer.ROOT) {
        "$result#"
      } else {
        result
      },
    )
  }
}