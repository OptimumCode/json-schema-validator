@file:JvmName("Annotations")

package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.schema.AnnotationKey
import io.github.optimumcode.json.schema.internal.factories.general.FormatAssertionFactory
import kotlin.jvm.JvmField
import kotlin.jvm.JvmName

/**
 * This object contains generally available annotations
 * that can be used in [io.github.optimumcode.json.schema.extension.ExternalAssertion]
 */
@JvmField
public val FORMAT_ANNOTATION: AnnotationKey<String> = FormatAssertionFactory.ANNOTATION