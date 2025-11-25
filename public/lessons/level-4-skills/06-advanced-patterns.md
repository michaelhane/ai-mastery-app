# Unit 4.06: Advanced Patterns

**Level:** 4 - Autonomous Skills
**Time:** 40 minutes
**Prerequisite:** Unit 4.05 - Meta-Skills

---

## What You'll Learn

Create context-aware, adaptive skills that respond to your workflow intelligently.

**Why This Matters:**
- Skills that learn and adapt
- Context-aware assistance
- Proactive, not reactive
- Maximum flow state

---

## Learn (5 minutes)

### Advanced Patterns

**1. Context-Aware Skills**
Adapt based on:
- Current file type
- Recent activities
- Time of day
- Project type

**2. Progressive Skills**
Skills that:
- Start simple
- Get sophisticated over time
- Learn from corrections

**3. Collaborative Skills**
Skills that:
- Follow team conventions
- Reference team docs
- Enforce standards

---

## Practice (35 minutes)

### Exercise 1: Context-Aware Skill (25 min)

**Create:** `.claude/skills/smart-assistant/skill.md`

```markdown
# Smart Assistant Skill

Context-aware help based on what I'm doing.

## When to trigger
- Always active (monitors context)
- Offers help proactively when appropriate
- Responds to general requests

## What to do

### Detect Context
Continuously monitor:
1. Current file type:
   - .ts/.tsx → React/TypeScript development
   - .py → Python development
   - .test.* → Testing
   - .md → Documentation
2. Recent activities:
   - Many errors → Debugging mode
   - Creating files → Generation mode
   - Reading files → Exploration mode
3. Time patterns:
   - Morning → Planning mode
   - Mid-day → Execution mode
   - End of day → Wrap-up mode

### Adapt Behavior

#### If in React component:
- Watch for complexity
- Suggest splitting at >100 lines
- Offer to generate tests
- Check accessibility

#### If in test file:
- Ensure test coverage
- Suggest missing cases
- Offer to run tests
- Check test quality

#### If debugging:
- Offer to explain errors
- Suggest /bug command
- Check for similar past issues
- Systematic debugging approach

#### If exploring:
- Offer to create documentation
- Suggest /explore command
- Build mental model
- Identify key files

#### If creating:
- Check existing patterns
- Suggest templates
- Enforce conventions
- Generate boilerplate

### Be Subtle
- Don't interrupt flow
- Suggest, don't demand
- Only when valuable
- Learn from "no thanks"

## Compose
- Call relevant commands based on context
- Use appropriate skills
- Adapt to project type

## Resources
- resources/context-patterns.md
- resources/project-conventions.md
```

**Test context awareness:**

1. **Open .tsx file:**
   - Did it detect React context? Yes / No
   - Were suggestions relevant? Yes / No

2. **Open .test.ts file:**
   - Did it detect test context? Yes / No
   - Were suggestions relevant? Yes / No

3. **Debug an error:**
   - Did it detect debugging mode? Yes / No
   - Were suggestions helpful? Yes / No

### Exercise 2: Measure Impact (10 min)

Track for one full day:

**Morning (Planning):**
- Proactive suggestions: _____
- Helpful: _____ / _____
- Time saved: _____ min

**Mid-day (Execution):**
- Proactive suggestions: _____
- Helpful: _____ / _____
- Time saved: _____ min

**Evening (Wrap-up):**
- Proactive suggestions: _____
- Helpful: _____ / _____
- Time saved: _____ min

**Total:**
- Suggestions: _____
- Acceptance rate: _____%
- Time saved: _____ min

---

## Repeat Instructions

Complete **3 times** with different advanced patterns:

**Run 1:** Context-aware (as above)
**Run 2:** Progressive (improves over time)
**Run 3:** Collaborative (team standards)

---

## Success Checklist

- [ ] Skills adapt to context
- [ ] Provide intelligent assistance
- [ ] Don't interrupt flow
- [ ] Significantly improve workflow
- [ ] Completed 3 times

---

## Level 4 Complete!

Congratulations! You've mastered autonomous skills.

**You can now:**
- Build simple to complex skills
- Add resources for better quality
- Orchestrate all features
- Create meta-skills
- Build context-aware skills

**Time saved:** 15-25 hours per week

---

## 🏆 MASTERY ACHIEVED

You've completed all 24 units!

**Your new capabilities:**
- Write perfect prompts instantly
- Have 20-30 slash commands
- Compose MCP + Sub Agents + Commands
- Build skills that work autonomously
- Create meta-skills
- Save 15-25 hours per week
- Experience flow state daily

---

## Time Saved

**Context-aware skills:** 1-2 hours per day
**Total with all skills:** 15-25 hours per week
**Over 1 year:** 780-1300 hours = **19-32 weeks of work**

---

## Personal Notes

**Completion 1:** [Date]
- Advanced pattern:
- Context detection accuracy:
- Helpfulness rating:
- Time saved:

**Completion 2:** [Date]
- Advanced pattern:
- Time saved:

**Completion 3:** [Date]
- Advanced pattern:
- Time saved:

---

## What's Next?

**🎉 You're a Claude Code Power User! 🎉**

### Continuous Improvement
- Refine most-used commands weekly
- Create new skill monthly
- Share learnings with team
- Help others become power users

### Team Multiplication
- Share your commands/skills
- Create team-wide skills
- Run workshops
- Build shared library

### Meta-Level Learning
- Learn to learn faster
- Build tools that build tools
- Automate automation
- Teach others

---

**Previous:** [05 - Meta-Skills](05-meta-skills.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
**Share Your Success:** You did it! Celebrate! 🎊

---

**You're not just using a tool. You've built a system.**

**You're not just saving time. You're getting your life back.**

**Keep building. Keep automating. Keep flowing.**
