---
title: "Claude Code hooks: format on save and block dangerous commands"
description: "A .claude/settings.json with hooks that auto-format edited files and stop risky shell commands."
kind: template
tags: ["claude-code", "hooks", "automation", "guardrails"]
variables: ["formatter_command", "extra_blocked_pattern"]
source: https://commandvault.ai/commands/claude-code-hooks-format-on-save-and-block-dangerous-commands-610b844d
license: CC-BY-4.0
---

Add this to `.claude/settings.json` in your project (merge it with any settings you already have):

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "f=$(jq -r '.tool_input.file_path // empty'); [ -n \"$f\" ] && {{formatter_command}} \"$f\" || true" }
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

And create `.claude/hooks/block-dangerous.sh`, then run `chmod +x .claude/hooks/block-dangerous.sh`:

```bash
#!/usr/bin/env bash
# Stops risky shell commands before Claude Code runs them. Needs jq.
cmd=$(jq -r '.tool_input.command // empty')
block() { echo "Blocked by project hook ($1): $cmd" >&2; exit 2; }   # exit 2 = block and tell Claude why

# Recursive delete of the root, your home folder, or the whole current folder (any flag order).
if echo "$cmd" | grep -Eq '(^|[;&|[:space:]])rm[[:space:]]([^;&|]*[[:space:]])?(-[a-zA-Z]*[rR][a-zA-Z]*|--recursive)([[:space:]]|$)' &&
   echo "$cmd" | grep -Eq '(^|[;&|[:space:]])rm[[:space:]][^;&|]*[[:space:]](/|/\*|~|~/|\$HOME|\$HOME/|\.|\./|\.\.|\*)([[:space:];&|]|$)'; then
  block "recursive delete of /, ~ or ."
fi

# Force pushes: -f, --force, --force-with-lease, or a +branch refspec.
if echo "$cmd" | grep -Eq 'git[[:space:]]+push([[:space:]]|$)' &&
   echo "$cmd" | grep -Eq '[[:space:]](-[a-zA-Z]*f[a-zA-Z]*|--force|--force-with-lease(=[^[:space:]]*)?|--force-if-includes)([[:space:]]|$)|[[:space:]]\+[^[:space:]]+'; then
  block "force push"
fi

# Destructive SQL.
if echo "$cmd" | grep -Eiq 'drop[[:space:]]+(table|database|schema)|truncate[[:space:]]+(table[[:space:]]+)?[a-z_"`]'; then
  block "destructive SQL"
fi

# Your own extra rule (an extended regex). Leave it empty to skip.
EXTRA='{{extra_blocked_pattern}}'
if [ -n "$EXTRA" ] && echo "$cmd" | grep -Eq "$EXTRA"; then
  block "project rule"
fi
exit 0
```

**Needs:** `jq` (`brew install jq` or `apt install jq`) and your formatter installed in the project (for example `npm i -D prettier`), not just available through npx.

**What it blocks:** recursive deletes of `/`, `~` or the whole current folder in any flag order (`rm -rf`, `rm -fr`, `rm -r -f`), force pushes (`-f`, `--force`, `--force-with-lease`, `+branch`), `DROP TABLE/DATABASE/SCHEMA` and `TRUNCATE`, plus your extra pattern. Normal cleanups like `rm -rf node_modules` or `rm -rf /tmp/cache` still run.

**Check it:** run `/hooks` to see both hooks loaded, ask Claude to edit a file and confirm it was formatted, then ask it to run `psql -c "DROP TABLE x"` and confirm it's blocked.
