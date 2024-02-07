package io.github.optimumcode.json.schema.benchmark

import kotlinx.benchmark.BenchmarkMode
import kotlinx.benchmark.Mode
import kotlinx.benchmark.OutputTimeUnit
import kotlinx.benchmark.Param
import kotlinx.benchmark.Scope
import kotlinx.benchmark.State
import java.util.concurrent.TimeUnit.MILLISECONDS
import java.util.concurrent.TimeUnit.SECONDS

@State(Scope.Benchmark)
@OutputTimeUnit(SECONDS)
@BenchmarkMode(Mode.Throughput)
class ComparisonThroughputBenchmark : AbstractComparisonBenchmark() {
  @Param("object")
  override var objectPath: String = ""

  @Param("schema")
  override var schemaPath: String = ""
}

@State(Scope.Benchmark)
@OutputTimeUnit(MILLISECONDS)
@BenchmarkMode(Mode.AverageTime)
class ComparisonAvgTimeBenchmark : AbstractComparisonBenchmark() {
  @Param("object")
  override var objectPath: String = ""

  @Param("schema")
  override var schemaPath: String = ""
}