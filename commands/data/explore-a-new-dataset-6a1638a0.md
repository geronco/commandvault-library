---
title: "Explore a new dataset"
description: "A first-hour analysis plan for any CSV or table."
kind: workflow
tags: ["analysis", "pandas", "eda"]
variables: ["dataset_description", "rows", "goal"]
source: https://commandvault.ai/commands/explore-a-new-dataset-6a1638a0
license: CC-BY-4.0
---

I have a dataset: {{dataset_description}} ({{rows}} rows). My goal: {{goal}}.

Walk me through a first-pass exploration in Python (pandas):
1. Load and show shape, dtypes and a sample.
2. Missing values, duplicates and obviously wrong values per column.
3. Distributions for key numeric columns and top values for categoricals.
4. Three relationships most relevant to my goal, with a chart each.
5. Data-quality issues to fix before deeper analysis.

Give runnable code cells and tell me what to look for in each output.
