---
title: "Definition of done block for agent context files"
description: "Paste into CLAUDE.md or AGENTS.md so agents stop declaring victory before the work is verified."
kind: snippet
tags: ["agents-md", "claude-md", "quality", "verification"]
variables: ["lint_command", "typecheck_command", "test_command", "how_to_run"]
source: https://commandvault.ai/commands/definition-of-done-block-for-agent-context-files-41e7512b
license: CC-BY-4.0
---

## Definition of done
A task is done only when all of these are true:
- [ ] `{{lint_command}}` and `{{typecheck_command}}` pass with no new warnings.
- [ ] `{{test_command}}` passes; new behavior has a test.
- [ ] You ran the change for real ({{how_to_run}}) and checked for errors.
- [ ] No debug logs, commented-out code or TODOs left behind.
- [ ] Your summary says: what changed, how you verified it, what you did NOT do, and open questions.

If you can't verify something, say so plainly instead of guessing.
