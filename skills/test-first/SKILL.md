---
name: test-first
description: Implement behaviour changes test-first. Use when adding a feature or fixing a bug in code that has a test suite.
---

# Test-first changes

1. Find how the project runs tests (package.json scripts, Makefile, CLAUDE.md/AGENTS.md). Run the relevant file once to see the baseline.
2. Write the smallest test that describes the new behaviour or the bug. Run it and confirm it **fails for the right reason**.
3. Write the simplest code that makes it pass. Run the test again.
4. Refactor only while tests stay green.
5. Run the wider suite for the area you touched.

Rules: test behaviour through public interfaces, not private details. No sleeping or real network calls in unit tests. Never delete or skip a failing test to get green; explain it instead.
