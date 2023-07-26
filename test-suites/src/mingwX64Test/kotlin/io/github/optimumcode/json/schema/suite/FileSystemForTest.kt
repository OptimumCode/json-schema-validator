package io.github.optimumcode.json.schema.suite

import okio.FileSystem

actual fun fileSystem(): FileSystem = FileSystem.SYSTEM