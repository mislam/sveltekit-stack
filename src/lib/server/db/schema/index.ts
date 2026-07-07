// Barrel: auth.ts is generated (`bun auth:schema`); app.ts holds domain tables.
// Split app.ts by domain aggregate when it grows; relations live with the FK owner.

export * from "./app"
export * from "./auth"
