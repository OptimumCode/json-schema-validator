window.BENCHMARK_DATA = {
  "lastUpdate": 1720800265046,
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
      }
    ]
  }
}