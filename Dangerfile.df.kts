@file:Suppress("ktlint:standard:no-wildcard-imports")

import systems.danger.kotlin.*
import systems.danger.kotlin.models.github.GitHubIssueLabel

danger(args) {
  if (git.modifiedFiles.any { it.contains("json-schema-validator/api/") }) {
    markdown(
      "PR introduces changes to the public API. " +
        "Please add **\"ABI breaking\"** label if **any line** in API file was changed or deleted. " +
        "Please add **\"API breaking\"** label if **any public method** in API file was changed or deleted.",
    )
  }
  onGitHub {
    val prLabels = issue.labels
    checkPrLabels(prLabels)
  }
}

fun checkPrLabels(prLabels: List<GitHubIssueLabel>) {
  when (prLabels.size) {
    0 -> fail("PR must have labels")
    1 ->
      prLabels.find { it.name.equals("ignore", ignoreCase = true) }?.let {
        warn("PR must have labels other then '[${it.name}](${it.url})'")
      }

    else -> {}
  }
}