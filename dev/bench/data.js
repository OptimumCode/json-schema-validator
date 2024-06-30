window.BENCHMARK_DATA = {
  "lastUpdate": 1719759155423,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efd894b687074c950e592928e24fa0ba3b58a70e",
          "message": "Add benchmark workflow for PR to monitor performance degradation (#149)",
          "timestamp": "2024-06-30T18:38:48+04:00",
          "tree_id": "5032f2d3488c3fb98599f5b76a65020f0df17bee",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/efd894b687074c950e592928e24fa0ba3b58a70e"
        },
        "date": 1719759155162,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 1074.1775930851063,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 1292.5554450757577,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 2869.919677053824,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 2896.9253513586955,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 815.1089762520194,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 0.6135916548240333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 3984.1887461538454,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 4362.205076470588,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 1061.3700378587196,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 1100.2282869273745,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 958.496049315065,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 880.8476089350958,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 398.8216272836538,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 397.29323038850265,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 1372.9581029275055,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 1763864.1997927793,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 264.96957317780164,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 267.75259284037986,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 998.80846000021,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 960.1350266130146,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 2828.5152928176794,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 2993.4353939939942,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 6166.497097546012,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 6243.7574724999995,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 2017.9943943089431,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 1.746468966263432,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 9260.75378425926,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 8889.157176315788,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 2679.560464402174,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 2747.9291005479454,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 359.8173328423628,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 341.51193631611267,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 165.45291443005192,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 162.47671402990505,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 503.4451297900945,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 616972.7385376779,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 110.38728369059068,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 111.29232404342206,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 372.3993089912348,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/openapi-invalid.json\",\"schemaPath\":\"/Users/runner/work/json-schema-validator/json-schema-validator/benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 359.56612212372534,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 3427.3294773519165,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 3334.068305647841,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 7370.976423357666,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 7535.463909774437,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 2455.815456790123,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 1.9915613282160838,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 10397.612164948452,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 10045.668099999999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 3367.4795286195285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 3391.8108754208756,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 292.27045947385375,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 300.6745009635669,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 135.7195525622339,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 133.13572169655293,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 390.0092185656702,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 502711.6253881288,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 96.21638871431077,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 100.13589386790225,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 292.74832446077266,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/openapi-invalid.json\",\"schemaPath\":\"D:\\\\a\\\\json-schema-validator\\\\json-schema-validator\\\\benchmark/data/schemas/openapi_schema.json\"} )",
            "value": 294.3335080575575,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}