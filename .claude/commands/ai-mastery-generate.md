---
description: Smart prompt generator - invokes Spark agent for Claude Code prompts
argument-hint: <your task or idea>
---

# Smart Prompt Generator: $ARGUMENTS

**This command invokes the Spark agent.**

Read the Spark agent methodology from `workflows-v2/agents/Spark.md` (or the Claude-Workflow-System if in a different project) and apply it to generate an optimized Claude Code prompt.

Spark transforms vague ideas into precise Claude Code prompts with smart complexity detection.

## Step 1: Analyze Complexity

Evaluate the input "$ARGUMENTS" against these criteria:

| Signal | Points |
|--------|--------|
| Multiple files mentioned or implied | +2 |
| Architecture/structural change | +3 |
| New feature (not modification) | +2 |
| Integration with external systems | +2 |
| Database/schema changes | +2 |
| Security-sensitive (auth, crypto, etc.) | +2 |
| Refactoring across modules | +2 |
| Single file change | -2 |
| Bug fix in known location | -2 |
| Simple addition (add a function, field) | -1 |

**Score interpretation:**
- **0-2 points: SIMPLE** → Action + Target + Details
- **3-5 points: MEDIUM** → Add Chain-of-thought, examples
- **6+ points: COMPLEX** → Recommend /plan

---

## Step 2: Generate Prompt Based on Complexity

### SIMPLE MODE (0-2 points)

Apply the **Action + Target + Details** formula:

```
[ACTION VERB] [TARGET] [DETAILS/FORMAT]
```

**Action verbs:** Read, Search, Find, List, Check, Create, Add, Update, Delete, Fix, Refactor, Test

**Output format:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIMPLE TASK DETECTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your optimized prompt:

  [The generated Action + Target + Details prompt]

Tool hint: [Suggest which tool: Glob, Grep, Read, Edit, Bash]

Copy and use this prompt directly.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### MEDIUM MODE (3-5 points)

Apply Action + Target + Details PLUS advanced techniques:

**Chain-of-thought:** Add "First... Then... Finally..." structure
**Few-shot hint:** Mention expected format with example
**Multi-step:** Number the steps for complex sequences

**Output format:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEDIUM COMPLEXITY DETECTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your optimized prompt:

  [Multi-step prompt with numbered steps]

  1. First, [exploration/context gathering step]
  2. Then, [analysis/implementation step]
  3. Finally, [verification/output step]

  Format the output as: [specify format]

  Example of expected result:
  [brief example of what good output looks like]

Tools needed: [List relevant tools]

Copy and use this prompt directly.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### COMPLEX MODE (6+ points)

Do NOT generate a simple prompt. Instead:

**Output format:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLEX TASK DETECTED - PLANNING RECOMMENDED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This task involves:
• [List detected complexity factors]

A simple prompt won't be enough. This needs:
• Parallel exploration of the codebase
• Detailed implementation plan
• Rollback strategy
• Risk assessment

RECOMMENDED: Run /plan with this description:

  [Refined, clear task description suitable for /plan]

This will:
1. Spawn 4 Explore agents to understand your codebase
2. Create a detailed implementation plan
3. Get your approval before any changes
4. Include rollback steps if needed

Proceed with /plan? (Copy the description above and run /plan)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Step 3: Tool Recommendations

Always suggest the right Claude Code tools:

| Task Type | Recommended Tools |
|-----------|-------------------|
| Find files | Glob |
| Search code content | Grep |
| Read file contents | Read |
| Modify existing code | Edit |
| Create new files | Write |
| Run commands/tests | Bash |
| Complex exploration | Task (Explore agent) |
| External data | MCP servers |

---

## Examples

**Input:** "check for console.logs"
**Complexity:** Simple (single concern, likely one command)
**Output:**
```
Search all .ts and .tsx files in src/ for console.log statements
and list them in a table with file path and line number

Tool hint: Grep
```

**Input:** "add a user settings page"
**Complexity:** Medium (new feature, multiple files)
**Output:**
```
1. First, find existing page components in src/pages/ or src/components/
   to understand the current patterns
2. Then, create a new UserSettings component with:
   - Form fields for: name, email, notification preferences
   - Save button that calls the API
   - Match existing page styling
3. Finally, add the route to the router configuration

Format: Create the component file, then show me the router changes needed

Tools needed: Glob, Read, Write, Edit
```

**Input:** "refactor the authentication system to use JWT"
**Complexity:** Complex (security, multiple modules, architecture)
**Output:**
```
COMPLEX TASK DETECTED - PLANNING RECOMMENDED

This task involves:
• Security-sensitive changes (authentication)
• Multiple file modifications (auth, middleware, routes)
• Architecture change (session → JWT)

Run /plan with:

  Refactor authentication from session-based to JWT:
  - Replace session storage with JWT tokens
  - Add token refresh endpoint
  - Update middleware to validate JWTs
  - Store tokens in httpOnly cookies
  - Update all protected routes
```

---

## Critical Rules

1. ALWAYS detect complexity first - don't over-engineer simple tasks
2. ALWAYS include tool recommendations
3. ALWAYS make prompts copy-paste ready
4. For COMPLEX tasks, recommend /plan - don't try to handle with a prompt
5. Keep prompts concise but complete
6. Use Action + Target + Details as the foundation for everything
