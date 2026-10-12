---
title: "Update CLAUDE.md after a coding session"
description: "End-of-session prompt that turns what the agent learned into permanent project memory."
kind: prompt
tags: ["claude-code", "claude-md", "memory", "workflow"]
variables: ["session_topic"]
source: https://commandvault.ai/commands/update-claude-md-after-a-coding-session-a460fb4e
license: CC-BY-4.0
---

Before we finish, update CLAUDE.md with what you learned in this session.

1. Review what we did: commands that worked, errors we hit, decisions we made, files you had to search for.
2. Add only durable facts that will help next time:
   - Commands or flags that weren't documented
   - Gotchas ("X looks like Y but actually...")
   - Decisions and the reason for them
   - Where things live if it took you a while to find them
3. Do not add: things already in the file, one-off debugging notes, or anything obvious from the code.
4. Keep each addition to one or two lines, under the right heading. Remove anything we proved wrong today.

Show me the diff of CLAUDE.md before saving. Session focus was: {{session_topic}}.
