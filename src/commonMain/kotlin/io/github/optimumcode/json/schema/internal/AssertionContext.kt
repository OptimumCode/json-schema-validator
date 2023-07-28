package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get
import kotlin.jvm.JvmStatic
import kotlin.reflect.KClass
import kotlin.reflect.cast

internal interface AssertionContext {
  val objectPath: JsonPointer
  fun <T : Any> annotate(key: AnnotationKey<T>, value: T)
  fun <T : Any> annotated(key: AnnotationKey<T>): T?
  fun at(index: Int): AssertionContext
  fun at(property: String): AssertionContext
  fun resolveRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion>

  fun resetAnnotations()
}

internal class AnnotationKey<T : Any> private constructor(
  private val name: String,
  internal val type: KClass<T>,
) {
  override fun equals(other: Any?): Boolean {
    if (this === other) return true
    if (other == null || this::class != other::class) return false

    other as AnnotationKey<*>

    if (name != other.name) return false
    if (type != other.type) return false

    return true
  }

  override fun hashCode(): Int {
    var result = name.hashCode()
    result = 31 * result + type.hashCode()
    return result
  }

  override fun toString(): String = "$name(${type.simpleName})"

  companion object {
    @JvmStatic
    inline fun <reified T : Any> create(name: String): AnnotationKey<T> = create(name, T::class)

    @JvmStatic
    fun <T : Any> create(name: String, type: KClass<T>): AnnotationKey<T> = AnnotationKey(name, type)
  }
}

internal data class DefaultAssertionContext(
  override val objectPath: JsonPointer,
  private val references: Map<RefId, AssertionWithPath>,
) : AssertionContext {
  private lateinit var _annotations: MutableMap<AnnotationKey<*>, Any>
  override fun <T : Any> annotate(key: AnnotationKey<T>, value: T) {
    annotations()[key] = value
  }

  override fun <T : Any> annotated(key: AnnotationKey<T>): T? {
    if (!::_annotations.isInitialized) {
      return null
    }
    return _annotations[key]?.let { key.type.cast(it) }
  }

  override fun at(index: Int): AssertionContext = copy(objectPath = objectPath[index])

  override fun at(property: String): AssertionContext {
    return copy(objectPath = objectPath / property)
  }

  override fun resolveRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion> {
    val resolvedRef = requireNotNull(references[refId]) { "$refId is not found" }
    return resolvedRef.schemaPath to resolvedRef.assertion
  }

  override fun resetAnnotations() {
    annotations().clear()
  }

  private fun annotations(): MutableMap<AnnotationKey<*>, Any> {
    if (!::_annotations.isInitialized) {
      _annotations = hashMapOf()
    }
    return _annotations
  }
}