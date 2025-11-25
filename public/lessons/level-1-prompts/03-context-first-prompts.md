# Unit 1.03: Context-First Prompts

**Level:** 1 - Prompt Foundations
**Time:** 20 minutes
**Prerequisite:** Unit 1.02 - Multi-Step Prompts

---

## What You'll Learn

How to give Claude context before asking for analysis or action, resulting in better recommendations.

**Why This Matters:**
- Claude makes better suggestions with full context
- Fewer iterations needed
- More accurate analysis
- Higher quality results

---

## Learn (5 minutes)

### The Pattern

```markdown
First, [explore/understand/read]
Then, [analyze/check/find]
Finally, [suggest/create/fix]
```

### Examples

**Without context:**
```
Fix the security issues in the auth code
```
Result: Generic suggestions, might miss context-specific issues

**With context:**
```
First, read the authentication flow in src/auth/ and understand how it works
Then, check for security vulnerabilities specific to our JWT implementation
Finally, suggest improvements with code examples that fit our architecture
```
Result: Specific, contextual, actionable suggestions

### Why This Works
- Claude understands the full picture
- Recommendations fit your specific code
- Avoids suggesting things that don't apply
- Solutions match your architecture

---

## Practice (15 minutes)

### Exercise 1: Add Context Phase (10 min)

Rewrite these prompts to include context-gathering:

1. **Direct:** "Refactor the database queries"

   **Context-first:**
   ```
   First, [your context step]
   Then, [your analysis step]
   Finally, [your action step]
   ```

2. **Direct:** "Write tests for the API"

   **Context-first:**
   ```
   First, [your context step]
   Then, [your analysis step]
   Finally, [your action step]
   ```

3. **Direct:** "Improve error handling"

   **Context-first:**
   ```
   First, [your context step]
   Then, [your analysis step]
   Finally, [your action step]
   ```

### Exercise 2: Compare Results (5 min)

Test both approaches:

**Test 1: Without context**
- Prompt: [Write a direct prompt]
- Result quality (1-5): ___
- Specificity (1-5): ___
- Usability (1-5): ___

**Test 2: With context**
- Prompt: [Same task, but context-first]
- Result quality (1-5): ___
- Specificity (1-5): ___
- Usability (1-5): ___

**Difference noticed:**

---

## Repeat Instructions

Complete **3 times** with different scenarios:

**Run 1:** Context-first for code exploration
**Run 2:** Context-first for refactoring tasks
**Run 3:** Context-first for bug fixing

---

## Success Checklist

- [ ] My prompts start with context-gathering
- [ ] Analysis is more accurate because of context
- [ ] Suggestions are specific and actionable
- [ ] I completed this unit 3 times
- [ ] I can clearly see the difference in quality

---

## Time Saved

**Per context-first prompt:** 15-20 minutes (fewer iterations, better results)
**Daily usage:** 3-5 complex analysis tasks
**Time saved per day:** 45-100 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Quality improvement noticed:
- Best use case:

**Completion 2:** [Date]
- Quality improvement noticed:
- Best use case:

**Completion 3:** [Date]
- Quality improvement noticed:
- Best use case:

---

## Next Steps

**Previous:** [02 - Multi-Step Prompts](02-multi-step-prompts.md)
**Next:** [04 - Precision Requests](04-precision-requests.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
