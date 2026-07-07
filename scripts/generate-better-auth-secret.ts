#!/usr/bin/env bun
/**
 * Generates a Better Auth secret (64 base62 chars: 0-9, a-z, A-Z — no + / =).
 *
 * Default: prints the secret to stdout (for copy-paste). `bun auth:secret` is the same.
 * `--write`: updates `BETTER_AUTH_SECRET` in `.env` (requires `.env` to exist).
 */
import { randomBytes } from "node:crypto"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

/** 64 base62 chars; plenty of entropy for Better Auth (≥32 chars required). */
function generateBase62Secret(length = 64): string {
	const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let secret = ""
	const bytes = randomBytes(length)
	for (let i = 0; i < length; i++) {
		secret += chars[bytes[i]! % 62]!
	}
	return secret
}

const shouldWrite = process.argv.includes("--write")
const envPath = join(process.cwd(), ".env")
const secret = generateBase62Secret(64)

if (!shouldWrite) {
	console.log(secret)
	process.exit(0)
}

if (!existsSync(envPath)) {
	console.error("No .env file found. Copy .env.example to .env first.")
	process.exit(1)
}

let content = readFileSync(envPath, "utf8")
const line = /^BETTER_AUTH_SECRET=.*$/m

if (line.test(content)) {
	content = content.replace(line, `BETTER_AUTH_SECRET=${secret}`)
} else {
	content = `${content.trimEnd()}\nBETTER_AUTH_SECRET=${secret}\n`
}

writeFileSync(envPath, content, "utf8")
console.log("Updated BETTER_AUTH_SECRET in .env (64 base62 chars).")
console.log(`Starts with: ${secret.slice(0, 10)}…`)
