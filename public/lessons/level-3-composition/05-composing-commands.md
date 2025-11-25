# Unit 3.05: Composing Commands

**Level:** 3 - Feature Composition
**Time:** 20 minutes
**Prerequisite:** Unit 3.04 - Parallel Sub Agents

---

## What You'll Learn

How to create commands that call other commands, building higher-level workflows.

**Why This Matters:**
- Reuse existing commands
- Build hierarchies of functionality
- Don't duplicate logic
- Create powerful meta-workflows

---

## Learn (5 minutes)

### Composition Pattern

```markdown
1. Call /command-a to do X
2. Use results from command-a
3. Call /command-b to do Y
4. Combine results
5. Final output
```

### Benefits

- **Reuse:** Don't recreate logic
- **Maintainability:** Fix in one place
- **Clarity:** Each command does one thing
- **Power:** Build complex from simple

### Example

```markdown
# Full Code Review

Comprehensive review using existing commands.

1. Call /complexity-check to find complex code
2. Call /security-check to find vulnerabilities
3. Call /test-coverage to check test coverage
4. Synthesize findings:
   - What are the top 3 issues?
   - How do they relate?
   - What should be fixed first?
5. Create action plan with priorities

Leverage existing commands, don't duplicate.
```

---

## Practice (15 minutes)

### Exercise 1: Create Composed Command (10 min)

First, ensure you have sub-commands:
- [ ] `/complexity-check` exists
- [ ] `/security-check` exists
- [ ] `/test-coverage` exists

**Create:** `.claude/commands/full-review.md`

```markdown
[Write command that calls 3+ other commands]
```

**Test it:**
1. Run: `/full-review`
2. Verify each sub-command executes
3. Check synthesis is meaningful
4. Compare vs running commands manually

**Comparison:**
- Manual (run 3 commands separately): _____ min
- Composed (run once): _____ min
- Saved: _____ min

### Exercise 2: Improve Composition (5 min)

**What worked:**

**What didn't:**

**How to improve:**

**Updated command:**

---

## Repeat Instructions

Complete **3 times** with different composition types:

**Run 1:** Compose analysis commands
**Run 2:** Compose workflow commands
**Run 3:** Compose generation commands

---

## Success Checklist

- [ ] Command calls other commands successfully
- [ ] Results combined meaningfully
- [ ] Saves time vs running separately
- [ ] Creates higher-level workflows
- [ ] Completed 3 times

---

## Time Saved

**Per composed workflow:** 10-15 minutes
**Daily usage:** 2-3 composed workflows
**Time saved per day:** 20-45 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Composed command:
- Sub-commands used:
- Time saved:

**Completion 2:** [Date]
- Composed command:
- Sub-commands used:
- Time saved:

**Completion 3:** [Date]
- Composed command:
- Sub-commands used:
- Time saved:

---

## Next Steps

**Previous:** [04 - Parallel Sub Agents](04-parallel-sub-agents.md)
**Next:** [06 - Advanced Workflows](06-advanced-workflows.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
