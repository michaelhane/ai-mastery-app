# Unit 3.03: Understanding Sub Agents

**Level:** 3 - Feature Composition
**Time:** 20 minutes
**Prerequisite:** Unit 3.02 - Commands with MCP

---

## What You'll Learn

What sub agents are, when to use them, and how they enable parallel execution.

**Why This Matters:**
- Isolated context (keeps main conversation clean)
- Parallel execution (do multiple things at once)
- Massive time savings through concurrency
- Perfect for self-contained tasks

---

## Learn (5 minutes)

### What Are Sub Agents?

**Sub agents = Isolated, parallel workers**

### Key Properties

1. **Separate context** - Don't pollute main conversation
2. **Can run in parallel** - 3-5 at once
3. **Context is lost** - After completion
4. **Self-contained** - Each does one task

### When to Use

**Use sub agents when you:**
- See the word "parallel"
- Don't need context afterward
- Have self-contained tasks
- Want to save time with concurrency

### The Rule

**"Parallel" = Sub Agents**

---

## Practice (15 minutes)

### Exercise 1: Single Sub Agent Command (10 min)

**Create:** `.claude/commands/isolated-test.md`

```markdown
# Run Isolated Test

Run tests without cluttering context.

1. Ask which test file/suite if not specified
2. Spawn a sub agent to:
   - Run the specified tests
   - Capture results
   - Report pass/fail with details
3. Sub agent should:
   - Use Bash to run test command
   - Parse output
   - Return: X passed, Y failed
   - If failures, include error messages
4. Display results in main context

Keep main context clean.
```

**Test it:**
1. Run: `/isolated-test unit`
2. Verify tests run
3. Check main context stays clean
4. Compare to running tests directly

**Comparison:**
- Direct test time: _____ min
- Isolated test time: _____ min
- Context pollution: Less / Same / More

### Exercise 2: Verify Isolation (5 min)

**Check:**
- [ ] Sub agent spawned successfully
- [ ] Task completed independently
- [ ] Results returned to main context
- [ ] Main context stayed focused
- [ ] Context was lost after (can't reference it)

---

## Repeat Instructions

Complete **3 times** with different isolated tasks:

**Run 1:** Test runner
**Run 2:** Isolated analysis (e.g., security scan)
**Run 3:** Isolated generation (e.g., generate docs)

---

## Success Checklist

- [ ] Sub agent spawns successfully
- [ ] Completes task independently
- [ ] Returns useful results
- [ ] Main context stays focused
- [ ] Completed 3 times

---

## Time Saved

**Per isolated task:** 5-10 minutes (cleaner context)
**With parallel (next unit):** 50-70% time reduction

---

## Personal Notes

**Completion 1:** [Date]
- Task isolated:
- Context benefit:
- Time saved:

**Completion 2:** [Date]
- Task isolated:
- Context benefit:
- Time saved:

**Completion 3:** [Date]
- Task isolated:
- Context benefit:
- Time saved:

---

## Next Steps

**Previous:** [02 - Commands with MCP](02-commands-with-mcp.md)
**Next:** [04 - Parallel Sub Agents](04-parallel-sub-agents.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
