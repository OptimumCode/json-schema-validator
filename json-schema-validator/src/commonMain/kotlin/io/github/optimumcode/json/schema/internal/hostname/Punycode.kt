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
  const val PREFIX_STRING = "xn--"
  const val PREFIX_SIZE = PREFIX_STRING.length
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
   * Returns null if any label is oversized so much that the encoder cannot encode it without
   * integer overflow. This will not return null for labels that fit within the DNS size
   * limits.
   */
  fun encode(string: String): String? {
    var pos = 0
    val limit = string.length
    val result = StringBuilder()

    while (pos < limit) {
      var dot = string.indexOf('.', startIndex = pos)
      if (dot == -1) dot = limit

      if (!result.encodeLabel(string, pos, dot)) {
        // If we couldn't encode the label, give up.
        return null
      }

      if (dot < limit) {
        result.append('.')
        pos = dot + 1
      } else {
        break
      }
    }

    return result.toString()
  }

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
   * Converts a single label from Unicode to Punycode.
   *
   * @return true if the range of [string] from [pos] to [limit] was valid and encoding successfully.
   *     Otherwise, the encoding failed.
   */
  @Suppress("detekt:NestedBlockDepth")
  private fun StringBuilder.encodeLabel(
    string: String,
    pos: Int,
    limit: Int,
  ): Boolean {
    if (!string.requiresEncode(pos, limit)) {
      this.append(string, pos, limit)
      return true
    }

    this.append(PREFIX_STRING)

    val input = string.codePoints(pos, limit)

    // Copy all the basic code points to the output.
    var b = 0
    for (codePoint in input) {
      if (codePoint < INITIAL_N) {
        this.append(codePoint.toChar())
        b++
      }
    }

    // Copy a delimiter if any basic code points were emitted.
    if (b > 0) this.append('-')

    var n = INITIAL_N
    var delta = 0
    var bias = INITIAL_BIAS
    var h = b
    while (h < input.size) {
      val m = input.minBy { if (it >= n) it else Int.MAX_VALUE }

      val increment = (m - n) * (h + 1)
      if (delta > Int.MAX_VALUE - increment) return false // Prevent overflow.
      delta += increment

      n = m

      for (c in input) {
        if (c < n) {
          if (delta == Int.MAX_VALUE) return false // Prevent overflow.
          delta++
        } else if (c == n) {
          var q = delta

          for (k in BASE until Int.MAX_VALUE step BASE) {
            val t =
              when {
                k <= bias -> TMIN
                k >= bias + TMAX -> TMAX
                else -> k - bias
              }
            if (q < t) break
            this.append((t + ((q - t) % (BASE - t))).punycodeDigit)
            q = (q - t) / (BASE - t)
          }

          this.append(q.punycodeDigit)
          bias = adapt(delta, h + 1, h == b)
          delta = 0
          h++
        }
      }
      delta++
      n++
    }

    return true
  }

  /**
   * Converts a single label from Punycode to Unicode.
   *
   * @return true if the range of [string] from [pos] to [limit] was valid and decoded successfully.
   *     Otherwise, the decoding failed.
   */
  @Suppress(
    "detekt:CyclomaticComplexMethod",
    "detekt:ReturnCount",
    "detekt:LongMethod",
  )
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
            if (!insertCodePoint(if (isEmpty()) 0 else length, codePoint.code)) {
              return false
            }
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

      if (!insertCodePoint(originalPos + i, n)) {
        return false
      }
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
   *
   * @return `false` if [codePoint] is invalid
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

  private fun String.requiresEncode(
    pos: Int,
    limit: Int,
  ): Boolean {
    for (i in pos until limit) {
      if (this[i].code >= INITIAL_N) return true
    }
    return false
  }

  private fun String.codePoints(
    pos: Int,
    limit: Int,
  ): List<Int> {
    val result = mutableListOf<Int>()
    var i = pos
    while (i < limit) {
      val c = this[i]
      result +=
        when {
          c.isSurrogate() -> {
            val low = (if (i + 1 < limit) this[i + 1] else '\u0000')
            if (c.isLowSurrogate() || !low.isLowSurrogate()) {
              '?'.code
            } else {
              i++
              0x010000 + (c.code and 0x03ff shl 10 or (low.code and 0x03ff))
            }
          }

          else -> c.code
        }
      i++
    }
    return result
  }

  private val Int.punycodeDigit: Char
    get() =
      when {
        this < 26 -> this + 'a'.code
        this < 36 -> (this - 26) + '0'.code
        else -> error("unexpected digit: $this")
      }.toChar()
}