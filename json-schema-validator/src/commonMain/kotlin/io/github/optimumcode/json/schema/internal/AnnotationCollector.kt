package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.schema.Aggregator
import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.AnnotationKey.AggregatableAnnotationKey
import io.github.optimumcode.json.schema.AnnotationKey.SimpleAnnotationKey
import io.github.optimumcode.json.schema.extension.ExternalAnnotationCollector
import kotlin.jvm.JvmStatic
import kotlin.reflect.KClass
import kotlin.reflect.cast

internal interface AnnotationCollector : ExternalAnnotationCollector {
  fun <T : Any> aggregatedAnnotation(key: AnnotationKey<T>): T?
}

internal object AnnotationKeyFactory {
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
  ): AnnotationKey<T> = SimpleAnnotationKey.create(name, type)

  @JvmStatic
  fun <T : Any> createAggregatable(
    name: String,
    type: KClass<T>,
    aggregator: (T, T) -> T,
  ): AnnotationKey<T> = AggregatableAnnotationKey.create(name, type, aggregator)
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
        when (key) {
          is AggregatableAnnotationKey -> key.aggregator.aggregate(currentLevelAnnotation, aggregatedAnnotation)
          is SimpleAnnotationKey -> null
        }
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
      if (key !is AggregatableAnnotationKey) {
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