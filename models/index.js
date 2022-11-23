import {pool} from "../db/db.js"
export async function getCards (){
    const data = await pool.query ("SELECT * FROM cards")
    return data.rows
}

export async function createCards () {
    
}