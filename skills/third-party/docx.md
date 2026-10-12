# Word documents (Anthropic)

Create and edit Word .docx files with real formatting, tracked changes and comments.

- Source: https://github.com/anthropics/skills
- SKILL.md: https://raw.githubusercontent.com/anthropics/skills/main/skills/docx/SKILL.md
- Author: Anthropic
- License: source-available
- Page: https://commandvault.ai/commands/word-documents-anthropic-124b8bcd

Gives Claude a reliable way to produce and modify Microsoft Word documents, including headings, tables of contents, page numbers, letterheads and images. New documents are built with the docx JavaScript library; existing files are unpacked and their XML edited directly so formatting survives. It supports redlining with tracked changes and adding comments, and ships helper scripts for packing, unpacking and validating files. Expect to need Node.js (docx package) and usually LibreOffice/pandoc for conversion and checks. Source-available under Anthropic's proprietary terms rather than an open-source license.

**Try asking:**
- "Turn these meeting notes into a formatted Word memo with a table of contents"
- "Redline this contract.docx with tracked changes changing the term to 24 months"
- "Replace the logo in every header of template.docx"

**Source:** [anthropics/skills](https://github.com/anthropics/skills/tree/HEAD/skills/docx) · source-available · by Anthropic
