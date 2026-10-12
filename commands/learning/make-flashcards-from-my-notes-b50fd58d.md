---
title: "Make flashcards from my notes"
description: "Turn notes into spaced-repetition cards that test understanding."
kind: template
tags: ["flashcards", "anki", "studying"]
variables: ["notes"]
source: https://commandvault.ai/commands/make-flashcards-from-my-notes-b50fd58d
license: CC-BY-4.0
---

Turn these notes into flashcards:

{{notes}}

Rules:
- One fact or idea per card.
- Questions test understanding, not just recall ("Why does X happen?" over "What is X?").
- Include a few cards that compare or contrast concepts.
- Answers under 25 words.

Output as a two-column CSV (front,back) ready to import into Anki.
