package io.github.optimumcode.json.schema.benchmark

import kotlinx.benchmark.BenchmarkMode
import kotlinx.benchmark.BenchmarkTimeUnit
import kotlinx.benchmark.Mode
import kotlinx.benchmark.OutputTimeUnit
import kotlinx.benchmark.Param
import kotlinx.benchmark.Scope
import kotlinx.benchmark.State

@State(Scope.Benchmark)
@OutputTimeUnit(BenchmarkTimeUnit.SECONDS)
@BenchmarkMode(Mode.Throughput)
class CommonThroughputBench : AbstractCommonBenchmark() {
  @Param("object")
  override var objectPath: String = ""

  @Param("schema")
  override var schemaPath: String = ""
}

@State(Scope.Benchmark)
@OutputTimeUnit(BenchmarkTimeUnit.MICROSECONDS)
@BenchmarkMode(Mode.AverageTime)
class CommonAvgTimeBench : AbstractCommonBenchmark() {
  @Param("object")
  override var objectPath: String = ""

  @Param("schema")
  override var schemaPath: String = ""
}