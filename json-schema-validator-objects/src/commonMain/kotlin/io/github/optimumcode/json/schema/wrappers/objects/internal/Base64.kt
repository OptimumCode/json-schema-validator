package io.github.optimumcode.json.schema.wrappers.objects.internal

import kotlin.io.encoding.Base64
import kotlin.io.encoding.ExperimentalEncodingApi

@OptIn(ExperimentalEncodingApi::class)
internal fun ByteArray.encodeBase64(): String = Base64.Default.encode(this)