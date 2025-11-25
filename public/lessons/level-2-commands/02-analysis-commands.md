# Unit 2.02: Analysis Commands

**Level:** 2 - Slash Command Mastery
**Time:** 20 minutes
**Prerequisite:** Unit 2.01 - Understanding Commands

---

## What You'll Learn

Create commands that examine code and report findings in consistent formats.

**Why This Matters:**
- Automated code analysis
- Consistent reporting
- Find issues quickly
- Actionable results every time

---

## Learn (5 minutes)

### Analysis Command Pattern

```markdown
1. Ask for target if needed
2. Read/search relevant code
3. Apply specific analysis
4. Report findings in consistent format
```

### Good Analysis Commands
- Focus on ONE type of analysis
- Clear output format (table, list)
- Severity ratings (🔴 🟡 🟢)
- Actionable results

### Example

```markdown
# Complexity Check

Analyze code complexity.

1. Ask which file to analyze if not specified
2. Read the file
3. Identify:
   - Functions over 40 lines
   - Functions with >5 parameters
   - Deeply nested code (>3 levels)
   - High cyclomatic complexity
4. Report in table format:
   | Function | Issue | Line | Severity |
5. Suggest refactoring for top 3 issues

Rate: 🔴 High, 🟡 Medium, 🟢 Low
```

---

## Practice (15 minutes)

### Exercise 1: Create Analysis Command (10 min)

**Create:** `.claude/commands/complexity-check.md`

```markdown
[Write the complete command following the pattern above]
```

**Test it:**
1. Run: `/complexity-check`
2. Target a complex file
3. Verify findings are accurate
4. Check output format is consistent

**Test on 3 files:**
- File 1: _____ (Result: _____)
- File 2: _____ (Result: _____)
- File 3: _____ (Result: _____)

### Exercise 2: Refine Based on Results (5 min)

**What worked:**

**What didn't work:**

**Improvements to make:**

**Updated command:**

---

## Repeat Instructions

Complete **3 times** with different analysis types:

**Run 1:** `/complexity-check` (code complexity)
**Run 2:** `/security-check` (security issues)
**Run 3:** `/perf-check` (performance issues)

---

## Success Checklist

- [ ] Commands analyze specific aspects
- [ ] Output is consistent and clear
- [ ] Findings are actionable
- [ ] Works on any file in codebase
- [ ] Completed 3 times

---

## Time Saved

**Per analysis:** 10-15 minutes
**Daily usage:** 3-5 analyses
**Time saved per day:** 30-75 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Command:
- Best finding:
- Time saved:

**Completion 2:** [Date]
- Command:
- Best finding:
- Time saved:

**Completion 3:** [Date]
- Command:
- Best finding:
- Time saved:

---

## Next Steps

**Previous:** [01 - Understanding Commands](01-understanding-commands.md)
**Next:** [03 - Generator Commands](03-generator-commands.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
