package io.github.optimumcode.json.schema

import kotlin.jvm.JvmField
import kotlin.reflect.KClass

public class SchemaOption<T : Any> private constructor(internal val type: KClass<T>) {
  public companion object {
    @JvmField
    public val FORMAT_BEHAVIOR_OPTION: SchemaOption<FormatBehavior> = SchemaOption(FormatBehavior::class)
  }
}