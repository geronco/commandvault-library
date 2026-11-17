# Slack message formatter (Karan Bansal)

Writes Slack messages in Markdown and converts them to paste-safe HTML or Slack mrkdwn.

- Source: https://github.com/karanb192/slack-message-formatter
- SKILL.md: https://raw.githubusercontent.com/karanb192/slack-message-formatter/main/skills/slack-message-formatter/SKILL.md
- Author: Karan Bansal
- License: MIT
- Page: https://commandvault.ai/commands/slack-message-formatter-karan-bansal-fc7e39b2

Claude drafts the message in standard Markdown, checks that it will read clearly to someone without context, then converts it with a bundled Node.js script. One output is rich HTML that keeps formatting when pasted into Slack; the other is mrkdwn for bots and webhooks. Tables, task lists and headings are converted to forms Slack can show, and user mentions work only on the webhook path. Requires Node.js 20 or newer.

**Try asking:**
- "Write a Slack announcement for the new deploy process"
- "Turn this incident summary into a thread reply I can paste into Slack"
- "Format this release note as mrkdwn for our webhook"

**Source:** [karanb192/slack-message-formatter](https://github.com/karanb192/slack-message-formatter/tree/HEAD/skills/slack-message-formatter) · MIT · by Karan Bansal
