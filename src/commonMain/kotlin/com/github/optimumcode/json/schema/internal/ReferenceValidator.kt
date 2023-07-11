package com.github.optimumcode.json.schema.internal

import com.github.optimumcode.json.pointer.JsonPointer

internal object ReferenceValidator {
  data class ReferenceLocation(
    val schemaPath: JsonPointer,
    val refId: RefId,
  )
  fun validateReferences(references: Set<RefId>, usedRef: Set<ReferenceLocation>) {
    val missingRefs: Map<RefId, List<ReferenceLocation>> = usedRef.asSequence()
      .filter { it.refId !in references }
      .groupBy { it.refId }
    require(missingRefs.isEmpty()) {
      "cannot resolve references: ${
        missingRefs.entries.joinToString(prefix = "{", postfix = "}") { (ref, locations) ->
          "\"${ref.fragment}\": ${locations.map { "\"${it.schemaPath}\"" }}"
        }
      }"
    }
    checkCircledReferences(usedRef)
  }

  private val alwaysRunAssertions = hashSetOf("/allOf/", "/anyOf/", "/oneOf/")

  private fun checkCircledReferences(usedRefs: Set<ReferenceLocation>) {
    val locationToRef: Map<String, String> = usedRefs.associate { (schemaPath, refId) ->
      schemaPath.toString() to refId.fragment
    }

    val circledReferences = hashSetOf<CircledReference>()
    fun checkRunAlways(path: String): Boolean {
      return alwaysRunAssertions.any { path.contains(it) }
    }
    for ((location, refFragment) in locationToRef) {
      val (otherLocation, otherRefFragment) = locationToRef.entries.find { it.key.startsWith(refFragment) }
        ?: continue
      if (!location.startsWith(otherRefFragment)) {
        continue
      }
      if (checkRunAlways(location) && checkRunAlways(otherLocation)) {
        circledReferences += CircledReference(
          firstLocation = location,
          firstRef = refFragment,
          secondLocation = otherLocation,
          secondRef = otherRefFragment,
        )
      }
    }
    require(circledReferences.isEmpty()) {
      "circled references: ${
        circledReferences.joinToString {
          "${it.firstLocation} ref to ${it.firstRef} and ${it.secondLocation} ref to ${it.secondRef}"
        }
      }"
    }
  }

  private class CircledReference(
    val firstLocation: String,
    val firstRef: String,
    val secondLocation: String,
    val secondRef: String,
  ) {
    override fun equals(other: Any?): Boolean {
      if (this === other) return true
      if (other == null || this::class != other::class) return false

      other as CircledReference

      return (
        firstLocation == other.firstLocation &&
          firstRef == other.firstRef &&
          secondLocation == other.secondLocation &&
          secondRef == other.secondRef
        ) ||
        (
          firstLocation == other.secondLocation &&
            firstRef == other.secondRef &&
            secondLocation == other.firstLocation &&
            secondRef == other.firstRef
          )
    }

    override fun hashCode(): Int {
      return firstLocation.hashCode() +
        firstRef.hashCode() +
        secondLocation.hashCode() +
        secondRef.hashCode()
    }
  }
}