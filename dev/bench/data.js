window.BENCHMARK_DATA = {
  "lastUpdate": 1719919057111,
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
      }
    ]
  }
}