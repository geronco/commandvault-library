# PDF toolkit (Anthropic)

Read, create, merge, split, fill and OCR PDF files from inside Claude.

- Source: https://github.com/anthropics/skills
- SKILL.md: https://raw.githubusercontent.com/anthropics/skills/main/skills/pdf/SKILL.md
- Author: Anthropic
- License: source-available
- Page: https://commandvault.ai/commands/pdf-toolkit-anthropic-66111aa9

Teaches Claude a full PDF workflow: pulling text and tables out of PDFs, merging and splitting files, rotating pages, watermarking, encrypting, and generating new PDFs from scratch. It triggers whenever a .pdf file is mentioned or requested. A separate forms guide and helper scripts cover filling both fillable and non-fillable PDF forms. It relies on Python libraries such as pypdf, pdfplumber and reportlab, plus optional OCR tooling (pytesseract, pdf2image) for scanned documents. This is one of the skills behind Claude's own file features and is source-available, not open source: you may use it, but not redistribute or modify it.

**Try asking:**
- "Merge these three PDFs into one and add page numbers"
- "Pull every table out of report.pdf into a CSV"
- "Fill in this W-9 PDF form with my company details"

**Source:** [anthropics/skills](https://github.com/anthropics/skills/tree/HEAD/skills/pdf) · source-available · by Anthropic
