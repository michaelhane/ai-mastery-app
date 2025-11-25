---
description: Start interactive practice session
argument-hint: [unit-id]
---

# Practice Session: $ARGUMENTS

Start an interactive practice session for the specified lesson.

## Instructions

1. If `$ARGUMENTS` is empty, use the current unit from `data/progress.json`
2. Read the lesson from `public/lessons/[level]/[unit].md`
3. Find the Practice section in the lesson content
4. Present exercises one at a time interactively

## Practice Flow

1. **Present the exercise** - Show the scenario and what the user needs to do
2. **Wait for user attempt** - Let them try the exercise
3. **Provide feedback** - Evaluate their attempt and give constructive feedback
4. **Show example solution** - If needed, demonstrate the ideal approach
5. **Move to next exercise** - Continue until all exercises are complete

## After Practice

When all exercises are complete:
1. Update `data/progress.json` to mark progress
2. Congratulate the user
3. Suggest marking the unit as complete if they feel ready

## Example Interaction

```
PRACTICE: Writing Clear Prompts

Exercise 1 of 3:
Scenario: You need to find all TODO comments in a codebase.

A colleague wrote this prompt:
"Find TODOs"

Your task: Rewrite this prompt to be clear, specific, and actionable.
Use the Action + Target + Details formula.

[Wait for user response]

Great attempt! Here's feedback:
+ You specified the action (search/find)
+ You mentioned the target (TODO comments)
- Consider adding: which files/directories to search
- Consider adding: what format for the output

Example solution:
"Search for TODO comments in the src/ directory and list them with file path and line number"
```
