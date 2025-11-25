import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const server = new McpServer({
  name: 'ai-mastery',
  version: '1.0.0'
});

// Helper to resolve paths relative to project root
function resolvePath(...segments) {
  return path.join(projectRoot, ...segments);
}

// Tool: Get lesson content by unit ID
server.tool(
  'get_lesson',
  {
    unitId: z.string().describe('Unit ID like "01-clear-prompts" or full path like "level-1-prompts/01-clear-prompts"')
  },
  async ({ unitId }) => {
    try {
      // Try to find the lesson file
      let lessonPath;

      if (unitId.includes('/')) {
        // Full path provided
        lessonPath = resolvePath('public', 'lessons', `${unitId}.md`);
      } else {
        // Just unit ID - search in all levels
        const levels = ['level-1-prompts', 'level-2-commands', 'level-3-composition', 'level-4-skills'];
        for (const level of levels) {
          const tryPath = resolvePath('public', 'lessons', level, `${unitId}.md`);
          try {
            await fs.access(tryPath);
            lessonPath = tryPath;
            break;
          } catch {
            continue;
          }
        }
      }

      if (!lessonPath) {
        return { content: [{ type: 'text', text: `Lesson not found: ${unitId}` }] };
      }

      const content = await fs.readFile(lessonPath, 'utf-8');
      return { content: [{ type: 'text', text: content }] };
    } catch (error) {
      return { content: [{ type: 'text', text: `Error reading lesson: ${error.message}` }] };
    }
  }
);

// Tool: Get current progress
server.tool(
  'get_progress',
  {},
  async () => {
    try {
      const progressPath = resolvePath('data', 'progress.json');
      const progress = await fs.readFile(progressPath, 'utf-8');
      return { content: [{ type: 'text', text: progress }] };
    } catch (error) {
      // Return default progress if file doesn't exist
      const defaultProgress = {
        units: {},
        currentUnit: '01-clear-prompts',
        totalTimeSpent: 0,
        lastActive: null
      };
      return { content: [{ type: 'text', text: JSON.stringify(defaultProgress, null, 2) }] };
    }
  }
);

// Tool: Update progress for a unit
server.tool(
  'update_progress',
  {
    unitId: z.string().describe('Unit ID to update'),
    status: z.enum(['not-started', 'in-progress', 'completed']).describe('New status for the unit')
  },
  async ({ unitId, status }) => {
    try {
      const progressPath = resolvePath('data', 'progress.json');
      let progress;

      try {
        progress = JSON.parse(await fs.readFile(progressPath, 'utf-8'));
      } catch {
        progress = { units: {}, currentUnit: unitId, totalTimeSpent: 0, lastActive: null };
      }

      const now = new Date().toISOString().split('T')[0];
      const existing = progress.units[unitId] || {};

      progress.units[unitId] = {
        status,
        repetitions: status === 'completed' ? (existing.repetitions || 0) + 1 : (existing.repetitions || 0),
        lastCompleted: status === 'completed' ? now : existing.lastCompleted,
        timeSpent: existing.timeSpent || 0
      };

      progress.currentUnit = unitId;
      progress.lastActive = now;

      await fs.writeFile(progressPath, JSON.stringify(progress, null, 2));

      return {
        content: [{
          type: 'text',
          text: `Updated ${unitId} to ${status}. Repetitions: ${progress.units[unitId].repetitions}`
        }]
      };
    } catch (error) {
      return { content: [{ type: 'text', text: `Error updating progress: ${error.message}` }] };
    }
  }
);

// Tool: List all lessons with their status
server.tool(
  'list_lessons',
  {},
  async () => {
    try {
      const lessonsPath = resolvePath('src', 'data', 'lessons.json');
      const progressPath = resolvePath('data', 'progress.json');

      const lessons = JSON.parse(await fs.readFile(lessonsPath, 'utf-8'));
      let progress;

      try {
        progress = JSON.parse(await fs.readFile(progressPath, 'utf-8'));
      } catch {
        progress = { units: {} };
      }

      // Combine lessons with progress status
      const result = {
        levels: lessons.levels.map(level => ({
          ...level,
          units: level.units.map(unit => ({
            ...unit,
            progress: progress.units[unit.id] || { status: 'not-started', repetitions: 0 }
          }))
        })),
        summary: {
          total: lessons.levels.reduce((sum, l) => sum + l.units.length, 0),
          completed: Object.values(progress.units).filter(u => u.status === 'completed').length,
          currentUnit: progress.currentUnit,
          totalTimeSpent: progress.totalTimeSpent
        }
      };

      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    } catch (error) {
      return { content: [{ type: 'text', text: `Error listing lessons: ${error.message}` }] };
    }
  }
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('AI Mastery MCP Server running on stdio');
}

main().catch(console.error);
