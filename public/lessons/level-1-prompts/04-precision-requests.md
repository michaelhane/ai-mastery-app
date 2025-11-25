# Unit 1.04: Precision Requests

**Level:** 1 - Prompt Foundations
**Time:** 20 minutes
**Prerequisite:** Unit 1.03 - Context-First Prompts

---

## What You'll Learn

How to add constraints and format requirements so results need no reformatting or clarification.

**Why This Matters:**
- Get exactly the format you need
- No post-processing required
- Results are immediately usable
- Save time on reformatting

---

## Learn (5 minutes)

### Add Precision Through

1. **Output format:** Table, list, JSON, markdown
2. **Constraints:** Include/exclude criteria, filters
3. **Details:** What information to include
4. **Sorting:** How to order results

### Examples

**Weak:**
```
Find errors
```

**Precise:**
```
Search for console.error calls in src/ and list them in a table with:
- File path
- Line number
- 2 lines of surrounding code
- Sort by file path alphabetically
```

**Weak:**
```
List functions
```

**Precise:**
```
Find all exported functions in src/utils/ and create a numbered list showing:
- Function name
- Number of parameters
- Return type (if TypeScript)
- First line of documentation
- Exclude functions under 5 lines
- Sort by complexity (most complex first)
```

---

## Practice (15 minutes)

### Exercise 1: Add Precision (10 min)

Make these requests precise:

1. **Vague:** "Check code quality"

   **Precise:**
   ```
   [Your precise version with format, constraints, details, sorting]
   ```

2. **Vague:** "Find bugs"

   **Precise:**
   ```
   [Your precise version]
   ```

3. **Vague:** "Show imports"

   **Precise:**
   ```
   [Your precise version]
   ```

4. **Vague:** "List components"

   **Precise:**
   ```
   [Your precise version]
   ```

### Exercise 2: Test Precision (5 min)

Run a precise prompt and verify the output:

**Your prompt:**

**Output format requested:**
**Output format received:**
**Match?** Yes / No

**Constraints specified:**
**Constraints followed:**
**Match?** Yes / No

**Did output need reformatting?** Yes / No

---

## Repeat Instructions

Complete **3 times**:

**Run 1:** Focus on output format precision
**Run 2:** Focus on constraint precision
**Run 3:** Focus on detail/sorting precision

---

## Success Checklist

- [ ] No vague words (check, find, show) in my prompts
- [ ] Specific format requirements included
- [ ] Clear constraints defined
- [ ] Results need no reformatting
- [ ] Completed 3 times

---

## Time Saved

**Per precise request:** 5-10 minutes (no reformatting needed)
**Daily usage:** 10-15 requests
**Time saved per day:** 50-150 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Most useful precision type:
- Formatting time saved:

**Completion 2:** [Date]
- Most useful precision type:
- Formatting time saved:

**Completion 3:** [Date]
- Most useful precision type:
- Formatting time saved:

---

## Next Steps

**Previous:** [03 - Context-First Prompts](03-context-first-prompts.md)
**Next:** [05 - Core 4 Understanding](05-core-4-understanding.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
