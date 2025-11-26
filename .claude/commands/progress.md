---
description: Show AI Mastery learning progress
---

# AI Mastery Progress Report

Read `data/progress.json` and display a visual progress report.

## Instructions

1. Read `data/progress.json`
2. Read `src/data/lessons.json` for unit metadata
3. Display progress in this format:

```
╔══════════════════════════════════════════════════════════════╗
║              AI MASTERY ROADMAP - Progress                   ║
╚══════════════════════════════════════════════════════════════╝

LEVEL 1: PROMPTS                                    [████████░░] 4/5
  ✓ 01-clear-prompts          (completed 2x)
  ✓ 02-multi-step-prompts     (completed 1x)
  ✓ 03-context-first          (completed 1x)
  ✓ 04-precision-requests     (completed 1x)
  ○ 05-core-4-understanding   ← CURRENT

LEVEL 2: COMMANDS                                   [░░░░░░░░░░] 0/7
  ○ 01-understanding
  ○ 02-analysis
  ○ 03-generator
  ○ 04-fix
  ○ 05-workflow
  ○ 06-optimization
  ○ 07-building-toolkit

LEVEL 3: COMPOSITION                                [░░░░░░░░░░] 0/6
  ○ 01-understanding-mcp
  ○ 02-commands-with-mcp
  ○ 03-understanding-agents
  ○ 04-parallel-agents
  ○ 05-composing-commands
  ○ 06-advanced-workflows

LEVEL 4: SKILLS                                     [░░░░░░░░░░] 0/6
  ○ 01-understanding-skills
  ○ 02-first-simple-skill
  ○ 03-adding-resources
  ○ 04-composing-in-skills
  ○ 05-meta-skills
  ○ 06-advanced-patterns

────────────────────────────────────────────────────────────────
OVERALL PROGRESS: 4/24 units (17%)
████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

Time Invested: XX minutes
Last Active: YYYY-MM-DD
────────────────────────────────────────────────────────────────

NEXT UP: /lesson 05-core-4-understanding
         "Master the four prompt patterns"
         Estimated time: 5 min learn + 15 min practice
────────────────────────────────────────────────────────────────
```

## Progress Bar Characters

- Full block: █ (completed)
- Empty block: ░ (not completed)
- Completed unit: ✓
- Not started: ○
- Current: ← CURRENT

## Completion Rules

- A unit is "completed" if `repetitions >= 1`
- Show repetition count for completed units
- Calculate level percentage: (completed / total) * 100
- Overall percentage: (total completed / 24) * 100

## If No Progress Yet

If `data/progress.json` doesn't exist or is empty:

```
╔══════════════════════════════════════════════════════════════╗
║              AI MASTERY ROADMAP - Get Started!               ║
╚══════════════════════════════════════════════════════════════╝

You haven't started learning yet!

The AI Mastery Roadmap is a 24-unit course to master Claude Code.
Each unit takes about 20 minutes (5 min learn + 15 min practice).

RECOMMENDED START: Level 1, Unit 1 - Writing Clear Prompts
This teaches the Action + Target + Details formula that makes
Claude Code significantly more effective.

Start now: /lesson 01-clear-prompts
────────────────────────────────────────────────────────────────
```
