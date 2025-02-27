import { config } from 'dotenv';
import 'dotenv/config';
import type { Config } from 'drizzle-kit';

config({
  path:".dev.vars",
});

export default {
  schema: './src/db/schema.ts',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  
} satisfies Config;