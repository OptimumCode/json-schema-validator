package io.github.optimumcode.json.schema.wrappers.objects

internal actual fun isInteger(value: Number): Boolean = value is Byte || value is Short || value is Int || value is Long