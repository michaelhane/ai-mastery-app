# Unit 4.04: Composing in Skills

**Level:** 4 - Autonomous Skills
**Time:** 30 minutes
**Prerequisite:** Unit 4.03 - Adding Resources

---

## What You'll Learn

Create skills that orchestrate slash commands, MCP servers, and sub agents.

**Why This Matters:**
- Skills as orchestrators, not executors
- Combine all learned techniques
- Maximum automation power
- True domain management

---

## Learn (5 minutes)

### Composition in Skills

```markdown
## What to do

### Operation X
- Call /command-a
- Use MCP to fetch Y
- Spawn sub agent for Z

### Operation Y
- Call /command-b and /command-c
- Process results
- Take action
```

### Skills Orchestrate

- **Slash commands:** Execute
- **MCP:** Integrate external
- **Sub agents:** Parallelize
- **Skills:** Orchestrate all of it

---

## Practice (25 minutes)

### Exercise 1: Create Orchestrating Skill (20 min)

**Create:** `.claude/skills/pr-manager/skill.md`

```markdown
# PR Manager Skill

Manage pull requests end-to-end.

## When to trigger
- When I mention pull requests
- Before opening a PR
- When reviewing PRs
- When dealing with PR feedback

## What to do

### Creating PR
1. Call /pre-commit to ensure ready
2. Use GitHub MCP to check:
   - Branch is pushed
   - No conflicts
3. Call /generate-pr-description
4. Ask for approval
5. Use GitHub MCP to create PR
6. Confirm and provide link

### Reviewing PR
1. If PR not specified, GitHub MCP lists open PRs
2. Ask which to review
3. GitHub MCP fetches PR details
4. Spawn sub agent to:
   - Call /review on changed files
   - Identify issues
   - Draft comments
5. Present review summary
6. Ask: "Post to GitHub?"
7. If yes, GitHub MCP posts

### Responding to Feedback
When PR has comments:
1. GitHub MCP fetches comments
2. Summarize feedback
3. Identify required changes
4. Call relevant fix commands
5. Offer to push changes

## Compose
- Slash commands: /pre-commit, /review, /generate-pr-description
- MCP: GitHub integration
- Sub agents: Parallel review

## Resources
- resources/pr-template.md
- resources/review-checklist.md
```

**Test all 3 operations:**
1. Create PR: _____
2. Review PR: _____
3. Respond to feedback: _____

### Exercise 2: Verify Orchestration (5 min)

**Check:**
- [ ] Skill uses 3+ slash commands
- [ ] Skill uses MCP server
- [ ] Skill spawns sub agents
- [ ] Orchestrates complete workflow
- [ ] Triggers automatically

---

## Repeat Instructions

Complete **3 times** with different composing skills:

**Run 1:** PR Manager (as above)
**Run 2:** Deployment Manager (check, test, deploy)
**Run 3:** Onboarding Helper (explore, document, guide)

---

## Success Checklist

- [ ] Skill uses 3+ features
- [ ] Orchestrates complex workflows
- [ ] Triggers automatically
- [ ] Saves 20-40 min per workflow
- [ ] Completed 3 times

---

## Time Saved

**Per complex workflow:** 20-40 minutes
**Daily usage:** 2-3 workflows
**Time saved per day:** 40-120 minutes

---

## Personal Notes

**Completion 1:** [Date]
- Composing skill:
- Features orchestrated:
- Workflow time (manual): _____ min
- Workflow time (automated): _____ min
- Saved: _____ min

**Completion 2:** [Date]
- Composing skill:
- Saved: _____ min

**Completion 3:** [Date]
- Composing skill:
- Saved: _____ min

---

## Next Steps

**Previous:** [03 - Adding Resources](03-adding-resources.md)
**Next:** [05 - Meta-Skills](05-meta-skills.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
