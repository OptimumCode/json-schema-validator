package io.github.optimumcode.json.schema.internal.formats

internal object IriSpec {
  private const val HEX_DECIMAL = "0123456789ABCDEF"

  fun covertToUri(iri: String): String {
    return buildString {
      for (byte in iri.encodeToByteArray()) {
        if (byte in 0..127) {
          append(byte.toInt().toChar())
        } else {
          val unsignedInt = byte.toUByte().toInt()
          append('%')
          append(HEX_DECIMAL[unsignedInt shr 4])
          append(HEX_DECIMAL[unsignedInt and 0x0F])
        }
      }
    }
  }
}