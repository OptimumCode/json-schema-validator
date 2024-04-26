package io.github.optimumcode.json.schema.internal.formats

internal object IriSpec {
  private const val BITS_SHIFT = 4
  private const val LOWER_BITS = 0x0F
  private const val HEX_DECIMAL = "0123456789ABCDEF"

  fun covertToUri(iri: String): String {
    return buildString {
      for (byte in iri.encodeToByteArray()) {
        if (byte >= 0) {
          append(byte.toInt().toChar())
        } else {
          val unsignedInt = byte.toUByte().toInt()
          append('%')
          append(HEX_DECIMAL[unsignedInt shr BITS_SHIFT])
          append(HEX_DECIMAL[unsignedInt and LOWER_BITS])
        }
      }
    }
  }
}