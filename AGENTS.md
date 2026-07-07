## Project Configuration

- **Language**: TypeScript
- **Package Manager**: bun
- **Add-ons**: prettier, eslint, vitest, tailwindcss, sveltekit-adapter, drizzle, better-auth, mcp, bits-ui
- **Svelte**: 5 runes mode — see `.cursor/rules/svelte.mdc`
- **UI**: Bits UI installed (headless, **opt-in**) — @ `.cursor/rules/bits-ui.mdc` when building complex interactive UI
- **Conventions**: see `.cursor/rules/conventions.mdc` (tooling, commits, secrets, git)

### Context files

| File                                 | When to read                                    |
| ------------------------------------ | ----------------------------------------------- |
| [`README.md`](README.md)             | Stack, local dev setup, scripts                 |
| [`docs/product.md`](docs/product.md) | Feature work — scope, terminology, domain rules |
| [`WORKLOG.md`](WORKLOG.md)           | Planning, backlog, or recent history            |

Default for feature tasks: **`docs/product.md`** + **`WORKLOG.md`**. Add **`README.md`** when setup or scripts matter.

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

---

## Bits UI (opt-in)

Installed for complex interactive patterns (dialogs, menus, selects, etc.). **Do not default to Bits UI** for every Svelte file — use plain markup + Tailwind unless the task needs headless primitives or the user asks.

When implementing Bits UI: @ `.cursor/rules/bits-ui.mdc` and fetch docs from https://bits-ui.com/llms.txt (per-component URLs in that rule).

---

## Better Auth

Configured in `.cursor/mcp.json` (remote docs MCP). When working on auth — setup, providers, schema, plugins:

1. Use the **Better Auth MCP** for doc search and examples ([MCP docs](https://www.better-auth.com/docs/ai-resources/mcp)).
2. Fallback: [llms.txt](https://www.better-auth.com/llms.txt) doc index.
3. Optional (local, not in repo): `npx skills add better-auth/skills` when extending auth beyond the wired Google OAuth setup ([skills](https://www.better-auth.com/docs/ai-resources/skills)).

Project auth lives in `src/lib/server/auth.ts`; schema in `src/lib/server/db/schema/auth.ts` (`bun run auth:schema` to regenerate).
