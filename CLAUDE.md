# CLAUDE.md

> This app is scheduled for a full rewrite (planned since 2026-05-01). Do not invest time in this codebase.

AI Mastery App: a React 19 + Vite web app plus a stdio MCP server and 5 slash commands (`.claude/commands/ai-mastery-*.md`) for a 24-unit Claude Code course (4 levels; lesson markdown in `public/lessons/`, metadata in `src/data/lessons.json`).

## Commands

- `npm run dev` / `npm run build` / `npm run preview`: Vite (no port configured, so the Vite default applies).
- `npm run lint`: ESLint (`eslint .`). This is the only check; there are no tests. Run `npm install` first (no `node_modules` in a fresh checkout).
- MCP server: `.mcp.json` starts `node ./mcp-server/index.js` over stdio (no port); it needs `cd mcp-server && npm install` once.

## Progress storage

The web app keeps progress in browser `localStorage` (`src/hooks/useProgress.js`). `data/progress.json` is read and written only by the MCP server and the slash commands; the two stores are not synced.

## Secrets

Never commit `.env` files or keys. `.gitignore` excludes `.env` and `.env.*` (except `.env.example`).
