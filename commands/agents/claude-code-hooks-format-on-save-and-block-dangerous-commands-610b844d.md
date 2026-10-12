---
title: "Claude Code hooks: format on save and block dangerous commands"
description: "A .claude/settings.json with hooks that auto-format edited files and stop risky shell commands."
kind: template
tags: ["claude-code", "hooks", "automation", "guardrails"]
variables: ["formatter_command", "extra_blocked_pattern"]
source: https://commandvault.ai/commands/claude-code-hooks-format-on-save-and-block-dangerous-commands-610b844d
license: CC-BY-4.0
---

Add this to `.claude/settings.json` in your project:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs {{formatter_command}}" }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": ".claude/hooks/block-dangerous.sh" }
        ]
      }
    ]
  }
}
```

And create `.claude/hooks/block-dangerous.sh` (make it executable):

```bash
#!/usr/bin/env bash
cmd=$(jq -r '.tool_input.command')
if echo "$cmd" | grep -Eq 'rm -rf /|git push --force|DROP TABLE|{{extra_blocked_pattern}}'; then
  echo "Blocked by project hook: $cmd" >&2
  exit 2   # exit code 2 blocks the tool call and shows the message to Claude
fi
```

Replace `{{formatter_command}}` with e.g. `npx prettier --write` or `ruff format`. Test it by asking Claude to edit a file and check it was formatted.
