import {pool} from "../db/db.js"
export async function getCard (){
    const data = await pool.query ("SELECT * FROM cards")
    return data.rows
}