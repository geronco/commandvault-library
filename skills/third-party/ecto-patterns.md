# Ecto patterns (Oliver Kriska)

Rules for Ecto schemas, changesets, queries, preloads and migrations.

- Source: https://github.com/oliver-kriska/claude-elixir-phoenix
- SKILL.md: https://raw.githubusercontent.com/oliver-kriska/claude-elixir-phoenix/main/plugins/elixir-phoenix/skills/ecto-patterns/SKILL.md
- Author: Oliver Kriska
- License: MIT
- Page: https://commandvault.ai/commands/ecto-patterns-oliver-kriska-2e40f0ab

Loads for Ecto work in Elixir projects. Its rules include using cast only for external input, never using floats for money, avoiding polymorphic associations, pinning values in queries, preloading collections instead of looping, and relying on database constraints for race conditions. It includes a schema template, quick decision tables for changeset functions and preload strategy, and common anti-patterns.

**Try asking:**
- "Write an Ecto schema and changeset for invoices with a money field"
- "Fix the N+1 queries in this context module"
- "Add a unique constraint and handle the race condition on signup"

**Source:** [oliver-kriska/claude-elixir-phoenix](https://github.com/oliver-kriska/claude-elixir-phoenix/tree/HEAD/plugins/elixir-phoenix/skills/ecto-patterns) · MIT · by Oliver Kriska
