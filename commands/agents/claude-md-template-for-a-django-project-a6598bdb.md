---
title: "CLAUDE.md template for a Django project"
description: "Give Claude Code your Django project's commands, app layout and rules in one file."
kind: template
tags: ["claude-code", "claude-md", "django", "python"]
variables: ["project_name", "what_it_does", "python_version", "django_version", "database", "project_package"]
source: https://commandvault.ai/commands/claude-md-template-for-a-django-project-a6598bdb
license: CC-BY-4.0
---

# CLAUDE.md

## Project
{{project_name}}: {{what_it_does}}. Stack: Python {{python_version}}, Django {{django_version}}, {{database}}.

## Commands
- Run locally: `python manage.py runserver`
- Tests: `pytest -q (or python manage.py test)`
- Lint/format: `ruff check . && ruff format --check .`

## Where things live
- `{{project_package}}/settings/`: base, dev, prod settings
- `apps/<app>/`: models, views, serializers, urls, tests per app
- `templates/` and `static/`: shared front end

## Conventions
- New models need a migration (`python manage.py makemigrations`) committed with the code.
- Business logic lives in `services.py`, not views or models.
- Use the ORM; raw SQL only with a comment explaining why.
- Every view checks permissions explicitly.

## Never
- Commit secrets or `.env` files; refer to them by name only.
- Run migrations or scripts against production.
- Skip or delete a failing test to make the suite pass.

## Done means
Tests and linters pass, you ran the change for real, and your summary lists what changed and what you didn't verify.
