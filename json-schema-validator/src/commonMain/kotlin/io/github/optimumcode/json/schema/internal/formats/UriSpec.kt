package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.internal.formats.Validation.isAlpha
import io.github.optimumcode.json.schema.internal.formats.Validation.isDigit

internal object UriSpec {
  const val SCHEMA_DELIMITER = ':'
  const val QUERY_DELIMITER = '?'
  const val FRAGMENT_DELIMITER = '#'

  fun isValidFragment(fragment: String): Boolean = isValidFragmentOrQuery(fragment)

  fun isValidQuery(query: String): Boolean = isValidFragmentOrQuery(query)

  fun isValidHierPart(hierPart: String): Boolean {
    if (hierPart.isEmpty()) {
      return true
    }
    return when {
      hierPart.startsWith("//") ->
        isValidAuthorityWithPath(hierPart.substring(2))
      hierPart.startsWith("/") ->
        isValidAbsolutePath(hierPart.substring(1))
      else ->
        isValidRootlessPath(hierPart)
    }
  }

  fun isValidRelativePart(relativePart: String): Boolean {
    if (relativePart.isEmpty()) {
      return true
    }
    return when {
      relativePart.startsWith("//") ->
        isValidAuthorityWithPath(relativePart.substring(2))
      relativePart.startsWith("/") ->
        isValidAbsolutePath(relativePart.substring(1))
      else ->
        isValidNoschemaPath(relativePart)
    }
  }

  private fun isValidNoschemaPath(relativePart: String): Boolean {
    val segmentSeparator = relativePart.indexOf('/')
    val segmentWithoutColon =
      if (segmentSeparator < 0) {
        relativePart
      } else {
        relativePart.substring(0, segmentSeparator)
      }
    val validSegmentWithoutColon =
      hasValidCharsOrPctEncoded(segmentWithoutColon) {
        isUnreserved(it) || isSubDelimiter(it) || it == '@'
      }
    return validSegmentWithoutColon &&
      (segmentSeparator < 0 || isValidSegments(relativePart.substring(segmentSeparator)))
  }

  private fun isValidRootlessPath(rootlessPath: String): Boolean = isValidSegments(rootlessPath)

  private fun isValidAbsolutePath(absolutePath: String): Boolean {
    if (absolutePath.isEmpty()) {
      return true
    }

    return isValidSegments(absolutePath)
  }

  private fun isValidSegments(segments: String): Boolean {
    var lastSep = -1
    for ((index, value) in segments.withIndex()) {
      if (value == '/') {
        if (!hasOnlyPChars(segments.substring(lastSep + 1, index))) {
          return false
        }
        lastSep = index
      }
    }

    return hasOnlyPChars(segments.substring(lastSep + 1))
  }

  @Suppress("detekt:ReturnCount")
  private fun isValidAuthorityWithPath(authorityWithPath: String): Boolean {
    if (authorityWithPath.isEmpty()) {
      return false
    }
    val userInfoSeparatorIndex = authorityWithPath.indexOf('@')
    if (userInfoSeparatorIndex >= 0) {
      if (!isValidUserInfo(authorityWithPath.substring(0, userInfoSeparatorIndex))) {
        return false
      }
    }
    val ipV6EndIndex = authorityWithPath.lastIndexOf(']')
    val portSeparatorIndex =
      authorityWithPath.indexOf(
        ':',
        startIndex =
          when {
            ipV6EndIndex > 0 -> ipV6EndIndex
            userInfoSeparatorIndex > 0 -> userInfoSeparatorIndex
            else -> 0
          },
      )

    val segmentSeparatorIndex = authorityWithPath.indexOf('/')
    val hostEndIndex =
      when {
        portSeparatorIndex > 0 -> portSeparatorIndex
        segmentSeparatorIndex > 0 -> segmentSeparatorIndex
        else -> authorityWithPath.length
      }
    val hostStartIndex =
      if (userInfoSeparatorIndex >= 0) {
        userInfoSeparatorIndex + 1
      } else {
        0
      }
    val host = authorityWithPath.substring(hostStartIndex, hostEndIndex)
    if (!isValidHost(host)) {
      return false
    }
    if (portSeparatorIndex > 0 && portSeparatorIndex < authorityWithPath.lastIndex) {
      val portEndIndex =
        if (segmentSeparatorIndex > 0) {
          segmentSeparatorIndex
        } else {
          authorityWithPath.length
        }
      // empty port part
      return isValidPort(authorityWithPath.substring(portSeparatorIndex + 1, portEndIndex))
    }
    return segmentSeparatorIndex < 0 || isValidSegments(authorityWithPath.substring(segmentSeparatorIndex))
  }

