# Systematic debugging (Superpowers)

A four-phase process that finds the root cause of a bug before any fix is attempted.

- Source: https://github.com/obra/superpowers
- SKILL.md: https://raw.githubusercontent.com/obra/superpowers/main/skills/systematic-debugging/SKILL.md
- Author: Jesse Vincent (obra)
- License: MIT
- Page: https://commandvault.ai/commands/systematic-debugging-superpowers-c059abab

Triggers on any bug, failing test or odd behavior and stops Claude from guessing at fixes. It works through four phases: investigate the root cause, compare against working patterns, test a hypothesis, and only then implement a fix. Supporting notes cover tracing a bug back to its source, defense in depth, and waiting on conditions instead of sleeping, plus a script that finds which test pollutes shared state.

**Try asking:**
- "This test passes alone but fails in the full suite, figure out why"
- "Users sometimes get logged out randomly, debug it"
- "The build broke after the upgrade, find the real cause"

**Source:** [obra/superpowers](https://github.com/obra/superpowers/tree/HEAD/skills/systematic-debugging) · MIT · by Jesse Vincent (obra)
