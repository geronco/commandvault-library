---
title: "CLAUDE.md template for a Laravel app"
description: "Project memory for Claude Code in Laravel: Artisan commands, structure and conventions."
kind: template
tags: ["claude-code", "claude-md", "laravel", "php"]
variables: ["project_name", "what_it_does", "php_version", "laravel_version", "database", "frontend", "dev_command"]
source: https://commandvault.ai/commands/claude-md-template-for-a-laravel-app-22d119b4
license: CC-BY-4.0
---

# CLAUDE.md

## Project
{{project_name}}: {{what_it_does}}. Stack: PHP {{php_version}}, Laravel {{laravel_version}}, {{database}}, {{frontend}}.

## Commands
- Run locally: `{{dev_command}}`
- Tests: `php artisan test`
- Lint/format: `./vendor/bin/pint --test`

## Where things live
- `app/Http/Controllers`: thin controllers
- `app/Actions` or `app/Services`: business logic
- `app/Models`: Eloquent models
- `database/migrations`: one per change

## Conventions
- Validate with Form Requests, not inside controllers.
- Eager-load relations to avoid N+1 queries.
- Queue anything slow (emails, exports) with jobs.
- Use policies for authorization.

## Never
- Commit secrets or `.env` files; refer to them by name only.
- Run migrations or scripts against production.
- Skip or delete a failing test to make the suite pass.

## Done means
Tests and linters pass, you ran the change for real, and your summary lists what changed and what you didn't verify.