  private fun isValidPort(port: String): Boolean {
    if (port.isEmpty()) {
      return true
    }

    for (ch in port) {
      if (!isDigit(ch)) {
        return false
      }
    }

    return true
  }

  private fun isValidHost(host: String): Boolean {
    if (host.isEmpty()) {
      return false
    }
    if (IpV4FormatValidator.validate(host).isValid()) {
      return true
    }
    if (host.startsWith('[') && host.endsWith(']')) {
      val substr = host.substring(1, host.lastIndex)
      return IpV6FormatValidator.validate(substr).isValid() || isValidIPvFuture(substr)
    }
    return isRegName(host)
  }

  @Suppress("detekt:ReturnCount")
  private fun isValidIPvFuture(ipVFuture: String): Boolean {
    if (ipVFuture.isEmpty()) {
      return false
    }
    if (ipVFuture[0] != 'v') {
      return false
    }
    val dotIndex = ipVFuture.indexOf('.')
    if (dotIndex < 0) {
      return false
    }
    val firstPart = ipVFuture.substring(1, dotIndex)
    val secondPart = ipVFuture.substring(dotIndex + 1)
    if (firstPart.isEmpty() || secondPart.isEmpty()) {
      return false
    }
    for (ch in firstPart) {
      if (isHexDigit(ch)) {
        continue
      }
      return false
    }
    for (ch in secondPart) {
      if (isUnreserved(ch) || isSubDelimiter(ch) || ch == ':') {
        continue
      }
      return false
    }
    return true
  }

  private fun isRegName(host: String): Boolean =
    hasValidCharsOrPctEncoded(host) {
      isSubDelimiter(it) || isUnreserved(it)
    }

  private fun isValidUserInfo(userInfo: String): Boolean =
    hasValidCharsOrPctEncoded(userInfo) {
      it == ':' || isSubDelimiter(it) || isUnreserved(it)
    }

  fun isValidSchema(schema: String): Boolean {
    if (schema.isEmpty()) {
      return false
    }

    if (!isAlpha(schema[0])) {
      return false
    }

    for (i in 1..schema.lastIndex) {
      val char = schema[i]
      @Suppress("detekt:ComplexCondition")
      if (isAlpha(char) || isDigit(char) || char == '+' || char == '-' || char == '.') {
        continue
      }
      return false
    }

    return true
  }

  private fun isValidFragmentOrQuery(part: String): Boolean {
    if (part.isEmpty()) {
      return true
    }

    return hasValidCharsOrPctEncoded(part) {
      it == '/' || it == '?' || isPChar(it)
    }
  }

  private fun hasOnlyPChars(part: String): Boolean = hasValidCharsOrPctEncoded(part, ::isPChar)

  inline fun hasValidCharsOrPctEncoded(
    part: String,
    isValidChar: (Char) -> Boolean,
  ): Boolean {
    var i = 0
    var valid = true
    while (i < part.length) {
      val char = part[i]
      if (char != '%' && !isValidChar(char)) {
        valid = false
        break
      }
      if (char == '%') {
        if (!isPctEncoded(i, part)) {
          valid = false
          break
        }
        i += 2
      }
      i += 1
    }

    return valid
  }

  fun isPctEncoded(
    index: Int,
    str: String,
  ): Boolean {
    if (index + 2 >= str.length) {
      return false
    }
    return str[index] == '%' && isHexDigit(str[index + 1]) && isHexDigit(str[index + 2])
  }

  private fun isPChar(c: Char): Boolean = isUnreserved(c) || isSubDelimiter(c) || c == ':' || c == '@'

  private fun isUnreserved(c: Char): Boolean = isAlpha(c) || isDigit(c) || c == '_' || c == '-' || c == '.' || c == '~'

  private fun isSubDelimiter(c: Char): Boolean =
    c == '!' || c == '$' || c == '&' || c == '\'' || c == '(' || c == ')' ||
      c == '*' || c == '+' || c == ',' || c == ';' || c == '='

  private fun isHexDigit(c: Char): Boolean = c in '0'..'9' || c in 'a'..'f' || c in 'A'..'F'
}