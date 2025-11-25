# Unit 2.06: Command Optimization

**Level:** 2 - Slash Command Mastery
**Time:** 20 minutes
**Prerequisite:** Unit 2.05 - Workflow Commands

---

## What You'll Learn

How to improve existing commands based on real usage patterns.

**Why This Matters:**
- Commands evolve with use
- Eliminate repeated clarifications
- Faster execution over time
- Compound time savings

---

## Learn (5 minutes)

### Optimization Cycle

```
Use → Note issues → Update → Test → Repeat
```

### What to Optimize

1. **Clarification questions** - Add defaults
2. **Output format** - Make it more useful
3. **Missing steps** - Add forgotten checks
4. **Verbose output** - Simplify
5. **Slow execution** - Make faster

### Example Improvement

**Before:**
```markdown
# Review Code

Review the code for issues.
```

**After:**
```markdown
# Review Code

Perform focused code review.

1. If no files specified, check git diff for changed files
2. For each file, check:
   - Security: injection, XSS, auth issues
   - Performance: N+1, blocking calls
   - Quality: duplication, complexity >10
3. Report format:
   ## File: [path]
   ### 🔴 Critical Issues
   - [Issue] at line X
   ### 🟡 Improvements
   - [Issue] at line X

4. Focus on top 5 issues per file

Be constructive and specific.
```

---

## Practice (15 minutes)

### Exercise 1: Track Usage (5 min)

Pick a command you've used 3+ times.

**Command:** _____

**Times used:** _____

**Issues noticed:**
1.
2.
3.

**Clarifications it keeps asking:**
1.
2.

**Output issues:**
1.
2.

### Exercise 2: Optimize It (10 min)

**Original command:**
```markdown
[Paste original]
```

**Optimized command:**
```markdown
[Write improved version addressing issues above]
```

**Test both:**
- Original time: _____ min
- Optimized time: _____ min
- Improvement: _____ min saved

---

## Repeat Instructions

Complete **5 times** - optimize different command types:

**Run 1:** Most-used command
**Run 2:** Least reliable command
**Run 3:** Command with unclear output
**Run 4:** Command that asks too many questions
**Run 5:** Command that's too slow

---

## Success Checklist

- [ ] Commands need fewer clarifications
- [ ] Output is more actionable
- [ ] Include helpful defaults
- [ ] Faster to execute
- [ ] Optimized 5 commands

---

## Time Saved

**Per optimization:** 3-5 minutes saved per future use
**If used 10 times:** 30-50 minutes saved total
**Compound effect:** Massive over time

---

## Personal Notes

**Optimization 1:** [Date]
- Command:
- Problem:
- Fix:
- Time saved per use:

**Optimization 2:** [Date]
- Command:
- Problem:
- Fix:
- Time saved per use:

**Optimization 3:** [Date]
- Command:
- Problem:
- Fix:
- Time saved per use:

**Optimization 4:** [Date]
- Command:
- Problem:
- Fix:
- Time saved per use:

**Optimization 5:** [Date]
- Command:
- Problem:
- Fix:
- Time saved per use:

---

## Next Steps

**Previous:** [05 - Workflow Commands](05-workflow-commands.md)
**Next:** [07 - Building Toolkit](07-building-toolkit.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
