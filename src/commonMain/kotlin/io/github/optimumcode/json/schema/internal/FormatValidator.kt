package io.github.optimumcode.json.schema.internal

import kotlinx.serialization.json.JsonElement
import kotlin.jvm.JvmStatic

/**
 * The [FormatValidator] is used to check whether the [JsonElement] matches the expected format.
 * If the [JsonElement] is not of the required type (e.g. validator expects string but the [JsonElement] is an object)
 * the validator **MUST** return [FormatValidator.Valid] result
 */
public interface FormatValidator {
  /**
   * Validates [element] against the expected format
   *
   * @param element JSON element to validate against the expected format
   * @return the result of the validation
   */
  public fun validate(element: JsonElement): FormatValidationResult

  public companion object {
    @Suppress("ktlint:standard:function-naming", "FunctionName")
    @JvmStatic
    public fun Valid(): FormatValidationResult = FormatValidationResult.Valid

    @Suppress("ktlint:standard:function-naming", "FunctionName")
    @JvmStatic
    public fun Invalid(): FormatValidationResult = FormatValidationResult.Invalid
  }
}

public sealed class FormatValidationResult(private val valid: Boolean) {
  public fun isValid(): Boolean = valid

  internal data object Valid : FormatValidationResult(true)

  internal data object Invalid : FormatValidationResult(false)
}