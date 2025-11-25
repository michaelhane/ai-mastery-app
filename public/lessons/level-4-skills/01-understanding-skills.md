# Unit 4.01: Understanding Skills

**Level:** 4 - Autonomous Skills
**Time:** 20 minutes
**Prerequisite:** Level 3 Complete

---

## What You'll Learn

What skills are, when to build them, and how they differ from slash commands.

**Why This Matters:**
- Automatic vs manual triggering
- Domain management vs single tasks
- Highest level of automation
- Get your time back permanently

---

## Learn (5 minutes)

### Skills vs Slash Commands

| Feature | Slash Commands | Skills |
|---------|----------------|--------|
| Trigger | Manual (`/command`) | Automatic (agent decides) |
| Scope | Single task | Domain management |
| Usage | One-off operations | Recurring workflows |

### When to Build a Skill

Ask yourself 3 questions:
1. Do I have 3+ related slash commands?
2. Do I want this automatic (not manual)?
3. Am I managing a domain (not just one task)?

**If yes to all 3 → Build a skill**

### Skill Structure

```
.claude/skills/skill-name/
├── skill.md              (main instructions)
├── resources/            (examples, templates)
└── scripts/              (helper scripts)
```

---

## Practice (15 minutes)

### Exercise 1: Identify Skill Opportunities (10 min)

Review your slash commands. Look for patterns:

**Related commands group 1:**
- Command: _____
- Command: _____
- Command: _____
- Domain: _____
- Should be skill? Yes / No

**Related commands group 2:**
- Command: _____
- Command: _____
- Command: _____
- Domain: _____
- Should be skill? Yes / No

**Related commands group 3:**
- Command: _____
- Command: _____
- Command: _____
- Domain: _____
- Should be skill? Yes / No

### Exercise 2: Skill vs Command Decision (5 min)

For each scenario, decide: Skill or Command?

1. **Creating git commits** → Skill / Command
   Why:

2. **One-time database migration** → Skill / Command
   Why:

3. **Managing API endpoints (create, test, document)** → Skill / Command
   Why:

4. **Generating a component** → Skill / Command
   Why:

5. **Code quality enforcement (many checks)** → Skill / Command
   Why:

---

## Repeat Instructions

Complete **3 times** analyzing different domains:

**Run 1:** Analyze your most-used commands
**Run 2:** Analyze your workflow commands
**Run 3:** Analyze your team's common tasks

---

## Success Checklist

- [ ] Understand when skills are appropriate
- [ ] Can distinguish domain vs task
- [ ] Know skill file structure
- [ ] Identified 3 skill opportunities
- [ ] Completed 3 times

---

## Preparation

This unit prepares you to build skills. No time saved yet, but sets foundation for 15-25 hours/week savings.

---

## Personal Notes

**Completion 1:** [Date]
- Skill opportunities found:
- Best candidate:

**Completion 2:** [Date]
- Skill opportunities found:
- Best candidate:

**Completion 3:** [Date]
- Skill opportunities found:
- Best candidate:

---

## Next Steps

**Previous:** [Level 3 Complete](../level-3-composition/06-advanced-workflows.md)
**Next:** [02 - First Simple Skill](02-first-simple-skill.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
