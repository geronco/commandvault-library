---
title: "Write release notes users care about"
description: "Turn a changelog or commit list into readable release notes."
kind: prompt
tags: ["release-notes", "changelog", "product"]
variables: ["audience", "changes"]
source: https://commandvault.ai/commands/write-release-notes-users-care-about-deb42144
license: CC-BY-4.0
---

Turn these changes into release notes for {{audience}}:

{{changes}}

- Group as New, Improved, Fixed.
- Write each item as a user benefit, not an implementation detail.
- Skip internal-only changes.
- Lead with the most valuable change and give it one extra sentence.
- Friendly, specific, no hype.
