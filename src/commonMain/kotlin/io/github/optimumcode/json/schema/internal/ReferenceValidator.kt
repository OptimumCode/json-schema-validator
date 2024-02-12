package io.github.optimumcode.json.schema.internal

import com.eygraber.uri.Uri
import io.github.optimumcode.json.pointer.JsonPointer
import io.github.optimumcode.json.pointer.internal.dropLast
import io.github.optimumcode.json.pointer.internal.lastSegment
import io.github.optimumcode.json.pointer.startsWith

internal object ReferenceValidator {
  data class ReferenceLocation(
    val schemaPath: JsonPointer,
    val refId: RefId,
  )

  class PointerWithBaseId(
    val baseId: Uri,
    val pointer: JsonPointer,
  )

  fun validateReferences(
    referencesWithPath: Map<RefId, PointerWithBaseId>,
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

  private val alwaysRunInPlaceApplicators = hashSetOf("allOf", "anyOf", "oneOf")
  private val definitionProperties = hashSetOf("definitions", "\$defs")

  private fun checkCircledReferences(
    usedRefs: Set<ReferenceLocation>,
    referencesWithPath: Map<RefId, PointerWithBaseId>,
  ) {
    val locationToRef: Map<JsonPointer, RefId> =
      usedRefs.associate { (schemaPath, refId) ->
        schemaPath to refId
      }

    val circledReferences = hashSetOf<CircledReference>()

    val refsByBaseId: Map<Uri, Set<JsonPointer>> =
      referencesWithPath
        .entries
        .groupingBy { it.value.baseId }
        .fold(hashSetOf()) { acc, el -> acc.apply { add(el.value.pointer) } }

    for ((location, refId) in locationToRef) {
      val schemaLocation: PointerWithBaseId = referencesWithPath.getValue(refId)

      val (otherLocation, otherRef) =
        locationToRef.entries.find { (refKey) ->
          refKey.startsWith(schemaLocation.pointer)
        } ?: continue
      val otherRefSchemaLocation: PointerWithBaseId = referencesWithPath.getValue(otherRef)
      if (!location.startsWith(otherRefSchemaLocation.pointer) ||
        schemaLocation.baseId != otherRefSchemaLocation.baseId
      ) {
        continue
      }
      val refsForBaseId = refsByBaseId[schemaLocation.baseId] ?: emptySet()
      if (checkRunAlways(
          location,
          refsForBaseId,
        ) && checkRunAlways(otherLocation, refsForBaseId) && location != otherLocation
      ) {
        circledReferences +=
          CircledReference(
            firstLocation = location,
            firstRef = schemaLocation.pointer,
            secondLocation = otherLocation,
            secondRef = otherRefSchemaLocation.pointer,
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

  private fun checkRunAlways(
    path: JsonPointer,
    schemaLocations: Set<JsonPointer>,
  ): Boolean {
    var curPath: JsonPointer? = path
    while (curPath != null) {
      val parentPath = curPath.dropLast()
      // The idea here is the following:
      // 'parentPath in schemaLocations' returns true only if the last segment is a schema keyword.
      // If this is the case we should check if this keyword is not applied in-place.
      // We also check that this keyword is not a definition as this would be incorrect.
      // If this all is 'true' this is not a circled reference
      if (
        parentPath in schemaLocations &&
        curPath.lastSegment()?.let {
          it !in alwaysRunInPlaceApplicators && it !in definitionProperties
        } == true
      ) {
        return false
      }
      curPath = parentPath
    }
    return true
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