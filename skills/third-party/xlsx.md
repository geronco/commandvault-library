# Excel spreadsheets (Anthropic)

Create, clean and analyze Excel and CSV files with working formulas and formatting.

- Source: https://github.com/anthropics/skills
- SKILL.md: https://raw.githubusercontent.com/anthropics/skills/main/skills/xlsx/SKILL.md
- Author: Anthropic
- License: source-available
- Page: https://commandvault.ai/commands/excel-spreadsheets-anthropic-7448d591

Used whenever a spreadsheet is the main input or output: opening and fixing .xlsx/.csv/.tsv files, adding formulas and charts, cleaning messy data, or building financial models. It insists on live formulas instead of hard-coded numbers and requires a recalculation step that checks every formula for errors before handing the file back. It also explains openpyxl pitfalls and conventions for financial models. Requires Python with openpyxl and pandas, plus LibreOffice for the recalculation script. Source-available under Anthropic's proprietary terms.

**Try asking:**
- "Clean up sales.csv and build a pivot-style summary sheet with formulas"
- "Build a 3-year revenue model in Excel with editable assumptions"
- "Find and fix the #REF errors in budget.xlsx"

**Source:** [anthropics/skills](https://github.com/anthropics/skills/tree/HEAD/skills/xlsx) · source-available · by Anthropic
