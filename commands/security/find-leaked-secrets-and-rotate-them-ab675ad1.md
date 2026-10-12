---
title: "Find leaked secrets and rotate them"
description: "Locate exposed keys in a repo and plan a safe rotation."
kind: prompt
tags: ["secrets", "incident", "git"]
variables: ["repo_or_location", "providers"]
source: https://commandvault.ai/commands/find-leaked-secrets-and-rotate-them-ab675ad1
license: CC-BY-4.0
---

I think a secret may have leaked in {{repo_or_location}}.

Help me:
1. Search strategy: commands to scan the working tree and full git history for keys, tokens and passwords (e.g. gitleaks, trufflehog, git log -p with patterns).
2. Triage: how to tell real secrets from test values.
3. Rotation plan for each provider involved ({{providers}}): create new key, deploy it, revoke old key — in an order that avoids downtime.
4. Clean-up: whether rewriting git history is worth it (it doesn't un-leak a pushed secret).
5. Prevention: pre-commit hook and CI scan config.

Never print a full secret value in your answer.
