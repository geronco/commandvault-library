---
title: "CLAUDE.md template for a Go service"
description: "Tell Claude Code how your Go service is built, tested and structured."
kind: template
tags: ["claude-code", "claude-md", "go", "golang"]
variables: ["project_name", "what_it_does", "go_version", "router", "database", "service"]
source: https://commandvault.ai/commands/claude-md-template-for-a-go-service-a256d8da
license: CC-BY-4.0
---

# CLAUDE.md

## Project
{{project_name}}: {{what_it_does}}. Stack: Go {{go_version}}, {{router}}, {{database}}.

## Commands
- Run locally: `go run ./cmd/{{service}}`
- Tests: `go test ./...`
- Lint/format: `golangci-lint run`

## Where things live
- `cmd/{{service}}/`: main package
- `internal/`: private packages (handlers, services, storage)
- `pkg/`: code safe for other repos to import
- `migrations/`: SQL migrations

## Conventions
- Return errors, don't panic; wrap with `fmt.Errorf("context: %w", err)`.
- Pass `context.Context` as the first argument to anything that does I/O.
- Interfaces belong to the consumer, kept small.
- Table-driven tests for anything with more than two cases.

## Never
- Commit secrets or `.env` files; refer to them by name only.
- Run migrations or scripts against production.
- Skip or delete a failing test to make the suite pass.

## Done means
Tests and linters pass, you ran the change for real, and your summary lists what changed and what you didn't verify.
