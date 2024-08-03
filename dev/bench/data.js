window.BENCHMARK_DATA = {
  "lastUpdate": 1722689196884,
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
          "id": "6c5d8db9f568017fca3c5c9357386794c83773c3",
          "message": "Separate benchmarks for comparison from common bechmarks (#150)",
          "timestamp": "2024-07-02T14:53:19+04:00",
          "tree_id": "e02112c1c1b44839f4ee25eb30983785d13e5d24",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/6c5d8db9f568017fca3c5c9357386794c83773c3"
        },
        "date": 1719919044343,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2649.8186187638667,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2569.9781105553684,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2539.719954216458,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2268.0988165330723,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 916.4215323231049,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 934.6355401228559,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3392.3669941849025,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8106145.992044811,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 658.0483752249694,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 671.731237837389,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 383.0119921913198,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 384.01290698236016,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 400.0445534885706,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 428.2455364551348,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1077.4166774282057,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1072.2427985995078,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 279.6509914368639,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.12463219988014373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1583.6880696872086,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1494.177047699789,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1644.716457886179,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1728.879724615385,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3792.0099596226414,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3862.497499227799,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1184.935202822086,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.8320840685125855,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5750.948018604651,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5768.674939204546,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1565.8387975039,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1588.337955987055,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 609.5961199489383,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 581.1938462841205,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 262.19076773223856,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 257.4901213976922,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 886.5240491533857,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1198978.7973501214,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 176.34140334712356,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 174.60843882489604,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 651.7266093275422,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 643.5964262675567,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1214.7153434982738,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1264.4742975546974,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2749.6988261971833,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2762.1781603674544,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 777.9107890056588,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5734219765102011,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3496.41945480427,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3769.879044117647,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1012.2002892354125,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1020.5927960843374,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 962.1461971880213,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 871.9098894850988,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 398.8154104852521,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 393.91764599135524,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1338.8998793397516,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1786980.2680242497,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 272.6220280387837,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 280.17893351728765,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 997.239345261712,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 983.0444166731846,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2911.1631994382024,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3063.91010508982,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6546.644689999999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6924.367074305555,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2205.090727536232,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.6984244135417281,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10189.384181553398,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10517.691540206186,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2959.512298805971,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3074.2314333333334,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 324.73127429969594,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 286.63641693721934,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 149.57143113438175,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 143.98530056182142,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 444.97123411771753,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 537620.4689449428,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 97.56110106190695,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 94.36446248110543,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 291.0452241420395,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 348.39850329183497,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3532.290496453901,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3406.6593493150685,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7541.35643939394,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7674.77734375,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2530.0673214285716,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2.249437395806331,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10784.574615384616,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10333.20288659794,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3488.556197183099,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3457.586666666667,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 281.9815784234826,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.05214813653436,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.61169969207526,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 129.77007011909467,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 392.81428651930594,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 490590.80542863783,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 94.9262363909196,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 96.06008569907077,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 290.15391325357854,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 289.8885827988019,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44fa307cc10d4efb96f66bd211459b8856363897",
          "message": "Bump com.squareup:kotlinpoet from 1.17.0 to 1.18.0 (#151)",
          "timestamp": "2024-07-05T18:52:26+04:00",
          "tree_id": "d7f2ee798e0b3b6e4d75730bd11c2bdff874f546",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/44fa307cc10d4efb96f66bd211459b8856363897"
        },
        "date": 1720192602260,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2620.639105705354,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2589.967818260554,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2475.1953718789637,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2374.9260484446113,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 953.2972041838732,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 923.4973651433584,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3664.378694231621,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8087076.072034198,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 689.999366964396,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 678.9880274779587,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 379.04984414235435,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 385.0883132438741,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.34240587257403,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 431.3987528569549,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1052.4073837018811,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1068.2058638467174,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 274.2913920503459,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.12552752452150678,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1456.0544315772136,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1482.5478378587618,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1589.4858484276729,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1670.4623263245035,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3696.347026865672,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3790.3148507518795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1125.2665150501675,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.8283992433849979,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5481.687895135134,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5412.220687700535,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1535.583295136778,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1535.1248665109033,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 629.5390384162968,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 612.1469432199597,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 268.4259218879173,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 260.9042521017041,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 880.9549856019188,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1196153.5312590238,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 185.64781085781325,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 184.56868038761877,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 652.3990553229673,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 649.1609871925818,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1407.1776551122196,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1362.3320138522429,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3028.7857821538464,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2906.2383235465113,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 838.0283933549432,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.6236625515646553,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4293.993858260869,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4381.039591764706,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1091.81728177624,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1089.143,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 918.4884678104518,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 862.7799644480749,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 390.78778143079546,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 325.57638860451516,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1216.653775868303,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1710857.22747121,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 250.41516504282663,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 269.23705999902705,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 986.0172670881251,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 961.4127784956514,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2744.206907103825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2864.483784813753,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5997.345546428572,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6156.0732413580245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1956.6868088062624,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.6037731492260783,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8882.74405357143,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8840.860704464287,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2664.216587887324,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2659.1145854838705,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 364.81153009359576,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 343.61470502978375,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 164.58592893818053,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 164.12042836056358,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 511.5564402608264,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 626015.6565177363,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 111.57955397798666,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 110.74336573584597,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 375.4206335070495,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 376.7193248872923,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3486.0385467128026,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3358.148266666667,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7442.996740740741,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7593.406030534352,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2528.162429667519,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.98453651784638,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10494.955773195874,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10116.199191919193,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3415.6691003460205,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3383.4472297297298,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.33365997797955,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 297.3096982488063,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.8680892645391,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 132.3830104471542,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 393.49007685097325,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 503189.93369662546,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.3389544313701,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 99.45748262238479,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.0766570441227,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 295.5649212584555,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61e9d0c44481c37eb168dcc9d6bce98d49e9aff3",
          "message": "Bump com.networknt:json-schema-validator from 1.4.3 to 1.5.0 (#152)",
          "timestamp": "2024-07-08T22:53:41+05:00",
          "tree_id": "dc0496dddeaf7392617d643135656e6527b84519",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/61e9d0c44481c37eb168dcc9d6bce98d49e9aff3"
        },
        "date": 1720462696608,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2626.4013837323037,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2529.6049471320975,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2556.616036133871,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2255.956717901567,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 902.8460913178775,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 909.560611598373,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3627.0754848720826,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7952880.031617671,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 682.5451507539957,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 679.4070225462663,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 378.675043807252,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 419.0836675388702,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 414.1698847011345,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 423.178723131015,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1038.9291847495263,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1080.1844967037598,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 277.0082135682384,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.12200718304429004,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1475.2633321220144,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1480.0915075870278,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1640.531449261084,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1741.8845692708335,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3883.31400625,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3950.573442687747,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1177.3100866902237,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.8470195380034825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5898.864082285714,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5733.454520930232,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1577.775562519685,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1606.5897941269839,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 606.5382227567218,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 566.9323929542594,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 257.4424171061498,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 254.97013010686405,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 874.4969274632574,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1170861.6242140874,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 170.76818252351353,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 168.9341009698469,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 629.7607697825927,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 623.0308323566871,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1049.2847607179488,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1111.9767974557521,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2468.787305896806,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2516.789011586902,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 732.225981473377,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5598286058378596,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3516.6495776223774,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3507.6172743055554,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1023.1760931952662,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1121.6364359188544,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 888.6500168582779,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 805.1299864165464,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 355.9757685195001,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 359.4215416642477,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1251.1106712863818,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1530104.3604287088,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 221.12079499034581,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 262.92552217958905,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 953.0249890967798,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 936.8678235430755,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2863.6827226744185,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2965.107735812672,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6344.934415923567,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6361.125381528663,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2032.6731722448978,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.633416026669574,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9611.880030275228,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10281.569184042553,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3070.229625,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2991.994721714286,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 337.29468457433285,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 335.68843954282215,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 162.17413579165,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 159.35295876027462,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 495.6242680483441,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 606878.7732201548,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 107.33883618851341,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 109.18424842664687,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 365.7663668307911,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 365.1324258694956,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3491.0951748251755,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3403.9175510204086,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7479.407407407406,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7914.288582677165,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2512.156590909091,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2.0354312952190567,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10834.391578947369,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10816.029387755103,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3486.1867241379305,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3483.282411347517,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 281.7210513619566,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 286.4828447276109,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 129.11719395749193,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 127.71770792382226,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 394.1083748375177,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 488812.6009431941,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 92.47551141469297,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.06882366819268,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.3936299143016,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 291.2773581333346,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0483b7784b8928e089ece7b1b6a4a2b7042dd44f",
          "message": "Bump com.fasterxml.jackson:jackson-bom from 2.17.1 to 2.17.2 (#154)",
          "timestamp": "2024-07-08T22:54:47+05:00",
          "tree_id": "9421ca75a1af22567b28230013c62a4168abe96d",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/0483b7784b8928e089ece7b1b6a4a2b7042dd44f"
        },
        "date": 1720462836785,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2605.794510226977,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2562.033757153155,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2524.450500408886,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2274.37272669349,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 910.3494936262935,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 926.2093250849564,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3591.390849380399,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7873572.22983505,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 683.147688092389,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 627.9488042444402,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 380.91581942868766,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 394.13226449281575,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 394.86370558216066,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 436.34164591272946,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1029.011106734011,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1084.4819991922275,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 288.1132879786239,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.12488570566856923,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1464.0365031161969,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1463.0416067445606,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1614.29104624,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1738.3822694974006,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3792.0611839694648,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3924.8710857142855,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1130.497804756512,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.868092225136064,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5639.825291666667,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5619.795831213873,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1551.559885801527,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1587.3909123809524,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 610.7670599341089,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 593.1703354945827,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 265.6610009727968,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 258.52790077242616,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 886.7728637831358,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1189833.088480206,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 181.97486647770788,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 182.5986519603999,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 642.9088674194688,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 635.9701876104541,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1040.453879193206,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1118.8840224917308,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2477.137243980344,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2502.9003125000004,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 733.8732485818181,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5655048698499683,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3522.518220895523,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3680.0184916058397,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 991.7666708873381,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1017.1135132663318,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 961.1290080294708,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 903.5891889131581,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 405.7006732933443,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 398.5909289483055,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1380.571914986913,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1777601.5824735619,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 277.23358753453203,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 282.4605600524071,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 999.3479572436252,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 985.8185049461594,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2991.5119443786984,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3330.0405691029896,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6415.613953594771,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6723.124757419355,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2209.917867477876,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.7137003521749705,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9712.729628421053,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9829.917911458333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3035.9597045592704,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2967.904391463414,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 318.2299170288726,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 313.53674836620826,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 146.57255315847152,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 148.31278147908233,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 463.0080667824901,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 578319.2409266906,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 100.3433191344288,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 101.31273719402516,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 346.3436254637986,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 315.7437674878412,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3465.5999653979243,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3334.0115282392026,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7496.369253731343,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7573.606893939394,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2648.4249360613817,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2.002455436105222,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10416.05680412371,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9992.341199999999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3413.3239590443686,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3357.320808080808,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.9252425223416,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 300.92222742238476,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.41926846379357,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 132.80939802883415,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 402.09149914363036,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 501119.7368217983,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 91.08385790871861,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 99.58759377583252,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 294.3919763048468,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 295.03234870685463,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "959a70db959e49de4254f49c1b2b946cc3cbf5be",
          "message": "Bump org.jetbrains.kotlinx.binary-compatibility-validator from 0.14.0 to 0.15.0 (#153)",
          "timestamp": "2024-07-09T07:33:31Z",
          "tree_id": "396ef4cfe1df99719e7526c3813b16856dbd33db",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/959a70db959e49de4254f49c1b2b946cc3cbf5be"
        },
        "date": 1720511916631,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2503.7073226727716,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2570.0904942181232,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2530.2993715620382,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2330.502868207245,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 947.2164933022623,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 900.7542640733843,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3593.6903998479356,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7319740.270860734,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 669.0638905833895,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 669.5231060770147,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 381.89642552216884,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 396.7474422527028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 403.12242009690846,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 441.31784263741804,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1030.9885939223768,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1086.915892265008,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 280.2326138970998,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1272565140683425,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1462.5164150090463,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1478.5537699742033,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1623.9705993495934,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1670.8532003267974,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3794.8334275590555,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3829.1774333333333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1134.6936365937859,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.8414477603029249,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5457.20062752809,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5811.138334806629,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1590.3384659340659,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1611.8279424242426,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 579.8446130982145,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 564.1604907223382,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 255.442092018534,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 249.09079619086305,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 875.3957484164561,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1176970.0620151374,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 179.28085153224117,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 181.57656602596938,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 642.3158844213373,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 640.7528291046914,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1132.466789263158,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1118.6316903448278,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2515.097235891089,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2531.4083777188325,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 734.297761273792,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5627394091736668,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3546.8974410526316,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3707.7590609756103,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1056.3242013118063,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1065.2398508090614,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 921.7746659663671,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 832.5133446564629,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 368.0626994151241,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 363.24589469725436,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1276.0009008018624,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1617502.088092732,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 234.1434426333808,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 238.33172224547434,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 920.4043855729922,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 940.9219595362798,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2907.966410755814,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2918.2558404692077,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6127.536257317073,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6264.053645624999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2012.6630667342797,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.636442266570129,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9132.853896428573,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9051.707287272726,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2740.593100842697,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2756.9403095367843,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 353.1055835979416,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 340.2136583429425,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 162.51680891399766,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 158.3053083048251,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 493.4507734803515,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 606280.5188281047,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 105.46108300614424,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 104.34423276616633,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 357.6307940229303,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 350.8648079122687,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3544.270319148936,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3623.119827586207,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7640.983206106871,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7754.99046875,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2510.115164556962,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2.018448866159863,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10874.41597826087,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10612.656153846156,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3450.072916666667,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3455.714068965518,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 277.9125593623063,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.64582114690603,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.0516729495103,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 127.5191376594747,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 394.1134834002864,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 494675.32659560954,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 92.5388631102395,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 94.636378154905,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 288.01904036121294,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 284.16835095593535,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16ad32acefc9a86770b8eeb60cc04ff43d05d4d4",
          "message": "Bump org.jetbrains.kotlinx.binary-compatibility-validator from 0.15.0 to 0.15.1 (#155)",
          "timestamp": "2024-07-09T20:39:36+05:00",
          "tree_id": "f716a4484b16585f02f44335df05d1abd1229ff6",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/16ad32acefc9a86770b8eeb60cc04ff43d05d4d4"
        },
        "date": 1720541053843,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2557.1103309717814,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2577.3728311321056,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2444.6974709383658,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2238.080275744292,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 950.4309185431788,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 925.9038576225636,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3579.3025231306806,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7732157.7815067675,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 683.0090131078783,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 685.9159471273855,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 380.7707532789901,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 389.94348906776105,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 400.83985601878214,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 416.4476339119815,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1023.8095549682779,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1066.5482495701174,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 279.7838449603631,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.12610161682762488,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1506.2581023813605,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1458.8502416349522,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1626.2273089887638,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1674.8997128617364,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3794.9262329545463,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3805.434212927756,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1110.5217817371938,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.8314473670710658,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5473.7483022471915,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5456.307215508021,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1530.5500739403456,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1554.9182569422778,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 614.3910000946355,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 597.7011903168739,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 266.73211141574484,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 263.6432083975341,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 894.8118409872889,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1203623.146084613,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 181.88243438306412,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 183.0334607941283,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 647.3788388365303,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 641.9218878119025,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1046.6122426868906,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1088.8588032731375,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2537.8506702970294,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2519.918214713217,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 736.2716992657856,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5649518119738038,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3576.8619950177936,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3739.2523995671,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1012.9157787939699,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1040.5702079107507,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 954.4496013240199,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 857.743372123484,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 401.0670434108771,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 397.53685718287176,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1352.6661562595953,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1761024.1593463111,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 271.22019905821037,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 279.58824298587945,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1003.2610315889266,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 935.3413992290368,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3775.7520899999995,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3786.270508417508,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8608.750874829931,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8089.5902521739135,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2899.193432951289,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2.2296564831797183,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12747.95763627451,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12608.173779381443,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3418.600765758755,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3749.6180413333336,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 283.2424085874225,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 240.00286426384315,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.17832778829603,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 112.97756320950707,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 368.2235454830715,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 379050.10381733597,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 78.19843295245522,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 82.09124481517865,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 289.2962647353544,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 289.4775921117483,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3483.3691666666664,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3470.6839726027392,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7506.20395522388,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7605.295454545454,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2484.3407980049874,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2.00784725709365,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10738.016063829788,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10431.976082474228,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3446.4457586206904,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3412.1441979522183,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 286.6456824300427,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 293.9777041196336,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.67587636175776,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.58744206249258,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 402.37632150901356,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 494997.2518473017,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 92.81431103704001,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 97.34965949121639,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 293.2778992548832,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 295.2046369236966,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f5a369d24e140b2288a8eef8c7fa81df6ecdd8b",
          "message": "Bump graphql from 6.8.0 to 6.8.2 (#156)",
          "timestamp": "2024-07-12T20:38:54+05:00",
          "tree_id": "2e42549aa336081afb68a07e4f40237487c3a7d7",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/3f5a369d24e140b2288a8eef8c7fa81df6ecdd8b"
        },
        "date": 1720800248305,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2679.6608794208023,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2614.1352706760404,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2485.1638525184017,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2321.6851884437224,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 954.9519901063095,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 940.2904792900827,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3496.295996841562,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7801900.402386168,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 688.4150972855366,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 685.3312818579982,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 391.65539342323933,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 385.2122601204061,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 402.79307780034605,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 431.20627863656256,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1030.4596829567304,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1091.1797882790445,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 281.7482154644179,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.12305258172833103,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1490.443340584332,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1477.7390625637777,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1658.9238028239201,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1685.276724032258,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3871.740213565891,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3935.91247265625,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1124.299107491487,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.8544122767922058,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5879.600134285714,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5837.707094642857,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1571.6656580696203,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1611.756604754358,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 600.554692414444,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 568.9092496186737,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 254.9685088176298,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 252.6082399482285,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 865.9501804577483,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1169057.8691679945,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 169.44074351970858,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 172.69221900784618,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 634.1756051552109,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 618.1299026750518,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1049.2066908700322,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1116.3238770601336,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2464.1022118518526,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2496.5304571065994,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 725.1040699564586,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5625227542732306,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3514.16111122807,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3512.4058007067133,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 992.7031082,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1011.7388359798995,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 965.171212286062,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 901.2190490515322,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 404.1190356138744,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 398.6018590586473,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1365.6808608972965,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1779616.0186329677,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 277.04065745217645,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 281.82108558306425,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1008.7638596838775,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 979.0925873870743,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3125.782048664689,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3455.177492378049,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6835.849999324324,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7390.200313333333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2266.5434254761904,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.9434394349478175,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10419.957740963857,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9810.839442857145,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3105.0845362804876,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2838.186001780416,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 331.15210761115094,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 248.64021333635483,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 129.43764639625115,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.54374502010543,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 458.29831985542194,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 530161.4190023972,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 84.9036288878265,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 89.8444791403606,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 300.1896877517654,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 308.3642543743846,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3397.3317006802727,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3305.4908881578945,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7296.650145985402,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7447.088592592592,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2442.911608910891,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.9752539949572536,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10185.13090909091,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10053.449509803922,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3358.4748829431433,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3369.2697,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 289.79823579918207,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.0709492012077,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.31692331875223,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.53432939679573,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 402.90068986464377,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 501176.189326078,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 93.58725653803886,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 99.35088446215752,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 295.7137766945912,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 298.2607117756654,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
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
          "id": "68843350de534b83d59dc33a2b3b6e6d134e52ff",
          "message": "Fix workflows path filters",
          "timestamp": "2024-07-14T16:17:54+04:00",
          "tree_id": "8e8cfc844986e244b0c07c3bf70c4b27fc4c096a",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/68843350de534b83d59dc33a2b3b6e6d134e52ff"
        },
        "date": 1720961047342,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2633.6738567923694,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2542.61375863451,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2559.0305594938227,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2335.805044805432,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 952.2435301302983,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 925.1629115795929,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3658.506952908507,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6630330.072205033,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 682.4168378938386,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 678.0175819117015,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 374.8257484006505,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 402.511960526658,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.7312558655631,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 432.7784184121225,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1114.990574553459,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1069.248323741539,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 273.15586860577076,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.15750802488934457,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1462.1533459807174,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1555.7225417395593,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1572.6746420634922,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1693.7952211505922,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3737.307159770115,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3907.2321140077825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1105.2295319690263,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7627081262467768,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5522.585622702703,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5545.300263934427,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1546.7876537267082,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1574.176189490446,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 628.8858803508772,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 599.6026440250637,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 270.4396522101834,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 259.0747434189394,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 905.2846078410973,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1364637.0211788858,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 182.95575391881306,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 177.92821047344142,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 649.250938327042,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 626.380924314229,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1000.5933642430278,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1073.8638639658848,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2449.920276941747,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2533.845444444444,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 721.8023541428572,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.49081350977453597,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3568.220328469751,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3615.205201438849,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 976.1942837095191,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1029.374578456914,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 997.4923208876393,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 934.9899846883072,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 405.3594888960117,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 390.1331971773533,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1395.324505152358,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2056720.349809349,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 275.87222838991096,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 274.3495802491546,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 969.6677863556039,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 950.2648969508318,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2798.3484797183096,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2875.9672933526012,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6251.442943209877,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6409.189413636363,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2009.4254440881764,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.4451292026788072,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9156.703047272727,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9116.315607692308,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3008.144436890244,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3068.5954080555557,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 336.91747798544577,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 317.57524449463665,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 139.9968204936474,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 143.98824316243275,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 444.6060578336375,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 646997.340832463,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 94.26531512304332,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 102.72129108420522,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 346.23993950655563,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 313.2009971672371,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3458.499513888889,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3460.2920962199314,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7632.019230769231,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7909.175158730158,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2479.081457286432,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.7102329409317272,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10859.371318681318,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10626.062500000002,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3313.159496644295,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3389.2379310344827,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 288.38522431658134,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 291.6030918623173,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.9720786137427,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.38538093924598,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 408.3003258808635,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 588067.8031219849,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.5092608390751,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 97.54752834565804,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 310.0298946115703,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 297.32865424104386,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "429c2c5864f50051d69fa81378135a1f0dfc6859",
          "message": "Bump graphql from 6.8.2 to 6.8.4 (#157)",
          "timestamp": "2024-07-15T18:28:32+05:00",
          "tree_id": "788f681ddcf49c1049e7c40654520cb4f0ee54f3",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/429c2c5864f50051d69fa81378135a1f0dfc6859"
        },
        "date": 1721051631056,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2666.9501519884907,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2604.4636137625835,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2536.0401302725136,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2272.4750716851436,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 880.0151482745521,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 930.2881190185024,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3705.531917196461,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6732422.506737779,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 668.3808994814602,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 675.0437376284556,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 382.0627686471327,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 404.4842828988247,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 400.13899869597117,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 422.4021001428732,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1062.022083128378,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1102.413399599177,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 274.4234598584012,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.15231422875256242,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1459.096788090788,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1467.9277836323608,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1577.2045775157233,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1660.9335388157895,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3655.0895010909094,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3761.013039179105,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1110.7473274553572,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7266123428251883,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5381.642200000001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5445.221358421053,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1510.3684189759038,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1530.0705867895545,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 639.229522955238,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 589.6762659134448,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 269.8060996206908,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 263.474017805128,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 904.5646529501606,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1372061.6118876797,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 185.2549529551231,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 186.20843891155425,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 654.9165190020266,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 651.7672300530375,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1014.7868919527897,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1081.5393030269056,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2466.06427622549,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2619.5582908396946,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 717.7466315225162,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.4931148665956079,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3542.0841077192977,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3578.1618238866386,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 996.0088483679525,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1026.3761,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 958.4377051866019,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 808.0270198004819,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 334.0295935119091,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 351.8269417368457,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1363.8232225605882,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2029759.5005591293,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 260.3355921181536,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 270.9059662132337,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1012.3613350663888,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 982.4224086473183,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2891.720929819277,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3136.648739320388,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6815.443301986755,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8873.027113274336,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2750.6956031976742,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.6758328819708335,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10518.759070786515,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9236.137308653846,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2821.745199423631,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2851.0522224489796,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 345.92449180281426,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 337.3540117782467,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 155.23015441876697,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 151.04365969282424,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 481.3320726779385,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 681369.0475649895,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 106.40340006739393,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 108.58458405640349,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 352.2033915545329,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 354.1510219248462,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3444.275467128028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3408.9635690235687,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7457.21362962963,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7786.698515624999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2455.5103712871282,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.720535205452689,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10925.424731182795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10603.107263157897,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3391.7302372881363,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3393.714183673469,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 289.203466238395,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 283.7615267293275,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.74392548455603,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 129.77553878144698,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 403.82790303393983,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 583165.4656548806,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 93.94287294738027,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.59033657793069,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 306.00129654422545,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 295.16070814302896,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bed78bd5785928c5b6b641f8daba5769e348a570",
          "message": "Bump com.squareup:kotlinpoet from 1.18.0 to 1.18.1 (#158)",
          "timestamp": "2024-07-15T13:54:35Z",
          "tree_id": "bd3821ed0dc1765040404c3bf4ee916200b24360",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/bed78bd5785928c5b6b641f8daba5769e348a570"
        },
        "date": 1721053204644,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2613.0889452950505,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2577.6286297039455,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2560.8773487816056,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2418.5246030064477,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 968.45118505386,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 909.833216809942,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3569.8787136386686,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6792791.13507936,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 674.8492446946926,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 676.3977577263845,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 401.0560571789954,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 387.201105013222,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.46337560495664,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 420.486832963149,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1116.980416318968,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1106.9696561097826,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 273.6506110957231,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.15104451212252082,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1456.7388851022563,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1474.268338695926,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1617.2624264274061,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1701.2684629629628,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3868.9155765384617,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3904.8421568548392,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1126.0788849425285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7541226090526483,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5505.192870329671,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5507.932525531915,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1542.4448936137073,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1558.8066480620155,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 621.3145905688546,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 605.8451855277227,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 268.4515489820168,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 256.7508448283258,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 891.1669584313555,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1373510.903438675,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 182.38296584206427,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 180.2277414639446,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 642.1557931087356,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 637.7232963802786,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1008.7195338042382,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1115.0808432403435,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3170.7678389972148,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3116.5821477011496,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 776.5055426140758,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5385313716052701,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4293.913991266376,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4312.783800862069,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1117.4434477678572,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1177.4451567285382,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 886.662505948507,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 893.080052416953,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 358.07005576115347,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 326.3622091692524,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1272.3733436915745,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1868176.1670156985,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 223.01618263902614,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 229.79100988454283,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 905.9711112855499,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 922.6176801117881,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3780.415047755102,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3763.870864705882,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8498.474144715447,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8509.25264224138,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2688.502312138728,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.8938744783227772,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 14651.47319512195,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13752.762057831327,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3623.9154167857137,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3631.4204628676475,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 243.10555720948528,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 257.9132158938768,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 117.25014968642495,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 116.41328091654927,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 328.24502705466836,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 522344.84705245064,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 76.36639754095306,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 85.55330193684655,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 270.97888939954277,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 318.4543205372129,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3477.467972027972,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3390.9705723905718,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7438.573555555556,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7613.388257575758,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2473.753679012346,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.7133750496188906,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10354.422959183672,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10289.839489795919,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3438.3418556701026,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3403.4543416370107,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.56621502119725,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 289.73709412886944,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 132.4549332229704,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 128.625799549795,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 401.6528269992696,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 578035.182589376,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 91.62885677019368,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 96.51213093802156,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 306.8774666081808,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 296.23422579399255,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07e9bdd59da0181660de35568586ec8658d061a5",
          "message": "Bump com.doist.x:normalize from 1.0.5 to 1.1.1 (#159)",
          "timestamp": "2024-07-17T20:58:14+05:00",
          "tree_id": "a015c00e6d6401930bb8b06bd04270afaa5e44ef",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/07e9bdd59da0181660de35568586ec8658d061a5"
        },
        "date": 1721233447535,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2568.015698602432,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2560.9154208121367,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2510.0602192674,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2292.035593501574,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 957.4098746143757,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 918.8172528947871,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3661.1183340394855,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6109384.477994846,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 693.1348227734672,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 658.1628453665257,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 372.25422424198814,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 386.6413182035097,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 389.75586192639656,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 414.7588901019256,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1026.9976595497471,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1060.9981474217202,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 270.4664587127983,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.14993985553898986,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1489.7568611396373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1451.422120335952,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1570.37082328125,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1639.7540041322313,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3683.9360907407413,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3819.803686641221,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1102.9464022246943,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7233358599616158,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5370.12992,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5348.203199462366,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1504.8933254961833,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1526.0622954614223,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 638.5943340540485,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 609.4496015557074,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 270.3827573917266,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 260.58954003331945,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 909.2222409905435,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1385410.603245052,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 185.52664234153445,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 182.60083121020875,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 653.9030783359191,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 652.8117811870279,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1335.867235419274,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1430.652863,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2972.6420939102563,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3189.6428030640664,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 849.1948241319444,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.6011590103943364,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5019.320595569619,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4875.317606103286,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1479.6230965968587,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1295.568568469657,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 788.1491719911222,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 745.3831379121738,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 316.49590113666613,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 301.33022282301465,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1273.3364811268889,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1888205.3695436553,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 211.03193344961565,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 216.695342166883,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 794.9884520568157,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 819.8440559126841,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3005.497529807692,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3390.5512309375,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8122.394818518517,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8911.298292253521,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2166.9362116666666,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2.107956051362687,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 11682.63996930693,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13418.688486842104,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3618.7540230769237,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4054.673794357367,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 299.70982768563545,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 291.4999734713428,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 130.95209560654513,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 127.56099762242641,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 391.1564807767707,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 609589.8266519912,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 91.82204123162951,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 89.51052905669113,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.8622793447163,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 308.6088138233366,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3517.21332155477,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3400.9182534246575,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7574.717272727273,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8499.900948275861,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2511.443924050633,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.7434118195355814,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10586.703894736842,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10643.936875,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3436.121,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3444.632975778547,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 289.06943517832553,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 299.95514418248507,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 134.1339980746265,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 129.43383717212305,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 404.4602664124242,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 577686.931033663,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.46903620396162,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 96.35047767594324,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 309.12722461329724,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.50418578928867,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd7534846918fc6eb36ae5727f696632c241663c",
          "message": "Bump org.jetbrains.kotlinx.binary-compatibility-validator from 0.15.1 to 0.16.0 (#160)",
          "timestamp": "2024-07-18T20:47:36+05:00",
          "tree_id": "a5a5982746403d7aba6e30ed880aca03c78b4f40",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/dd7534846918fc6eb36ae5727f696632c241663c"
        },
        "date": 1721319195366,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2657.3464403752455,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2483.245011402873,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2549.9759513367017,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2270.827519395473,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 983.6294778055156,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 900.2748503288012,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3623.3330220923867,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5786806.742824788,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 676.984865201411,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 663.8854713936232,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 378.0493469875847,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 385.9827211792162,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 391.99957354711444,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 435.1467466132132,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1037.7355809475162,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1083.6580189006372,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 272.0366689341608,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.15575951910655533,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1471.4130298703608,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1504.478227251114,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1588.7401799363056,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1652.9938250409164,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3681.189467158672,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3823.634728625954,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1109.9426190580502,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7362121376759426,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5360.913451630435,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5447.965691489361,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1540.0260667189953,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1584.3860929824561,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 632.6825906763288,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 645.8980943280139,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 271.35229173189356,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 260.9754432549563,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 909.4730698310595,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1372743.8075242112,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 185.19135837530263,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 185.70010822431112,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 655.8331316521634,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 645.6013699268236,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1111.3253486228814,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1175.822784741784,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2650.116081267218,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2679.0998357746475,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 733.0207723207402,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.4965719518761615,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3628.6055656934304,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3510.6742691228073,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1003.5498196177061,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1021.9159225510205,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 986.8301105025008,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 915.0024588881166,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 403.2367260387662,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 390.06238189887165,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1374.5556317126525,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2010885.7078052878,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 269.3051969308341,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 272.6486955842889,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 919.9925776316329,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 914.2596070346323,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3677.2788260330576,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3271.8814217252398,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6799.143128947368,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7731.55418880597,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2081.180880210526,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.5509645091027464,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13426.931557954545,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10500.733041509437,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3226.412748125,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3032.985031761006,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 237.39745366950348,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 257.5189647589119,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 137.3427158272652,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 132.26298127991888,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 443.42608904238296,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 637514.4294894498,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 104.28250755399067,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 97.44064677136825,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 338.51931889145135,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 337.6096471203542,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3426.988741496599,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3348.869540983606,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7364.364370370369,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7652.498805970148,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2458.0032352941175,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.7086501217127146,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10436.221428571429,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10046.810499999998,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3387.090570469799,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3366.621125827815,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 290.9718068642457,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 303.15765906278347,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.86503030482353,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.7198040746313,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 412.10219092638835,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 588623.968697673,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 96.10978004603247,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.4716643684482,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 310.4982890308646,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 300.11161850117077,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
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
          "id": "47fbf9ae298212140151397c7e361640f355d8e8",
          "message": "Update Gradle to 8.9 (#161)",
          "timestamp": "2024-07-20T14:12:09Z",
          "tree_id": "f6946ecceba428f14d449906b26bb26f2b55e0ab",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/47fbf9ae298212140151397c7e361640f355d8e8"
        },
        "date": 1721486323894,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2519.5419625230247,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2630.1268736571174,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2563.450336805582,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2387.710915104997,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 963.6817945511781,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 906.3424804352619,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3601.810219020235,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6744429.784822484,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 686.9160901617006,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 664.4890738106151,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 380.3908756344339,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 394.3981536792424,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 403.31591162287276,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 435.15790598558743,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1032.7952978810717,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1067.3375487086957,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 279.8932289402493,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.14378974075547596,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1476.570369976875,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1471.9773833968177,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1551.8242249221184,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1631.798350726979,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3680.5964683823527,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3749.3674119850193,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1100.9344055187637,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7408096714366356,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5471.231702173914,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5485.876597814207,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1548.8936048361932,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1554.7167739263803,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 641.9600887752961,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 603.7530867739172,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 266.4526721055473,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 255.12937369611336,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 887.7818196436983,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1373600.845288698,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 182.59810038237353,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 179.35915464151515,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 657.389163679323,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 643.4199845979223,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1125.533590682557,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1229.9101124401914,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2639.4565664756446,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2726.4924715404695,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 743.2797925625921,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5036986316781279,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3769.508101486989,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3568.467836330936,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1009.9466546006067,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1039.0312924489797,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 953.3336469361844,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 908.0720821105306,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.05724927626005,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 365.43819481688354,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1256.9800215754065,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1888472.3313046128,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 227.65946783073508,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 224.16519995924608,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 896.0854892490706,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 876.0563656105263,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4252.263385029941,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3300.596182636656,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6086.411525,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6437.295727564102,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1951.372185854617,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.3958108885130547,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9050.843182568808,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9347.215004464286,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2876.4794027173916,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3030.1924800613497,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 339.7086472118002,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 331.7431332452876,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 163.1388622642412,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 156.71863391583378,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 498.968397358927,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 710533.0227655686,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 107.54124288412811,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 109.89977699677824,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 370.07477211422236,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 372.832098135891,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3413.720576271187,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3282.7205573770493,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7346.229851851851,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7546.851203007519,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2424.1701699029127,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.6918067548405582,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10712.122210526317,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10054.919000000002,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3347.176066666667,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3308.9611589403976,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 293.13144567057236,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 288.6538666501665,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 136.60960295609604,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.92105637438374,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 411.57424347691193,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 577664.3849379028,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 97.18420861034127,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 99.73437469742412,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 301.9856044232594,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 298.9754683329247,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c174ac9f2651296583710e117bd8ee052c404962",
          "message": "Bump org.jetbrains.kotlinx.binary-compatibility-validator from 0.16.0 to 0.16.2 (#164)",
          "timestamp": "2024-07-22T18:24:32+05:00",
          "tree_id": "4d68499dd83ed64c2959be23464cc5a89fc72106",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/c174ac9f2651296583710e117bd8ee052c404962"
        },
        "date": 1721656221167,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2595.5633441094915,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2507.6396077325912,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2581.6226982417047,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2338.208638538699,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 958.7235254673191,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 908.9315419721713,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3636.5337283080385,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6494445.273692778,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 679.0168956024369,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 680.6246510545051,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 378.15836161365513,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 388.3853112827407,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 400.28414987976714,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 443.5404144358512,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1063.3128630218039,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1101.233292268186,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 272.05684369645985,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.14614154049069009,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1474.4947276570822,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1480.6809269164035,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1564.5428763322884,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1633.7684180623974,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3691.0368154981543,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3843.197831640625,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1098.655775,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7134926888225149,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5429.449802162163,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5337.301031382979,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1519.5643346564884,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1529.3597302611365,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 639.9061090848685,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 605.0025629968115,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 270.1681201322575,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 258.9142808120773,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 897.8824977788463,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1387917.111939495,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 182.49726286305545,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 178.44026367878573,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 651.526812680286,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 640.6571649057923,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1165.8571943333332,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1195.560714916468,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2729.3242561224492,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2956.747603367876,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 750.3708333088774,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.5022534899339021,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4000.3553782945733,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3976.716442911877,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1055.5887036496351,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1038.6857198142416,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 941.303037053745,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 880.9372569955328,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.537923402812,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 369.29171193795503,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1356.4601547473408,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1960236.484679489,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 261.54262530631627,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 253.6453120597292,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 885.291709577012,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 837.937035639479,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3069.730641955836,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3167.6908437699685,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6590.314960645161,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7382.625456551726,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2437.511185915493,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.6092029256405513,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10806.847352631577,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10620.060516842104,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2995.74712962963,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2928.028708615385,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 332.8327271039203,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 305.27971892395914,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 139.94064800393497,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 134.3532201455658,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 441.2824149663026,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 635807.4887075331,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 100.48459066533398,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 103.84083372340345,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 348.84107578620444,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 334.5356505685756,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3419.9036054421767,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3317.105652173913,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7517.095413533835,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7626.757846153846,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2469.881336633663,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.7154366600680941,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10350.914062499998,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10139.815700000001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3356.2637458193976,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3422.3732094594598,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.8260743923856,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 303.6139840778087,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 136.41439655252674,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 133.2751713760722,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 411.3774916476044,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 588197.0828369644,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.92885916356383,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 99.14954899162684,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 314.7738376427095,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 296.0168639209088,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6aa5b1fd000d1648a3d08d7e1c74f1f2fbc41203",
          "message": "Bump com.networknt:json-schema-validator from 1.5.0 to 1.5.1 (#166)",
          "timestamp": "2024-07-26T12:43:02Z",
          "tree_id": "7e737a7cdfa35056189c6ef54539add9ba55469f",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/6aa5b1fd000d1648a3d08d7e1c74f1f2fbc41203"
        },
        "date": 1721999359820,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2624.7544480901934,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2519.177820271131,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2498.3813694532305,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2321.971558593063,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 948.0920568497766,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 891.404999487205,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3738.1373512784558,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6723135.139556353,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 679.2270209913823,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 689.6444480866796,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 368.7741007445332,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 385.4529553333815,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 393.8968196600095,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 424.17211858514867,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1038.1729348747085,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1078.2467721265373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 280.10663950326875,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.15297051399383518,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1473.0792288809241,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1488.1511740493245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1573.5942044374008,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1613.2294811447812,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3780.519925746269,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3964.1706218749996,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1110.539228443449,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7113432216376053,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5473.322936756757,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5600.078953977272,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1549.7149775316457,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1585.2584568910256,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 633.335203685187,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 598.0299984933781,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 265.5647519354752,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 245.68822179849207,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 895.0421694441529,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1401350.3924295008,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 177.60754268461147,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 176.28499410857842,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 644.3663399756853,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 627.2674042574022,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1031.495249596774,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1079.2060577942734,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2487.258629095354,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2558.6894428571427,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 733.5111430968725,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.4958780249507111,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3581.250206360424,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3570.0773782006922,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1032.0696224489795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1546.0092995243756,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 617.474341829956,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 732.384534433929,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 356.5781684822165,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 386.3930939821354,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1354.4011405406268,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1976981.1553031136,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 213.9227688212472,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 230.36819818797852,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 947.590876236939,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 880.1867027095386,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3188.147032692308,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3340.4424702479337,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7396.3942780487805,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7428.198346715329,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2175.0256128318583,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.4614847377814388,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8978.615104424778,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8877.390092035399,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2652.94854296875,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2655.6218592991913,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 349.5619683326677,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 354.29040328449133,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 166.03845451696407,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 159.83936049509174,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 513.9552561895373,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 713939.4987952051,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 110.3148774848826,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 112.40971246503088,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 363.95690158112484,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 377.7488522352455,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3433.909317406143,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3312.0609539473685,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7307.547753623187,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7495.617819548871,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2443.116446078431,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.6945067325594176,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10327.66551020408,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10051.4804,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3362.202274247492,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3327.558272425249,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 291.0999165514704,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 301.67100580919646,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 135.87972962240656,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 131.290628274466,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 407.68156273841066,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 582610.1399998107,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.7401280409242,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 97.21233113900708,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 312.17705146616424,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 299.388833834456,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
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
          "id": "a1fec7023a3c6b3a715cedc0ff42c4bacf383408",
          "message": "Return benchmark results publication back to the main workflow",
          "timestamp": "2024-07-27T18:11:02+04:00",
          "tree_id": "53ade836ae26332525588a74e5407e1c0635d261",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/a1fec7023a3c6b3a715cedc0ff42c4bacf383408"
        },
        "date": 1722091020497,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2683.5207682751957,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2403.741873689998,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2568.4087819603546,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2288.4110985965613,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 931.8729129102597,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 933.8140517280581,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3756.7715849603883,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6617568.934724523,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 682.1962997043298,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 685.8693040006093,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 370.3099083239993,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 398.2891351953727,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 394.81492047022994,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 433.3314064551466,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1043.219569233605,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1161.0712140646579,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 276.13635093018627,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1505587482089207,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1488.531216573409,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1474.684408821098,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1558.463806396256,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1533.390390851735,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3658.7671643382355,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3779.3250732075467,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1108.6289532524806,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7267435278665433,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5284.549167379679,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5387.036090810811,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1509.6485278287462,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1529.4803381954887,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 640.447559381317,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 607.9179155932454,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 272.06855476098553,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 264.78341015620174,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 903.1668881225118,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1356221.559815911,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 187.39349206520154,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 185.82542020774378,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 650.948674380838,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 643.7447162141735,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1079.4861931562816,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1149.1538073908175,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2695.181836526946,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2776.8296735135136,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 725.5863416292975,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.49399531451784134,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3657.002484285714,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3475.4820807692313,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 972.9302051808406,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1009.0279926587302,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 999.6032017598785,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 925.9571074099061,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 403.572031911697,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 378.2117050797248,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1405.185055947305,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2048909.3713711132,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 277.53310331197406,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 266.88476504016523,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1014.1366028325596,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 994.1898703219367,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2723.339715,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2838.5489940340913,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6139.789422222222,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6318.699554140127,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1960.2285569169962,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.404859256627051,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 9424.052087155962,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8941.59522072072,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2772.1051085790887,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2690.5879877717393,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 366.4116547936887,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 350.65562675654616,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 164.08408073915467,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 153.2179711586145,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 491.2172781812721,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 710501.3844575202,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 108.90635072945383,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 110.68400638830728,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 375.28201018776065,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 374.039596911173,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3508.0078571428576,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3545.047578947369,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7698.388076923077,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 8074.43336,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2497.42485,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.741456107117267,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 11754.07643678161,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10980.25010869565,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3441.059965397924,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3468.4525951557093,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 285.90723134714773,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 283.40419033277055,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 129.4262302601422,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 122.40443472235839,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 401.9115056310794,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 582509.7938783859,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 89.17239305047303,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 91.84333003255799,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 295.22342642129604,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 290.45375484276235,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "484e687f68b35faf464480ef7234f294e0409cb2",
          "message": "Prepare next version",
          "timestamp": "2024-07-27T15:53:17Z",
          "tree_id": "35c39a19cc4608902101d390016fb8a879a3d500",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/484e687f68b35faf464480ef7234f294e0409cb2"
        },
        "date": 1722097112059,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2636.929400075901,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2632.8725787267763,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2554.1244668731915,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2300.3190860589043,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 978.1228199626937,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 922.2221992403471,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3688.8990460135437,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6412679.005310072,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 680.5003970311216,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 668.5620462519655,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 366.51145129552935,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 398.6659875180066,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.66307682116883,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 417.42964061058166,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1051.1488721584508,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1079.835997782709,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 273.3986878913182,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.14626808426080543,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1471.675235097576,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1468.3249222383279,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1585.2439088646966,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1651.7184702614377,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3633.20341062271,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3785.35382754717,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1102.4597918591858,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7273221908593077,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5349.722284574469,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5470.493955978261,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1525.7193616314203,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1517.5039063348418,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 641.9082617627614,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 607.6952357789179,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 274.7534337456172,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 262.86660044152933,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 905.0496231552695,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1380848.7027529078,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 186.45504698282446,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 179.0613038630081,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 663.4162361333161,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 646.7376290957261,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1014.9609575050711,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1069.0958245521601,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2496.0503872860636,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2543.996949494949,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 714.7032656472262,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.4930028346221455,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3590.8940159574463,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3502.9762979238753,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 977.4986713420785,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1007.450288554217,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 994.3734049866155,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 934.1488758987492,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 404.7758776289044,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 386.59619993770104,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1392.9782587919847,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2045670.9900721107,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 275.9485410850903,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 265.0509495497553,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1012.7494035451006,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 988.7663122621077,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2809.3614225626743,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2923.388580825959,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6329.909792682927,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6611.576967532467,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2076.318625502008,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.62484854443351,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10523.490859803922,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10077.202402197803,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3073.6569785488964,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2967.915938787879,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 334.09973144010786,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 315.9563106042293,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 146.50849261549234,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 153.36492483770525,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 489.08696097383336,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 696484.0781956778,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 107.94283308137653,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 110.72168835364926,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 370.7940871534438,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 367.46826777847053,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3502.3714788732395,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3415.0104778156992,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7778.688740157481,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7782.300852713178,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2484.4210473815465,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.7150210496669729,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10623.844838709676,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10484.119793814434,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3420.7207586206896,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3446.4391126279866,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 286.4205726836281,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 278.11819170214756,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 130.2109481161512,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 127.7595013440753,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 396.9828814319307,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 575552.9107676902,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 93.35500863972015,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.72180680387109,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 306.7945941986275,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 293.4879359508096,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
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
          "id": "7286f6882c2829d6ffb448df080a2017ade76d1f",
          "message": "Extract Unicode dump into separate workflow. Add manual CodeQL workflow (#173)\n\nThis reduces the number of downloads and the load on the service is used\r\nfor that",
          "timestamp": "2024-08-03T12:20:24Z",
          "tree_id": "e5093d8cc32973ed1f173942c734ab91d2170175",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/7286f6882c2829d6ffb448df080a2017ade76d1f"
        },
        "date": 1722689196501,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2654.3538157063067,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2438.3577541174363,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2528.8546771873357,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2368.157171673088,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 974.3192401100207,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 913.1761642893729,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3658.7264128690886,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6594184.711542735,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 693.7061734880879,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 676.4853275516591,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 377.6001966785995,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 382.72572395553595,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 390.9207035905357,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 448.6950844603737,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1058.9443219531834,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1116.1632045638494,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 276.33184252400554,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.14776162641459917,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1471.1110589455204,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1460.7847548010857,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1579.8267893416928,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1708.2173938144329,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3821.11014015444,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3821.30471634981,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1107.8769361581922,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.7378435684186739,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5331.2262910052905,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5417.71361576087,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1543.3482984472048,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1566.6257265957447,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 638.5414752698574,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 605.5175187777337,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 273.46045137481883,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 261.67192536024817,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 901.590165695553,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1361897.785181683,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 185.0498812598434,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 180.76132142858606,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 653.1007995479733,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 653.2179120638968,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1099.1119374313942,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1146.0919571428572,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2704.1040602564103,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2764.818246703296,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 728.3226194641451,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.48873972318501024,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3602.328898928571,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3514.435704868914,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 994.1270659063626,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1011.1698353707416,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 989.9346330924443,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 939.5181688492396,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 403.4862471592558,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 390.71347869474977,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1397.263735467969,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1999233.994903572,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 274.3372044351064,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 265.2107772583147,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1022.5396332609587,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1001.9829583660782,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3499.2742837931028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3237.9141897106106,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7101.362523489933,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7761.930706521739,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2368.0171967418546,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.5790803619869185,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10491.922430851064,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10181.049483505154,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3413.0500795539033,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3873.22675229682,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 283.79905014584807,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 239.69707540288195,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 120.98153777418938,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 108.44633373631434,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 332.95503295811557,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 549244.875759601,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 79.47627377148966,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 73.05568798595817,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 242.61189714696906,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 243.94435377871295,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3426.430927835052,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3389.714020270271,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7447.987727272729,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7764.154961832062,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2438.5545320197043,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.7105002469612827,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10592.503894736841,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 10582.754479166666,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3394.9360884353746,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonAvgTimeBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3392.855340136054,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.7555781308804,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 293.203699506461,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 132.0936352384859,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 128.6797912730571,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 404.85520347534134,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 583091.5364260587,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 93.47966095140868,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validateVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 95.04886306966846,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 305.3657521020893,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.CommonThroughputBench.validate ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.7254622944803,
            "unit": "ops/sec",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ],
    "Compare KMP JSON schema validator": [
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
          "id": "6c5d8db9f568017fca3c5c9357386794c83773c3",
          "message": "Separate benchmarks for comparison from common bechmarks (#150)",
          "timestamp": "2024-07-02T14:53:19+04:00",
          "tree_id": "e02112c1c1b44839f4ee25eb30983785d13e5d24",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/6c5d8db9f568017fca3c5c9357386794c83773c3"
        },
        "date": 1719919056671,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2594.7992700283526,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2502.786746982826,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 952.3493993180876,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 900.994645860638,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2648.4045594688064,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2573.7013284425475,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3545.992865306152,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7590909.654083145,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 661.6448461034859,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 676.2738500630018,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2093.650248689747,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 701.6426130796551,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2080.146359330006,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 930647.0117351108,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2019.0258996113093,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 503.5630825282461,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 73.03272523545584,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 85.86824093736325,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 391.2388479283962,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 399.88199034430176,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1064.5149332640058,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1084.6093376131594,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 379.83717739616407,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 405.7490741729658,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 286.65368931147293,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.14120883205615015,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1576.8560035457444,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1534.3789459456032,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 495.70694518220836,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1411.003512427046,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 473.9844602679057,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.066116885452184,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 476.1725956054537,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1963.1291785963938,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13374.587134618361,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12429.585529634907,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44fa307cc10d4efb96f66bd211459b8856363897",
          "message": "Bump com.squareup:kotlinpoet from 1.17.0 to 1.18.0 (#151)",
          "timestamp": "2024-07-05T18:52:26+04:00",
          "tree_id": "d7f2ee798e0b3b6e4d75730bd11c2bdff874f546",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/44fa307cc10d4efb96f66bd211459b8856363897"
        },
        "date": 1720192614079,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2517.3853732282355,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2484.1091096061928,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 953.4863056906595,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 929.7957551078441,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2537.068734889129,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2494.063277389115,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3563.4531908615,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7087962.7102477625,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 679.480203267123,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 664.7276844825043,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2028.6071235635238,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 706.3380307502226,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2129.9787461602446,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 949326.75757288,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2007.1736349765094,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 502.23008503341345,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 73.83572355395104,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 82.53324481032078,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 390.6248880806817,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 409.6413708033248,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1082.514898824559,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1159.073560208146,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 377.2925042980461,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.1002221432705,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 283.02765374310115,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1446414033831846,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1512.0876073532888,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1540.2934049728735,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 478.8852355041181,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1423.8342150423573,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 487.6726174196639,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0923238901708376,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 490.7532120983586,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1969.479695973571,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13308.329930175436,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 11685.561469058604,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61e9d0c44481c37eb168dcc9d6bce98d49e9aff3",
          "message": "Bump com.networknt:json-schema-validator from 1.4.3 to 1.5.0 (#152)",
          "timestamp": "2024-07-08T22:53:41+05:00",
          "tree_id": "dc0496dddeaf7392617d643135656e6527b84519",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/61e9d0c44481c37eb168dcc9d6bce98d49e9aff3"
        },
        "date": 1720462711860,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2595.813995283064,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2470.7548686464374,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 957.6522979836897,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 909.6168265739841,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2575.5370245108384,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2404.4821360838423,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3551.298254166363,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6984830.8199459445,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 661.8066686608387,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 669.2242898760244,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3331.2248048980755,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1558.9383644195934,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3390.464655026123,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 908609.3825625613,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3351.046936771755,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1559.470104326298,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 71.95627699425322,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 81.7096400115106,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 397.6649642428315,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 406.9673937792049,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1056.6307906722766,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1090.5829707817827,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 380.98224265435726,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 385.8736037226053,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 282.90075964756664,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.13844431105909288,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1580.8903507548403,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1485.9026069735692,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 290.78208004441683,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 644.108690018471,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 300.84438234603346,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.1390369284665105,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 298.1947467605777,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 637.6728113580759,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13545.245917223005,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12373.539081572568,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0483b7784b8928e089ece7b1b6a4a2b7042dd44f",
          "message": "Bump com.fasterxml.jackson:jackson-bom from 2.17.1 to 2.17.2 (#154)",
          "timestamp": "2024-07-08T22:54:47+05:00",
          "tree_id": "9421ca75a1af22567b28230013c62a4168abe96d",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/0483b7784b8928e089ece7b1b6a4a2b7042dd44f"
        },
        "date": 1720462848335,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2626.4992251140166,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2449.3093132731215,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 918.3971722832384,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 927.3351085151456,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2537.4698544127177,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2458.6415482870016,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3577.0232662901917,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6906972.895492867,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 667.6327733033785,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 662.6892076986701,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3406.1473260790335,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1672.8458740348208,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3429.134917402064,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 967434.5223999603,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3345.078339739911,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1594.6442293637172,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 72.17398661856551,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 83.71231695165791,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 400.6907223170921,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 408.69489274008447,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1093.2992777866762,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1099.475844642886,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 390.58881815465645,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.58101836621523,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 282.13844963108505,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.13162688062522382,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1569.7089330345468,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1516.5775859769042,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 294.60677027288824,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 578.1824003510817,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 301.83389645922773,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0420693453005136,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 285.77471613971386,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 623.3643621705007,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13049.527929180907,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 11875.075301107961,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "959a70db959e49de4254f49c1b2b946cc3cbf5be",
          "message": "Bump org.jetbrains.kotlinx.binary-compatibility-validator from 0.14.0 to 0.15.0 (#153)",
          "timestamp": "2024-07-09T07:33:31Z",
          "tree_id": "396ef4cfe1df99719e7526c3813b16856dbd33db",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/959a70db959e49de4254f49c1b2b946cc3cbf5be"
        },
        "date": 1720511927066,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2549.9759241758434,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2531.318707767619,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 964.1826570853727,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 916.6990477148177,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2584.2403755031255,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2524.7525044925746,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3542.036872467635,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7029747.503901397,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 651.4766535522939,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 672.825031454598,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3313.2731920048655,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1729.5363792999349,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3337.597031901297,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 911595.37405448,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3398.9743057833575,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1588.2804421473686,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 74.90374735364546,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 85.02248753183711,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 406.99175059006757,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 406.9476582384286,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1048.5906271898734,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1131.4505845622855,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 391.1454818253405,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 392.95649314520904,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 281.2019434817496,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1487364208372264,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1506.764526492038,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1574.0842339571152,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 293.68533976933907,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 580.642366263953,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 284.7092841454461,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0311451297155432,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 296.46945364010054,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 659.7938235151533,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 14149.866371709144,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12043.227384345619,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16ad32acefc9a86770b8eeb60cc04ff43d05d4d4",
          "message": "Bump org.jetbrains.kotlinx.binary-compatibility-validator from 0.15.0 to 0.15.1 (#155)",
          "timestamp": "2024-07-09T20:39:36+05:00",
          "tree_id": "f716a4484b16585f02f44335df05d1abd1229ff6",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/16ad32acefc9a86770b8eeb60cc04ff43d05d4d4"
        },
        "date": 1720541066775,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2566.384650223283,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2553.9870178847336,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 959.7566897071929,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 914.067996692618,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2593.075892538286,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2441.8378742109735,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3502.7566522249895,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7075716.1891404595,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 651.8019666452391,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 647.091788982291,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3370.108477108172,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1716.1951968853887,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3410.003412197755,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 942860.9499558334,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3429.8662969898005,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1572.9112913135652,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 75.3835609168344,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 82.9452210639492,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 388.2577446340601,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 410.2572700890067,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1112.9651237097273,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1108.5274701498508,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 392.71186898857826,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 396.21118357360194,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 284.14713870411725,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.13333104013223168,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1509.1558652465405,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1495.7119130962653,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 299.0809361207186,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 603.3710086564848,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 296.23776371416955,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.1304716756109578,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 300.9126743454964,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 631.8580461317595,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13622.348763902259,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 11931.46912562789,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f5a369d24e140b2288a8eef8c7fa81df6ecdd8b",
          "message": "Bump graphql from 6.8.0 to 6.8.2 (#156)",
          "timestamp": "2024-07-12T20:38:54+05:00",
          "tree_id": "2e42549aa336081afb68a07e4f40237487c3a7d7",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/3f5a369d24e140b2288a8eef8c7fa81df6ecdd8b"
        },
        "date": 1720800264165,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2563.5950668225446,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2432.7788559747582,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 958.249564929,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 892.2418860632976,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2628.585984729673,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2424.426358687507,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3512.3525758820397,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 7092288.790100278,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 651.5636803708119,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 661.8550021476306,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3368.5665163609688,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1712.3723176637664,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3478.8724426476483,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 966989.3737803397,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3277.442743766621,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1472.9547864533483,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 73.33685415268573,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 81.36581826402431,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 396.58482263638103,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 396.72249346043895,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1048.5531934136031,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1092.0595036357465,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 378.68165769474524,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 413.59736012163586,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 284.4514994932689,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.13967209849606235,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1553.5564450644285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1503.149186404071,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 301.77656841427176,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 595.115846086848,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 291.5928072546337,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0485058021898426,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 298.3404502788636,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 636.7255703366089,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13578.443740331728,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12290.908380855511,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "68843350de534b83d59dc33a2b3b6e6d134e52ff",
          "message": "Fix workflows path filters",
          "timestamp": "2024-07-14T16:17:54+04:00",
          "tree_id": "8e8cfc844986e244b0c07c3bf70c4b27fc4c096a",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/68843350de534b83d59dc33a2b3b6e6d134e52ff"
        },
        "date": 1720961061147,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2478.5582280447265,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2198.9883548520284,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2641.8351114810303,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2490.3269352261923,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 897.8595951624604,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 857.2715247825512,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2609.008030681627,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2544.889430251818,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3495.3797386787855,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6558475.949383258,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 662.125646412737,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 671.4259287422641,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3260.7508305990573,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1703.3909745860813,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3365.323677936135,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 953171.9327861745,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3337.7791106831837,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1537.2800991615231,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 75.14890071957235,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 83.63425599498814,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 411.55822017498303,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 439.99462314221245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 388.9233999156021,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.1080273586796,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1072.5770999431932,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1123.4826151151055,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 387.025430910304,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 398.8307437382782,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 283.5822906753875,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.18361347831524916,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1530.1614543084456,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1554.7392740072846,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 298.96859140157693,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 584.1185027855764,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.96639666711917,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0854281425327763,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 299.52183335011995,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 649.739978946505,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13416.660961579186,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12180.329616917716,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "429c2c5864f50051d69fa81378135a1f0dfc6859",
          "message": "Bump graphql from 6.8.2 to 6.8.4 (#157)",
          "timestamp": "2024-07-15T18:28:32+05:00",
          "tree_id": "788f681ddcf49c1049e7c40654520cb4f0ee54f3",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/429c2c5864f50051d69fa81378135a1f0dfc6859"
        },
        "date": 1721051641685,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2543.062364298991,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2263.0128878624714,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2641.1441748144316,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2603.2837521663632,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 951.5543282309382,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 925.3202996741236,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2637.06651026496,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2521.7055156443566,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3559.1670785879724,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6464690.497633529,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 648.0566473168817,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 648.9036540716561,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3440.957960341087,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1705.7584469823091,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3513.603680772884,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 971623.7256622224,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3377.912174857293,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1477.2923072279082,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 73.25074530776774,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 83.75544032530227,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 397.54311320911404,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 440.5562597160195,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 388.81187641308986,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 412.8906159723207,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1044.7402723610378,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1079.5039542302,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 394.01010537963634,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 409.0292953437389,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 279.87984807498594,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.16315875429801413,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1500.5908162855426,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1487.0735340722754,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.1838973257008,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 590.2232056381633,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 283.3585490321702,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0519420321164168,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 292.7443261920282,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 647.9795459665667,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13480.524321788474,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12224.246014428445,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bed78bd5785928c5b6b641f8daba5769e348a570",
          "message": "Bump com.squareup:kotlinpoet from 1.18.0 to 1.18.1 (#158)",
          "timestamp": "2024-07-15T13:54:35Z",
          "tree_id": "bd3821ed0dc1765040404c3bf4ee916200b24360",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/bed78bd5785928c5b6b641f8daba5769e348a570"
        },
        "date": 1721053218427,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2488.4546138351993,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2264.698157582724,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2581.466790585502,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2471.851293959104,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 944.4950526378564,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 889.3804240959001,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2664.6152367874934,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2492.7088708538877,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3498.640240474919,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6392086.440041201,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 656.9150819964426,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 670.5935448525386,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3307.4739149293723,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1683.9376817545653,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3387.7503040882266,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 739421.4806521778,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3412.7529169358895,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1567.681290463214,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 76.99100827600046,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 84.36381380655226,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 392.5357967208051,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 437.9715291819765,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 389.92078879439373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 397.060038958289,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1057.207683107898,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1158.1972917743526,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 387.8902566119067,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 401.8087649934681,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 281.13034013439227,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1991326648186907,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1517.1906002971293,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1597.4131731316334,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 294.76230760287325,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 574.1888414534019,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 298.9553104932091,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.3581253388918364,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 298.02736539286997,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 644.4700424963387,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13580.92195443663,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 11939.643372097296,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07e9bdd59da0181660de35568586ec8658d061a5",
          "message": "Bump com.doist.x:normalize from 1.0.5 to 1.1.1 (#159)",
          "timestamp": "2024-07-17T20:58:14+05:00",
          "tree_id": "a015c00e6d6401930bb8b06bd04270afaa5e44ef",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/07e9bdd59da0181660de35568586ec8658d061a5"
        },
        "date": 1721233458994,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2505.7046325142705,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2120.632417924936,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2580.359199489946,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2373.858265259181,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 966.2026006841394,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 865.7198567295254,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2669.4650469599574,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2569.319635462976,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3517.1370748384857,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6462936.499692144,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 678.017226410763,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 666.2945519169328,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3358.634756460096,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1694.2434026051396,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3475.586417512248,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 898265.1672152423,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3383.396633497576,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1567.405465035487,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 72.87594221359133,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 84.92740269248947,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 398.7422952245512,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 452.0648216560553,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 392.8625218406943,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 415.53766606865594,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1112.2333796079583,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1096.6789265800057,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 377.7828588905499,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 403.7798847510677,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.4230819589078,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1863905077717932,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1487.8102708849456,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1500.5478686759914,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 303.03021159732793,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 576.0920446093845,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 290.69481665091246,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0494783793837787,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 297.2083898109382,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 636.6508083820497,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13785.068636519913,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12166.947539382903,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd7534846918fc6eb36ae5727f696632c241663c",
          "message": "Bump org.jetbrains.kotlinx.binary-compatibility-validator from 0.15.1 to 0.16.0 (#160)",
          "timestamp": "2024-07-18T20:47:36+05:00",
          "tree_id": "a5a5982746403d7aba6e30ed880aca03c78b4f40",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/dd7534846918fc6eb36ae5727f696632c241663c"
        },
        "date": 1721319207052,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2477.432009507972,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2235.5324783872393,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2570.745171483838,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2433.9749684247026,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 904.5386924091705,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 823.0841055394054,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2612.4398921497695,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2479.9299357901937,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3565.259979913803,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5982465.630001744,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 624.852689913658,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 676.5653387959455,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3541.1947961388905,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1701.2396444680446,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3479.7299190508115,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 937868.8140168644,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3304.2950233680276,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1596.1778793557012,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 72.46032970423549,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 81.4467134480431,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 406.8205993493615,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 442.1268335300927,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 376.6388449292276,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 401.6158435497912,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1115.9466274894162,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1080.8119073721025,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.09939178291717,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 398.8374003335588,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 284.58233905725297,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.16828837676844832,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1522.5392529131464,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1572.862255503443,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 301.20690729077285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 595.8275332664259,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 299.5588476242762,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0405508883424295,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 302.47125731902247,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 644.5033216546366,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13631.690163952135,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12438.362657755946,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "47fbf9ae298212140151397c7e361640f355d8e8",
          "message": "Update Gradle to 8.9 (#161)",
          "timestamp": "2024-07-20T14:12:09Z",
          "tree_id": "f6946ecceba428f14d449906b26bb26f2b55e0ab",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/47fbf9ae298212140151397c7e361640f355d8e8"
        },
        "date": 1721486337247,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2523.9894265014627,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2340.2232665567,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2645.0895069397634,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2544.3374904551933,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 909.1414818473634,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 890.3097477724901,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2625.6634009032614,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2593.1365969868057,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3499.854074984333,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5204928.819108933,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 665.0600725346206,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 630.6983806126042,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3289.577311110666,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1734.2964176778885,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3507.3805639576785,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 927796.8890251245,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3377.0224490358655,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1562.2882667371,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 73.72400313357348,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 82.38192522468852,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 410.840389528601,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 446.2759252650576,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 376.67522179969114,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 406.21461924464927,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1029.9923506913642,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1093.2592656571733,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 380.9056604679168,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 402.9498819356385,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 282.6409493648133,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.19761976922089813,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1476.1548979999066,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1547.6049078155877,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 305.9471998359366,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 573.4040389125432,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 299.66368596065627,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.1726284668902582,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 298.45388368743,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 640.6784148662879,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13502.616025550737,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12007.264337500637,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c174ac9f2651296583710e117bd8ee052c404962",
          "message": "Bump org.jetbrains.kotlinx.binary-compatibility-validator from 0.16.0 to 0.16.2 (#164)",
          "timestamp": "2024-07-22T18:24:32+05:00",
          "tree_id": "4d68499dd83ed64c2959be23464cc5a89fc72106",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/c174ac9f2651296583710e117bd8ee052c404962"
        },
        "date": 1721656233728,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2504.067084680205,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2237.6286011454245,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2642.2680716746795,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2552.25955943515,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 960.7033818317068,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 913.9413604549773,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2572.995437038261,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2479.8521128068387,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3437.343110785954,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 4543937.564307896,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 663.1265604181342,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 657.8399453848124,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3421.7676871051603,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1690.6392948511734,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3293.9458967321398,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 947420.1330707542,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3288.4547902828613,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1624.9315389017042,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 74.13327459101336,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 81.11910634058026,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 388.9217605001422,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 440.5523638391008,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 373.1403144547238,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 393.40271210864336,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1052.0846593885049,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1089.4217640239672,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 387.64475076627843,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 391.10526119319644,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 284.1862984795638,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.15912290130552725,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1691.1742790574185,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1483.8652584893541,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 290.37531220772905,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 587.6555215078758,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 294.6659604705495,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.047186408029846,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.4272600348913,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 619.5778199636873,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13903.756215011415,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12104.901067306158,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6aa5b1fd000d1648a3d08d7e1c74f1f2fbc41203",
          "message": "Bump com.networknt:json-schema-validator from 1.5.0 to 1.5.1 (#166)",
          "timestamp": "2024-07-26T12:43:02Z",
          "tree_id": "7e737a7cdfa35056189c6ef54539add9ba55469f",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/6aa5b1fd000d1648a3d08d7e1c74f1f2fbc41203"
        },
        "date": 1721999371613,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2525.649808706984,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2291.41466177814,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2591.555693870673,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2407.1255314802825,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 907.0061907907282,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 900.9198617152737,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2544.368934908057,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2477.0036936875445,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3560.3181008408455,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5531526.758849131,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 648.8348394534837,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 655.2813884530717,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3364.398959034862,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1678.0079323217603,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3389.0330697962613,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 887105.5193799172,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3370.3392068493713,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1532.2882239013354,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 73.95589406540573,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 82.39530089912851,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 389.4070688089993,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 456.26851793017283,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 389.12231884597634,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 417.38397762043877,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1036.9576220570975,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1087.8682493256229,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 384.54060877545487,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 414.1445474884681,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 284.4820441274178,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.16001194884332143,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1553.6088045145539,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1486.2176905352846,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 320.69392717555263,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 624.8146019003736,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 310.43487668374394,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0696469019562178,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 297.4988352610555,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 633.7860406379068,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13935.489861512262,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 11885.814058149957,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "a1fec7023a3c6b3a715cedc0ff42c4bacf383408",
          "message": "Return benchmark results publication back to the main workflow",
          "timestamp": "2024-07-27T18:11:02+04:00",
          "tree_id": "53ade836ae26332525588a74e5407e1c0635d261",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/a1fec7023a3c6b3a715cedc0ff42c4bacf383408"
        },
        "date": 1722091033078,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2455.3771604318354,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2255.7917246482198,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2507.8729953738393,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2414.584157134923,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 954.2291393778196,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 903.573905700169,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2549.9165945969303,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2570.449541287299,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3588.844522199841,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 6479292.509027395,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 665.3828661354354,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 662.6586103556538,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3163.398730552283,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1715.3243290514115,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3319.0075439018265,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 867559.4673231842,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3484.7065655929277,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1571.2487529262803,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 75.32949004468155,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 82.91370549377947,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 399.24031362583025,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 445.4906138749425,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 376.2575041672916,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 401.92998621407366,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1036.5353586141268,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1071.7153513159576,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 387.4022050755949,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 396.8442384453962,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 280.6458258099001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1787431378168361,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1490.1616085697965,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1527.701292626168,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 296.09685887693587,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 579.060105990499,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 291.7448663293738,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0464351574510373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 294.8591316751566,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 637.5582020819755,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13622.883860940394,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12216.688055671466,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "484e687f68b35faf464480ef7234f294e0409cb2",
          "message": "Prepare next version",
          "timestamp": "2024-07-27T15:53:17Z",
          "tree_id": "35c39a19cc4608902101d390016fb8a879a3d500",
          "url": "https://github.com/OptimumCode/json-schema-validator/commit/484e687f68b35faf464480ef7234f294e0409cb2"
        },
        "date": 1722097126467,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2444.4574945992363,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2239.2587886423116,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2611.3995515850306,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2577.853028084218,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 874.1445740718602,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 896.2405866876612,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2588.8673928794205,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 2467.8077541351786,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3578.6848221354753,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 5478906.028683982,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 664.2590164397241,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 681.4318182525489,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3295.691835707443,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1695.7941351958052,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3432.5828066856493,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 953721.51636251,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 3420.998623545992,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1578.5069911649812,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 75.32532275505994,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonThroughputBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 81.68774698799207,
            "unit": "ops/s",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 404.7579469310923,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpBasic ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 440.05426680629034,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 384.3118119061117,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpCollectErrors ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 408.07992881316187,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1025.454821230201,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1123.4587894845877,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 381.3223603852223,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpEmptyCollector ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 395.36731323402495,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 276.7500893313499,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 0.1613648680176765,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1487.3359797685057,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateKmpVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1562.561951887053,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 302.09216091366835,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntDetailed ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 594.3436059560582,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 296.0772139730706,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntFlag ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 1.0562976593289934,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 287.6323129361424,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateNetworkntVerbose ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 624.088174801925,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 13592.06404901308,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.ComparisonAvgTimeBenchmark.validateOpenApi ( {\"objectPath\":\"openapi-invalid.json\",\"schemaPath\":\"openapi_schema.json\"} )",
            "value": 12076.671315101874,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}