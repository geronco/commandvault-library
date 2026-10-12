---
title: "Write a SQL query from a plain question"
description: "Describe your tables and ask in English; get correct, readable SQL."
kind: prompt
tags: ["sql", "analytics", "postgres"]
variables: ["database", "schema", "question"]
source: https://commandvault.ai/commands/write-a-sql-query-from-a-plain-question-5f579205
license: CC-BY-4.0
---

Database: {{database}}
Tables and columns:
{{schema}}

Question: {{question}}

Write the SQL query. Rules:
- Use CTEs with clear names instead of nested subqueries.
- Explain any assumption about what a column means.
- Handle NULLs and duplicates explicitly.
- Add a comment above each CTE saying what it computes.

Then show a 3-row example of the expected output and one way the result could be misleading.
