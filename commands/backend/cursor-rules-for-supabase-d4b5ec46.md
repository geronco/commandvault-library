---
title: "Cursor rules for Supabase"
description: "A .cursor/rules/supabase.mdc covering row-level security, migrations, auth and safe client usage."
kind: template
tags: ["cursor-rules", "cursor", "supabase", "postgres"]
variables: ["test_command"]
source: https://commandvault.ai/commands/cursor-rules-for-supabase-d4b5ec46
license: CC-BY-4.0
---

---
description: Supabase conventions
globs: ["supabase/**","src/**/*.ts","app/**/*.ts"]
alwaysApply: false
---

# Supabase

- Every table: `enable row level security` plus explicit policies in the same migration. Use `(select auth.uid())` in policies.
- Schema changes only through migrations in `supabase/migrations` (`supabase migration new <name>`); never edit the remote database by hand.
- The anon key is public; the service-role key is server-only and never logged or sent to the browser.
- Security definer functions set `search_path = ''` and are revoked from anon/authenticated unless meant to be called.
- Index every foreign key and every column used in filters or sorting.
- Generate types with `supabase gen types typescript` after schema changes.

## When you change code
- Follow the patterns in the nearest existing file before inventing new ones.
- Add or update a test for behavior changes; run `{{test_command}}`.
- Keep diffs small; explain anything surprising in your reply.
