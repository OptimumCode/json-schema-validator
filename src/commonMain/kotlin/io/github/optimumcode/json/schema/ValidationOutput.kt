package io.github.optimumcode.json.schema

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import kotlin.jvm.JvmField

public sealed class ValidationOutput private constructor(
  public val valid: Boolean,
) {
  public class Flag(valid: Boolean) : ValidationOutput(valid) {
    public companion object {
      @JvmField
      public val VALID: Flag = Flag(true)

      @JvmField
      public val INVALID: Flag = Flag(false)
    }
  }

  public class Detailed(
    valid: Boolean,
    public val keywordLocation: JsonPointer,
    public val instanceLocation: JsonPointer,
    public val absoluteKeywordLocation: Uri? = null,
    public val error: String? = null,
    public val errors: List<Detailed> = emptyList(),
  ) : ValidationOutput(valid)

  public class Verbose(
    valid: Boolean,
    public val keywordLocation: JsonPointer,
    public val instanceLocation: JsonPointer,
    public val absoluteKeywordLocation: Uri? = null,
    public val error: String? = null,
    public val errors: List<Verbose> = emptyList(),
    public val annotations: List<Verbose> = emptyList(),
  ) : ValidationOutput(valid)
}