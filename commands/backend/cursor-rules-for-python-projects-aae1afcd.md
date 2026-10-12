---
title: "Cursor rules for Python projects"
description: "A .cursor/rules/python.mdc for typed, tested, well-structured Python."
kind: template
tags: ["cursor-rules", "cursor", "python"]
variables: ["python_version", "dependency_tool", "test_command"]
source: https://commandvault.ai/commands/cursor-rules-for-python-projects-aae1afcd
license: CC-BY-4.0
---

---
description: Python conventions
globs: ["**/*.py"]
alwaysApply: false
---

# Python

- Python {{python_version}}; type hints on every function signature; `mypy` clean.
- Format and lint with ruff (`ruff format`, `ruff check --fix`).
- Small pure functions; side effects (I/O, network, DB) at the edges.
- Use dataclasses or Pydantic models instead of loose dicts for structured data.
- Raise specific exceptions; never use bare `except:`.
- Tests with pytest in `tests/`, mirroring the package layout; use fixtures, not globals.
- Dependencies managed with {{dependency_tool}}; don't add packages without saying why.

## When you change code
- Follow the patterns in the nearest existing file before inventing new ones.
- Add or update a test for behavior changes; run `{{test_command}}`.
- Keep diffs small; explain anything surprising in your reply.
