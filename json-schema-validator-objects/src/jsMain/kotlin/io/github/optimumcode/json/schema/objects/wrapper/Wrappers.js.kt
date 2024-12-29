package io.github.optimumcode.json.schema.objects.wrapper

internal actual fun isInteger(value: Number): Boolean = js("return Number.isInteger(value)")