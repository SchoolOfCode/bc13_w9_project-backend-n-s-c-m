import {pool} from "../db/db.js"

export async function getCards (){
    const data = await pool.query ("SELECT * FROM cards")
    return data.rows
}

export async function createCards (newCard) {
    const data = await pool.query ("INSERT INTO cards (week,day,image,topic,ref) VALUES ($1,$2,$3,ARRAY[$4],ARRAY[$5]) RETURNING *", [newCard.week, newCard.day,newCard.image,newCard.topic,newCard.references])
    return data.rows[0];
}