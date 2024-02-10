package io.github.optimumcode.json.schema

import kotlin.jvm.JvmStatic
import kotlin.reflect.KClass

/**
 * Class represents a key with certain type that can be used
 * to annotate a [JSON element][kotlinx.serialization.json.JsonElement].
 * Only **one instance** of a key should be created and used to annotate or retrieve annotations.
 *
 * ```kotlin
 *object Factory : AbstractAssertionFactory(/* .. */) {
 *  val ANNOTATION: AnnotationKey<String> = AnnotationKey.simple(/*...*/)
 *}
 * ```
 */
public sealed class AnnotationKey<T : Any> private constructor(
  private val name: String,
  internal val type: KClass<T>,
) {
  override fun equals(other: Any?): Boolean = this === other

  override fun hashCode(): Int {
    var result = name.hashCode()
    result = 31 * result + type.hashCode()
    return result
  }

  override fun toString(): String = "${this::class.simpleName}($name(${type.simpleName}))"

  internal class SimpleAnnotationKey<T : Any> private constructor(
    name: String,
    type: KClass<T>,
  ) : AnnotationKey<T>(name, type) {
    internal companion object {
      @JvmStatic
      fun <T : Any> create(
        name: String,
        type: KClass<T>,
      ): AnnotationKey<T> = SimpleAnnotationKey(name, type)
    }
  }

  internal class AggregatableAnnotationKey<T : Any> private constructor(
    name: String,
    type: KClass<T>,
    internal val aggregator: Aggregator<T>,
  ) : AnnotationKey<T>(name, type) {
    internal companion object {
      @JvmStatic
      fun <T : Any> create(
        name: String,
        type: KClass<T>,
        aggregator: (T, T) -> T,
      ): AnnotationKey<T> = AggregatableAnnotationKey(name, type, aggregator)
    }
  }

  public companion object {
    @JvmStatic
    public inline fun <reified T : Any> simple(name: String): AnnotationKey<T> = simple(name, T::class)

    @JvmStatic
    public fun <T : Any> simple(
      name: String,
      type: KClass<T>,
    ): AnnotationKey<T> = SimpleAnnotationKey.create(name, type)
  }
}

internal fun interface Aggregator<T : Any> {
  fun aggregate(
    a: T,
    b: T,
  ): T?
}