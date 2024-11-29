import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "../db/connection";

(async () => {
  try {
    console.log("Ejecutando migraciones...");
    await migrate(db, { migrationsFolder: "./db/migrations" });
    console.log("Migraciones completadas.");
  } catch (error) {
    console.error("Error ejecutando migraciones:", error);
  }
})();
