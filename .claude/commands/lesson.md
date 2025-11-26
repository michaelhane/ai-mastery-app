---
description: View lesson content from AI Mastery Roadmap
argument-hint: [unit-id or list]
---

# AI Mastery Lesson: $ARGUMENTS

You are a Claude Code instructor helping the user learn Claude Code skills.

## Instructions

**If `$ARGUMENTS` is "list" or empty:**
Show the course overview:

```
╔══════════════════════════════════════════════════════════════╗
║                   AI MASTERY ROADMAP                        ║
║              24 units to master Claude Code                  ║
╚══════════════════════════════════════════════════════════════╝

LEVEL 1: PROMPTS (Save 2-4 hrs/week)
  01-clear-prompts        - Action + Target + Details formula
  02-multi-step-prompts   - Breaking complex tasks into steps
  03-context-first        - Context before questions
  04-precision-requests   - Specific formats and constraints
  05-core-4-understanding - Master the four prompt patterns

LEVEL 2: COMMANDS (Save 4-6 hrs/week)
  01-understanding        - How slash commands work
  02-analysis             - Commands that examine code
  03-generator            - Commands that create code
  04-fix                  - Commands that repair issues
  05-workflow             - Multi-step command chains
  06-optimization         - Making commands efficient
  07-building-toolkit     - Creating your command library

LEVEL 3: COMPOSITION (Save 6-10 hrs/week)
  01-understanding-mcp    - Model Context Protocol basics
  02-commands-with-mcp    - Combining commands and MCP
  03-understanding-agents - How sub-agents work
  04-parallel-agents      - Running agents in parallel
  05-composing-commands   - Building command pipelines
  06-advanced-workflows   - Complex automation

LEVEL 4: SKILLS (Save 15-25 hrs/week)
  01-understanding-skills - What skills can do
  02-first-simple-skill   - Build your first skill
  03-adding-resources     - Skills with resources
  04-composing-in-skills  - Combining techniques
  05-meta-skills          - Skills that create skills
  06-advanced-patterns    - Expert-level patterns

Use: /lesson 01-clear-prompts  (to start a specific lesson)
Use: /practice                  (to practice current lesson)
Use: /progress                  (to see your progress)
```

**If `$ARGUMENTS` is a unit ID:**

1. Read the lesson from `public/lessons/` directory:
   - Level 1: `public/lessons/level-1-prompts/[unit].md`
   - Level 2: `public/lessons/level-2-commands/[unit].md`
   - Level 3: `public/lessons/level-3-composition/[unit].md`
   - Level 4: `public/lessons/level-4-skills/[unit].md`

2. Display in this format:
```
╔══════════════════════════════════════════════════════════════╗
║  LESSON: [Title]                                             ║
║  Level [X] • Unit [Y] • Learn: Xmin • Practice: Xmin        ║
╚══════════════════════════════════════════════════════════════╝

## LEARN

[Display the Learn section content with good formatting]
- Use bullet points
- Highlight key concepts with **bold**
- Show code examples in code blocks

## KEY TAKEAWAYS

[Summarize 3-5 key points from the lesson]

────────────────────────────────────────────────────────────────
Ready to practice? Use: /practice $ARGUMENTS
────────────────────────────────────────────────────────────────
```

3. Update `data/progress.json` to set currentUnit to this lesson

## Unit Mapping

- Units starting with "01" through "05" in Level 1
- Units starting with "01" through "07" in Level 2
- Units starting with "01" through "06" in Level 3
- Units starting with "01" through "06" in Level 4

Detect level from unit number pattern or check all directories.
