---
title: "GitHub Actions CI for a Node app"
description: "Lint, typecheck, test and build on every pull request, with caching."
kind: template
tags: ["ci", "github-actions", "node"]
variables: ["framework", "package_manager", "node_version"]
source: https://commandvault.ai/commands/github-actions-ci-for-a-node-app-f6830a4e
license: CC-BY-4.0
---

Write a GitHub Actions workflow for a {{framework}} app using {{package_manager}}.

Requirements:
- Runs on pull_request and push to main.
- Node {{node_version}}, dependency caching keyed on the lockfile.
- Jobs: lint, typecheck, test, build (fail fast; build only after the others pass).
- Cancels in-progress runs for the same branch.
- Uses least-privilege permissions (contents: read).
- No secrets in logs.

Return the YAML and a one-paragraph explanation of each job.
