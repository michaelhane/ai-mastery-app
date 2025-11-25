# Unit 1.02: Multi-Step Prompts

**Level:** 1 - Prompt Foundations
**Time:** 20 minutes
**Prerequisite:** Unit 1.01 - Clear Prompts

---

## What You'll Learn

How to structure complex tasks with multiple steps so Claude executes them in order.

**Why This Matters:**
- Complex tasks need structure
- Steps execute in correct order
- Easy to verify each step
- Simple to debug if something fails

---

## Learn (5 minutes)

### The Problem
Complex tasks fail when given as one vague instruction:
❌ "Understand the authentication system and improve it"
❌ "Check the code and fix issues"

### The Solution
Break into numbered steps:

```markdown
1. First, do X
2. Then, do Y
3. Finally, do Z
```

### Example

**Bad:**
```
Check authentication for problems
```

**Good:**
```
1. Read the authentication files in src/auth/
2. Find all places where auth is used
3. Check for security issues (missing validation, weak tokens)
4. Create a report with findings and line numbers
```

### Why Numbered Steps Work
- Claude follows them in order
- You can verify each step
- Easy to see where it failed
- Can modify just one step

---

## Practice (15 minutes)

### Exercise 1: Structure Complex Tasks (10 min)

Convert these into multi-step prompts:

1. **Task:** "Understand how the User model works"

   **Your multi-step prompt:**
   ```
   1. [Your step]
   2. [Your step]
   3. [Your step]
   4. [Your step]
   ```

2. **Task:** "Find and fix import issues"

   **Your multi-step prompt:**
   ```
   1. [Your step]
   2. [Your step]
   3. [Your step]
   4. [Your step]
   ```

3. **Task:** "Check test coverage"

   **Your multi-step prompt:**
   ```
   1. [Your step]
   2. [Your step]
   3. [Your step]
   ```

### Exercise 2: Test Real Multi-Step Prompts (5 min)

Run one of your prompts above and track execution:

**Prompt used:** [Which one?]

**Step 1 result:**
- Executed correctly? Yes / No
- Notes:

**Step 2 result:**
- Executed correctly? Yes / No
- Notes:

**Step 3 result:**
- Executed correctly? Yes / No
- Notes:

**Overall:** Did the multi-step structure help? Yes / No
**Why:**

---

## Repeat Instructions

Complete this unit **3 times**:

**Run 1:** Create 3 multi-step prompts for code exploration
**Run 2:** Create 3 multi-step prompts for analysis tasks
**Run 3:** Create 3 multi-step prompts for your actual work

Track which step patterns work best for different task types.

---

## Success Checklist

- [ ] I can break complex tasks into 3-5 clear steps
- [ ] Steps execute in correct order
- [ ] Each step is verifiable
- [ ] I completed this unit 3 times
- [ ] I tested prompts on real tasks

---

## Time Saved

**Per multi-step prompt:** 10-15 minutes (vs back-and-forth clarifications)
**Daily usage:** 5-10 complex tasks
**Time saved per day:** 50-150 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Best step pattern discovered:
- What worked:
- What to improve:

**Completion 2:** [Date]
- Best step pattern discovered:
- What worked:
- What to improve:

**Completion 3:** [Date]
- Best step pattern discovered:
- What worked:
- What to improve:

---

## Next Steps

**Previous:** [01 - Clear Prompts](01-clear-prompts.md)
**Next:** [03 - Context-First Prompts](03-context-first-prompts.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
