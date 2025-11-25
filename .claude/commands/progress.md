---
description: Show AI Mastery learning progress
---

# AI Mastery Progress

Read `data/progress.json` and display a comprehensive progress report.

## Display Format

```
AI MASTERY ROADMAP - Progress Report
=====================================

Level 1: Prompts        [####------] X/5 (XX%)
Level 2: Commands       [##--------] X/7 (XX%)
Level 3: Composition    [----------] X/6 (XX%)
Level 4: Skills         [----------] X/6 (XX%)

Overall: X/24 units (XX%)

STATISTICS:
- Total Time Invested: X minutes
- Last Active: YYYY-MM-DD
- Current Unit: [unit name]

RECENT COMPLETIONS:
[List recently completed units with dates]

NEXT RECOMMENDED:
[Suggest the next unit to work on]
```

## Instructions

1. Read `data/progress.json`
2. Read `src/data/lessons.json` for unit metadata
3. Calculate completion percentages for each level
4. Show visual progress bars using ASCII characters
5. Recommend the next uncompleted unit
