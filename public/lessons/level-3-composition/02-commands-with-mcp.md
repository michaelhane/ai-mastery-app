# Unit 3.02: Commands with MCP

**Level:** 3 - Feature Composition
**Time:** 20 minutes
**Prerequisite:** Unit 3.01 - Understanding MCP

---

## What You'll Learn

Combine slash commands + MCP servers for powerful external integration workflows.

**Why This Matters:**
- Automate external data fetching
- Combine external + local operations
- Build dashboards and status checks
- Save time on context switching

---

## Learn (5 minutes)

### Composition Pattern

```
1. Use MCP to fetch external data
2. Process/analyze with Claude
3. Take action (local or via MCP)
```

### How MCP Tools Appear

When you have MCP servers configured, their tools appear with `mcp__` prefix:
- `mcp__github__search_repositories`
- `mcp__filesystem__read_file`
- `mcp__memory__store`

### Example Command

Create `.claude/commands/gh-status.md`:

```markdown
---
description: Show my GitHub status dashboard
---

# GitHub Status Dashboard

Use the GitHub MCP tools to check my work:

1. Use mcp__github tools to fetch:
   - My open PRs
   - PRs awaiting my review
   - Recent issues assigned to me

2. For each PR show:
   - Title, number, status
   - CI status (passed/failed)
   - Mergeable status

3. Prioritize and format as:
   - 🔴 PRs with failing CI (fix first)
   - 🟡 PRs awaiting review (review next)
   - 🟢 PRs ready to merge (merge when ready)

4. Output as a summary table

Keep it concise.
```

### Key Pattern: MCP + Local Tools

```
MCP fetches external data
    ↓
Claude processes/analyzes
    ↓
Local tools (Edit, Write) make changes
    ↓
MCP pushes results back (optional)
```

---

## Practice (15 minutes)

### Exercise 1: Create MCP Command (10 min)

**Create:** `.claude/commands/gh-status.md` (or similar for your MCP)

```markdown
[Write command that uses your MCP server]
```

**Test it:**
1. Run your command
2. Verify it fetches real data
3. Check output is useful
4. Use it daily for a week

**Test tracking:**
- Day 1: Time saved: _____
- Day 2: Time saved: _____
- Day 3: Time saved: _____

### Exercise 2: Enhance Command (5 min)

**What worked:**

**What could be better:**

**Updated command:**

---

## Repeat Instructions

Complete **3 times** with different MCP integrations:

**Run 1:** GitHub status/dashboard
**Run 2:** Database query helper
**Run 3:** External service integration (your choice)

---

## Success Checklist

- [ ] Commands successfully use MCP
- [ ] Fetch real external data
- [ ] Process data usefully
- [ ] Save time vs manual checking
- [ ] Completed 3 times

---

## Time Saved

**Per MCP command use:** 10-20 minutes (avoiding context switching)
**Daily usage:** 3-5 times
**Time saved per day:** 30-100 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Command + MCP:
- Data fetched:
- Time saved:

**Completion 2:** [Date]
- Command + MCP:
- Data fetched:
- Time saved:

**Completion 3:** [Date]
- Command + MCP:
- Data fetched:
- Time saved:

---

## Next Steps

**Previous:** [01 - Understanding MCP](01-understanding-mcp.md)
**Next:** [03 - Understanding Sub Agents](03-understanding-sub-agents.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
