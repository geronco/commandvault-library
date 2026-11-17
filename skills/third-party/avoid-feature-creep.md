# Avoid feature creep (Wayne Sutton)

Keeps a change scoped to what was asked and lists extras as suggestions instead.

- Source: https://github.com/waynesutton/builder-skills
- SKILL.md: https://raw.githubusercontent.com/waynesutton/builder-skills/main/skills/avoid-feature-creep/SKILL.md
- Author: Wayne Sutton
- License: Apache-2.0
- Page: https://commandvault.ai/commands/avoid-feature-creep-wayne-sutton-ee327ad9

Every line of a diff should trace back to the request. The skill lists signs that scope is growing, such as "while we're here" edits, unrequested options, adjacent refactors or extra error handling, and tells Claude to finish the smallest complete change, collect other ideas under a Suggestions heading, and let the user choose. It applies the same rule to PRDs, which get an Out of scope section.

**Try asking:**
- "Just fix the date bug, nothing else"
- "Keep this PRD to the problem statement and move the extras out"
- "Review this diff for changes I didn't ask for"

**Source:** [waynesutton/builder-skills](https://github.com/waynesutton/builder-skills/tree/HEAD/skills/avoid-feature-creep) · Apache-2.0 · by Wayne Sutton
