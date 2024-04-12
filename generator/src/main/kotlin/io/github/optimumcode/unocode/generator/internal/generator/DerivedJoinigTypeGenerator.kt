package io.github.optimumcode.unocode.generator.internal.generator

import com.squareup.kotlinpoet.AnnotationSpec
import com.squareup.kotlinpoet.FileSpec
import com.squareup.kotlinpoet.FunSpec
import com.squareup.kotlinpoet.INT
import com.squareup.kotlinpoet.KModifier.ABSTRACT
import com.squareup.kotlinpoet.KModifier.INTERNAL
import com.squareup.kotlinpoet.KModifier.OVERRIDE
import com.squareup.kotlinpoet.ParameterSpec
import com.squareup.kotlinpoet.TypeSpec
import io.github.optimumcode.unocode.generator.internal.model.JoiningType
import java.nio.file.Path

private const val CODE_POINT_PARAMETER = "codePoint"

fun generateDerivedJoiningTypes(
  packageName: String,
  outputDir: Path,
  joiningTypes: Map<String, List<JoiningType>>,
) {
  fun containsFunction(): FunSpec.Builder =
    FunSpec.builder("contains")
      .returns(Boolean::class)
      .addParameter(ParameterSpec.builder(CODE_POINT_PARAMETER, INT).build())

  FileSpec.builder(packageName, "JoiningType")
    .addType(
      TypeSpec.enumBuilder("JoiningType")
        .addModifiers(INTERNAL)
        .addAnnotation(AnnotationSpec.builder(Suppress::class).addMember("%S", "detekt:all").build())
        .addFunction(containsFunction().addModifiers(ABSTRACT).build())
        .apply {
          for ((type, groupedTypes) in joiningTypes) {
            addEnumConstant(
              type.uppercase(),
              TypeSpec.anonymousClassBuilder()
                .addFunction(
                  containsFunction()
                    .addModifiers(OVERRIDE)
                    .checkCodePoint(groupedTypes)
                    .build(),
                )
                .build(),
            )
          }
        }
        .build(),
    )
    .build()
    .writeTo(outputDir)
}

private fun FunSpec.Builder.checkCodePoint(properties: List<JoiningType>): FunSpec.Builder =
  apply {
    val ranges = properties.map { it.range }
    checkCodepointInRanges(ranges, CODE_POINT_PARAMETER)
  }