# Unit 2.03: Generator Commands

**Level:** 2 - Slash Command Mastery
**Time:** 20 minutes
**Prerequisite:** Unit 2.02 - Analysis Commands

---

## What You'll Learn

Create commands that generate new code/content following project conventions.

**Why This Matters:**
- Generate boilerplate instantly
- Match existing patterns automatically
- Consistent code style
- Save hours of copy-paste-modify

---

## Learn (5 minutes)

### Generator Pattern

```markdown
1. Ask for requirements
2. Read existing examples to learn patterns
3. Generate following project conventions
4. Ask for approval before creating files
```

### Key: Match Existing Style

**Don't:** Generate generic templates
**Do:** Analyze project first, then generate matching style

### Example

```markdown
# Generate Component

Create a new UI component.

1. Ask for component name if not provided
2. Read 2-3 existing components to understand:
   - File structure
   - Import style
   - Props pattern
   - Export format
3. Generate component matching project style with:
   - TypeScript types
   - Props interface
   - Basic implementation
   - Export statement
4. Ask where to save it
5. Create the file

Keep it simple. Don't add unrequested features.
```

---

## Practice (15 minutes)

### Exercise 1: Create Generator (10 min)

**Create:** `.claude/commands/component.md`

```markdown
[Write your generator command]
```

**Test it:**
1. Run: `/component Button`
2. Verify it reads existing components
3. Check generated code matches project style
4. Confirm it works

**Generate 3 different components:**
- Component 1: _____
- Component 2: _____
- Component 3: _____

### Exercise 2: Verify Quality (5 min)

**For each generated component:**

1. Does it match existing style? Yes / No
2. Does it compile/work? Yes / No
3. Would you commit this? Yes / No
4. What needs improvement:

---

## Repeat Instructions

Complete **3 times** with different generators:

**Run 1:** `/component` (UI component)
**Run 2:** `/test` (test file)
**Run 3:** Your choice (API route, model, service, etc.)

---

## Success Checklist

- [ ] Generated code matches project style
- [ ] Asks for requirements first
- [ ] Creates working code
- [ ] Saves time vs manual creation
- [ ] Completed 3 times

---

## Time Saved

**Per generation:** 5-10 minutes
**Daily usage:** 5-10 generations
**Time saved per day:** 25-100 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Generator created:
- Times used:
- Quality rating (1-5):

**Completion 2:** [Date]
- Generator created:
- Times used:
- Quality rating (1-5):

**Completion 3:** [Date]
- Generator created:
- Times used:
- Quality rating (1-5):

---

## Next Steps

**Previous:** [02 - Analysis Commands](02-analysis-commands.md)
**Next:** [04 - Fix Commands](04-fix-commands.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
