package io.github.optimumcode.json.schema.internal.hostname

import doist.x.normalize.Form
import doist.x.normalize.normalize

internal actual fun isNormalized(label: String): Boolean {
  return label.normalize(Form.NFC) == label
}