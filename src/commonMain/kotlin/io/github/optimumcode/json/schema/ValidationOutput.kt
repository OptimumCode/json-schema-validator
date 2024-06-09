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
    public val errors: Set<OutputUnit> = emptySet(),
  ) : ValidationOutput()

  public data class OutputUnit(
    override val valid: Boolean,
    public val keywordLocation: JsonPointer,
    public val instanceLocation: JsonPointer,
    public val absoluteKeywordLocation: AbsoluteLocation? = null,
    public val error: String? = null,
    public val errors: Set<OutputUnit> = emptySet(),
    public val annotations: Set<OutputUnit> = emptySet(),
  ) : ValidationOutput() {
    // hashcode is stored to avoid recursive recalculation for each error in `errors` property
    private var hash = 0

    override fun equals(other: Any?): Boolean {
      if (this === other) return true
      if (other == null || this::class != other::class) return false

      other as OutputUnit

      if (valid != other.valid) return false
      if (keywordLocation != other.keywordLocation) return false
      if (instanceLocation != other.instanceLocation) return false
      if (absoluteKeywordLocation != other.absoluteKeywordLocation) return false
      if (error != other.error) return false
      if (errors != other.errors) return false
      if (annotations != other.annotations) return false

      return true
    }

    override fun hashCode(): Int {
      if (hash != 0) {
        return hash
      }
      var result = valid.hashCode()
      result = 31 * result + keywordLocation.hashCode()
      result = 31 * result + instanceLocation.hashCode()
      result = 31 * result + (absoluteKeywordLocation?.hashCode() ?: 0)
      result = 31 * result + (error?.hashCode() ?: 0)
      result = 31 * result + errors.hashCode()
      result = 31 * result + annotations.hashCode()
      if (result == 0) {
        result = 31
      }
      hash = result
      return result
    }
  }
}