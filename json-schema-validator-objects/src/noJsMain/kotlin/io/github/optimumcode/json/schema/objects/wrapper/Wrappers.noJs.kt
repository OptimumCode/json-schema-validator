package io.github.optimumcode.json.schema.objects.wrapper

internal actual fun isInteger(value: Number): Boolean = value is Byte || value is Short || value is Int || value is Long