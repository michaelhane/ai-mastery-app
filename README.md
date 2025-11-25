# AI Mastery App

An interactive web app + Claude Code integration for the [AI Mastery Roadmap](https://github.com/jgerton/ai-mastery-roadmap) - a 24-unit curriculum for mastering Claude Code.

## Features

- **Web App**: React dashboard with visual progress tracking
- **24 Lessons**: Organized across 4 levels (Prompts → Commands → Composition → Skills)
- **Slash Commands**: `/lesson`, `/progress`, `/practice` for CLI access
- **MCP Server**: 4 tools for Claude to read/update your progress
- **Synced Progress**: Web app and CLI share the same progress data

## Quick Start

```bash
# Install dependencies
npm install
cd mcp-server && npm install && cd ..

# Start the web app
npm run dev
```

Open http://localhost:5173

## Claude Code Integration

### Slash Commands

From within the project directory:

```
/lesson 01-clear-prompts    # View a specific lesson
/progress                   # Check your progress
/practice                   # Start interactive practice
```

### MCP Server

Register the MCP server:

```bash
claude mcp add ai-mastery --scope project -- node ./mcp-server/index.js
```

Available tools:
- `get_lesson` - Fetch lesson content by unit ID
- `get_progress` - Read current progress
- `update_progress` - Mark units complete
- `list_lessons` - List all lessons with status

## Project Structure

```
ai-mastery-app/
├── public/lessons/          # 24 markdown lessons (4 levels)
├── src/
│   ├── components/          # React UI components
│   ├── hooks/useProgress.js # Progress state management
│   └── data/lessons.json    # Lesson metadata
├── data/progress.json       # Shared progress (web + CLI)
├── .claude/commands/        # Slash commands
├── .mcp.json               # MCP server config
└── mcp-server/             # MCP server implementation
```

## Curriculum

| Level | Focus | Units |
|-------|-------|-------|
| 1 | Prompts | 5 units - Clear prompts, multi-step, context, precision |
| 2 | Commands | 7 units - Slash commands, analysis, generators, workflows |
| 3 | Composition | 6 units - MCP, sub-agents, parallel execution |
| 4 | Skills | 6 units - Custom skills, meta-skills, advanced patterns |

## Credits

- Original curriculum: [jgerton/ai-mastery-roadmap](https://github.com/jgerton/ai-mastery-roadmap)
- Built with: React, Vite, MCP SDK
