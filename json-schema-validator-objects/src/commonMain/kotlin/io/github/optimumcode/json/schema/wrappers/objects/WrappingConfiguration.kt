package io.github.optimumcode.json.schema.wrappers.objects

import io.github.optimumcode.json.schema.ExperimentalApi
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic

@ExperimentalApi
public class WrappingConfiguration internal constructor(
  /**
   * If set to `false` an exception is thrown when wrapping a [Set].
   * If set to `true`, [Set] is wrapped the same way as [List]
   */
  public val allowSets: Boolean,
  /**
   * If set to `false` the [Char] is converted to [String].
   * If set to `true` the [Char] is converted to a codepoint (and then to [Long])
   */
  public val charAsCodepoint: Boolean,
  /**
   * If set to `true` the [ByteArray] is encoded using Base64 encoding
   * and wrapped as a [PrimitiveElement][io.github.optimumcode.json.schema.model.PrimitiveElement].
   * Otherwise, the [ByteArray] is wrapped as an [ArrayElement][io.github.optimumcode.json.schema.model.ArrayElement].
   */
  public val byteArrayAsBase64String: Boolean,
) {
  public companion object {
    @ExperimentalApi
    @JvmStatic
    @JvmOverloads
    public fun create(configuration: WrappingConfigurationBuilder.() -> Unit = {}): WrappingConfiguration =
      WrappingConfigurationBuilder().apply(configuration).build()
  }
}

@ExperimentalApi
public class WrappingConfigurationBuilder internal constructor() {
  /**
   * @see WrappingConfiguration.allowSets
   */
  public var allowSets: Boolean = false

  /**
   * @see WrappingConfiguration.charAsCodepoint
   */
  public var charAsCodepoint: Boolean = false

  /**
   * @see WrappingConfiguration.byteArrayAsBase64String
   */
  public var byteArrayAsBase64String: Boolean = true

  internal fun build(): WrappingConfiguration {
    return WrappingConfiguration(
      allowSets = allowSets,
      charAsCodepoint = charAsCodepoint,
      byteArrayAsBase64String = byteArrayAsBase64String,
    )
  }
}