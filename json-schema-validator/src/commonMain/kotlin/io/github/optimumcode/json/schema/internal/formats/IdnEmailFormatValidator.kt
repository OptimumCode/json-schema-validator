package io.github.optimumcode.json.schema.internal.formats

internal object IdnEmailFormatValidator : AbstractEmailFormatValidator(IdnHostnameFormatValidator) {
  override fun isAText(codepoint: Int): Boolean = super.isAText(codepoint) || isUtf8NonAscii(codepoint)

  override fun isValidQText(codepoint: Int): Boolean = super.isValidQText(codepoint) || isUtf8NonAscii(codepoint)

  /**
   * The spec is quite clear about which codepoints are allowed.
   * So, this method allows all codepoints that are greater than 0x7F
   */
  private fun isUtf8NonAscii(codepoint: Int): Boolean = codepoint > MAX_ASCII_CODEPOINT
}