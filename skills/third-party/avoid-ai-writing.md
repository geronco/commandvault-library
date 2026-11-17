# Remove AI writing tells (Seth Hobson)

Audits and rewrites prose so it stops reading as machine-generated, without inventing a new voice.

- Source: https://github.com/wshobson/agents
- SKILL.md: https://raw.githubusercontent.com/wshobson/agents/main/plugins/avoid-ai-writing/skills/avoid-ai-writing/SKILL.md
- Author: Seth Hobson
- License: MIT
- Page: https://commandvault.ai/commands/remove-ai-writing-tells-seth-hobson-d2e1d3a5

Scans text for patterns common in model output, using a pattern catalog and tiered word lists, and weighs sentence and paragraph rhythm most heavily. It has three modes: rewrite (default), detect-only, and edit-in-place for prose files, with optional voice and context profiles such as docs, blog or investor email. It forbids adding things the source lacked, like a fake first person or made-up specifics, and states that its flags are writing-quality signals, not proof of authorship.

**Try asking:**
- "Clean up the AI tells in this README without changing its meaning"
- "Just flag the machine-sounding parts of this blog draft; don't rewrite it"
- "Edit CHANGELOG.md in place to remove filler and inflated wording"

**Source:** [wshobson/agents](https://github.com/wshobson/agents/tree/HEAD/plugins/avoid-ai-writing/skills/avoid-ai-writing) · MIT · by Seth Hobson
