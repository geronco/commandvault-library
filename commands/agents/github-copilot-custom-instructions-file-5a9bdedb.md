---
title: "GitHub Copilot custom instructions file"
description: "A .github/copilot-instructions.md that makes Copilot chat and agent mode follow your repo's rules."
kind: template
tags: ["copilot", "github", "coding-agents", "instructions"]
variables: ["repo_name", "repo_description", "language", "framework", "install_command", "test_command", "lint_command", "generated_folder", "api_docs_path"]
source: https://commandvault.ai/commands/github-copilot-custom-instructions-file-5a9bdedb
license: CC-BY-4.0
---

# Copilot instructions for {{repo_name}}

## About this repository
{{repo_description}}. Main language: {{language}}. Framework: {{framework}}.

## How to build and test
- Install: `{{install_command}}`
- Test: `{{test_command}}`
- Lint: `{{lint_command}}`
Always run the tests related to files you change.

## Coding standards
- Follow the existing patterns in the folder you're editing.
- Small, focused functions; descriptive names; no abbreviations.
- Handle errors explicitly; never swallow exceptions.
- Add or update tests with every behavior change.

## Pull requests
- Title: imperative, under 60 characters.
- Description: what changed, why, how it was tested, risks.

## Do not
- Edit generated files in `{{generated_folder}}`.
- Add dependencies without explaining why in the PR.
- Change public APIs without updating `{{api_docs_path}}`.
