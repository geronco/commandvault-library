---
title: "CLAUDE.md template for a Ruby on Rails app"
description: "Project memory for Claude Code in a Rails codebase: commands, structure and Rails-specific rules."
kind: template
tags: ["claude-code", "claude-md", "rails", "ruby"]
variables: ["project_name", "what_it_does", "ruby_version", "rails_version", "database", "frontend", "job_backend", "test_command"]
source: https://commandvault.ai/commands/claude-md-template-for-a-ruby-on-rails-app-dadb0ceb
license: CC-BY-4.0
---

# CLAUDE.md

## Project
{{project_name}}: {{what_it_does}}. Stack: Ruby {{ruby_version}}, Rails {{rails_version}}, {{database}}, {{frontend}}.

## Commands
- Run locally: `bin/dev`
- Tests: `{{test_command}}`
- Lint/format: `bundle exec rubocop`

## Where things live
- `app/models`, `app/controllers`, `app/views`: standard Rails
- `app/services`: multi-step business logic
- `app/jobs`: background work ({{job_backend}})
- `db/migrate`: one migration per change

## Conventions
- Fat models are fine; fat controllers are not. Move logic out of controllers.
- Strong parameters on every create/update.
- Avoid N+1 queries: use `includes` and check the log.
- Prefer Rails conventions over custom patterns.

## Never
- Commit secrets or `.env` files; refer to them by name only.
- Run migrations or scripts against production.
- Skip or delete a failing test to make the suite pass.

## Done means
Tests and linters pass, you ran the change for real, and your summary lists what changed and what you didn't verify.
