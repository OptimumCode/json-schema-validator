package io.github.optimumcode.json.schema.internal.util

import io.github.optimumcode.json.schema.model.AbstractElement
import io.github.optimumcode.json.schema.model.ArrayElement
import io.github.optimumcode.json.schema.model.ObjectElement
import io.github.optimumcode.json.schema.model.PrimitiveElement
import io.github.optimumcode.json.schema.model.getValue

internal fun areEqual(
  first: AbstractElement,
  second: AbstractElement,
): Boolean {
  if (areDifferentInstances(first, second)) {
    return false
  }
  return when (first) {
    is ObjectElement -> areEqualObjects(first, second as ObjectElement)
    is ArrayElement -> areEqualArrays(first, second as ArrayElement)
    is PrimitiveElement -> areEqualPrimitives(first, second as PrimitiveElement)
  }
}

internal fun areDifferentInstances(
  left: AbstractElement,
  right: AbstractElement,
): Boolean =
  when {
    left is PrimitiveElement && right is PrimitiveElement -> false
    left is ArrayElement && right is ArrayElement -> false
    left is ObjectElement && right is ObjectElement -> false
    else -> true
  }

internal fun areEqualPrimitives(
  first: PrimitiveElement,
  second: PrimitiveElement,
): Boolean {
  if (first.isNull && second.isNull) {
    return true
  }
  if (first.isString != second.isString) {
    return false
  }
  return if (first.isString) {
    first.content == second.content
  } else {
    when {
      first.isNull || second.isNull -> false
      // probably content should be compared ignoring the case - YAML allows different values for boolean
      first.isBoolean || second.isBoolean -> first.content == second.content
      else -> compareAsNumbers(first, second)
    }
  }
}

private fun compareAsNumbers(
  first: PrimitiveElement,
  second: PrimitiveElement,
): Boolean {
  return numberParts(first) == numberParts(second)
}

internal fun areEqualArrays(
  first: ArrayElement,
  second: ArrayElement,
): Boolean {
  if (first.size != second.size) {
    return false
  }
  for (i in 0 until first.size) {
    if (!areEqual(first[i], second[i])) {
      return false
    }
  }
  return true
}

internal fun areEqualObjects(
  first: ObjectElement,
  second: ObjectElement,
): Boolean {
  if (first.size != second.size) {
    return false
  }
  if (first.keys != second.keys) {
    return false
  }
  for (key in first.keys) {
    if (!areEqual(first.getValue(key), second.getValue(key))) {
      return false
    }
  }
  return true
}