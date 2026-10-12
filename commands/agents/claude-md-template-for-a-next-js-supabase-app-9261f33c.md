---
title: "CLAUDE.md template for a Next.js + Supabase app"
description: "A ready-to-edit CLAUDE.md that tells Claude Code how your Next.js app is built, tested and deployed."
kind: template
tags: ["claude-code", "claude-md", "nextjs", "supabase"]
variables: ["app_name", "one_line_description", "who_uses_it", "package_manager", "test_command", "styling", "hosting"]
source: https://commandvault.ai/commands/claude-md-template-for-a-next-js-supabase-app-9261f33c
license: CC-BY-4.0
---

# CLAUDE.md

## What this is
{{app_name}} is a {{one_line_description}}. Users: {{who_uses_it}}.

## Commands
- Install: `{{package_manager}} install`
- Dev server: `{{package_manager}} run dev` (http://localhost:3000)
- Lint + types: `{{package_manager}} run lint && npx tsc --noEmit`
- Tests: `{{test_command}}`
- Build: `{{package_manager}} run build`

## Stack
- Next.js (App Router), React, TypeScript, {{styling}}
- Supabase: Postgres with row-level security on every table, Auth, Storage
- Hosting: {{hosting}}

## Where things live
- `src/app`: routes. Server components by default; add "use client" only when needed.
- `src/app/api`: route handlers. Validate input with zod, check auth first.
- `src/lib/server`: server-only data access (never import into client code).
- `supabase/migrations`: one SQL file per change, named `YYYYMMDDHHMMSS_what.sql`.

## Rules
- Every new table: enable RLS and write policies in the same migration.
- Never expose the service-role key to the browser or log it.
- Prefer editing existing components over creating near-duplicates.
- Match the surrounding code style; no new dependencies without asking.

## Done means
Lint, types and build pass; you ran the change in the browser and checked the console; you listed what you changed and anything you skipped.
