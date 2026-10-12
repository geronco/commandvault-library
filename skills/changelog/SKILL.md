---
name: changelog
description: Write release notes or a CHANGELOG entry from git history. Use when the user asks for a changelog, release notes or "what changed since".
---

# Changelog

1. Find the range: the latest tag (`git describe --tags --abbrev=0`) to HEAD, unless the user gives one.
2. Read `git log --no-merges --format='%s%n%b' <range>`.
3. Group into **Added, Changed, Fixed, Removed, Security**. Drop internal noise (refactors, CI, typo fixes) unless users would notice.
4. Write each line for users: what they can now do or what no longer goes wrong. Link PR/issue numbers when present.
5. Put breaking changes first with migration steps.

Match the existing CHANGELOG.md format if there is one (Keep a Changelog by default).
