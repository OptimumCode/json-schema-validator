@file:Suppress("ktlint:standard:no-wildcard-imports")

import systems.danger.kotlin.*

danger(args) {
  onGitHub {
    if (issue.labels.isEmpty()) {
      fail("PR must have labels")
    }
  }
}