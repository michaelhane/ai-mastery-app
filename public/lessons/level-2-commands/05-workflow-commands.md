# Unit 2.05: Workflow Commands

**Level:** 2 - Slash Command Mastery
**Time:** 20 minutes
**Prerequisite:** Unit 2.04 - Fix Commands

---

## What You'll Learn

Create commands that chain multiple operations into complete workflows.

**Why This Matters:**
- Automate multi-step processes
- Consistent workflow execution
- Replace manual checklists
- Save massive time on routine tasks

---

## Learn (5 minutes)

### Workflow Pattern

```markdown
1. Step A (gather info)
2. Step B (analyze)
3. Step C (act)
4. Step D (verify)
5. Step E (report)
```

### Example: Pre-Commit Workflow

```markdown
# Pre-Commit Check

Run checks before committing.

1. Check git status - list modified files
2. For each modified file:
   - Run linting
   - Check for console.log
   - Check for TODOs without tickets
   - Verify tests exist
3. Run test suite
4. Report:
   ✅ Pass: [list]
   ❌ Fail: [list with details]
5. If any failures:
   - Offer to fix automatically
   - Wait for approval
   - Fix issues
6. Final status: Ready to commit? Yes/No

Don't proceed unless user confirms.
```

---

## Practice (15 minutes)

### Exercise 1: Create Workflow (10 min)

**Create:** `.claude/commands/pre-commit.md`

```markdown
[Write your workflow command with 5+ steps]
```

**Test it:**
1. Make some code changes
2. Run: `/pre-commit`
3. Verify each step executes
4. Check failures are caught
5. Verify final report

**Test 3 scenarios:**
- Scenario 1: Clean code (should pass)
- Scenario 2: Has lint errors (should catch)
- Scenario 3: Missing tests (should catch)

### Exercise 2: Workflow Checklist (5 min)

**Verify your workflow:**
- [ ] Runs all steps in order
- [ ] Each step is verified
- [ ] Failures are caught and reported
- [ ] Asks before fixing issues
- [ ] Provides clear final status
- [ ] Saves time vs manual checklist

---

## Repeat Instructions

Complete **3 times** with different workflows:

**Run 1:** `/pre-commit` (before committing)
**Run 2:** `/pr-ready` (before opening PR)
**Run 3:** `/deploy-check` (before deploying)

---

## Success Checklist

- [ ] Commands run multiple steps in order
- [ ] Each step is verified
- [ ] Failures caught and reported
- [ ] Replaces manual checklists
- [ ] Completed 3 times

---

## Time Saved

**Per workflow run:** 15-25 minutes
**Daily usage:** 3-5 workflows
**Time saved per day:** 45-125 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Workflow:
- Steps automated:
- Manual time: _____ min
- Automated time: _____ min
- Savings: _____ min

**Completion 2:** [Date]
- Workflow:
- Steps automated:
- Savings:

**Completion 3:** [Date]
- Workflow:
- Steps automated:
- Savings:

---

## Next Steps

**Previous:** [04 - Fix Commands](04-fix-commands.md)
**Next:** [06 - Command Optimization](06-command-optimization.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
