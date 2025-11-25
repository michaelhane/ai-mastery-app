// Script to fetch lesson content from GitHub
// Run with: node scripts/fetch-lessons.js

import fs from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://api.github.com/repos/jgerton/ai-mastery-roadmap/contents';

const LEVELS = [
  { path: 'level-1-prompts', units: ['01-clear-prompts', '02-multi-step-prompts', '03-context-first-prompts', '04-precision-requests', '05-core-4-understanding'] },
  { path: 'level-2-commands', units: ['01-understanding-commands', '02-analysis-commands', '03-generator-commands', '04-fix-commands', '05-workflow-commands', '06-command-optimization', '07-building-toolkit'] },
  { path: 'level-3-composition', units: ['01-understanding-mcp', '02-commands-with-mcp', '03-understanding-sub-agents', '04-parallel-sub-agents', '05-composing-commands', '06-advanced-workflows'] },
  { path: 'level-4-skills', units: ['01-understanding-skills', '02-first-simple-skill', '03-adding-resources', '04-composing-in-skills', '05-meta-skills', '06-advanced-patterns'] }
];

async function fetchFile(levelPath, unitName) {
  const url = `${BASE_URL}/${levelPath}/${unitName}.md`;
  console.log(`Fetching: ${levelPath}/${unitName}.md`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    // GitHub API returns content as base64
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    return content;
  } catch (error) {
    console.error(`  Error fetching ${unitName}: ${error.message}`);
    return null;
  }
}

async function main() {
  const lessonsDir = path.join(process.cwd(), 'public', 'lessons');

  // Ensure lessons directory exists
  await fs.mkdir(lessonsDir, { recursive: true });

  let successCount = 0;
  let errorCount = 0;

  for (const level of LEVELS) {
    // Create level subdirectory
    const levelDir = path.join(lessonsDir, level.path);
    await fs.mkdir(levelDir, { recursive: true });

    for (const unit of level.units) {
      const content = await fetchFile(level.path, unit);

      if (content) {
        const filePath = path.join(levelDir, `${unit}.md`);
        await fs.writeFile(filePath, content, 'utf-8');
        console.log(`  Saved: ${level.path}/${unit}.md`);
        successCount++;
      } else {
        errorCount++;
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log(`\nDone! Fetched ${successCount} files, ${errorCount} errors.`);
}

main().catch(console.error);
