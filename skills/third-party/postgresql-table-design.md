# PostgreSQL table design (Seth Hobson)

Rules and gotchas for designing or reviewing a PostgreSQL schema.

- Source: https://github.com/wshobson/agents
- SKILL.md: https://raw.githubusercontent.com/wshobson/agents/main/plugins/database-design/skills/postgresql-table-design/SKILL.md
- Author: Seth Hobson
- License: MIT
- Page: https://commandvault.ai/commands/postgresql-table-design-seth-hobson-dd855549

Gives Claude PostgreSQL-specific rules for keys, data types, constraints, indexes and partitioning: identity columns, TIMESTAMPTZ, NUMERIC for money, indexing foreign keys by hand, and which types to avoid. It lists Postgres behaviors that catch people out, such as unique constraints allowing multiple NULLs and gaps in sequences. A reference file holds the full type catalog, workload patterns, JSONB indexing and worked DDL examples.

**Try asking:**
- "Review this schema for a multi-tenant orders table before we ship it"
- "Design Postgres tables for users, teams and invitations"
- "Should this events table be partitioned, and how?"

**Source:** [wshobson/agents](https://github.com/wshobson/agents/tree/HEAD/plugins/database-design/skills/postgresql-table-design) · MIT · by Seth Hobson
