# Unit 3.01: Understanding MCP Servers

**Level:** 3 - Feature Composition
**Time:** 20 minutes
**Prerequisite:** Level 2 Complete

---

## What You'll Learn

What MCP servers are, when to use them, and how to set up your first integration.

**Why This Matters:**
- Connect to external services
- Access external data (GitHub, databases)
- Integrate third-party APIs
- Expand Claude's capabilities

---

## Learn (5 minutes)

### What is MCP?

**MCP = Model Context Protocol**

MCP servers connect Claude to external services.

### When to Use MCP

**Use MCP for:**
- External data (GitHub, databases)
- Third-party APIs (Jira, Slack)
- File systems outside project
- Cloud services (AWS, GCP)

**Don't use MCP for:**
- Local project files (use Read/Write/Edit)
- Simple scripts (use Bash)
- One-time tasks (use prompts)

### You Don't Control MCP

- **You install** existing MCP servers
- **You use** them in prompts/commands
- **Others build** the actual servers

---

## Practice (15 minutes)

### Exercise 1: Set Up MCP Server (10 min)

Pick one to install:

**Option A: Filesystem MCP**
```json
// .claude/claude_desktop_config.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "E:/pai"]
    }
  }
}
```

**Option B: GitHub MCP**
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your_token_here"
      }
    }
  }
}
```

**Installation steps:**
1. Edit config file
2. Add MCP server configuration
3. Restart Claude Code
4. Verify it's available

**Which did you install?** _____
**Successfully installed?** Yes / No

### Exercise 2: Test MCP (5 min)

Test your MCP server:

**Test prompt:**
```
[Write a prompt that uses your MCP server]
```

**Result:**
- Works? Yes / No
- What data did it provide?
- Was it useful? Yes / No

---

## Repeat Instructions

Complete **3 times** with different MCP servers:

**Run 1:** Filesystem or GitHub
**Run 2:** Database MCP (if applicable)
**Run 3:** Any service you use regularly

---

## Success Checklist

- [ ] Successfully installed MCP server
- [ ] Can use it from Claude Code
- [ ] Understand what data it provides
- [ ] Know when to use MCP vs local tools
- [ ] Completed 3 times

---

## Time Saved

**Varies by integration:**
- GitHub MCP: 5-10 min/day (no context switching)
- Database MCP: 10-20 min/day (no manual queries)
- Service MCP: 5-15 min/day (automated data fetching)

---

## Personal Notes

**Completion 1:** [Date]
- MCP server:
- Use case:
- Time saved:

**Completion 2:** [Date]
- MCP server:
- Use case:
- Time saved:

**Completion 3:** [Date]
- MCP server:
- Use case:
- Time saved:

---

## Next Steps

**Previous:** [Level 2 Complete](../level-2-commands/07-building-toolkit.md)
**Next:** [02 - Commands with MCP](02-commands-with-mcp.md)
**Update Progress:** [progress-tracker.md](../progress-tracker.md)
