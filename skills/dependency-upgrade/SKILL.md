---
name: dependency-upgrade
description: Upgrade project dependencies safely. Use when the user asks to update packages, fix outdated or vulnerable dependencies, or bump a framework version.
---

# Safe dependency upgrades

1. List what's outdated (npm outdated, pip list --outdated, etc.) and what's vulnerable (npm audit, pip-audit). Show the list before changing anything.
2. Patch and minor versions can go together. Do **major versions one package at a time**.
3. For each major upgrade, read the changelog or migration guide first and list the breaking changes that affect this code (search for the APIs mentioned).
4. Upgrade, apply the needed code changes, then run lint, types, tests and a build.
5. Commit each major upgrade separately so it can be reverted alone.

Never edit lockfiles by hand. Never use --force or legacy-peer-deps to hide a conflict without explaining it. Stop and ask if an upgrade needs a runtime (Node/Python) change.
