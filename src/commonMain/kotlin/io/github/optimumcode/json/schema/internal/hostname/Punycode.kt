package io.github.optimumcode.json.schema.internal.hostname

/**
 * An [RFC 3492] punycode decoder for converting ASCII to Unicode domain name labels. This is
 * intended for use in Internationalized Domain Names (IDNs).
 *
 * This code was taken from [okhttp project](https://github.com/square/okhttp/blob/parent-5.0.0-alpha.12/okhttp/src/commonMain/kotlin/okhttp3/internal/idn/Punycode.kt)
 *
 * I hope one day they will separate this part into a library and I can replace this class with their dependency.
 */
@Suppress("detekt:MagicNumber")
internal object Punycode {
  private const val PREFIX_STRING = "xn--"
  private const val PREFIX_SIZE = PREFIX_STRING.length
  private const val MIN_SUPPLEMENTARY_CODE_POINT = 0x010000
  private const val MAX_CODE_POINT = 0x10FFFF

  private const val BASE = 36
  private const val TMIN = 1
  private const val TMAX = 26
  private const val SKEW = 38
  private const val DAMP = 700
  private const val INITIAL_BIAS = 72
  private const val INITIAL_N = 0x80

  /**
   * Converts a punycode-encoded domain name with `.`-separated labels into a human-readable
   * Internationalized Domain Name.
   */
  fun decode(string: String): String? {
    var pos = 0
    val limit = string.length
    return buildString {
      while (pos < limit) {
        var dot = string.indexOf('.', startIndex = pos)
        if (dot == -1) dot = limit

        if (!decodeLabel(string, pos, dot)) return null

        if (dot < limit) {
          append('.')
          pos = dot + 1
        } else {
          break
        }
      }
    }
  }

  /**
   * Converts a single label from Punycode to Unicode.
   *
   * @return true if the range of [string] from [pos] to [limit] was valid and decoded successfully.
   *     Otherwise, the decoding failed.
   */
  @Suppress("detekt:CyclomaticComplexMethod", "detekt:ReturnCount", "detekt:LongMethod")
  private fun StringBuilder.decodeLabel(
    string: String,
    pos: Int,
    limit: Int,
  ): Boolean {
    if (!string.regionMatches(pos, PREFIX_STRING, 0, PREFIX_SIZE, ignoreCase = true)) {
      append(string, pos, limit)
      return true
    }

    val originalPos = length

    @Suppress("NAME_SHADOWING")
    var pos = pos + PREFIX_SIZE // 'xn--'.size.

    var codePoints = 0
    // consume all code points before the last delimiter (if there is one)
    //  and copy them to output, fail on any non-basic code point
    val lastDelimiter = string.lastIndexOf('-', limit)
    if (lastDelimiter >= pos) {
      while (pos < lastDelimiter) {
        when (val codePoint = string[pos++]) {
          in 'a'..'z', in 'A'..'Z', in '0'..'9', '-' -> {
            insertCodePoint(if (isEmpty()) 0 else length, codePoint.code)
            codePoints += 1
          }
          else -> return false // Malformed.
        }
      }
      pos++ // Consume '-'.
    }

    var n = INITIAL_N
    var i = 0
    var bias = INITIAL_BIAS

    while (pos < limit) {
      val oldi = i
      var w = 1
      for (k in BASE until Int.MAX_VALUE step BASE) {
        if (pos == limit) return false // Malformed.
        val c = string[pos++]
        val digit =
          when (c) {
            in 'a'..'z' -> c - 'a'
            in 'A'..'Z' -> c - 'A'
            in '0'..'9' -> c - '0' + 26
            else -> return false // Malformed.
          }
        val deltaI = digit * w
        if (i > Int.MAX_VALUE - deltaI) return false // Prevent overflow.
        i += deltaI
        val t =
          when {
            k <= bias -> TMIN
            k >= bias + TMAX -> TMAX
            else -> k - bias
          }
        if (digit < t) break
        val scaleW = BASE - t
        if (w > Int.MAX_VALUE / scaleW) return false // Prevent overflow.
        w *= scaleW
      }
      bias = adapt(i - oldi, codePoints + 1, oldi == 0)
      val deltaN = i / (codePoints + 1)
      if (n > Int.MAX_VALUE - deltaN) return false // Prevent overflow.
      n += deltaN
      i %= (codePoints + 1)

      if (n > MAX_CODE_POINT) return false // Not a valid code point.

      insertCodePoint(originalPos + i, n)
      codePoints += 1

      i++
    }

    return true
  }

  /** Returns a new bias. */
  private fun adapt(
    delta: Int,
    numpoints: Int,
    first: Boolean,
  ): Int {
    var newDelta =
      when {
        first -> delta / DAMP
        else -> delta / 2
      }
    newDelta += (newDelta / numpoints)
    var k = 0
    while (newDelta > ((BASE - TMIN) * TMAX) / 2) {
      newDelta /= (BASE - TMIN)
      k += BASE
    }
    return k + (((BASE - TMIN + 1) * newDelta) / (newDelta + SKEW))
  }

  /**
   * Function insert a code point to the specified index.
   *
   * The logic was taken from JVM `StringBuilder.appendCodePoint` method
   */
  private fun StringBuilder.insertCodePoint(
    index: Int,
    codePoint: Int,
  ): Boolean {
    when {
      isBMPCodePoint(codePoint) ->
        insert(index, codePoint.toChar())
      isValidCodePoint(codePoint) -> {
        insert(index, codePoint.lowSurrogate())
        insert(index, codePoint.highSurrogate())
      }
      else -> return false
    }
    return true
  }

  private fun isBMPCodePoint(codePoint: Int): Boolean = codePoint shr 16 == 0

  private fun isValidCodePoint(codePoint: Int): Boolean {
    val plane = codePoint ushr 16
    return plane < ((MAX_CODE_POINT + 1) ushr 16)
  }

  private fun Int.lowSurrogate(): Char = ((this and 0x3ff) + Char.MIN_LOW_SURROGATE.code).toChar()

  private fun Int.highSurrogate(): Char =
    ((this shr 10) + (Char.MIN_HIGH_SURROGATE.code - (MIN_SUPPLEMENTARY_CODE_POINT shr 10))).toChar()
}