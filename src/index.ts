
import { Hono } from 'hono'

export type Env = {
  TURSO_CONNECTION_URL:string,
  TURSO_AUTH_TOKEN:string
}

const app = new Hono<{Bindings:Env}>()

app.get('/',async (c) => {
 
 return c.json("ss")
})

export default app
