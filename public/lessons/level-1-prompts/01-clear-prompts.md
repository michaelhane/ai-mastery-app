# Unit 1.01: Writing Clear Prompts

**Level:** 1 - Prompt Foundations
**Time:** 20 minutes
**Prerequisite:** None (Start here!)

---

## What You'll Learn

How to write specific, actionable prompts that Claude executes perfectly the first time.

**Why This Matters:**
- Clear prompts = No wasted time on clarifications
- Get exactly what you want, faster
- Foundation for everything else in Claude Code

---

## Learn (5 minutes)

### The Problem
❌ Vague prompts lead to:
- Clarification questions
- Wrong results
- Multiple iterations
- Wasted time

❌ Bad examples:
- "Show dependencies"
- "Find TODOs"
- "Check the code"

### The Solution
✅ Clear prompts have 3 parts:

```
[Action] + [Target] + [Details]
```

**Action:** What to do (Read, Search, Find, List, Check)
**Target:** What to work with (specific file, directory, pattern)
**Details:** How to do it, what format, what to include

✅ Good examples:
- "**Read** package.json and **list** all dependencies in a **table**"
- "**Search** for TODO comments in src/ and **create** a **numbered list** with file path and line number"
- "**Check** all .ts files for functions longer than 50 lines and **report** file name, function name, and line count"

### The Formula

```markdown
[Verb] [target] and [output format]

Examples:
- Read [file] and list [what]
- Search [location] for [pattern] and create [format]
- Find [things] and report [details]
```

---

## Practice (15 minutes)

### Exercise 1: Rewrite Vague Prompts (5 min)

Rewrite these vague prompts to be clear:

1. **Vague:** "Show dependencies"
   **Clear:** _[Write your answer]_

2. **Vague:** "Find bugs"
   **Clear:** _[Write your answer]_

3. **Vague:** "Check tests"
   **Clear:** _[Write your answer]_

4. **Vague:** "List functions"
   **Clear:** _[Write your answer]_

5. **Vague:** "Review code"
   **Clear:** _[Write your answer]_

### Exercise 2: Write Clear Prompts (10 min)

Write clear prompts for these tasks:

1. **Task:** Find all TypeScript files in src/components
   **Your prompt:** _[Write here]_

2. **Task:** List functions longer than 50 lines
   **Your prompt:** _[Write here]_

3. **Task:** Search for a variable named "userId"
   **Your prompt:** _[Write here]_

4. **Task:** Check for missing error handling
   **Your prompt:** _[Write here]_

5. **Task:** Find files that import React
   **Your prompt:** _[Write here]_

### Exercise 3: Test Your Prompts (5 min)

Pick 2 prompts you wrote above and actually run them in Claude Code:

1. **Prompt tested:**
   - **Result:** [What happened?]
   - **Success?** Yes / No
   - **What to improve:**

2. **Prompt tested:**
   - **Result:** [What happened?]
   - **Success?** Yes / No
   - **What to improve:**

---

## Repeat Instructions

Complete this unit **3 times** with different projects/codebases:

**Run 1:** Practice on your current project
**Run 2:** Practice on a different project
**Run 3:** Practice on an open-source project

Each time:
1. Do all 3 exercises
2. Test at least 2 prompts
3. Note what improved
4. Update your completion count

---

## Success Checklist

Before moving to the next unit, verify:

- [ ] I can write prompts with Action + Target + Details
- [ ] My prompts execute without clarification questions
- [ ] Results match what I expected
- [ ] I completed this unit 3 times
- [ ] I tested prompts on real codebases

---

## Time Saved

**Per clear prompt:** 2-5 minutes (no clarifications, correct first time)
**Daily usage:** 10-20 prompts
**Time saved per day:** 20-100 minutes

---

## Personal Notes

Use this space to track your learning:

**Completion 1:** [Date]
- What worked:
- What was hard:
- Time saved:

**Completion 2:** [Date]
- What worked:
- What was hard:
- Time saved:

**Completion 3:** [Date]
- What worked:
- What was hard:
- Time saved:

---

## Next Steps

Once you've mastered this unit:

**Next Unit:** [02 - Multi-Step Prompts](02-multi-step-prompts.md)
**Update:** Mark completion in [progress-tracker.md](../progress-tracker.md)

---

**Remember:** Clear prompts are your superpower. Master this, master everything.
