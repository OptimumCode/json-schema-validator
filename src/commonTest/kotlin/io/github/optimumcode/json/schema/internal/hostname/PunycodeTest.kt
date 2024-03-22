package io.github.optimumcode.json.schema.internal.hostname

import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

class PunycodeTest : FunSpec() {
  init {
    test("rfc3492_Samples") {
      assertSoftly {
        // (A) Arabic (Egyptian)
        testDecode(
          unicode = "ليهمابتكلموشعربي؟",
          punycode = "xn--egbpdaj6bu4bxfgehfvwxn",
        )

        // (B) Chinese (simplified)
        testDecode(
          unicode = "他们为什么不说中文",
          punycode = "xn--ihqwcrb4cv8a8dqg056pqjye",
        )

        // (C) Chinese (traditional)
        testDecode(
          unicode = "他們爲什麽不說中文",
          punycode = "xn--ihqwctvzc91f659drss3x8bo0yb",
        )

        // (D) Czech
        testDecode(
          unicode = "Pročprostěnemluvíčesky",
          punycode = "xn--Proprostnemluvesky-uyb24dma41a",
        )

        // (E) Hebrew:
        testDecode(
          unicode = "למההםפשוטלאמדבריםעברית",
          punycode = "xn--4dbcagdahymbxekheh6e0a7fei0b",
        )

        // (F) Hindi (Devanagari)
        testDecode(
          unicode = "यहलोगहिन्दीक्योंनहींबोलसकतेहैं",
          punycode = "xn--i1baa7eci9glrd9b2ae1bj0hfcgg6iyaf8o0a1dig0cd",
        )

        // (G) Japanese (kanji and hiragana)
        testDecode(
          unicode = "なぜみんな日本語を話してくれないのか",
          punycode = "xn--n8jok5ay5dzabd5bym9f0cm5685rrjetr6pdxa",
        )

        // (H) Korean (Hangul syllables)
        testDecode(
          unicode = "세계의모든사람들이한국어를이해한다면얼마나좋을까",
          punycode = "xn--989aomsvi5e83db1d2a355cv1e0vak1dwrv93d5xbh15a0dt30a5jpsd879ccm6fea98c",
        )

        // (I) Russian (Cyrillic)
        testDecode(
          unicode = "почемужеонинеговорятпорусски",
          punycode = "xn--b1abfaaepdrnnbgefbadotcwatmq2g4l",
        )

        // (J) Spanish
        testDecode(
          unicode = "PorquénopuedensimplementehablarenEspañol",
          punycode = "xn--PorqunopuedensimplementehablarenEspaol-fmd56a",
        )

        // (K) Vietnamese
        testDecode(
          unicode = "TạisaohọkhôngthểchỉnóitiếngViệt",
          punycode = "xn--TisaohkhngthchnitingVit-kjcr8268qyxafd2f1b9g",
        )
      }
    }

    test("uppercase punycode") {
      testDecode(
        unicode = "ليهمابتكلموشعربي؟",
        punycode = "Xn--EgBpDaJ6Bu4bXfGeHfVwXn",
      )
    }

    test("mixed case punycode") {
      testDecode(
        unicode = "ليهمابتكلموشعربي؟",
        punycode = "Xn--EgBpDaJ6Bu4bXfGeHfVwXn",
      )
    }

    test("multiple labels") {
      assertSoftly {
        testDecode(
          unicode = "☃.net",
          punycode = "xn--n3h.net",
        )
        testDecode(
          unicode = "ålgård.no",
          punycode = "xn--lgrd-poac.no",
        )
        testDecode(
          unicode = "個人.香港",
          punycode = "xn--gmqw5a.xn--j6w193g",
        )
        testDecode(
          unicode = "упр.срб",
          punycode = "xn--o1ach.xn--90a3ac",
        )
      }
    }

    test("dash in prefix") {
      testDecode(
        unicode = "klmnöpqrst-uvwxy",
        punycode = "xn--klmnpqrst-uvwxy-ctb",
      )
    }

    test("non basic code point in prefix") {
      Punycode.decode("xn--cåt-n3h") shouldBe null
    }

    test("non basic code point in insertion coding") {
      Punycode.decode("xn--cat-ñ3h") shouldBe null
    }

    test("unterminated code point") {
      Punycode.decode("xn--cat-n") shouldBe null
    }

    test("overflow I") {
      Punycode.decode("xn--99999999") shouldBe null
    }

    test("overflow max code point") {
      assertSoftly {
        Punycode.decode("xn--a-b.net") shouldBe null
        Punycode.decode("xn--a-9b.net") shouldBe null
        Punycode.decode("xn--a-99999b.net") shouldBe null
        Punycode.decode("xn--a-9999b.net") shouldBe "a\uD8E2\uDF5C.net"
        Punycode.decode("xn--a-999b.net") shouldBe "a溠.net"
        Punycode.decode("xn--a-99b.net") shouldBe "a՚.net"
      }
    }

    test("invalid punycode") {
      Punycode.decode("xn--ls8h=") shouldBe null
    }
  }

  private fun testDecode(
    unicode: String,
    punycode: String,
  ) {
    Punycode.decode(punycode) shouldBe unicode
  }
}