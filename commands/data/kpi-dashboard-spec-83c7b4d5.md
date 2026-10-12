---
title: "KPI dashboard spec"
description: "Define metrics precisely before anyone builds a chart."
kind: template
tags: ["dashboards", "metrics", "kpi"]
variables: ["team", "decisions"]
source: https://commandvault.ai/commands/kpi-dashboard-spec-83c7b4d5
license: CC-BY-4.0
---

Write a dashboard spec for {{team}} who need to answer: {{decisions}}.

For each metric (aim for 5–8):
- Name and one-sentence definition.
- Exact formula and data source.
- Grain (daily/weekly), filters and segments.
- Target or healthy range.
- Chart type and why.

Also include: metrics we deliberately left out and why, and a note on how often data refreshes.
