package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get
import io.github.optimumcode.json.pointer.internal.dropLast
import io.github.optimumcode.json.pointer.internal.length
import io.github.optimumcode.json.pointer.startsWith
import kotlin.jvm.JvmStatic
import kotlin.reflect.KClass
import kotlin.reflect.cast

@Suppress("detekt:TooManyFunctions")
internal interface AssertionContext {
  val objectPath: JsonPointer
  fun <T : Any> annotate(key: AnnotationKey<T>, value: T)
  fun <T : Any> annotated(key: AnnotationKey<T>): T?
  fun <T : Any> aggregatedAnnotation(key: AnnotationKey<T>): T?
  fun at(index: Int): AssertionContext
  fun at(property: String): AssertionContext
  fun resolveRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion>

  fun resolveDynamicRef(refId: RefId, refPath: JsonPointer): Pair<JsonPointer, JsonSchemaAssertion>

  /**
   * Discards collected annotations
   */
  fun resetAnnotations()

  /**
   * Applies collected annotations
   */
  fun applyAnnotations()

  /**
   * Propagates aggregated annotations to parent context if it has one.
   * Otherwise, does nothing
   */
  fun propagateToParent()

  /**
   * Creates a child context with a new annotation scope.
   * Current context will get the collected annotations only
   * if [propagateToParent] method is called on the child context
   */
  fun childContext(): AssertionContext

  /**
   * Sets the recursive root to the [schema] if no recursive root was set before
   */
  fun setRecursiveRootIfAbsent(schema: JsonSchemaAssertion)

  /**
   * Resets recursive root
   */
  fun resetRecursiveRoot()

  /**
   * Returns recursive root for current state of the validation
   */
  fun getRecursiveRoot(): JsonSchemaAssertion?

  fun pushSchemaPath(path: JsonPointer)

  fun popSchemaPath()
}

internal fun interface Aggregator<T : Any> {
  fun aggregate(a: T, b: T): T?
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
    inline fun <reified T : Any> createAggregatable(name: String, noinline aggregator: (T, T) -> T): AnnotationKey<T> =
      createAggregatable(name, T::class, aggregator)

    @JvmStatic
    fun <T : Any> create(name: String, type: KClass<T>): AnnotationKey<T> = AnnotationKey(name, type, notAggragatable())

    @JvmStatic
    fun <T : Any> createAggregatable(
      name: String,
      type: KClass<T>,
      aggregator: (T, T) -> T,
    ): AnnotationKey<T> = AnnotationKey(name, type, aggregator)
  }
}

@Suppress("detekt:TooManyFunctions")
internal data class DefaultAssertionContext(
  override val objectPath: JsonPointer,
  private val references: Map<RefId, AssertionWithPath>,
  private val parent: DefaultAssertionContext? = null,
  private var recursiveRoot: JsonSchemaAssertion? = null,
  private val schemaPathsStack: ArrayDeque<JsonPointer> = ArrayDeque(),
) : AssertionContext {
  private lateinit var _annotations: MutableMap<AnnotationKey<*>, Any>
  private lateinit var _aggregatedAnnotations: MutableMap<AnnotationKey<*>, Any>
  override fun <T : Any> annotate(key: AnnotationKey<T>, value: T) {
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

  override fun at(index: Int): AssertionContext = copy(objectPath = objectPath[index])

  override fun at(property: String): AssertionContext {
    return copy(objectPath = objectPath / property)
  }

  override fun resolveRef(refId: RefId): Pair<JsonPointer, JsonSchemaAssertion> {
    val resolvedRef = requireNotNull(references[refId]) { "$refId is not found" }
    return resolvedRef.schemaPath to resolvedRef.assertion
  }

  override fun resolveDynamicRef(refId: RefId, refPath: JsonPointer): Pair<JsonPointer, JsonSchemaAssertion> {
    val originalRef = requireNotNull(references[refId]) { "$refId is not found" }
    if (!originalRef.dynamic) {
      return originalRef.schemaPath to originalRef.assertion
    }
    val fragment = refId.fragment
    val possibleDynamicRefs: MutableList<AssertionWithPath> = references.asSequence()
      .filter { (id, link) ->
        link.dynamic && id.fragment == fragment && id != refId
      }.map { it.value }.toMutableList()
    possibleDynamicRefs.sortBy { it.schemaPath.length }

    val resolvedDynamicRef = findMostOuterRef(possibleDynamicRefs)
      // If no outer anchor found use the original ref
      ?: possibleDynamicRefs.firstOrNull()
      ?: originalRef
    return resolvedDynamicRef.schemaPath to resolvedDynamicRef.assertion
  }

  @Suppress("detekt:NestedBlockDepth")
  private fun findMostOuterRef(possibleRefs: List<AssertionWithPath>): AssertionWithPath? {
    // Try to find the most outer anchor to use
    // Check every schema in the current chain
    // If not matches - take the most outer by location
    for (schemaPath in schemaPathsStack) {
      var currPath: JsonPointer = schemaPath
      while (currPath != JsonPointer.ROOT) {
        for (dynamicRef in possibleRefs) {
          if (dynamicRef.schemaPath.startsWith(currPath)) {
            return dynamicRef
          }
        }
        currPath = currPath.dropLast() ?: break
      }
    }
    return null
  }

  override fun resetAnnotations() {
    if (::_annotations.isInitialized && _annotations.isNotEmpty()) {
      _annotations.clear()
    }
  }

  override fun applyAnnotations() {
    if (::_annotations.isInitialized && _annotations.isNotEmpty()) {
      aggregateAnnotations(_annotations) { aggregatedAnnotations() }
      _annotations.clear()
    }
  }

  override fun propagateToParent() {
    if (parent == null) {
      return
    }
    if (!::_aggregatedAnnotations.isInitialized) {
      return
    }
    aggregateAnnotations(_aggregatedAnnotations) { parent.aggregatedAnnotations() }
  }

  override fun childContext(): AssertionContext {
    return copy(parent = this)
  }

  override fun setRecursiveRootIfAbsent(schema: JsonSchemaAssertion) {
    if (this.recursiveRoot != null) {
      return
    }
    this.recursiveRoot = schema
  }

  override fun resetRecursiveRoot() {
    this.recursiveRoot = null
  }

  override fun getRecursiveRoot(): JsonSchemaAssertion? {
    return recursiveRoot
  }

  override fun pushSchemaPath(path: JsonPointer) {
    schemaPathsStack.addLast(path)
  }

  override fun popSchemaPath() {
    schemaPathsStack.removeLast()
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