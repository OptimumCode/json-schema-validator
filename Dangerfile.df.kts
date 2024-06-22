@file:Suppress("ktlint:standard:no-wildcard-imports")

import systems.danger.kotlin.*

danger(args) {
  onGitHub {
    val prLabels = issue.labels
    when (prLabels.size) {
      0 -> fail("PR must have labels")
      1 ->
        prLabels.find { it.name.equals("ignore", ignoreCase = true) }?.let {
          warn("PR must have labels other than 'ignore'")
        }
      else -> {}
    }
  }
}