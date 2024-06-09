package io.github.optimumcode.json.schema

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.plus
import io.github.optimumcode.json.pointer.relative
import io.github.optimumcode.json.schema.ValidationOutput.OutputUnit
import kotlin.jvm.JvmStatic

internal typealias OutputErrorTransformer<T> = OutputCollector<T>.(ValidationError) -> ValidationError?

private val NO_TRANSFORMATION: OutputErrorTransformer<*> = { it }

public sealed class OutputCollector<T> private constructor(
  parent: OutputCollector<T>? = null,
  transformer: OutputErrorTransformer<T> = NO_TRANSFORMATION,
) {
  public companion object {
    @JvmStatic
    public fun flag(): OutputCollector<ValidationOutput.Flag> = Flag()

    @JvmStatic
    public fun basic(): OutputCollector<ValidationOutput.Basic> = Basic()

    @JvmStatic
    public fun detailed(): OutputCollector<OutputUnit> = Detailed()

    @JvmStatic
    public fun verbose(): OutputCollector<OutputUnit> = Verbose()
  }

  public abstract val output: T
  private val transformerFunc: OutputErrorTransformer<T> =
    parent?.let { p ->
      when {
        transformer === NO_TRANSFORMATION && p.transformerFunc === NO_TRANSFORMATION
        -> NO_TRANSFORMATION
        transformer === NO_TRANSFORMATION
        -> p.transformerFunc
        p.transformerFunc === NO_TRANSFORMATION
        -> transformer
        else -> {
          { err ->
            transformer(err)?.let { p.transformError(it) }
          }
        }
      }
    } ?: transformer

  internal abstract fun updateLocation(path: JsonPointer): OutputCollector<T>

  internal abstract fun updateKeywordLocation(
    path: JsonPointer,
    absoluteLocation: AbsoluteLocation? = null,
    canCollapse: Boolean = true,
  ): OutputCollector<T>

  internal abstract fun withErrorTransformer(transformer: OutputErrorTransformer<T>): OutputCollector<T>

  internal abstract fun childCollector(): OutputCollector<T>

  internal open fun reportErrors() = Unit

  internal abstract fun onError(error: ValidationError)

  internal inline fun <OUT> use(block: OutputCollector<T>.() -> OUT): OUT =
    try {
      block(this)
    } finally {
      reportErrors()
    }

  protected fun transformError(error: ValidationError): ValidationError? = transformerFunc(error)

  internal data object Empty : OutputCollector<Nothing>() {
    override val output: Nothing
      get() = throw UnsupportedOperationException("no output in empty collector")

    override fun updateLocation(path: JsonPointer): OutputCollector<Nothing> = this

    override fun updateKeywordLocation(
      path: JsonPointer,
      absoluteLocation: AbsoluteLocation?,
      canCollapse: Boolean,
    ): OutputCollector<Nothing> = this

    override fun withErrorTransformer(transformer: OutputErrorTransformer<Nothing>): OutputCollector<Nothing> = this

    override fun childCollector(): OutputCollector<Nothing> = this

    override fun onError(error: ValidationError) = Unit
  }

  internal class DelegateOutputCollector(
    private val errorCollector: ErrorCollector,
    private val parent: DelegateOutputCollector? = null,
    transformer: OutputErrorTransformer<Nothing> = NO_TRANSFORMATION,
  ) : OutputCollector<Nothing>(parent, transformer) {
    private lateinit var reportedErrors: MutableList<ValidationError>

    private fun addError(error: ValidationError) {
      if (!::reportedErrors.isInitialized) {
        reportedErrors = ArrayList(1)
      }
      reportedErrors.add(error)
    }

    private fun addErrors(errors: MutableList<ValidationError>) {
      if (::reportedErrors.isInitialized) {
        reportedErrors.addAll(errors)
      } else {
        reportedErrors = errors
      }
    }

    override fun onError(error: ValidationError) {
      transformError(error)?.also { addError(it) }
    }

    override val output: Nothing
      get() = throw UnsupportedOperationException("no output in delegate collector")

    override fun updateLocation(path: JsonPointer): OutputCollector<Nothing> =
      DelegateOutputCollector(errorCollector, this)

    override fun updateKeywordLocation(
      path: JsonPointer,
      absoluteLocation: AbsoluteLocation?,
      canCollapse: Boolean,
    ): OutputCollector<Nothing> = DelegateOutputCollector(errorCollector, this)

    override fun withErrorTransformer(transformer: OutputErrorTransformer<Nothing>): OutputCollector<Nothing> {
      return DelegateOutputCollector(errorCollector, parent, transformer)
    }

    override fun reportErrors() {
      if (!::reportedErrors.isInitialized) {
        return
      }
      parent?.also { it.addErrors(reportedErrors) }
        ?: reportedErrors.forEach(errorCollector::onError)
    }

    override fun childCollector(): OutputCollector<Nothing> = DelegateOutputCollector(errorCollector, this)
  }

  private class Flag(
    private val parent: Flag? = null,
    transformer: OutputErrorTransformer<ValidationOutput.Flag> = NO_TRANSFORMATION,
  ) : OutputCollector<ValidationOutput.Flag>(parent, transformer) {
    private var valid: Boolean = true
    private var hasErrors: Boolean = false
    override val output: ValidationOutput.Flag
      get() =
        if (valid) {
          ValidationOutput.Flag.VALID
        } else {
          ValidationOutput.Flag.INVALID
        }

    override fun updateKeywordLocation(
      path: JsonPointer,
      absoluteLocation: AbsoluteLocation?,
      canCollapse: Boolean,
    ): Flag = childCollector()

    override fun updateLocation(path: JsonPointer): Flag = childCollector()

    override fun withErrorTransformer(transformer: OutputErrorTransformer<ValidationOutput.Flag>): Flag =
      Flag(parent, transformer)

    override fun reportErrors() {
      valid = valid && !hasErrors
      parent?.also {
        it.valid = it.valid && valid
      }
    }

    override fun onError(error: ValidationError) {
      transformError(error) ?: return
      if (hasErrors) {
        return
      }
      hasErrors = true
    }

    override fun childCollector(): Flag =
      // once `valid` flag is set to false we can avoid creating child collectors
      // because the validation result won't be changed
      if (valid) Flag(this) else this
  }

  private class Basic(
    private val parent: Basic? = null,
    transformer: OutputErrorTransformer<ValidationOutput.Basic> = NO_TRANSFORMATION,
  ) : OutputCollector<ValidationOutput.Basic>(parent, transformer) {
    private lateinit var errors: MutableSet<OutputUnit>

    private fun addError(error: OutputUnit) {
      if (!::errors.isInitialized) {
        errors = linkedSetOf()
      }
      errors.add(error)
    }

    private fun addErrors(errors: MutableSet<OutputUnit>) {
      if (::errors.isInitialized) {
        this.errors.addAll(errors)
      } else {
        this.errors = errors
      }
    }

    override fun onError(error: ValidationError) {
      val err = transformError(error) ?: return
      addError(
        OutputUnit(
          valid = false,
          keywordLocation = err.schemaPath,
          instanceLocation = err.objectPath,
          absoluteKeywordLocation = err.absoluteLocation,
          error = err.message,
        ),
      )
    }

    override val output: ValidationOutput.Basic
      get() {
        val errors = if (::errors.isInitialized) errors else emptySet()
        return ValidationOutput.Basic(
          valid = errors.isEmpty(),
          errors = errors,
        )
      }

    override fun updateLocation(path: JsonPointer): OutputCollector<ValidationOutput.Basic> = childCollector()

    override fun updateKeywordLocation(
      path: JsonPointer,
      absoluteLocation: AbsoluteLocation?,
      canCollapse: Boolean,
    ): OutputCollector<ValidationOutput.Basic> = childCollector()

    override fun withErrorTransformer(
      transformer: OutputErrorTransformer<ValidationOutput.Basic>,
    ): OutputCollector<ValidationOutput.Basic> = Basic(parent, transformer)

    override fun childCollector(): OutputCollector<ValidationOutput.Basic> = Basic(this)

    override fun reportErrors() {
      if (!::errors.isInitialized) {
        return
      }
      parent?.addErrors(errors)
    }
  }

  private class Detailed(
    private val location: JsonPointer = JsonPointer.ROOT,
    private val keywordLocation: JsonPointer = JsonPointer.ROOT,
    private val parent: Detailed? = null,
    private val absoluteLocation: AbsoluteLocation? = null,
    private val collapse: Boolean = true,
    transformer: OutputErrorTransformer<OutputUnit> = NO_TRANSFORMATION,
  ) : OutputCollector<OutputUnit>(parent, transformer) {
    private lateinit var results: MutableSet<OutputUnit>

    private fun addResult(result: OutputUnit) {
      if (result.valid) {
        // do not add valid
        return
      }
      if (!::results.isInitialized) {
        results = linkedSetOf()
      }
      results.add(result)
    }

    override val output: OutputUnit
      get() {
        if (!::results.isInitialized) {
          // variable is uninitialized only if all results are valid
          return OutputUnit(
            valid = true,
            keywordLocation = keywordLocation,
            instanceLocation = location,
            absoluteKeywordLocation = absoluteLocation,
            errors = emptySet(),
          )
        }
        val failed = results
        return if (failed.size == 1 && collapse) {
          failed.single()
        } else {
          OutputUnit(
            valid = false,
            keywordLocation = keywordLocation,
            absoluteKeywordLocation = absoluteLocation,
            instanceLocation = location,
            errors = failed,
          )
        }
      }

    override fun updateLocation(path: JsonPointer): Detailed =
      Detailed(
        location = path,
        keywordLocation = keywordLocation,
        absoluteLocation = absoluteLocation,
        parent = this,
      )

    override fun updateKeywordLocation(
      path: JsonPointer,
      absoluteLocation: AbsoluteLocation?,
      canCollapse: Boolean,
    ): Detailed {
      val newKeywordLocation =
        if (this.absoluteLocation == null) {
          path
        } else {
          this.keywordLocation + this.absoluteLocation.path.relative(path)
        }
      if (keywordLocation == newKeywordLocation) {
        return this
      }
      return Detailed(
        location = location,
        keywordLocation = newKeywordLocation,
        absoluteLocation = absoluteLocation ?: this.absoluteLocation?.copy(path = path),
        parent = this,
        collapse = absoluteLocation == null && canCollapse,
      )
    }

    override fun childCollector(): OutputCollector<OutputUnit> =
      Detailed(location, keywordLocation, this, absoluteLocation)

    override fun withErrorTransformer(transformer: OutputErrorTransformer<OutputUnit>): OutputCollector<OutputUnit> =
      Detailed(location, keywordLocation, parent, absoluteLocation, collapse, transformer = transformer)

    override fun reportErrors() {
      parent?.addResult(output)
    }

    override fun onError(error: ValidationError) {
      val err = transformError(error) ?: return
      addResult(
        OutputUnit(
          valid = false,
          instanceLocation = err.objectPath,
          keywordLocation = err.schemaPath,
          absoluteKeywordLocation = err.absoluteLocation,
          error = err.message,
        ),
      )
    }
  }

  private class Verbose(
    private val location: JsonPointer = JsonPointer.ROOT,
    private val keywordLocation: JsonPointer = JsonPointer.ROOT,
    private val parent: Verbose? = null,
    private val absoluteLocation: AbsoluteLocation? = null,
    transformer: OutputErrorTransformer<OutputUnit> = NO_TRANSFORMATION,
  ) : OutputCollector<OutputUnit>(parent, transformer) {
    private val errors: MutableList<OutputUnit> = ArrayList(1)

    private fun addResult(result: OutputUnit) {
      // init hashCode to reduce overhead in future
      result.hashCode()
      errors.add(result)
    }

    override val output: OutputUnit
      get() {
        if (errors.size == 1) {
          // when this is a leaf we should return the reported error
          // instead of creating a new node
          val childError = errors.single()
          if (
            childError.errors.isEmpty() &&
            childError.let {
              it.keywordLocation == keywordLocation && it.instanceLocation == it.instanceLocation
            }
          ) {
            return childError
          }
        }
        return OutputUnit(
          valid = errors.none { !it.valid },
          keywordLocation = keywordLocation,
          absoluteKeywordLocation = absoluteLocation,
          instanceLocation = location,
          errors = errors.toSet(),
        )
      }

    override fun updateLocation(path: JsonPointer): Verbose {
      return Verbose(
        location = path,
        keywordLocation = keywordLocation,
        absoluteLocation = absoluteLocation,
        parent = this,
      )
    }

    override fun updateKeywordLocation(
      path: JsonPointer,
      absoluteLocation: AbsoluteLocation?,
      canCollapse: Boolean,
    ): Verbose {
      val newKeywordLocation =
        if (this.absoluteLocation == null) {
          path
        } else {
          this.keywordLocation + this.absoluteLocation.path.relative(path)
        }
      if (keywordLocation == newKeywordLocation) {
        return this
      }
      return Verbose(
        location = location,
        keywordLocation = newKeywordLocation,
        absoluteLocation = absoluteLocation ?: this.absoluteLocation?.copy(path = path),
        parent = this,
      )
    }

    override fun childCollector(): OutputCollector<OutputUnit> {
      return Verbose(location, keywordLocation, this, absoluteLocation)
    }

    override fun withErrorTransformer(transformer: OutputErrorTransformer<OutputUnit>): OutputCollector<OutputUnit> =
      Verbose(location, keywordLocation, parent, absoluteLocation, transformer)

    override fun reportErrors() {
      parent?.addResult(output)
    }

    override fun onError(error: ValidationError) {
      val err = transformError(error) ?: return
      addResult(
        OutputUnit(
          valid = false,
          instanceLocation = err.objectPath,
          keywordLocation = err.schemaPath,
          absoluteKeywordLocation = err.absoluteLocation,
          error = err.message,
        ),
      )
    }
  }
}