package io.github.optimumcode.unocode.generator.internal.generator

import com.squareup.kotlinpoet.FunSpec
import io.github.optimumcode.unocode.generator.internal.model.Range

internal fun FunSpec.Builder.checkCodepointInRanges(
  codepointRanges: List<Range>,
  parameterName: String,
) {
  addCode("return ")
  addStatements(codepointRanges, parameterName)
}

internal fun FunSpec.Builder.addStatements(
  codepointRanges: List<Range>,
  codepointParameterName: String,
) {
  when (codepointRanges.size) {
    0 -> addStatement("false")
    1 -> {
      val range = codepointRanges[0]
      if (range.start == range.end) {
        addStatement(
          "%L == %L",
          codepointParameterName,
          range.end.toHexString(),
        )
      } else {
        addStatement(
          "%L in %L..%L",
          codepointParameterName,
          range.start.toHexString(),
          range.end.toHexString(),
        )
      }
    }

    else -> {
      val middleIndex = codepointRanges.size / 2
      val middle = codepointRanges[middleIndex]
      beginControlFlow("if (%L < %L)", codepointParameterName, middle.start.toHexString())
      addStatements(codepointRanges.subList(0, middleIndex), codepointParameterName)
      nextControlFlow("else")
      addStatements(codepointRanges.subList(middleIndex, codepointRanges.size), codepointParameterName)
      endControlFlow()
    }
  }
}

internal fun Int.toHexString(): String = "0x${toString(16)}"