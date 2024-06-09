package io.github.optimumcode.json.schema

import io.github.optimumcode.json.pointer.JsonPointer
import kotlin.jvm.JvmField

public sealed class ValidationOutput private constructor() {
  public abstract val valid: Boolean

  public data class Flag(override val valid: Boolean) : ValidationOutput() {
    public companion object {
      @JvmField
      public val VALID: Flag = Flag(true)

      @JvmField
      public val INVALID: Flag = Flag(false)
    }
  }

  public data class Basic(
    override val valid: Boolean,
    public val errors: Set<BasicError> = emptySet(),
  ) : ValidationOutput()

  public data class BasicError(
    public val keywordLocation: JsonPointer,
    public val instanceLocation: JsonPointer,
    public val error: String,
    public val absoluteKeywordLocation: AbsoluteLocation? = null,
  )

  public data class Detailed(
    override val valid: Boolean,
    public val keywordLocation: JsonPointer,
    public val instanceLocation: JsonPointer,
    public val absoluteKeywordLocation: AbsoluteLocation? = null,
    public val error: String? = null,
    public val errors: Set<Detailed> = emptySet(),
  ) : ValidationOutput()

  public data class Verbose(
    override val valid: Boolean,
    public val keywordLocation: JsonPointer,
    public val instanceLocation: JsonPointer,
    public val absoluteKeywordLocation: AbsoluteLocation? = null,
    public val error: String? = null,
    public val errors: Set<Verbose> = emptySet(),
    public val annotations: Set<Verbose> = emptySet(),
  ) : ValidationOutput()
}