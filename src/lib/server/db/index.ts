import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import { env } from "$env/dynamic/private"

import { configureNeon } from "./neon-config"
import * as schema from "./schema"

if (!env.DATABASE_URL) throw new Error("DATABASE_URL is not set")

configureNeon(env.DATABASE_URL)

const client = neon(env.DATABASE_URL)

export const db = drizzle(client, { schema })
