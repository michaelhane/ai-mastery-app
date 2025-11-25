# Unit 2.04: Fix Commands

**Level:** 2 - Slash Command Mastery
**Time:** 20 minutes
**Prerequisite:** Unit 2.03 - Generator Commands

---

## What You'll Learn

Create commands that systematically identify and fix problems in code.

**Why This Matters:**
- Fix issues faster
- Consistent problem-solving approach
- Less trial-and-error
- Always ask before modifying

---

## Learn (5 minutes)

### Fix Command Pattern

```markdown
1. Understand the problem
2. Gather relevant information
3. Form hypothesis
4. Propose solution
5. ASK BEFORE CHANGING
6. Implement and verify
```

### Critical Rule

**Always ask before modifying code!**

### Example

```markdown
# Fix Imports

Clean up import statements.

1. Ask which file to fix if not specified
2. Read the file
3. Identify import issues:
   - Unused imports
   - Duplicate imports
   - Unorganized (not grouped)
   - Missing imports for used identifiers
4. Show proposed changes
5. **Ask for approval**
6. Apply fixes
7. Verify file syntax is valid

Group: external → internal → relative
```

---

## Practice (15 minutes)

### Exercise 1: Create Fix Command (10 min)

**Create:** `.claude/commands/fix-imports.md`

```markdown
[Write your fix command - don't forget approval step!]
```

**Test it:**
1. Find a file with messy imports
2. Run: `/fix-imports filename.ts`
3. **Verify it asks for approval**
4. Check proposed fixes are correct
5. Apply and verify

**Test on 3 files:**
- File 1: _____ (Issues found: _____)
- File 2: _____ (Issues found: _____)
- File 3: _____ (Issues found: _____)

### Exercise 2: Safety Check (5 min)

**For your command, verify:**
- [ ] Identifies real issues (not false positives)
- [ ] Proposes correct fixes
- [ ] ASKS before modifying
- [ ] Doesn't break working code
- [ ] Can be undone if needed

---

## Repeat Instructions

Complete **3 times** with different fix types:

**Run 1:** `/fix-imports` (import cleanup)
**Run 2:** `/fix-types` (add missing types)
**Run 3:** `/fix-style` (style consistency)

---

## Success Checklist

- [ ] Commands identify real issues
- [ ] Propose correct fixes
- [ ] ALWAYS ask before modifying
- [ ] Don't break working code
- [ ] Completed 3 times

---

## Time Saved

**Per fix session:** 10-20 minutes
**Daily usage:** 3-5 fixes
**Time saved per day:** 30-100 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Command:
- Issues fixed:
- Time saved:

**Completion 2:** [Date]
- Command:
- Issues fixed:
- Time saved:

**Completion 3:** [Date]
- Command:
- Issues fixed:
- Time saved:

---

## Next Steps

**Previous:** [03 - Generator Commands](03-generator-commands.md)
**Next:** [05 - Workflow Commands](05-workflow-commands.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
