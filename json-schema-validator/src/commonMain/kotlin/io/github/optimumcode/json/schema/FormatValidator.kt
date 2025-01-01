package io.github.optimumcode.json.schema

import io.github.optimumcode.json.schema.model.AbstractElement
import kotlin.jvm.JvmStatic

/**
 * The [FormatValidator] is used to check whether the [AbstractElement] matches the expected format.
 * If the [AbstractElement] is not of the required type
 * (e.g. validator expects string but the [AbstractElement] is an object)
 * the validator **MUST** return [FormatValidator.Valid] result.
 *
 * If you create an implementation of [FormatValidator] that will be shared with others
 * please make sure that it will be state-less since it might be invoked from different threads.
 */
@ExperimentalApi
public interface FormatValidator {
  /**
   * Validates [element] against the expected format
   *
   * @param element JSON element to validate against the expected format
   * @return the result of the validation
   */
  public fun validate(element: AbstractElement): FormatValidationResult

  public companion object {
    @Suppress("ktlint:standard:function-naming", "FunctionName")
    @JvmStatic
    public fun Valid(): FormatValidationResult = FormatValidationResult.Valid

    @Suppress("ktlint:standard:function-naming", "FunctionName")
    @JvmStatic
    public fun Invalid(): FormatValidationResult = FormatValidationResult.Invalid
  }
}

@ExperimentalApi
public sealed class FormatValidationResult private constructor(private val valid: Boolean) {
  public fun isValid(): Boolean = valid

  internal data object Valid : FormatValidationResult(true)

  internal data object Invalid : FormatValidationResult(false)
}

public enum class FormatBehavior {
  /**
   * Only annotation. If the value does not match format the validation will pass
   */
  ANNOTATION_ONLY,

  /**
   * Annotation and assertion. If the value does not match format the validation will fail
   */
  ANNOTATION_AND_ASSERTION,
}