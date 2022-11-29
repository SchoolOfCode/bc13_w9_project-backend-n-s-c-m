import { pool } from "./db.js";
import { resetCardsTable } from "./helpers.js";

try { await resetCardsTable()
    console.log("Reset all tables")
}
catch (err) {
 //   console.error(err);
} 
finally {
    await pool.end();
}