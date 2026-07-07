import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { betterAuth } from "better-auth/minimal"

import { env } from "$env/dynamic/private"

import { db } from "./db"

if (!env.BETTER_AUTH_SECRET) throw new Error("BETTER_AUTH_SECRET is not set")
if (!env.BETTER_AUTH_URL) throw new Error("BETTER_AUTH_URL is not set")
if (!env.GOOGLE_CLIENT_ID) throw new Error("GOOGLE_CLIENT_ID is not set")
if (!env.GOOGLE_CLIENT_SECRET) throw new Error("GOOGLE_CLIENT_SECRET is not set")

export const auth = betterAuth({
	baseURL: env.BETTER_AUTH_URL,
	secret: env.BETTER_AUTH_SECRET,
	// `db` was created with `drizzle(client, { schema })`, so the adapter picks up
	// the schema from `db._.fullSchema` — no need to pass it again here.
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	socialProviders: {
		google: {
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		},
	},
	// Only Google OAuth is supported — no email/password sign-up, so no
	// server actions call `auth.api.*` directly and the sveltekitCookies
	// plugin (needed only for that case) isn't required.
})
