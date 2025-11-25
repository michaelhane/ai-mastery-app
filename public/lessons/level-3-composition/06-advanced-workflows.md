# Unit 3.06: Advanced Workflows

**Level:** 3 - Feature Composition
**Time:** 30 minutes
**Prerequisite:** Unit 3.05 - Composing Commands

---

## What You'll Learn

Combine MCP + Sub Agents + Slash Commands into comprehensive automated workflows.

**Why This Matters:**
- Most powerful composition possible
- Automate complex real-world workflows
- Combine all learned techniques
- Maximum time savings

---

## Learn (5 minutes)

### Advanced Pattern

```markdown
1. Use MCP to fetch external data
2. Spawn sub agents to process in parallel
3. Each agent calls slash commands
4. Aggregate results
5. Use MCP to take external action
```

### Example

```markdown
# Review All PRs

Comprehensive PR review workflow.

1. Use GitHub MCP to fetch all open PRs
2. For each PR (up to 5):
   - Spawn sub agent to:
     - Fetch PR diff via MCP
     - Call /review on changes
     - Identify issues
     - Draft review comments
3. Collect all reviews (parallel execution)
4. Present summary table:
   | PR # | Title | Issues | Recommendation |
5. Ask: "Post reviews to GitHub?"
6. If yes, use GitHub MCP to post comments

**Run reviews in parallel for speed.**
```

---

## Practice (25 minutes)

### Exercise 1: Design Workflow (10 min)

Pick a complex workflow you do regularly:

**Workflow:** _____

**Steps involved:**
1.
2.
3.
4.
5.

**Features needed:**
- [ ] MCP server: _____
- [ ] Sub agents: _____
- [ ] Slash commands: _____

### Exercise 2: Build Workflow (15 min)

**Create:** `.claude/commands/[your-workflow].md`

```markdown
[Write advanced workflow using all 3 features]
```

**Test it:**
1. Run your workflow
2. Verify MCP integration works
3. Confirm sub agents run in parallel
4. Check commands execute correctly
5. Measure total time saved

**Metrics:**
- Manual workflow time: _____ min
- Automated workflow time: _____ min
- Time saved: _____ min
- Speedup: _____x

---

## Repeat Instructions

Complete **3 times** with different advanced workflows:

**Run 1:** MCP + parallel sub agents
**Run 2:** MCP + composed commands
**Run 3:** All three (MCP + sub agents + commands)

---

## Success Checklist

- [ ] Successfully combines 2+ features
- [ ] Executes complex workflow automatically
- [ ] Saves significant time (30+ min)
- [ ] Actually useful for real work
- [ ] Completed 3 times

---

## Level 3 Complete!

Congratulations! You've mastered feature composition.

**You can now:**
- Use MCP for external integrations
- Run sub agents in parallel
- Compose commands into workflows
- Combine all features for maximum power

**Time saved:** 10-15 hours per week

---

## Time Saved

**Per advanced workflow:** 30-60 minutes
**Daily usage:** 1-2 workflows
**Time saved per day:** 30-120 minutes
**Weekly savings:** 10-15 hours

---

## Personal Notes

**Completion 1:** [Date]
- Workflow:
- Features used:
- Time saved: _____ min

**Completion 2:** [Date]
- Workflow:
- Features used:
- Time saved: _____ min

**Completion 3:** [Date]
- Workflow:
- Features used:
- Time saved: _____ min

---

## Next Steps

**🎉 Level 3 Complete!**

**Previous:** [05 - Composing Commands](05-composing-commands.md)
**Next Level:** [Level 4 - Autonomous Skills](../level-4-skills/01-understanding-skills.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)

**Checkpoint:** You should be saving 10-15 hours per week through automated workflows.
