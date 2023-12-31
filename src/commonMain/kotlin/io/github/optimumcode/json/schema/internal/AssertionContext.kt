package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get
import io.github.optimumcode.json.pointer.internal.dropLast
import io.github.optimumcode.json.pointer.internal.length
import io.github.optimumcode.json.pointer.startsWith

internal interface AssertionContext {
  val objectPath: JsonPointer
  val annotationCollector: AnnotationCollector
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

internal data class DefaultAssertionContext(
  override val objectPath: JsonPointer,
  private val references: Map<RefId, AssertionWithPath>,
  private val parent: DefaultAssertionContext? = null,
  private var recursiveRoot: JsonSchemaAssertion? = null,
  private val schemaPathsStack: ArrayDeque<JsonPointer> = ArrayDeque(),
) : AssertionContext {
  override val annotationCollector: DefaultAnnotationCollector = DefaultAnnotationCollector()
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
    annotationCollector.resetAnnotations()
  }

  override fun applyAnnotations() {
    annotationCollector.applyAnnotations()
  }

  override fun propagateToParent() {
    if (parent == null) {
      return
    }
    annotationCollector.propagateToParent(parent.annotationCollector)
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
}