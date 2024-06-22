@file:Suppress("ktlint:standard:no-wildcard-imports")

import systems.danger.kotlin.*

danger(args) {
  onGitHub {
    if (issue.labels.isEmpty()) {
      warn("PR must have labels")
    }
  }
}