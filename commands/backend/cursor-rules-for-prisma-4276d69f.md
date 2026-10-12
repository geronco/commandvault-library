---
title: "Cursor rules for Prisma"
description: "A .cursor/rules/prisma.mdc for schema changes, migrations and efficient queries."
kind: template
tags: ["cursor-rules", "cursor", "prisma", "database"]
variables: ["test_command"]
source: https://commandvault.ai/commands/cursor-rules-for-prisma-4276d69f
license: CC-BY-4.0
---

---
description: Prisma conventions
globs: ["prisma/schema.prisma","src/**/*.ts"]
alwaysApply: false
---

# Prisma

- Change the schema in `prisma/schema.prisma`, then `npx prisma migrate dev --name <change>`; commit the migration.
- Never run `migrate reset` or `db push` against shared or production databases.
- One PrismaClient instance per process (`src/lib/db.ts`); never create clients per request.
- Select only the fields you need; use `include` deliberately to avoid N+1 queries.
- Wrap multi-step writes in `prisma.$transaction`.
- Map Prisma errors (P2002 unique, P2025 not found) to clear API errors.

## When you change code
- Follow the patterns in the nearest existing file before inventing new ones.
- Add or update a test for behavior changes; run `{{test_command}}`.
- Keep diffs small; explain anything surprising in your reply.
