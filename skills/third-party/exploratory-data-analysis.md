# Exploratory data analysis (K-Dense)

Careful, local exploratory analysis of data files with leakage, missingness and outlier checks.

- Source: https://github.com/K-Dense-AI/claude-scientific-skills
- SKILL.md: https://raw.githubusercontent.com/K-Dense-AI/claude-scientific-skills/main/skills/exploratory-data-analysis/SKILL.md
- Author: K-Dense AI
- License: MIT
- Page: https://commandvault.ai/commands/exploratory-data-analysis-k-dense-fe96970e

Gives Claude a rigorous EDA routine for supported files such as CSV, TSV and JSON, with optional NumPy, HDF5, FASTA/FASTQ and image metadata. It profiles data, audits missing values and possible leakage, tests sensitivity to outliers and transformations, and scaffolds a written EDA report. Bundled command-line tools run locally without network access; unknown formats are refused rather than guessed. Requires Python 3.11+ (3.12+ and uv for the full optional set).

**Try asking:**
- "Do an EDA on experiment_results.csv and flag any leakage"
- "Profile this dataset and write up what you find"
- "Check this data for missingness and outliers before modeling"

**Source:** [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills/tree/HEAD/skills/exploratory-data-analysis) · MIT · by K-Dense AI
