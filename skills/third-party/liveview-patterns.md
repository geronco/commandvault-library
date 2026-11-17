# Phoenix LiveView patterns (Oliver Kriska)

Rules and patterns for building Phoenix LiveView pages correctly.

- Source: https://github.com/oliver-kriska/claude-elixir-phoenix
- SKILL.md: https://raw.githubusercontent.com/oliver-kriska/claude-elixir-phoenix/main/plugins/elixir-phoenix/skills/liveview-patterns/SKILL.md
- Author: Oliver Kriska
- License: MIT
- Page: https://commandvault.ai/commands/phoenix-liveview-patterns-oliver-kriska-8042b4f7

Loads automatically for LiveView, component and channel files. It sets ten rules, such as no unconditional database queries in mount, streams for lists, checking connected? before subscribing, and matching changeset errors explicitly. It also covers async assigns, rendering cached HTML for SEO routes, navigation and component decision trees, and common anti-patterns, with reference files for deeper topics.

**Try asking:**
- "Build a LiveView page that lists orders with live updates via PubSub"
- "Why does my LiveView form not show validation errors?"
- "Refactor this LiveView to use streams instead of assigns for the list"

**Source:** [oliver-kriska/claude-elixir-phoenix](https://github.com/oliver-kriska/claude-elixir-phoenix/tree/HEAD/plugins/elixir-phoenix/skills/liveview-patterns) · MIT · by Oliver Kriska
