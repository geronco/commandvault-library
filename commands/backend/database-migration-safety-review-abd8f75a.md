---
title: "Database migration safety review"
description: "Catch locking, data loss and rollback problems before running a migration."
kind: checklist
tags: ["migrations", "postgres", "deploys"]
variables: ["table_size", "migration_sql"]
source: https://commandvault.ai/commands/database-migration-safety-review-abd8f75a
license: CC-BY-4.0
---

Review this migration before it runs on a production database with {{table_size}} rows:

{{migration_sql}}

Check and report:
1. Statements that take long or exclusive locks (adding NOT NULL, changing types, non-concurrent indexes).
2. Anything that drops or rewrites data — and whether it's reversible.
3. Whether app code that is deployed today keeps working during and after the migration.
4. A safer multi-step version if needed (expand → backfill → contract).
5. The exact rollback steps.

Finish with GO / NO-GO and why.
