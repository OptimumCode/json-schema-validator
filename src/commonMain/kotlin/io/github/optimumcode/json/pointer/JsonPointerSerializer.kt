package io.github.optimumcode.json.pointer

import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

public object JsonPointerSerializer : KSerializer<JsonPointer> {
  override val descriptor: SerialDescriptor =
    PrimitiveSerialDescriptor(
      "io.github.optimumcode.json.pointer.JsonPointer",
      PrimitiveKind.STRING,
    )

  override fun deserialize(decoder: Decoder): JsonPointer = JsonPointer(decoder.decodeString())

  override fun serialize(
    encoder: Encoder,
    value: JsonPointer,
  ) {
    encoder.encodeString(value.toString())
  }
}