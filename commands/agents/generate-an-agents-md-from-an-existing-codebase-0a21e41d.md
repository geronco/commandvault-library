---
title: "Generate an AGENTS.md from an existing codebase"
description: "Have your coding agent read the repo and write an accurate AGENTS.md instead of guessing."
kind: prompt
tags: ["agents-md", "onboarding", "coding-agents", "documentation"]
variables: ["max_lines", "focus_area"]
source: https://commandvault.ai/commands/generate-an-agents-md-from-an-existing-codebase-0a21e41d
license: CC-BY-4.0
---

Read this repository and write an AGENTS.md at the root that a new coding agent could follow on day one.

Investigate before writing:
1. package.json / pyproject / Makefile / CI files: the real install, dev, test, lint and build commands.
2. The folder structure: where routes, business logic, data access and tests live.
3. Existing conventions: naming, error handling, how data is fetched, how styles are written.
4. Anything dangerous: migrations, generated files, secrets, production scripts.

Write AGENTS.md with these sections: Overview (3 lines), Commands (exact, copy-pasteable), Where things live, Conventions, Never do, Definition of done.

Rules:
- Only state things you verified in the code; mark guesses with "(check)".
- Keep it under {{max_lines}} lines.
- Focus on {{focus_area}} if the repo is large.

Then list the 3 things you were least sure about.
