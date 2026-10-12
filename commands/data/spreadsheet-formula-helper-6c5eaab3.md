---
title: "Spreadsheet formula helper"
description: "Get the exact Excel / Google Sheets formula with an explanation."
kind: prompt
tags: ["excel", "google-sheets", "formulas"]
variables: ["spreadsheet_app", "data_layout", "goal"]
source: https://commandvault.ai/commands/spreadsheet-formula-helper-6c5eaab3
license: CC-BY-4.0
---

I'm using {{spreadsheet_app}}. My data: {{data_layout}}

I want to: {{goal}}

Give me:
1. The formula, ready to paste, with cell references matching my layout.
2. A plain explanation of each part.
3. A version that handles blanks and errors gracefully.
4. If there's a simpler approach (pivot table, filter view, QUERY), mention it.
