package io.github.optimumcode.json.schema.internal.formats

import de.cketti.codepoints.CodePoints
import de.cketti.codepoints.codePointAt
import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator
import io.github.optimumcode.json.schema.internal.util.allCodepoints

private const val AT_CHAR = '@'
private const val IP_PART_START = '['
private const val IP_PART_END = ']'
private const val QUOTE = '"'
private const val BACK_SLASH = '\\'.code
private const val IPV6_PREFIX = "IPv6:"

internal abstract class AbstractEmailFormatValidator(
  private val hostnameValidator: AbstractStringFormatValidator,
) : AbstractStringFormatValidator() {
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty()) {
      return FormatValidator.Invalid()
    }
    val delimiterIndex = value.lastIndexOf(AT_CHAR)
    if (delimiterIndex <= 0 || delimiterIndex == value.lastIndex) {
      // either local-part of domain is empty
      return FormatValidator.Invalid()
    }
    val localPart = value.substring(0, delimiterIndex)
    val domainPart = value.substring(delimiterIndex + 1)
    return if (isValidLocalPart(localPart) && isValidDomainPart(domainPart)) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }

  private fun isValidDomainPart(domainPart: String): Boolean {
    return if (domainPart.run { startsWith(IP_PART_START) && endsWith(IP_PART_END) }) {
      val ipPart = domainPart.substring(1, domainPart.lastIndex)
      isValidIpPart(ipPart)
    } else {
      hostnameValidator.validate(domainPart).isValid()
    }
  }

  private fun isValidIpPart(ipPart: String): Boolean {
    return if (ipPart.startsWith(IPV6_PREFIX)) {
      IpV6FormatValidator.validate(ipPart.removePrefix(IPV6_PREFIX))
    } else {
      IpV4FormatValidator.validate(ipPart)
    }.isValid()
  }

  private fun isValidLocalPart(localPart: String): Boolean {
    return if (localPart.run { startsWith(QUOTE) || endsWith(QUOTE) }) {
      isValidQuotedString(localPart)
    } else {
      isValidDotString(localPart)
    }
  }

  private fun isValidDotString(localPart: String): Boolean {
    return Validation.eachSeparatedPart(localPart, separator = '.') {
      it.isNotEmpty() && it.allCodepoints(::isAText)
    }
  }

  protected open fun isAText(codepoint: Int): Boolean {
    val asChar = codepoint.toChar()
    return Validation.isAlpha(asChar) || Validation.isDigit(asChar) ||
      codepoint == '!'.code || codepoint == '#'.code || codepoint == '$'.code || codepoint == '%'.code ||
      codepoint == '&'.code || codepoint == '\''.code || codepoint == '*'.code || codepoint == '+'.code ||
      codepoint == '-'.code || codepoint == '/'.code || codepoint == '='.code || codepoint == '?'.code ||
      codepoint == '^'.code || codepoint == '_'.code || codepoint == '`'.code || codepoint == '{'.code ||
      codepoint == '}'.code || codepoint == '~'.code || codepoint == '|'.code
  }

  private fun isValidQuotedString(localPart: String): Boolean {
    if (localPart.length <= 2) {
      return false
    }
    if (localPart.run { !startsWith(QUOTE) || !endsWith(QUOTE) }) {
      return false
    }
    val quotedContent = localPart.substring(1, localPart.lastIndex)
    return isValidQuotedContent(quotedContent)
  }

  private fun isValidQuotedContent(quotedContent: String): Boolean {
    // cannot be empty at this point
    var index = 0
    val length = quotedContent.length
    while (index < length) {
      val codePoint = quotedContent.codePointAt(index)
      index += CodePoints.charCount(codePoint)
      if (codePoint != BACK_SLASH) {
        if (isValidQText(codePoint)) {
          continue
        }
        return false
      }
      if (index >= length) {
        // last backslash is not allowed
        // E.g.: "\"
        return false
      }
      val nextChar = quotedContent[index]
      if (nextChar !in ' '..'~') {
        // invalid quote pair
        return false
      }
      index += 1
    }
    return true
  }

  protected open fun isValidQText(codepoint: Int): Boolean =
    // \ is checked explicitly
    codepoint == ' '.code || codepoint == '!'.code || codepoint in '#'.code..'~'.code
}