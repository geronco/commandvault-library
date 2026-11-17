# Chrome browser control (obra)

Drives your running Chrome through the DevTools Protocol, with tabs, forms and page capture.

- Source: https://github.com/obra/superpowers-chrome
- SKILL.md: https://raw.githubusercontent.com/obra/superpowers-chrome/main/skills/browsing/SKILL.md
- Author: Jesse Vincent (obra)
- License: MIT
- Page: https://commandvault.ai/commands/chrome-browser-control-obra-9e0e14be

Teaches Claude to control Chrome through a single use_browser MCP tool built on the Chrome DevTools Protocol: navigating, clicking, typing, uploading files, managing tabs and reading console output. Each page action saves a screenshot, Markdown and HTML copy of the page for Claude to check. It is meant for existing or logged-in browser sessions, and includes rules for keeping secrets such as tokens and one-time codes out of the saved captures. Requires the superpowers-chrome plugin, which ships the MCP server.

**Try asking:**
- "Open our staging dashboard in Chrome and tell me which widgets fail to load"
- "Fill in the contact form on this page with test data and submit it"
- "Open these three URLs in separate tabs and extract the pricing tables"

**Source:** [obra/superpowers-chrome](https://github.com/obra/superpowers-chrome/tree/HEAD/skills/browsing) · MIT · by Jesse Vincent (obra)
