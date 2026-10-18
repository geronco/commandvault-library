---
title: "Autosave Form Drafts"
description: "Prevent data loss on long forms"
kind: prompt
tags: ["autosave", "forms", "form autosave"]
variables: ["goal", "stack"]
source: https://commandvault.ai/commands/autosave-form-drafts-13cb65f4
license: CC-BY-4.0
---

Autosave drafts so people never lose a long form.

Stack: {{stack}}
Form: {{goal}}

Requirements:
1. Save changed fields locally (IndexedDB, keyed by form and user) a few seconds after typing stops, not on every keystroke.
2. When the person comes back before submitting, offer to restore the draft and show when it was saved.
3. Clear the draft after a successful submit or when they choose "Discard".
4. Never store passwords, card numbers or other sensitive fields; list which fields you excluded.
5. Show a quiet "Saved" indicator, and handle two tabs editing the same form without overwriting each other silently.

List the files you'll change, then give me a test plan: type, reload, close the tab, come back, submit, and the two-tab case.
