package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object EmailFormatValidator : AbstractStringFormatValidator() {
  private const val AT_CHAR = '@'
  private const val IP_PART_START = '['
  private const val IP_PART_END = ']'
  private const val QUOTE = '"'
  private const val BACK_SLASH = '\\'
  private const val IPV6_PREFIX = "IPv6:"

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
      HostnameFormatValidator.validate(domainPart).isValid()
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
      it.isNotEmpty() && it.all(::isAText)
    }
  }

  private fun isAText(c: Char): Boolean {
    return Validation.isAlpha(c) || Validation.isDigit(c) ||
      c == '!' || c == '#' || c == '$' || c == '%' || c == '&' ||
      c == '\'' || c == '*' || c == '+' || c == '-' || c == '/' ||
      c == '=' || c == '?' || c == '^' || c == '_' || c == '`' ||
      c == '{' || c == '}' || c == '~' || c == '|'
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
      val c = quotedContent[index]
      index += 1
      if (c != BACK_SLASH) {
        if (isValidQText(c)) {
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

  private fun isValidQText(c: Char): Boolean =
    // \ is checked explicitly
    c == ' ' || c == '!' || c in '#'..'~'
}