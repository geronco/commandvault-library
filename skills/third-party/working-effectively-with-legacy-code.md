# Legacy code rules (Maciej Ciemborowicz)

Rules inspired by Michael Feathers for changing hard-to-test code safely.

- Source: https://github.com/ciembor/agent-rules-books
- SKILL.md: https://raw.githubusercontent.com/ciembor/agent-rules-books/main/working-effectively-with-legacy-code/SKILL.md
- Author: Maciej Ciemborowicz
- License: MIT
- Page: https://commandvault.ai/commands/legacy-code-rules-maciej-ciemborowicz-804a3d1b

Claude follows a condensed rule set inspired by Working Effectively with Legacy Code: state what must keep working, add characterization tests, find or create a seam, break only the dependency that blocks testing, then change behavior and refactor in separate steps. It covers sprout and wrap techniques and review rules for risky edits. A longer reference version is included.

**Try asking:**
- "Add a feature to this untested class without breaking it"
- "Write characterization tests for this legacy function before we change it"
- "Find a seam so we can test this code that calls the database directly"

**Source:** [ciembor/agent-rules-books](https://github.com/ciembor/agent-rules-books/tree/HEAD/working-effectively-with-legacy-code) · MIT · by Maciej Ciemborowicz
