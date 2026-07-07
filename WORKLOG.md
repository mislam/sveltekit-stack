# Worklog

Single source for what shipped and what's next. Not duplicated in `docs/product.md`.

## Done

- Scaffold SvelteKit project (minimal, TypeScript, bun)
- Dev tooling: Prettier, ESLint (simple-import-sort), Vercel adapter, Cursor MCP
- Repo hygiene: git hooks (husky, lint-staged, commitlint), editor settings, Vercel main-only deploys
- Codebase formatted to project style
- Cursor rules and agent guidance (`AGENTS.md`, `.cursor/rules/`)
- Project README (stack, bun workflow, dev commands)
- `docs/product.md` stub and `AGENTS.md` context file pointers
- Local dev database: Docker Compose (Postgres + Neon HTTP proxy), `dev:up`/`dev:down`
- Bits UI with agent rules and docs integration (`bits-ui.mdc`, `AGENTS.md`)
- Auth: Better Auth with Drizzle adapter, Google OAuth only (`src/lib/server/auth.ts`)

## Backlog

- [ ] Expand product scope in `docs/product.md`
- [ ] Replace auth demo page with first real feature
- [ ] CI (GitHub Actions: lint, check, test)
- [ ] Production Neon database setup
- [ ] Google Cloud OAuth credentials for production domain
