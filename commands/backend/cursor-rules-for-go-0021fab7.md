---
title: "Cursor rules for Go"
description: "A .cursor/rules/go.mdc for idiomatic errors, contexts, interfaces and tests."
kind: template
tags: ["cursor-rules", "cursor", "go", "golang"]
variables: ["test_command"]
source: https://commandvault.ai/commands/cursor-rules-for-go-0021fab7
license: CC-BY-4.0
---

---
description: Go conventions
globs: ["**/*.go"]
alwaysApply: false
---

# Go

- Errors are values: return them, wrap with `%w`, and handle each one. No panics in library code.
- `context.Context` first argument for anything doing I/O; respect cancellation.
- Accept interfaces, return structs; define interfaces where they're used.
- Keep packages small and named for what they provide (no `utils`).
- Table-driven tests with `t.Run`; use `t.Helper()` in helpers.
- Run `go vet` and `golangci-lint run` before finishing.

## When you change code
- Follow the patterns in the nearest existing file before inventing new ones.
- Add or update a test for behavior changes; run `{{test_command}}`.
- Keep diffs small; explain anything surprising in your reply.
