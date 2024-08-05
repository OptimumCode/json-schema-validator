package io.github.optimumcode.json.schema.internal.hostname

public actual fun isNormalized(label: String): Boolean {
  // depending library does not yet support wasm: https://github.com/OptimumCode/json-schema-validator/issues/177#issuecomment-2268482409
  return true
}