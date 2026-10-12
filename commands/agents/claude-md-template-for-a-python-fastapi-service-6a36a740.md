---
title: "CLAUDE.md template for a Python FastAPI service"
description: "Project memory for Claude Code on a Python API: commands, layout, testing and the rules that keep it safe."
kind: template
tags: ["claude-code", "claude-md", "python", "fastapi"]
variables: ["service_name", "what_it_does", "python_version", "database", "setup_command", "module", "package"]
source: https://commandvault.ai/commands/claude-md-template-for-a-python-fastapi-service-6a36a740
license: CC-BY-4.0
---

# CLAUDE.md

## Service
{{service_name}}: {{what_it_does}}. Python {{python_version}}, FastAPI, {{database}}.

## Commands
- Setup: `{{setup_command}}`
- Run: `uvicorn {{module}}:app --reload`
- Tests: `pytest -q` (add `-k name` for one test)
- Lint/format: `ruff check . && ruff format --check .`
- Types: `mypy {{package}}`

## Layout
- `{{package}}/api`: routers, one file per resource
- `{{package}}/services`: business logic (no FastAPI imports here)
- `{{package}}/db`: models and queries
- `tests/`: mirrors the package layout

## Conventions
- Pydantic models for every request and response; never return ORM objects directly.
- Dependencies via `Depends()`; no globals for sessions or clients.
- Raise `HTTPException` only in routers; services raise domain errors.
- Write a test for every bug fix that fails before the fix.

## Never
- Commit secrets or `.env` files.
- Run migrations against production.
- Disable a failing test to make CI pass.
