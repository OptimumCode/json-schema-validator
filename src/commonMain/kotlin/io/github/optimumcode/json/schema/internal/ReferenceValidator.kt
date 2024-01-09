package io.github.optimumcode.json.schema.internal

import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.contains
import io.github.optimumcode.json.pointer.startsWith

internal object ReferenceValidator {
  data class ReferenceLocation(
    val schemaPath: JsonPointer,
    val refId: RefId,
  )

  fun validateReferences(
    referencesWithPath: Map<RefId, JsonPointer>,
    usedRef: Set<ReferenceLocation>,
  ) {
    val missingRefs: Map<RefId, List<ReferenceLocation>> =
      usedRef.asSequence()
        .filter { it.refId !in referencesWithPath }
        .groupBy { it.refId }
    require(missingRefs.isEmpty()) {
      "cannot resolve references: ${
        missingRefs.entries.joinToString(prefix = "{", postfix = "}") { (ref, locations) ->
          "\"${ref.uri}\": ${locations.map { "\"${it.schemaPath}\"" }}"
        }
      }"
    }
    checkCircledReferences(usedRef, referencesWithPath)
  }

  private val alwaysRunAssertions = hashSetOf("allOf", "anyOf", "oneOf")

  private fun checkCircledReferences(
    usedRefs: Set<ReferenceLocation>,
    referencesWithPath: Map<RefId, JsonPointer>,
  ) {
    val locationToRef: Map<JsonPointer, RefId> =
      usedRefs.associate { (schemaPath, refId) ->
        schemaPath to refId
      }

    val circledReferences = hashSetOf<CircledReference>()

    fun checkRunAlways(path: JsonPointer): Boolean {
      return alwaysRunAssertions.any { path.contains(it) }
    }
    for ((location, refId) in locationToRef) {
      val schemaLocation: JsonPointer = referencesWithPath.getValue(refId)

      val (otherLocation, otherRef) =
        locationToRef.entries.find { (refKey) ->
          refKey.startsWith(schemaLocation)
        } ?: continue
      val otherRefSchemaLocation: JsonPointer = referencesWithPath.getValue(otherRef)
      if (!location.startsWith(otherRefSchemaLocation)) {
        continue
      }
      if (checkRunAlways(location) && checkRunAlways(otherLocation) && location != otherLocation) {
        circledReferences +=
          CircledReference(
            firstLocation = location,
            firstRef = schemaLocation,
            secondLocation = otherLocation,
            secondRef = otherRefSchemaLocation,
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
    val firstLocation: JsonPointer,
    val firstRef: JsonPointer,
    val secondLocation: JsonPointer,
    val secondRef: JsonPointer,
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