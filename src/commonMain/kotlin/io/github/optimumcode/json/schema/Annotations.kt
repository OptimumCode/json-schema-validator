@file:JvmName("Annotations")

package io.github.optimumcode.json.schema

import io.github.optimumcode.json.schema.internal.factories.general.FormatAssertionFactory
import kotlin.jvm.JvmField
import kotlin.jvm.JvmName

/**
 * Key for getting annotation from `format` assertion
 */
@JvmField
public val FORMAT_ANNOTATION: AnnotationKey<String> = FormatAssertionFactory.ANNOTATION