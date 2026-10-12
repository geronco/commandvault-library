---
title: "Model a Postgres schema with row-level security"
description: "Tables, indexes and RLS policies for a multi-user feature."
kind: prompt
tags: ["postgres", "supabase", "rls", "database"]
variables: ["feature", "user_roles"]
source: https://commandvault.ai/commands/model-a-postgres-schema-with-row-level-security-4c536980
license: CC-BY-4.0
---

I'm building {{feature}} on Postgres (Supabase). Users: {{user_roles}}.

Produce a single SQL migration that:
- Creates tables with uuid primary keys, timestamps, foreign keys and check constraints.
- Adds indexes for every foreign key and every column I'll filter or sort by.
- Enables RLS on every table and writes select/insert/update/delete policies per role, using (select auth.uid()).
- Keeps privileged logic in security definer functions with search_path set to ''.

After the SQL, explain each policy in one sentence and list queries I should run to prove a user cannot read another user's rows.
