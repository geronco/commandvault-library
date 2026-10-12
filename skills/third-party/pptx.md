# PowerPoint decks (Anthropic)

Build, edit and QA PowerPoint presentations, from pitch decks to template updates.

- Source: https://github.com/anthropics/skills
- SKILL.md: https://raw.githubusercontent.com/anthropics/skills/main/skills/pptx/SKILL.md
- Author: Anthropic
- License: source-available
- Page: https://commandvault.ai/commands/powerpoint-decks-anthropic-7b1328a8

Covers everything involving .pptx or .potx files: generating new decks, reading text out of existing ones, editing slides and templates, and handling speaker notes and comments. New decks are created with the pptxgenjs library, while existing decks are edited at the XML level so layouts are preserved. It includes design guidance and a mandatory visual QA step where slides are rendered to images and checked. Requires Node.js packages (pptxgenjs, optionally react-icons and sharp) and LibreOffice for rendering. Source-available under Anthropic's proprietary terms.

**Try asking:**
- "Make a 10-slide pitch deck from this one-page business plan"
- "Update the numbers on slides 4 and 7 of q3-review.pptx"
- "Extract all speaker notes from this deck into a document"

**Source:** [anthropics/skills](https://github.com/anthropics/skills/tree/HEAD/skills/pptx) · source-available · by Anthropic
