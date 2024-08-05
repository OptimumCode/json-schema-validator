package io.github.optimumcode.json.schema.internal.hostname

internal actual fun isNormalized(label: String): Boolean = js("label.normalize('NFC') === label")