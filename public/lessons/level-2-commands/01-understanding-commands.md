# Unit 2.01: Understanding Slash Commands

**Level:** 2 - Slash Command Mastery
**Time:** 20 minutes
**Prerequisite:** Level 1 Complete

---

## What You'll Learn

What slash commands are, how they work, and why they're the primitive of AI coding.

**Why This Matters:**
- Reusable prompts save massive time
- Build your personal toolkit
- THE PRIMITIVE - everything builds on this
- Type `/command` instead of retyping long prompts

---

## Learn (5 minutes)

### What Are Slash Commands?

**Slash commands = Saved prompts as files**

**Location:** `.claude/commands/command-name.md`

**Usage:** Type `/command-name` to execute

### Structure

```markdown
# Command Title

Brief description.

Detailed instructions for Claude...
```

### Why They Matter

**Before slash commands:**
```
Every time: Type long, detailed prompt
Result: Wasted time, inconsistent quality
```

**With slash commands:**
```
Once: Create detailed prompt in file
Forever: Type /command-name
Result: Consistent, fast, reusable
```

### The Truth

> "Prompts are the fundamental unit of knowledge work.
> Slash commands are how you save and reuse them."

Everything else (skills, sub agents, MCP) builds on slash commands.

---

## Practice (15 minutes)

### Exercise 1: Create Your First Command (10 min)

**Create:** `.claude/commands/explore.md`

```markdown
# Explore Codebase

Help me understand a file or directory.

1. Ask what file/directory to explore if not specified
2. Read the target
3. Provide:
   - Purpose and responsibilities
   - Key functions/exports
   - Dependencies (what it imports)
   - Dependents (what imports it)
4. Summarize in 3-5 bullet points

Be concise but thorough.
```

**Test it:**
1. Save the file
2. In Claude Code, type: `/explore`
3. When prompted, give it a file: `src/components/Button.tsx`
4. Verify it works

**Test again on 3 different files:**
- File 1: _____
- File 2: _____
- File 3: _____

### Exercise 2: Analyze Your Command (5 min)

**Questions:**
1. How much time did `/explore` save vs typing the full prompt?
   - Time saved: _____ minutes

2. Will you use this command again?
   - Yes / No

3. What would make it better?
   - Improvement idea:

---

## Repeat Instructions

Complete **3 times** with different commands:

**Run 1:** Create `/explore` (exploration)
**Run 2:** Create `/summarize` (summarization)
**Run 3:** Create your own idea

---

## Success Checklist

- [ ] Created command in correct location (`.claude/commands/`)
- [ ] Can execute with `/command-name`
- [ ] Works consistently across different targets
- [ ] Saves time vs retyping prompts
- [ ] Completed 3 times

---

## Time Saved

**Per command use:** 2-3 minutes
**After creating 10 commands:** 20-30 minutes per day
**After creating 20 commands:** 1-2 hours per day

---

## Personal Notes

**Completion 1:** [Date]
- Command created:
- Times used already:
- Time saved:

**Completion 2:** [Date]
- Command created:
- Times used already:
- Time saved:

**Completion 3:** [Date]
- Command created:
- Times used already:
- Time saved:

---

## Next Steps

**Previous:** [Level 1 Complete](../level-1-prompts/05-core-4-understanding.md)
**Next:** [02 - Analysis Commands](02-analysis-commands.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
