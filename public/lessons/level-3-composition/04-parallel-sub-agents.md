# Unit 3.04: Parallel Sub Agents

**Level:** 3 - Feature Composition
**Time:** 20 minutes
**Prerequisite:** Unit 3.03 - Understanding Sub Agents

---

## What You'll Learn

How to run multiple sub agents simultaneously for massive time savings.

**Why This Matters:**
- 5 tasks in parallel = 5x faster
- Real concurrency, not sequential
- Single most powerful time-saving technique
- Enables workflows impossible otherwise

---

## Learn (5 minutes)

### Parallel Pattern

```markdown
1. Identify parallelizable tasks (3-5)
2. Spawn sub agents simultaneously
3. Each agent does one task
4. Collect results from all
5. Synthesize in main context
```

### Example

```markdown
# Parallel Code Analysis

Analyze codebase in parallel.

1. Spawn 4 sub agents simultaneously:
   - Agent 1: Security (auth, injection, XSS)
   - Agent 2: Performance (N+1, loops, blocking)
   - Agent 3: Quality (duplication, complexity)
   - Agent 4: Tests (coverage, missing tests)
2. Each sub agent:
   - Searches relevant patterns
   - Identifies issues
   - Rates severity
   - Returns findings
3. Collect all results
4. Create unified report:
   ## Critical Issues (All Agents)
   ## Important Issues
   ## Improvements
5. Prioritize top 10 issues

**Run agents in parallel for speed.**
```

---

## Practice (15 minutes)

### Exercise 1: Create Parallel Command (10 min)

**Create:** `.claude/commands/parallel-analyze.md`

```markdown
[Write command that spawns 3-5 sub agents in parallel]
```

**Test it:**
1. Run: `/parallel-analyze`
2. Verify all agents spawn
3. Confirm they run simultaneously (not one after another)
4. Check unified report
5. Measure total time

**Timing:**
- Sequential (estimated): _____ min
- Parallel (actual): _____ min
- Speedup: _____x faster

### Exercise 2: Verify Parallelism (5 min)

**Check:**
- [ ] Multiple sub agents spawned at once
- [ ] They ran simultaneously (not sequential)
- [ ] Each completed its task
- [ ] Results collected and unified
- [ ] Significantly faster than sequential

---

## Repeat Instructions

Complete **3 times** with different parallel workflows:

**Run 1:** Parallel analysis (4 types simultaneously)
**Run 2:** Parallel testing (unit, integration, e2e)
**Run 3:** Parallel generation (multiple files at once)

---

## Success Checklist

- [ ] Multiple sub agents spawn simultaneously
- [ ] Each completes its task
- [ ] Results collected and unified
- [ ] 50-70% faster than sequential
- [ ] Completed 3 times

---

## Time Saved

**Sequential:** 20-30 min
**Parallel:** 5-10 min
**Savings:** 50-70% reduction

**Daily usage:** 3-5 parallel workflows
**Time saved per day:** 30-60 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Parallel workflow:
- Agents spawned:
- Sequential time: _____ min
- Parallel time: _____ min
- Speedup: _____x

**Completion 2:** [Date]
- Parallel workflow:
- Speedup: _____x

**Completion 3:** [Date]
- Parallel workflow:
- Speedup: _____x

---

## Next Steps

**Previous:** [03 - Understanding Sub Agents](03-understanding-sub-agents.md)
**Next:** [05 - Composing Commands](05-composing-commands.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
