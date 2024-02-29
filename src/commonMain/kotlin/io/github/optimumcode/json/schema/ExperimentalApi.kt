package io.github.optimumcode.json.schema

/**
 * Marks declarations that are experimental or published as a 'preview' version.
 * The API for those declarations can be changed in future releases
 * based on library needs or user's feedback.
 * Once the API is final the backward compatibility will be maintained within patch and minor updates.
 */
@Target(AnnotationTarget.CLASS, AnnotationTarget.PROPERTY, AnnotationTarget.FUNCTION, AnnotationTarget.TYPEALIAS)
@RequiresOptIn(level = RequiresOptIn.Level.WARNING)
public annotation class ExperimentalApi