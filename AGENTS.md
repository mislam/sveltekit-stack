## Project Configuration

- **Language**: TypeScript
- **Package Manager**: bun
- **Add-ons**: prettier, eslint, vitest, tailwindcss, sveltekit-adapter, drizzle, mcp
- **Svelte**: 5 runes mode — see `.cursor/rules/svelte.mdc`
- **Conventions**: see `.cursor/rules/conventions.mdc` (tooling, commits, secrets, git)

## Agent policy

- **Git:** read-only inspection unless the user explicitly asks to run a mutating command — full rules in `.cursor/rules/conventions.mdc`
- **Secrets:** never read `.env` unless explicitly asked; prefer `.env.example`

---

## Svelte MCP

Configured in `.cursor/mcp.json`. When working on Svelte or SvelteKit:

### 1. list-sections

Use **FIRST** to discover available documentation sections (titles, use_cases, paths).

### 2. get-documentation

Fetch **all** documentation sections relevant to the task. Analyze `use_cases` from list-sections before choosing which to retrieve.

### 3. svelte-autofixer

**Must** run after writing or editing `.svelte` files. Keep calling until no issues or suggestions remain.

### 4. playground-link

Only if the user asks. **Never** when code was written to project files.

Component patterns and runes conventions: `.cursor/rules/svelte.mdc`.
