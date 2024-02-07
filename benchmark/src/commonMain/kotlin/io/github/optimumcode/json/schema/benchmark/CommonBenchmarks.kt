package io.github.optimumcode.json.schema.benchmark

import kotlinx.benchmark.BenchmarkMode
import kotlinx.benchmark.BenchmarkTimeUnit.MILLISECONDS
import kotlinx.benchmark.BenchmarkTimeUnit.SECONDS
import kotlinx.benchmark.Mode.AverageTime
import kotlinx.benchmark.Mode.Throughput
import kotlinx.benchmark.OutputTimeUnit
import kotlinx.benchmark.Param
import kotlinx.benchmark.Scope
import kotlinx.benchmark.State

@State(Scope.Benchmark)
@OutputTimeUnit(SECONDS)
@BenchmarkMode(Throughput)
class CommonThroughputBench : AbstractCommonBenchmark() {
  @Param("object")
  override var objectPath: String = ""

  @Param("schema")
  override var schemaPath: String = ""
}

@State(Scope.Benchmark)
@OutputTimeUnit(MILLISECONDS)
@BenchmarkMode(AverageTime)
class CommonAvgTimeBench : AbstractCommonBenchmark() {
  @Param("object")
  override var objectPath: String = ""

  @Param("schema")
  override var schemaPath: String = ""
}