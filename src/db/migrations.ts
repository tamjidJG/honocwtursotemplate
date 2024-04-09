import "dotenv/config";
import { db } from "./db";
import { migrate } from "drizzle-orm/libsql/migrator";

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Migration successful");
  } catch (error) {
    console.error(error, "sadasdasd");
    process.exit(1);
  }
};

main();
