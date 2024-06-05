package io.github.optimumcode.json.schema

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.schema.ValidationOutput.Detailed
import io.github.optimumcode.json.schema.ValidationOutput.Verbose

internal typealias OutputErrorTransformer<T> = OutputCollector<T>.(ValidationError) -> ValidationError?

public sealed class OutputCollector<T> private constructor(
  protected open val parent: OutputCollector<T>? = null,
  protected val transformer: OutputErrorTransformer<T> = { it },
) : ErrorCollector {
  public abstract val output: T

  internal abstract fun updateLocation(path: JsonPointer): OutputCollector<T>

  internal abstract fun updateKeywordLocation(path: JsonPointer): OutputCollector<T>

  internal abstract fun withErrorTransformer(transformer: OutputErrorTransformer<T>): OutputCollector<T>

  internal abstract fun childCollector(): OutputCollector<T>

  internal open fun reportErrors() = Unit

  internal inline fun <OUT> use(block: OutputCollector<T>.() -> OUT): OUT =
    try {
      block(this)
    } finally {
      reportErrors()
    }

  internal fun transformError(error: ValidationError): ValidationError? {
    return transformer(error)?.let {
      parent.let { p ->
        if (p == null) {
          it
        } else {
          p.transformError(it)
        }
      }
    }
  }

  internal data object Empty : OutputCollector<Nothing>() {
    override val output: Nothing
      get() = throw UnsupportedOperationException("no output in empty collector")

    override fun updateLocation(path: JsonPointer): OutputCollector<Nothing> = this

    override fun updateKeywordLocation(path: JsonPointer): OutputCollector<Nothing> = this

    override fun withErrorTransformer(transformer: OutputErrorTransformer<Nothing>): OutputCollector<Nothing> = this

    override fun childCollector(): OutputCollector<Nothing> = this

    override fun onError(error: ValidationError) = Unit
  }

  internal class DelegateOutputCollector(
    private val errorCollector: ErrorCollector,
    override val parent: DelegateOutputCollector? = null,
    transformer: OutputErrorTransformer<Nothing> = { it },
  ) : OutputCollector<Nothing>(parent, transformer) {
    private val reportedErrors = mutableListOf<ValidationError>()

    override fun onError(error: ValidationError) {
      transformError(error)?.also(reportedErrors::add)
    }

    override val output: Nothing
      get() = throw UnsupportedOperationException("no output in delegate collector")

    override fun updateLocation(path: JsonPointer): OutputCollector<Nothing> =
      DelegateOutputCollector(errorCollector, this)

    override fun updateKeywordLocation(path: JsonPointer): OutputCollector<Nothing> =
      DelegateOutputCollector(errorCollector, this)

    override fun withErrorTransformer(transformer: OutputErrorTransformer<Nothing>): OutputCollector<Nothing> {
      return DelegateOutputCollector(errorCollector, parent, transformer)
    }

    override fun reportErrors() {
      parent?.also { it.reportedErrors.addAll(reportedErrors) }
        ?: reportedErrors.forEach(errorCollector::onError)
    }

    override fun childCollector(): OutputCollector<Nothing> = DelegateOutputCollector(errorCollector, this, transformer)
  }

  public class Flag private constructor(
    override val parent: Flag? = null,
    transformer: OutputErrorTransformer<ValidationOutput.Flag> = { it },
  ) : OutputCollector<ValidationOutput.Flag>(parent, transformer) {
    private var valid: Boolean = true
    override val output: ValidationOutput.Flag
      get() =
        if (valid) {
          ValidationOutput.Flag.VALID
        } else {
          ValidationOutput.Flag.INVALID
        }

    override fun updateKeywordLocation(path: JsonPointer): Flag = childCollector()

    override fun updateLocation(path: JsonPointer): Flag = childCollector()

    override fun withErrorTransformer(transformer: OutputErrorTransformer<ValidationOutput.Flag>): Flag =
      Flag(parent, transformer)

    override fun reportErrors() {
      parent?.also {
        it.valid = it.valid && valid
      }
    }

    override fun onError(error: ValidationError) {
      transformError(error) ?: return
      if (!valid) {
        return
      }
      valid = false
    }

    override fun childCollector(): Flag = Flag(this)
  }

  public class Detailed private constructor(
    private val location: JsonPointer = JsonPointer.ROOT,
    private val keywordLocation: JsonPointer = JsonPointer.ROOT,
    override val parent: Detailed? = null,
    transformer: OutputErrorTransformer<ValidationOutput.Detailed> = { it },
  ) : OutputCollector<ValidationOutput.Detailed>(parent, transformer) {
    private val errors: MutableList<ValidationOutput.Detailed> = mutableListOf()

    override val output: ValidationOutput.Detailed
      get() =
        if (errors.size == 1) {
          errors.single()
        } else {
          Detailed(
            valid = errors.any { !it.valid },
            keywordLocation = keywordLocation,
            absoluteKeywordLocation = null,
            instanceLocation = location,
            errors = errors.toList(),
          )
        }

    override fun updateLocation(path: JsonPointer): Detailed =
      Detailed(
        location = path,
        keywordLocation = keywordLocation,
        parent = this,
      )

    override fun updateKeywordLocation(path: JsonPointer): Detailed =
      Detailed(
        location = location,
        keywordLocation = path,
        parent = this,
      )

    override fun childCollector(): OutputCollector<ValidationOutput.Detailed> =
      Detailed(location, keywordLocation, this)

    override fun withErrorTransformer(
      transformer: OutputErrorTransformer<ValidationOutput.Detailed>,
    ): OutputCollector<ValidationOutput.Detailed> = Detailed(location, keywordLocation, parent, transformer)

    override fun reportErrors() {
      parent?.errors?.add(output)
    }

    override fun onError(error: ValidationError) {
      val err = transformError(error) ?: return
      errors.add(
        Detailed(
          valid = false,
          instanceLocation = err.objectPath,
          keywordLocation = err.schemaPath,
          absoluteKeywordLocation = err.absoluteLocation,
          error = err.message,
        ),
      )
    }
  }

  public class Verbose private constructor(
    private val location: JsonPointer = JsonPointer.ROOT,
    private val keywordLocation: JsonPointer = JsonPointer.ROOT,
    override val parent: Verbose? = null,
    transformer: OutputErrorTransformer<ValidationOutput.Verbose> = { it },
  ) : OutputCollector<ValidationOutput.Verbose>(parent, transformer) {
    private val errors: MutableList<ValidationOutput.Verbose> = mutableListOf()

    override val output: ValidationOutput.Verbose
      get() =
        Verbose(
          valid = errors.any { !it.valid },
          keywordLocation = keywordLocation,
          absoluteKeywordLocation = null,
          instanceLocation = location,
          errors = errors.toList(),
        )

    override fun updateLocation(path: JsonPointer): Verbose =
      Verbose(
        location = path,
        keywordLocation = keywordLocation,
        parent = this,
      )

    override fun updateKeywordLocation(path: JsonPointer): Verbose =
      Verbose(
        location = location,
        keywordLocation = path,
        parent = this,
      )

    override fun childCollector(): OutputCollector<ValidationOutput.Verbose> {
      return Verbose(location, keywordLocation, this)
    }

    override fun withErrorTransformer(
      transformer: OutputErrorTransformer<ValidationOutput.Verbose>,
    ): OutputCollector<ValidationOutput.Verbose> = Verbose(location, keywordLocation, parent, transformer)

    override fun reportErrors() {
      parent?.errors?.add(output)
    }

    override fun onError(error: ValidationError) {
      val err = transformError(error) ?: return
      errors.add(
        Verbose(
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