package io.github.optimumcode.json.schema.suite

import okio.FileSystem
import okio.NodeJsFileSystem

actual fun fileSystem(): FileSystem = NodeJsFileSystem