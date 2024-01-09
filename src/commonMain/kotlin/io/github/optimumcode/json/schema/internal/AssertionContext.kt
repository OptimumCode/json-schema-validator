package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.div
import io.github.optimumcode.json.pointer.get

internal interface AssertionContext {
  val objectPath: JsonPointer
  val annotationCollector: AnnotationCollector
  val referenceResolver: ReferenceResolver

  fun at(index: Int): AssertionContext

  fun at(property: String): AssertionContext

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
  override val referenceResolver: DefaultReferenceResolver,
  private val parent: DefaultAssertionContext? = null,
  private var recursiveRoot: JsonSchemaAssertion? = null,
) : AssertionContext {
  override val annotationCollector: DefaultAnnotationCollector = DefaultAnnotationCollector()

  override fun at(index: Int): AssertionContext = copy(objectPath = objectPath[index])

  override fun at(property: String): AssertionContext {
    return copy(objectPath = objectPath / property)
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
    referenceResolver.pushSchemaPath(path)
  }

  override fun popSchemaPath() {
    referenceResolver.popSchemaPath()
  }
}