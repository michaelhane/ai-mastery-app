# Unit 4.02: First Simple Skill

**Level:** 4 - Autonomous Skills
**Time:** 30 minutes
**Prerequisite:** Unit 4.01 - Understanding Skills

---

## What You'll Learn

Create your first simple, focused skill that triggers automatically.

**Why This Matters:**
- Start experiencing automatic assistance
- Learn skill structure hands-on
- Build foundation for complex skills
- First step to 15-25 hours/week savings

---

## Learn (5 minutes)

### Minimal Skill Structure

```markdown
# Skill Name

Domain-specific expertise for [area].

## When to trigger
- [Condition 1]
- [Condition 2]
- [Condition 3]

## What to do

### Operation 1
[Steps]

### Operation 2
[Steps]

## Resources
- Call /command-name for [task]
- Reference file X for [info]
```

### Keep It Simple

Start with 2-3 operations that use existing commands.

---

## Practice (25 minutes)

### Exercise 1: Create Simple Skill (20 min)

**Create:** `.claude/skills/commit-helper/skill.md`

```markdown
# Commit Helper Skill

Help create good git commits.

## When to trigger
- When I'm about to commit code
- When I say "commit" or "ready to commit"
- When I ask for commit message

## What to do

### Generate Commit Message
1. Check git status for changed files
2. Check git diff to see changes
3. Analyze changes:
   - New feature? Enhancement? Bug fix?
   - What files affected?
   - What was the purpose?
4. Generate commit message:
   ```
   type(scope): brief description

   - Detailed change 1
   - Detailed change 2
   ```
5. Types: feat, fix, refactor, docs, test, chore
6. Ask for approval before committing

### Pre-Commit Check
If changes look risky:
- Call /pre-commit command
- Ensure tests pass
- Check for obvious issues

## Resources
- Call /pre-commit for checks
- Follow project conventions

## Style
- Be helpful, not pushy
- Explain commit message choices
- Follow project conventions
```

**Test it:**
1. Make code changes
2. Say "I'm ready to commit"
3. Verify skill triggers automatically
4. Check commit message quality
5. Try 3 different change types:
   - Feature: _____
   - Bug fix: _____
   - Refactor: _____

### Exercise 2: Refine Based on Use (5 min)

**After using 3 times:**

**What triggered correctly:**

**What didn't trigger:**

**What to improve:**

**Updated trigger conditions:**

---

## Repeat Instructions

Complete **3 times** with different simple skills:

**Run 1:** Commit helper (as above)
**Run 2:** Import organizer (auto-organize imports)
**Run 3:** Error explainer (explain errors encountered)

---

## Success Checklist

- [ ] Skill triggers automatically
- [ ] Performs focused task
- [ ] Uses existing slash commands
- [ ] Improves workflow without manual trigger
- [ ] Completed 3 times

---

## Time Saved

**Per automatic trigger:** 5-10 minutes
**Daily triggers:** 5-10 times
**Time saved per day:** 25-100 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Skill:
- Trigger accuracy:
- Times triggered:
- Time saved:

**Completion 2:** [Date]
- Skill:
- Trigger accuracy:
- Times triggered:
- Time saved:

**Completion 3:** [Date]
- Skill:
- Trigger accuracy:
- Times triggered:
- Time saved:

---

## Next Steps

**Previous:** [01 - Understanding Skills](01-understanding-skills.md)
**Next:** [03 - Adding Resources](03-adding-resources.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
