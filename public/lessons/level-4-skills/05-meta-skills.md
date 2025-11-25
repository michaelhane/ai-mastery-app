# Unit 4.05: Meta-Skills

**Level:** 4 - Autonomous Skills
**Time:** 40 minutes
**Prerequisite:** Unit 4.04 - Composing in Skills

---

## What You'll Learn

Create a meta-skill that helps you build other skills, compounding your effectiveness.

**Why This Matters:**
- Build skills 5-10x faster
- Consistent quality
- Codify your best practices
- Ultimate force multiplier

---

## Learn (5 minutes)

### Meta-Skill = Tool Builder

A skill that creates skills.

### Why This Matters

**Without meta-skill:**
- 30-60 min to create skill
- Inconsistent structure
- Forget best practices

**With meta-skill:**
- 5-10 min to create skill
- Consistent structure
- Best practices built-in

### Meta Pattern

```markdown
1. Gather requirements
2. Design structure
3. Generate files
4. Test and refine
```

---

## Practice (35 minutes)

### Exercise 1: Create Meta-Skill (25 min)

**Create:** `.claude/skills/skill-builder/skill.md`

```markdown
# Skill Builder Meta-Skill

Help create new skills efficiently.

## When to trigger
- When I say "create a skill for..."
- When I want to automate a domain
- When building tooling

## What to do

### Step 1: Understand Domain
Ask questions:
1. What problem are you solving?
2. What related tasks?
3. When should it trigger automatically?
4. What commands/features will it use?

### Step 2: Design Structure
Determine:
- Skill name (kebab-case)
- Trigger conditions (3-5 specific)
- Main operations (3-7 operations)
- Resources needed
- Features to compose

### Step 3: Generate Structure
Create:
1. `.claude/skills/{name}/skill.md`:
   ```markdown
   # {Name} Skill

   [Purpose]

   ## When to trigger
   - [Condition 1]
   - [Condition 2]

   ## What to do

   ### Operation 1
   [Steps]

   ## Compose
   - Slash commands: [list]
   - MCP: [list]
   - Sub agents: [when]

   ## Resources
   - [List files]
   ```
2. Create `resources/` directory
3. Ask what resources to create

### Step 4: Generate Supporting Commands
Ask: "Need new slash commands?"
If yes:
1. Identify primitive operations
2. Create in `.claude/commands/`
3. Reference in skill.md

### Step 5: Test
1. Create test scenarios
2. Verify triggers
3. Walk through operations
4. Refine

## Best Practices
- Start simple, iterate
- Build slash commands first
- Skills orchestrate, commands execute
- Focused domain (not too broad)
- Clear triggers (3-5 specific conditions)
- 3-7 operations (not too many)

## Resources
- resources/skill-template.md
- resources/examples.md
- resources/checklist.md
```

**Create supporting resources:**
1. `resources/skill-template.md` - Blank template
2. `resources/examples.md` - Example skills
3. `resources/checklist.md` - Quality checklist

### Exercise 2: Use Meta-Skill (10 min)

Test your meta-skill:

**Say:** "Help me create a skill for database migrations"

**Verify it:**
- [ ] Asks good questions
- [ ] Designs structure
- [ ] Generates all files
- [ ] Creates resources
- [ ] Resulting skill works

**Time tracking:**
- Manual skill creation: 30-60 min
- With meta-skill: _____ min
- Speedup: _____x

---

## Repeat Instructions

Use meta-skill to create **3 new skills:**

**Run 1:** Create skill for your domain
**Run 2:** Create skill for teammate's domain
**Run 3:** Create skill for complex workflow

---

## Success Checklist

- [ ] Meta-skill generates complete structure
- [ ] Asks appropriate questions
- [ ] Creates all necessary files
- [ ] Resulting skills work
- [ ] 5-10x faster skill creation
- [ ] Used 3 times

---

## Time Saved

**Per new skill created:** 30-45 minutes saved
**Over time:** Exponential (more skills = more automation)

---

## Personal Notes

**Completion 1:** [Date]
- Skill created via meta:
- Time without meta: _____ min
- Time with meta: _____ min
- Speedup: _____x

**Completion 2:** [Date]
- Skill created via meta:
- Speedup: _____x

**Completion 3:** [Date]
- Skill created via meta:
- Speedup: _____x

---

## Next Steps

**Previous:** [04 - Composing in Skills](04-composing-in-skills.md)
**Next:** [06 - Advanced Patterns](06-advanced-patterns.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
