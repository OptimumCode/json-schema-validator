package io.github.optimumcode.json.schema.internal

import kotlin.jvm.JvmStatic
import kotlin.reflect.KClass
import kotlin.reflect.cast

internal interface AnnotationCollector {
  fun <T : Any> annotate(
    key: AnnotationKey<T>,
    value: T,
  )

  fun <T : Any> annotated(key: AnnotationKey<T>): T?

  fun <T : Any> aggregatedAnnotation(key: AnnotationKey<T>): T?
}

internal fun interface Aggregator<T : Any> {
  fun aggregate(
    a: T,
    b: T,
  ): T?
}

internal class AnnotationKey<T : Any> private constructor(
  private val name: String,
  internal val type: KClass<T>,
  internal val aggregator: Aggregator<T>,
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
    internal val NOT_AGGREGATABLE: (Any, Any) -> Nothing? = { _, _ -> null }

    private fun <T : Any> notAggragatable(): (T, T) -> T? = NOT_AGGREGATABLE

    @JvmStatic
    inline fun <reified T : Any> create(name: String): AnnotationKey<T> = create(name, T::class)

    @JvmStatic
    inline fun <reified T : Any> createAggregatable(
      name: String,
      noinline aggregator: (T, T) -> T,
    ): AnnotationKey<T> = createAggregatable(name, T::class, aggregator)

    @JvmStatic
    fun <T : Any> create(
      name: String,
      type: KClass<T>,
    ): AnnotationKey<T> = AnnotationKey(name, type, notAggragatable())

    @JvmStatic
    fun <T : Any> createAggregatable(
      name: String,
      type: KClass<T>,
      aggregator: (T, T) -> T,
    ): AnnotationKey<T> = AnnotationKey(name, type, aggregator)
  }
}

internal class DefaultAnnotationCollector : AnnotationCollector {
  private lateinit var _annotations: MutableMap<AnnotationKey<*>, Any>
  private lateinit var _aggregatedAnnotations: MutableMap<AnnotationKey<*>, Any>

  override fun <T : Any> annotate(
    key: AnnotationKey<T>,
    value: T,
  ) {
    annotations()[key] = value
  }

  override fun <T : Any> annotated(key: AnnotationKey<T>): T? {
    if (!::_annotations.isInitialized) {
      return null
    }
    return _annotations[key]?.let { key.type.cast(it) }
  }

  override fun <T : Any> aggregatedAnnotation(key: AnnotationKey<T>): T? {
    if (!::_aggregatedAnnotations.isInitialized && !::_annotations.isInitialized) {
      return null
    }
    val currentLevelAnnotation: T? = annotated(key)
    if (!::_aggregatedAnnotations.isInitialized) {
      return currentLevelAnnotation
    }
    return _aggregatedAnnotations[key]?.let {
      val aggregatedAnnotation: T = key.type.cast(it)
      if (currentLevelAnnotation == null) {
        aggregatedAnnotation
      } else {
        key.aggregator.aggregate(currentLevelAnnotation, aggregatedAnnotation)
      }
    } ?: currentLevelAnnotation
  }

  fun applyAnnotations() {
    if (::_annotations.isInitialized && _annotations.isNotEmpty()) {
      aggregateAnnotations(_annotations) { aggregatedAnnotations() }
      _annotations.clear()
    }
  }

  fun resetAnnotations() {
    if (::_annotations.isInitialized && _annotations.isNotEmpty()) {
      _annotations.clear()
    }
  }

  fun propagateToParent(parent: DefaultAnnotationCollector) {
    if (!::_aggregatedAnnotations.isInitialized) {
      return
    }
    aggregateAnnotations(_aggregatedAnnotations) { parent.aggregatedAnnotations() }
  }

  private inline fun aggregateAnnotations(
    source: MutableMap<AnnotationKey<*>, Any>,
    destination: () -> MutableMap<AnnotationKey<*>, Any>,
  ) {
    source.forEach { (key, value) ->
      if (key.aggregator === AnnotationKey.NOT_AGGREGATABLE) {
        return@forEach
      }
      val aggregatedAnnotations = destination()
      val oldValue: Any? = aggregatedAnnotations[key]
      if (oldValue != null) {
        // Probably there is a mistake in the architecture
        // Need to think on how to change that to avoid unchecked cast
        @Suppress("UNCHECKED_CAST")
        val aggregator: Aggregator<Any> = key.aggregator as Aggregator<Any>
        val aggregated = aggregator.aggregate(key.type.cast(oldValue), key.type.cast(value))
        if (aggregated != null) {
          aggregatedAnnotations[key] = aggregated
        }
      } else {
        aggregatedAnnotations[key] = value
      }
    }
  }

  private fun annotations(): MutableMap<AnnotationKey<*>, Any> {
    if (!::_annotations.isInitialized) {
      _annotations = hashMapOf()
    }
    return _annotations
  }

  private fun aggregatedAnnotations(): MutableMap<AnnotationKey<*>, Any> {
    if (!::_aggregatedAnnotations.isInitialized) {
      _aggregatedAnnotations = hashMapOf()
    }
    return _aggregatedAnnotations
  }
}