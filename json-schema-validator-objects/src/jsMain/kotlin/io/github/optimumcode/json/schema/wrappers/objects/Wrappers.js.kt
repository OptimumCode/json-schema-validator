package io.github.optimumcode.json.schema.wrappers.objects

internal actual fun isInteger(value: Number): Boolean = js("return Number.isInteger(value)")