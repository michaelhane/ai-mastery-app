# Unit 1.05: Core 4 Understanding

**Level:** 1 - Prompt Foundations
**Time:** 20 minutes
**Prerequisite:** Unit 1.04 - Precision Requests

---

## What You'll Learn

Master the 4 components of every Claude Code interaction: Context, Model, Prompt, Tools.

**Why This Matters:**
- Understanding all 4 = Complete control
- Know which tools exist = Better prompts
- Master the system, not just use it
- Foundation for advanced features

---

## Learn (5 minutes)

### The Core 4

Every agent interaction has 4 pieces:

```
1. CONTEXT   - Files, conversation history, available tools
2. MODEL     - Claude's AI capabilities (you don't control this much)
3. PROMPT    - Your instructions (YOUR PRIMARY CONTROL)
4. TOOLS     - Read, Write, Edit, Bash, Grep, Glob, etc.
```

### Your Power
- **Prompts:** Direct control
- **Context:** Manage what's available
- **Tools:** Know what Claude can do
- **Model:** Trust it's capable

### Available Tools

**File Operations:**
- `Read` - Read file contents
- `Write` - Create new files
- `Edit` - Modify existing files
- `Glob` - Find files by pattern (*.ts, **/*.tsx)
- `Grep` - Search code content

**Execution:**
- `Bash` - Run terminal commands

**Integration:**
- `MCP Servers` - External services (GitHub, databases)
- `Sub Agents` - Parallel workers

**Understanding tools = Better prompts**

---

## Practice (15 minutes)

### Exercise 1: Tool Matching (5 min)

Match the task to the best tool:

1. Find all TypeScript files → Tool: _____
2. Search for "TODO" in code → Tool: _____
3. Read package.json → Tool: _____
4. Change function name → Tool: _____
5. Run tests → Tool: _____
6. Create new component → Tool: _____

### Exercise 2: Write Tool-Aware Prompts (10 min)

Write prompts that leverage specific tools:

1. **Using Glob:**
   ```
   [Your prompt that uses file pattern matching]
   ```

2. **Using Grep:**
   ```
   [Your prompt that searches code content]
   ```

3. **Using Read:**
   ```
   [Your prompt that reads specific files]
   ```

4. **Using Edit:**
   ```
   [Your prompt that modifies code]
   ```

5. **Using Bash:**
   ```
   [Your prompt that runs commands]
   ```

### Exercise 3: Tool Combinations (5 min)

Create prompts that use multiple tools:

**Prompt combining Glob + Read:**
```
[Your prompt]
```

**Prompt combining Grep + Read + Edit:**
```
[Your prompt]
```

---

## Repeat Instructions

Complete **3 times** with increasing tool complexity:

**Run 1:** Single tool per prompt
**Run 2:** Two tools combined
**Run 3:** Three+ tools in complex workflows

---

## Success Checklist

- [ ] I understand all 4 components
- [ ] I know when to use Grep vs Glob vs Read
- [ ] My prompts leverage appropriate tools
- [ ] Results are efficient (no wasted operations)
- [ ] Completed 3 times

---

## Level 1 Complete!

Congratulations! You've mastered prompt foundations.

**You can now:**
- Write clear, specific prompts
- Structure multi-step tasks
- Provide context for better results
- Add precision to requests
- Leverage Claude's tools effectively

**Time saved:** 30-60 minutes per day

---

## Time Saved

**Per tool-aware prompt:** 10-15 minutes (efficient execution)
**Daily usage:** 20-30 prompts
**Total Level 1 savings:** 30-60 minutes per day

---

## Personal Notes

**Completion 1:** [Date]
- Most useful tool discovered:
- Tool combination that worked best:

**Completion 2:** [Date]
- Most useful tool discovered:
- Tool combination that worked best:

**Completion 3:** [Date]
- Most useful tool discovered:
- Tool combination that worked best:

---

## Next Steps

**🎉 Level 1 Complete!**

**Previous:** [04 - Precision Requests](04-precision-requests.md)
**Next Level:** [Level 2 - Slash Commands](../level-2-commands/01-understanding-commands.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)

**Checkpoint:** Before moving to Level 2, verify you can explore any codebase in 15-20 minutes using only prompts.
