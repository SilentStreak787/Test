# Claude Code Instructions

## Pushing Files to GitHub

- **Always use the GitHub MCP API** (`mcp__github__push_files`) to push files — never rely on `git push` via HTTP, which fails with a 403 in this environment.
- **Push incrementally in batches of 5 files or fewer** — never wait until all files are done to push for the first time.
- **Verify each batch was pushed** before continuing to the next batch.
- After every 5 files created or modified, push what's done so far, even if the task isn't complete.
- If a push fails, retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s) before reporting failure.

## Session Continuity

- At the start of any session, check GitHub for existing files before creating new ones.
- Document any project context (languages, frameworks, file structure) in this file so future sessions have the full picture.

## Project Context

- Repository: silentstreak787/Test
- Default development branch: `claude/retrieve-modulus-files-m0gW9`
