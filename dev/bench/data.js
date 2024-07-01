window.BENCHMARK_DATA = {
  "lastUpdate": 1719819285077,
  "repoUrl": "https://github.com/OptimumCode/json-schema-validator",
  "entries": {
    "KMP JSON schema validator": [
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "distinct": true,
          "id": "88e2fb17c6dc4fcf8d6dbd5c445c25b7f8125054",
          "message": "Return ubuntu runner to the list",
          "timestamp": "2024-07-01T11:09:52+04:00",
          "tree_id": "173ff5a2dc1757a3eff27717cccfaf385d0cb0f4",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/88e2fb17c6dc4fcf8d6dbd5c445c25b7f8125054"
        },
        "date": 1719819284744,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2653.595932185305,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2596.966861257367,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2479.338639230217,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2284.539603300548,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 941.7114536137551,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 922.0441016382626,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3579.9316553633844,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7621300.44650594,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 674.0463841540486,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 666.3336069371293,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2489.3720676177127,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2459.3869585070706,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 941.1153663198571,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 875.1617997747602,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2523.234336810804,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2536.009324078766,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3568.7390704945365,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7071493.089094458,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 664.9762990792533,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 663.6894951938866,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2053.1596687288293,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 712.810456674118,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2080.0148600499974,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 962933.1518115068,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2098.8440137413036,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 484.019067370254,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 73.59935403464529,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 83.19235730404776,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 391.9498227495268,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 382.56600177969256,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 393.5684466125768,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 426.70684804938884,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1076.276657959926,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1096.1003341788087,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 284.91422327214264,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.12477345211023014,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1476.3657089369349,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1481.3692200056958,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 401.9252463650195,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 409.0447172451866,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1043.9537537606652,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1129.8720418117528,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 376.94981766646055,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 397.6559199865651,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 277.5379333188845,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1530689527354515,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1502.7976943764777,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1515.2280033418874,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 478.72375687442957,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1396.8581039007927,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 482.6484667557892,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.1161096476992676,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 492.46036962323086,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1998.0689990309506,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13263.357604883116,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12216.683746337108,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1617.3969675409837,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1703.4540571428574,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3776.909825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3839.7078536121676,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1126.848831171786,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.8387993731003904,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5500.8891117021285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5502.535467032967,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1548.702371121352,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1593.0107977198695,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 622.1350901250372,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 588.1531661342109,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 259.9879196093481,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 255.45221639373344,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 892.2849675464407,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1199954.1195795832,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 177.95366701748884,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 180.69576999638036,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 651.3011940200743,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 623.3692880507754,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1325.9605106249999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1317.886141011984,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3004.6197703812313,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2970.9433105421685,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 841.7279331805682,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.634891532725674,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4609.096784474887,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4869.894245714286,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1141.4959121893492,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1250.8724039340102,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 794.8628645980135,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 732.0228387143751,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 336.54259684903155,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 335.0481939684594,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1209.0794387942765,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1574950.1674223018,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 214.4373867323598,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 224.9835488830835,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 837.0111590713557,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 806.6204898450799,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2973.168883775811,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3350.707884539473,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6495.621247468354,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6899.0915493589755,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2364.0163889624723,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.8179743787817926,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9010.80259099099,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9141.43195625,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2933.309914457831,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3001.459158064516,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 349.530087997283,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 336.15833230707284,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 162.56661904420747,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 159.57151156408517,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 498.588087641442,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 607141.1649394365,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 107.43695655337476,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 109.7812831488466,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 369.10990719511346,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 357.5052004879461,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3548.5640213523134,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3468.628424657535,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7618.2869465648855,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7765.591627906976,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2495.563190954774,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2.1892058433976804,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10752.24311827957,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10449.288315789474,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3400.754206896552,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3508.3286896551717,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 288.8282242281345,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 289.1167014649221,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.07886556185593,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 129.36341239458744,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 400.15282456266357,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 492992.2223834451,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 93.52287753321602,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.94858778067656,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 293.2529576487629,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 290.0971237181231,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}