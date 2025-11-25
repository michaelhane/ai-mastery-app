# Unit 4.03: Adding Resources

**Level:** 4 - Autonomous Skills
**Time:** 30 minutes
**Prerequisite:** Unit 4.02 - First Simple Skill

---

## What You'll Learn

Enhance skills with resources (examples, templates, docs) for better performance.

**Why This Matters:**
- Progressive disclosure (load only when needed)
- Better quality results
- Consistent patterns
- Reference material for agent

---

## Learn (5 minutes)

### Resource Types

1. **Examples** - Real code from your project
2. **Templates** - Boilerplate to follow
3. **Documentation** - Reference guides
4. **Checklists** - Steps to follow
5. **Patterns** - Common solutions

### Progressive Disclosure

```
1. Metadata (skill.md frontmatter)
2. Instructions (skill.md content)
3. Resources (loaded when needed)
```

Agent only loads resources when required.

---

## Practice (25 minutes)

### Exercise 1: Add Resources to Skill (20 min)

Pick one of your simple skills and enhance it.

**Skill chosen:** _____

**Create directory structure:**
```
.claude/skills/your-skill/
├── skill.md
└── resources/
    ├── examples.md
    ├── templates.md
    └── checklist.md
```

**Create:** `resources/examples.md`
```markdown
# Examples

## Example 1: [Description]
[Real code example from project]

## Example 2: [Description]
[Real code example from project]

## Example 3: [Description]
[Real code example from project]
```

**Create:** `resources/templates.md`
```markdown
# Templates

## Template 1: [Type]
[Boilerplate code]

## Template 2: [Type]
[Boilerplate code]
```

**Create:** `resources/checklist.md`
```markdown
# Checklist

## Operation 1
- [ ] Step A
- [ ] Step B
- [ ] Step C

## Operation 2
- [ ] Step A
- [ ] Step B
```

**Update:** `skill.md` to reference resources
```markdown
## Resources
- resources/examples.md: Real examples from this project
- resources/templates.md: Boilerplate templates
- resources/checklist.md: Operation checklists
```

### Exercise 2: Test with Resources (5 min)

Test skill with resources:

**Test 1:**
- Skill used resources? Yes / No
- Quality improvement? Yes / No
- More consistent? Yes / No

**Test 2:**
- Skill used resources? Yes / No
- Quality improvement? Yes / No
- More consistent? Yes / No

**Test 3:**
- Skill used resources? Yes / No
- Quality improvement? Yes / No
- More consistent? Yes / No

---

## Repeat Instructions

Complete **3 times** - add resources to different skills:

**Run 1:** Add examples to existing skill
**Run 2:** Add templates to existing skill
**Run 3:** Add reference docs to existing skill

---

## Success Checklist

- [ ] Resources well-organized in directory
- [ ] Skill references resources appropriately
- [ ] Resources improve performance
- [ ] Progressive disclosure works
- [ ] Completed 3 times

---

## Time Saved

**Better quality = less rework:** 10-20 minutes per use
**More consistent results:** 5-10 minutes per use
**Per resource-enhanced skill:** 15-30 minutes saved daily

---

## Personal Notes

**Completion 1:** [Date]
- Skill enhanced:
- Resources added:
- Quality improvement:

**Completion 2:** [Date]
- Skill enhanced:
- Resources added:
- Quality improvement:

**Completion 3:** [Date]
- Skill enhanced:
- Resources added:
- Quality improvement:

---

## Next Steps

**Previous:** [02 - First Simple Skill](02-first-simple-skill.md)
**Next:** [04 - Composing in Skills](04-composing-in-skills.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
